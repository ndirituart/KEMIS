import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-pending-institution-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institution-county.html',
  styleUrl: './pending-institution-county.css'
})
export class PendingInstitutionCounty implements OnInit {
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
    'Select', 'Pending', 'Pending Assigning SCDE', 'Approved', 'Rejected',
    'SCDE Recommended', 'Assigned SCDE', 'Assigned CQASO', 'CQASO Recommended'
  ];

  filter = {
    onboardingType: 'New Onboarding',
    subCounty: 'All',
    status: 'Pending'
  };

  tableSearch = '';

  // --- Live Data ---
  allInstitutions: any[] = []; // Raw data from backend
  institutions: any[] = [];    // Filtered data for the table

  ngOnInit() {
    this.fetchPendingSchools();
  }

  fetchPendingSchools() {
    // Fetch only pending schools in Nairobi
    this.http.get<any>('http://localhost:5215/api/county-education/institutions?county=Nairobi&status=pending').subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch pending schools', err);
      }
    });
  }

  // --- Filtering Logic ---
  onSearch() {
    let filtered = this.allInstitutions;

    if (this.filter.subCounty !== 'All') {
      filtered = filtered.filter(inst => inst.subCounty === this.filter.subCounty);
    }

    if (this.filter.status && this.filter.status !== 'Select') {
      filtered = filtered.filter(inst => inst.status.toLowerCase() === this.filter.status.toLowerCase());
    }

    this.institutions = filtered;
    this.cdr.detectChanges();
  }

  // --- Modals State ---
  showAssignModal = false;
  showViewModal = false;
  selectedInstitution: any = null;
  selectedSCDE = '';

  // Hardcoded Assignees (Will be replaced by API call later)
  scdeList = ['Scde Number 1', 'Scde Number 2', 'Scde Number 3'];

  // Tabs inside View Modal
  activeViewTab = 'form'; // 'form' | 'reports' | 'actions'

  // Hardcoded View Data
  viewData = {
    institutionType: 'Mixed School',
    institutionName: 'Nairobi Primary School',
    headOfInstitution: 'Mr. Paul Ndirangu',
    email: 'info@nairobiprimary.ac.ke',
    mobileNo: '+254711000111',
    onboardingDate: '30-07-2026',
    applicationType: 'Regular School',
    educationalPathway: 'Age Based',
    institutionLevel: 'Primary School',
    hasCert: 'YES',
    certNo: 'CERT-12345',
    sneBoys: 0,
    sneGirls: 0,
    totalLearners: 450,
    coordinates: '-1.28379, 36.80942',
    county: 'Nairobi',
    subCounty: 'Starehe',
    constituency: 'Starehe',
    postalCode: '00100',
    schoolCategory: 'Public',
    postalLocation: 'P.O Box 12345',
    scdeComments: 'No SCDE comments available.',
    scqasoComments: 'No SCQASO comments available.',
    cqasoComments: 'No CQASO comments available.',
    scqasoReport: 'QASO_Inspection_Report_FRIENDS SCHOOL.pdf',
    cqasoReport: 'CQASO_Inspection_Report_FRIENDS SCHOOL.pdf'
  };

  // --- Actions ---

  openAssignModal(inst: any) {
    this.selectedInstitution = inst;
    this.selectedSCDE = '';
    this.showAssignModal = true;
  }

  openViewModal(inst: any) {
    this.selectedInstitution = inst;
    this.activeViewTab = 'form'; // Reset to first tab
    this.showViewModal = true;
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
    console.log(`Assigned school ${this.selectedInstitution.institutionName} to ${this.selectedSCDE}`);
    alert(`Successfully assigned to ${this.selectedSCDE}`);
    this.closeModals();
  }

  // Final Decision Actions
  approveSchool() {
    console.log(`Approved: ${this.selectedInstitution?.institutionName}`);
    alert('School Approved successfully!');
    this.closeModals();
  }

  rejectSchool() {
    console.log(`Rejected: ${this.selectedInstitution?.institutionName}`);
    alert('School Rejected!');
    this.closeModals();
  }
}
