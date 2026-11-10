import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering

@Component({
  selector: 'app-pending-institution-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institution-county.html',
  styleUrl: './pending-institution-county.css'
})
export class PendingInstitutionCounty {
  
  // --- Main Table Data ---
   subCounties = [
          'All',
          "Dagoretti North Sub County",
          "Dagoretti South Sub County ",
          "Embakasi Central Sub Count",
          "Embakasi East Sub County",
          "Embakasi North Sub County ",
          "Embakasi South Sub County",
          "Embakasi West Sub County",
          "Kamukunji Sub County",
          "Kasarani Sub County ",
          "Kibra Sub County ",
          "Lang'ata Sub County ",
          "Makadara Sub County",
          "Mathare Sub County ",
          "Roysambu Sub County ",
          "Ruaraka Sub County ",
          "Starehe Sub County ",
          "Westlands Sub County "];
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

  // Hardcoded Table Data
  institutions = [
    { id: 1, no: '38SI2000476_Ps', name: 'FRIENDS SCHOOL KAIMOSI SPECIAL FOR MH', date: '30-07-2026', subCounty: 'Hamisi', status: 'Pending' },
    { id: 2, no: '38SI2000446', name: 'VIHINDI PRIMARY', date: '26-07-2026', subCounty: 'Sabatia', status: 'Pending' },
    { id: 3, no: '38SI200089_Ps', name: 'vumale primary school', date: '24-07-2026', subCounty: 'Vihiga', status: 'Pending' },
    { id: 4, no: '38SI2000293_Ps', name: 'IVOLA PRIMARY SCHOOL', date: '24-07-2026', subCounty: 'Hamisi', status: 'Pending' },
    { id: 5, no: '38SI2000357_PR', name: 'Lusala primary', date: '22-07-2026', subCounty: 'Sabatia', status: 'Pending' },
    { id: 6, no: '38SI2000179_PR', name: 'EBUNANGWE PRIMARY SCHOOL', date: '22-07-2026', subCounty: 'Emuhaya', status: 'Pending' }
  ];

  // --- Modals State ---
  showAssignModal = false;
  showViewModal = false;
  selectedInstitution: any = null; // The school being viewed/assigned
  selectedSCDE = '';
  
  // Hardcoded Assignees
  scdeList = ['HAMISI SCDE VIHIGA', 'SABATIA SCDE VIHIGA', 'VIHIGA SCDE CENTRAL'];

  // Tabs inside View Modal
  activeViewTab = 'form'; // 'form' | 'reports' | 'actions'

  // Hardcoded View Data
  viewData = {
    institutionType: 'Mixed School',
    institutionName: 'FRIENDS SCHOOL KAIMOSI SPECIAL FOR MH',
    headOfInstitution: 'LUKAS MUGASIA',
    email: 'friendskaimosischool@gmail.com',
    mobileNo: '143822115',
    onboardingDate: '30-07-2026',
    applicationType: 'Special School',
    educationalPathway: 'Age Based',
    institutionLevel: 'Primary School Education',
    hasCert: 'YES',
    certNo: '38SI2000476_Ps',
    sneBoys: 82,
    sneGirls: 77,
    totalLearners: 159,
    coordinates: '-0.001588455557561907, 0.01020531981374221',
  county: 'Nairobi',
    subCounty: 'Hamisi',
    constituency: 'HAMISI',
    postalCode: '50309',
    schoolCategory: 'Public',
    postalLocation: 'P.O Box 54 - 50309, Tiriki, Konyo',
    scdeComments: 'No SCDE comments available.',
    scqasoComments: 'No SCQASO comments available.',
    cqasoComments: 'No CQASO comments available.',
    scqasoReport: 'QASO_Inspection_Report_FRIENDS SCHOOL KAIMOSI SPECIAL FOR MH.pdf',
    cqasoReport: 'CQASO_Inspection_Report_FRIENDS SCHOOL KAIMOSI SPECIAL FOR MH.pdf'
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
    console.log(`Assigned school ${this.selectedInstitution.name} to ${this.selectedSCDE}`);
    alert(`Successfully assigned to ${this.selectedSCDE}`);
    this.closeModals();
  }

  // Final Decision Actions
  approveSchool() {
    console.log(`Approved: ${this.selectedInstitution.name}`);
    alert('School Approved successfully!');
    this.closeModals();
  }

  rejectSchool() {
    console.log(`Rejected: ${this.selectedInstitution.name}`);
    alert('School Rejected!');
    this.closeModals();
  }
}