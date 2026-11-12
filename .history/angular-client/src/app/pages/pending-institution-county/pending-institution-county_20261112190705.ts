import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';


@Component({
  selector: 'app-pending-institution-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institution-county.html',
  styleUrl: './pending-institution-county.css'
})
export class PendingInstitutionCounty implements OnInit {

  private readonly notification = inject(NotificationService);
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);


  // --- Filters ---
  subCounties = [
    'All',
    "Dagoretti North Sub County", "Dagoretti South Sub County", "Embakasi Central Sub Count",
    "Embakasi East Sub County", "Embakasi North Sub County", "Embakasi South Sub County",
    "Embakasi West Sub County", "Kamukunji Sub County", "Kasarani Sub County", "Kibra Sub County",
    "Lang'ata Sub County", "Makadara Sub County", "Mathare Sub County", "Roysambu Sub County",
    "Ruaraka Sub County", "Starehe Sub County", "Westlands Sub County"
  ];

  statusList = [
    'Select', 'Pending', 'Approved', 'Rejected',
    'SCDE Recommended', 'Assigned SCDE', 'Assigned SCQASO', 'SCQASO Recommended'
  ];

  filter = {
    onboardingType: 'New Onboarding',
    subCounty: 'All',
    status: 'Pending'
  };

  tableSearch = '';

  // --- Live Data ---
  allInstitutions: any[] = [];
  institutions: any[] = [];

  ngOnInit() {
    this.fetchPendingSchools();
  }

    // Change this to take a status parameter from the dropdown button
  fetchPendingSchools(status: string = 'pending') {
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=Nairobi&status=${status}`).subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch schools', err)
    });
  }

  onSearch() {
    let statusParam = this.filter.status;

    // If they select 'Select', we want to fetch ALL schools
    if (statusParam === 'Select') {
      statusParam = 'All';
    } else if (statusParam === 'Pending') {
      statusParam = 'Pending';
    } else if (statusParam === 'Assigned SCDE') {
      statusParam = 'Assigned SCDE';
    } else if (statusParam === 'Assigned SCQASO') {
      statusParam = 'Assigned SCQASO';
    } else if (statusParam === 'SCQASO Recommended') {
      statusParam = 'SCQASO Recommended';
    } else if (statusParam === 'SCDE Recommended') {
      statusParam = 'SCDE Recommended';
    } else if (statusParam === 'Approved') {
      statusParam = 'Approved';
    } else if (statusParam === 'Rejected') {
      statusParam = 'Rejected';
    } else if (statusParam === 'Pending') {
      statusParam = 'Pending';
    } else if (statusParam === 'Pending') {
      statusParam = 'Pending';
    }

    // Fetch the new data
    this.fetchPendingSchools(statusParam);

    // 2. (Optional) If you still want to filter by Sub-County locally
    // You don't need to do anything here because fetchPendingSchools already updates the UI.
  }


  // --- Modals State ---
  showAssignModal = false;
  showViewModal = false;
  selectedInstitution: any = null;
  selectedSCDE = '';

  // Fetch all SCDE users
  scdeList: any[] = [];

  activeViewTab = 'form';

  // View and fetches live
  viewData: any = {
    institutionType: '', institutionName: '', headOfInstitution: '', email: '', mobileNo: '',
    onboardingDate: '', applicationType: '', educationalPathway: '', institutionLevel: '',
    hasCert: '', certNo: '', sneBoys: 0, sneGirls: 0, totalLearners: 0, coordinates: '',
    county: '', subCounty: '', constituency: '', postalCode: '', schoolCategory: '', postalLocation: '',
    scdeComments: 'No SCDE comments available.',
    scqasoComments: 'No SCQASO comments available.',
    cqasoComments: 'No CQASO comments available.',
    scqasoReport: 'QASO_Inspection_Report.pdf',
    cqasoReport: 'CQASO_Inspection_Report.pdf'
  };

  // --- Actions ---

  openAssignModal(inst: any) {
    this.selectedInstitution = inst;
    this.selectedSCDE = '';
    this.showAssignModal = true;

    // Fetch SCDEs dynamically from the database
    this.http.get<any[]>('http://localhost:5215/api/county-education/assignees?role=SCDE').subscribe({
      next: (res) => {
        this.scdeList = res;
        this.notification.showSuccess('Sucessfully assigned a SCDE!');
      },
       error: (err) => this.notification.showError('Failed to load SCDEs',err)
    });

  }



  openViewModal(inst: any) {
    this.selectedInstitution = inst;
    this.activeViewTab = 'form';
    this.showViewModal = true;

    // Fetch school details dynamically based on institutionId
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

       error: (err) => this.notification.showError('Failed to fetch school details',err)
    });
  }

  closeModals() {
    this.showAssignModal = false;
    this.showViewModal = false;
    this.selectedInstitution = null;
  }

  submitAssignment() {
    if (!this.selectedSCDE) {
      this.notification.showError('Please select an SCDE first.');
      return;
    }

    const payload = {
      assigneeId: this.selectedSCDE // The SCDE's userId
    };

    this.http.post(`http://localhost:5215/api/county-education/institutions/${this.selectedInstitution.institutionId}/assign`, payload).subscribe({
      next: () => {
        this.notification.showSuccess('Sucessfully assigned a SCDE!');
        this.selectedInstitution.status = 'Assigned SCDE'; // Instantly update UI
        this.fetchPendingSchools(); // Refresh table
        this.closeModals();
      },
       error: (err) => {
        this.notification.showError('Failed to assign. Please try again.');
        console.error(err);
      }
    });
  }

  approveSchool() {
    this.notification.showSuccess('School approved successfully!');
    this.closeModals();
  }

  rejectSchool() {
    this.notification.showSuccess('School rejected  successful!');
    this.closeModals();
  }
}
