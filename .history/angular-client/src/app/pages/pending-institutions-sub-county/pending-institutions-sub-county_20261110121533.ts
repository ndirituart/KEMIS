import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering

@Component({
  selector: 'app-pending-institutions-sub-county',
 imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institutions-sub-county.html',
  styleUrl: './pending-institutions-sub-county.css',
})


export class PendingInstitutionsSubCounty {
  // --- Main Table Data ---
     subCounties = ["Embakasi East Sub County",];
            
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
        { institutionId: 2, certificateNumber: 'CERT-00234', institutionType: "Boys School", institutionName: 'Star Academy', mobileNo: '+254712345678', institutionLevel: 'Primary School', subCounty: 'Embakasi East', createdAt: '2026-10-29', headOfInstitution: 'Patience Njeri Ndiritu', constituency: 'Lower Savannah', emailId: 'staracademy@gmail.com' },
       
    ];
  
    // --- Modals State ---
    showAssignModal = false;
    showViewModal = false;
    selectedInstitution: any = null; // The school being viewed/assigned
    selectedSCDE = '';
    
    // Hardcoded Assignees
    scdeList = ['Janet Mbugua', 'Paul Omondi', 'S'];
  
    // Tabs insinstitutionIde View Modal
    activeViewTab = 'form'; // 'form' | 'reports' | 'actions'
  
    // Hardcoded View Data
    //1	""	"Mixed School"	"info@nairobiprimary.ac.ke"	"+254711000111"	"Mr. Paul Ndirangu"		"Nairobi"	"Starehe"			"Regular School"	"Primary"	true	"/uploads/4509c6c1-e621-4875-bc10-b108bbdc2806_Star Academy Certificate.pdf"		450					true	"pending"	"2026-10-22T10:36:37.9116918Z"			
    viewData = {
      institutionType: 'Mixed School',
      institutionName: 'Nairobi Primary School',
      headOfInstitution: 'Mr. Paul Ndirangu',
      email: 'finfo@nairobiprimary.ac.ke',
      mobileNo: '+254711000111',
      onboardingDate: '30-07-2026',
      applicationType: 'Regular School',
      educationalPathway: 'Age Based',
      institutionLevel: 'Primary School',
      hasCert: 'YES',
      certNo: 'null',
      sneBoys: 0,
      sneGirls: 0,
      totalLearners: 450,
      coordinates: 'null, null',
      county: 'Nairobi',
      subCounty: 'Starehe',
      constituency: 'Starehe',
      postalCode: 'null',
      schoolCategory: 'Public',
      postalLocation: 'null',
      scdeComments: 'certificateNumber SCDE comments available.',
      scqasoComments: 'certificateNumber SCQASO comments available.',
      cqasoComments: 'certificateNumber CQASO comments available.',
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
      console.log(`Assigned school ${this.selectedInstitution.institutionName} to ${this.selectedSCDE}`);
      alert(`Successfully assigned to ${this.selectedSCDE}`);
      this.closeModals();
    }
  
    // Final Decision Actions
    approveSchool() {
      console.log(`Approved: ${this.selectedInstitution.institutionName}`);
      alert('School Approved successfully!');
      this.closeModals();
    }
  
    rejectSchool() {
      console.log(`Rejected: ${this.selectedInstitution.institutionName}`);
      alert('School Rejected!');
      this.closeModals();
    }
}

