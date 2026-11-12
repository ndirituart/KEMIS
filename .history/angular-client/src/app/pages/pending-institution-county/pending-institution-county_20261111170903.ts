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
    'All', "Dagoretti North Sub County", "Dagoretti South Sub County", "Embakasi Central Sub Count",
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
  allInstitutions: any[] = []; // Holds the raw data from backend
  institutions: any[] = [];    // Holds the filtered data for the table

  ngOnInit() {
    // Automatically fetch pending schools for the CDE's county when page loads
    this.fetchPendingSchools();
  }

  fetchPendingSchools() {
    // We fetch only 'pending' schools for Nairobi (you can make 'Nairobi' dynamic later)
    this.http.get<any>('http://localhost:5215/api/county-education/institutions?county=Nairobi&status=pending').subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.institutions = [...this.allInstitutions]; // Copy to display
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

    // 1. Filter by Subcounty if not 'All'
    if (this.filter.subCounty !== 'All') {
      filtered = filtered.filter(inst => inst.subCounty === this.filter.subCounty);
    }

    // 2. Filter by Status (if you add a status dropdown later)
    if (this.filter.status && this.filter.status !== 'Select') {
      filtered = filtered.filter(inst => inst.status.toLowerCase() === this.filter.status.toLowerCase());
    }

    // 3. Apply Search Text (e.g., "Jomo")
    // Note: The SearchPipe handles the tableSearch in HTML, but if you want to do it here:
    if (this.tableSearch) {
      const search = this.tableSearch.toLowerCase();
      filtered = filtered.filter(inst =>
        inst.institutionName.toLowerCase().includes(search) ||
        inst.certificateNumber?.toLowerCase().includes(search)
      );
    }

    this.institutions = filtered;
    this.cdr.detectChanges();
  }

  // --- Modals State ---
  showAssignModal = false;
  showViewModal = false;
  selectedInstitution: any = null;
  selectedSCDE = '';
  scdeList = ['Scde Number 1', 'Scde Number 2', 'Scde Number 3'];
  activeViewTab = 'form';

  viewData = { /* ... keep your existing viewData object ... */ };

  openAssignModal(inst: any) {
    this.selectedInstitution = inst;
    this.selectedSCDE = '';
    this.showAssignModal = true;
  }

  openViewModal(inst: any) {
    this.selectedInstitution = inst;
    this.activeViewTab = 'form';
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

  approveSchool() {
    alert('School Approved successfully!');
    this.closeModals();
  }

  rejectSchool() {
    alert('School Rejected!');
    this.closeModals();
  }
}
