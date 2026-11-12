import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service'; //pop up notifications

@Component({
  selector: 'app-pending-institutions-sub-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institutions-sub-county.html',
  styleUrl: './pending-institutions-sub-county.css',
})
export class PendingInstitutionsSubCounty implements OnInit {

   private notification = inject(NotificationService); 
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  // Hardcoded for now, but this should come from LocalStorage after login
  private readonly subCountyName = 'Embakasi East Sub County';

  // --- Main Table Data ---
  subCounties = [this.subCountyName];

  statusList = [
    'Select', 'Pending', 'Pending Assigning SCDE', 'Approved', 'Rejected',
    'SCDE Recommended', 'Assigned SCDE', 'Assigned CQASO', 'CQASO Recommended'
  ];

  filter = {
    onboardingType: 'New Onboarding',
    subCounty: this.subCountyName,
    status: 'Pending'
  };

  tableSearch = '';

  // Live Table Data
  institutions: any[] = [];

  // --- Modals State ---
  showAssignModal = false;
  showViewModal = false;
  selectedInstitution: any = null;
  selectedSCDE = '';

  // Live SCDE List for dropdown
  scdeList: any[] = [];

  // Tabs inside View Modal
  activeViewTab = 'form';

  // Live View Data (will be populated on click)
  viewData: any = {
    institutionType: '',
    institutionName: '',
    headOfInstitution: '',
    email: '',
    mobileNo: '',
    onboardingDate: '',
    applicationType: '',
    educationalPathway: '',
    institutionLevel: '',
    hasCert: '',
    certNo: '',
    sneBoys: 0,
    sneGirls: 0,
    totalLearners: 0,
    coordinates: '',
    county: '',
    subCounty: '',
    constituency: '',
    postalCode: '',
    schoolCategory: '',
    postalLocation: '',
    scdeComments: 'No SCDE comments available.',
    scqasoComments: 'No SCQASO comments available.',
    cqasoComments: 'No CQASO comments available.',
    scqasoReport: 'QASO_Inspection_Report.pdf',
    cqasoReport: 'CQASO_Inspection_Report.pdf'
  };

  ngOnInit() {
    this.fetchPendingSchools();
  }

  fetchPendingSchools() {
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=Nairobi&status=pending`).subscribe({
      next: (res) => {
        // Filter to only show schools in this SCDE's subcounty
        const allSchools = res.schools || [];
        this.institutions = allSchools.filter((s: any) => s.subCounty === this.subCountyName);
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch pending schools', err)
    });
  }

  // --- Actions ---

  openAssignModal(inst: any) {
    this.selectedInstitution = inst;
    this.selectedSCDE = '';
    this.showAssignModal = true;

    // Fetch SCDEs dynamically
    this.http.get<any[]>('http://localhost:5215/api/county-education/assignees?role=SCDE').subscribe({
      next: (res) => {
        this.scdeList = res;
      },
      error: (err) => console.error('Failed to load SCDEs', err)
    });
  }

  openViewModal(inst: any) {
    this.selectedInstitution = inst;
    this.activeViewTab = 'form';
    this.showViewModal = true;

    // Fetch dynamic school details based on institutionId
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions/${inst.institutionId}`).subscribe({
      next: (res) => {
        // Map the backend response to viewData
        this.viewData = {
          ...this.viewData,
          institutionType: res.institutionType || 'N/A',
          institutionName: res.institutionName || 'N/A',
          headOfInstitution: res.headOfInstitution || 'N/A',
          email: res.emailId || 'N/A',
          mobileNo: res.mobileNo || 'N/A',
          onboardingDate: res.createdAt || 'N/A',
          institutionLevel: res.institutionLevel || 'N/A',
          certNo: res.certificateNumber || 'N/A',
          totalLearners: res.totalLearners || 0,
          county: res.county || 'N/A',
          subCounty: res.subCounty || 'N/A',
          constituency: res.constituency || 'N/A',
          schoolCategory: res.schoolCategory || 'N/A',
        };
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch school details', err)
    });
  }

  closeModals() {
    this.showAssignModal = false;
    this.showViewModal = false;
    this.selectedInstitution = null;
  }

  submitAssignment() {
    if (!this.selectedSCDE) {
      alert('Please select an SCDE first.');
      return;
    }

    const payload = {
      assigneeId: this.selectedSCDE // The SCDE's userId
    };

    this.http.post(`http://localhost:5215/api/county-education/institutions/${this.selectedInstitution.institutionId}/assign`, payload).subscribe({
      next: () => {
        this.notification.showSuccess('Sucessfully assigned a SCDE!');

        // Update the status locally to show instantly in UI
        this.selectedInstitution.status = 'Assigned SCDE';

        // Or re-fetch the list entirely
        this.fetchPendingSchools();

        this.closeModals();
      },
      error: (err) => {
        console.error('Failed to assign SCDE', err);
        alert('Failed to assign. Check console for details.');
      }
    });
  }

  approveSchool() {
    alert('Approved!');
    this.closeModals();
  }

  rejectSchool() {
    alert('Rejected!');
    this.closeModals();
  }
}
