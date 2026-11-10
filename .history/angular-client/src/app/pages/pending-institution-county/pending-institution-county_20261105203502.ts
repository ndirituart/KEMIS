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
          "Westlands Sub County "
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

  // Hardcoded Table Data
  institutions = [
    { institutionId: 1, certificateNumber: 'null', institutionName: 'Nairobi Primary School', createdAt: '2026-10-22', subCounty: 'Starehe', status: 'Pending' },
    { institutionId: 2, certificateNumber: 'CERT-00234', institutionName: 'Star Academy', createdAt: '2026-10-29', subCounty: 'Embakasi East', status: 'Pending' },
    { institutionId: 3, certificateNumber: 'CERT-101', institutionName: 'Dagoretti North Primary School', createdAt: '2026-01-10', subCounty: 'Dagoretti North', status: 'Pending' },
    { institutionId: 4, certificateNumber: 'CERT-102', institutionName: 'Dagoretti North Junior School', createdAt: '2026-01-11', subCounty: 'Dagoretti North', status: 'Pending' },
    { institutionId: 5, certificateNumber: 'CERT-103', institutionName: 'Dagoretti North Senior School', createdAt: '2026-01-12', subCounty: 'Dagoretti North', status: 'Pending' },
    { institutionId: 6, certificateNumber: 'CERT-104', institutionName: 'Dagoretti South Primary School', createdAt: '2026-01-13', subCounty: 'Dagoretti South', status: 'Pending' }
    23	"Dagoretti South Junior"	"Mixed School"	"dagorettisouth.jnr@kemis.go.ke"	"+254711000005"	"Alice Omondi"	"P.O Box 105, Nairobi"	"Nairobi"	"Dagoretti South Sub County"	"Dagoretti South"	"P.O Box 105"	"Regular School"	"Junior School"	true	"/uploads/cert105.pdf"	"CERT-105"	250	"-1.3010"	"36.7310"	"Day"	"Private"	true	"pending"	"2026-01-14T09:00:00.000Z"			13
24	"Dagoretti South Senior"	"Mixed School"	"dagorettisouth.sec@kemis.go.ke"	"+254711000006"	"Samuel Kiprop"	"P.O Box 106, Nairobi"	"Nairobi"	"Dagoretti South Sub County"	"Dagoretti South"	"P.O Box 106"	"Regular School"	"High School"	true	"/uploads/cert106.pdf"	"CERT-106"	350	"-1.3020"	"36.7320"	"Day & Boarding"	"Private"	true	"under_review"	"2026-01-15T10:00:00.000Z"			13
25	"Embakasi Central Primary"	"Mixed School"	"embakasicentral.pri@kemis.go.ke"	"+254711000007"	"David Mutua"	"P.O Box 107, Nairobi"	"Nairobi"	"Embakasi Central Sub Count"	"Embakasi Central"	"P.O Box 107"	"Special School"	"Primary"	true	"/uploads/cert107.pdf"	"CERT-107"	150	"-1.3200"	"36.9000"	"Day"	"Public"	true	"pending"	"2026-01-16T08:00:00.000Z"			13
26	"Embakasi Central Junior"	"Boys School"	"embakasicentral.jnr@kemis.go.ke"	"+254711000008"	"Charles Njoroge"	"P.O Box 108, Nairobi"	"Nairobi"	"Embakasi Central Sub Count"	"Embakasi Central"	"P.O Box 108"	"Integrated School"	"Junior School"	true	"/uploads/cert108.pdf"	"CERT-108"	180	"-1.3210"	"36.9010"	"Day"	"Public"	true	"approved"	"2026-01-17T09:00:00.000Z"			13
27	"Embakasi Central Senior"	"Mixed School"	"embakasicentral.sec@kemis.go.ke"	"+254711000009"	"Jane Muthoni"	"P.O Box 109, Nairobi"	"Nairobi"	"Embakasi Central Sub Count"	"Embakasi Central"	"P.O Box 109"	"Regular School"	"Secondary"	true	"/uploads/cert109.pdf"	"CERT-109"	220	"-1.3220"	"36.9020"	"Day"	"Private"	true	"pending"	"2026-01-18T10:00:00.000Z"			13
28	"Embakasi East Primary"	"Mixed School"	"embakasieast.pri@kemis.go.ke"	"+254711000010"	"Joseph Maina"	"P.O Box 110, Nairobi"	"Nairobi"	"Embakasi East Sub County"	"Embakasi East"	"P.O Box 110"	"Regular School"	"Primary"	true	"/uploads/cert110.pdf"	"CERT-110"	600	"-1.3300"	"36.9100"	"Day"	"Public"	true	"approved"	"2026-01-19T08:00:00.000Z"			13
29	"Embakasi East Junior"	"Girls School"	"embakasieast.jnr@kemis.go.ke"	"+254711000011"	"Sarah Akinyi"	"P.O Box 111, Nairobi"	"Nairobi"	"Embakasi East Sub County"	"Embakasi East"	"P.O Box 111"	"Regular School"	"Junior School"	true	"/uploads/cert111.pdf"	"CERT-111"	280	"-1.3310"	"36.9110"	"Boarding"	"Private"	true	"rejected"	"2026-01-20T09:00:00.000Z"			13
30	"Embakasi East Senior"	"Mixed School"	"embakasieast.sec@kemis.go.ke"	"+254711000012"	"Paul Onyango"	"P.O Box 112, Nairobi"	"Nairobi"	"Embakasi East Sub County"	"Embakasi East"	"P.O Box 112"	"Regular School with Special Unit"	"High School"	true	"/uploads/cert112.pdf"	"CERT-112"	400	"-1.3320"	"36.9120"	"Day & Boarding"	"Public"	true	"pending"	"2026-01-21T10:00:00.000Z"			13
31	"Embakasi North Primary"	"Mixed School"	"embakasinorth.pri@kemis.go.ke"	"+254711000013"	"Margaret Wanjiku"	"P.O Box 113, Nairobi"	"Nairobi"	"Embakasi North Sub County"	"Embakasi North"	"P.O Box 113"	"Regular School"	"Primary"	true	"/uploads/cert113.pdf"	"CERT-113"	520	"-1.3100"	"36.8800"	"Day"	"Public"	true	"approved"	"2026-01-22T08:00:00.000Z"			13
32	"Embakasi North Junior"	"Mixed School"	"embakasinorth.jnr@kemis.go.ke"	"+254711000014"	"Isaac Rotich"	"P.O Box 114, Nairobi"	"Nairobi"	"Embakasi North Sub County"	"Embakasi North"	"P.O Box 114"	"Integrated School"	"Junior School"	true	"/uploads/cert114.pdf"	"CERT-114"	310	"-1.3110"	"36.8810"	"Day"	"Private"	true	"pending"	"2026-01-23T09:00:00.000Z"			13
33	"Embakasi North Senior"	"Boys School"	"embakasinorth.sec@kemis.go.ke"	"+254711000015"	"Daniel Mwangi"	"P.O Box 115, Nairobi"	"Nairobi"	"Embakasi North Sub County"	"Embakasi North"	"P.O Box 115"	"Regular School"	"Secondary"	true	"/uploads/cert115.pdf"	"CERT-115"	380	"-1.3120"	"36.8820"	"Boarding"	"Private"	true	"under_review"	"2026-01-24T10:00:00.000Z"			13
34	"Embakasi South Primary"	"Mixed School"	"embakasisouth.pri@kemis.go.ke"	"+254711000016"	"Lucy Achieng"	"P.O Box 116, Nairobi"	"Nairobi"	"Embakasi South Sub County"	"Embakasi South"	"P.O Box 116"	"Regular School"	"Primary"	true	"/uploads/cert116.pdf"	"CERT-116"	480	"-1.3400"	"36.8900"	"Day"	"Public"	true	"rejected"	"2026-01-25T08:00:00.000Z"			13
35	"Embakasi South Junior"	"Mixed School"	"embakasisouth.jnr@kemis.go.ke"	"+254711000017"	"Kevin Omondi"	"P.O Box 117, Nairobi"	"Nairobi"	"Embakasi South Sub County"	"Embakasi South"	"P.O Box 117"	"Special School"	"Junior School"	true	"/uploads/cert117.pdf"	"CERT-117"	190	"-1.3410"	"36.8910"	"Day"	"Public"	true	"approved"	"2026-01-26T09:00:00.000Z"			13
36	"Embakasi South Senior"	"Girls School"	"embakasisouth.sec@kemis.go.ke"	"+254711000018"	"Mercy Chebet"	"P.O Box 118, Nairobi"	"Nairobi"	"Embakasi South Sub County"	"Embakasi South"	"P.O Box 118"	"Regular School"	"High School"	true	"/uploads/cert118.pdf"	"CERT-118"	260	"-1.3420"	"36.8920"	"Day"	"Private"	true	"pending"	"2026-01-27T10:00:00.000Z"			13
37	"Embakasi West Primary"	"Mixed School"	"embakasiwest.pri@kemis.go.ke"	"+254711000019"	"George Kariuki"	"P.O Box 119, Nairobi"	"Nairobi"	"Embakasi West Sub County"	"Embakasi West"	"P.O Box 119"	"Regular School"	"Primary"	true	"/uploads/cert119.pdf"	"CERT-119"	550	"-1.3150"	"36.8700"	"Day"	"Public"	true	"approved"	"2026-01-28T08:00:00.000Z"			13
38	"Embakasi West Junior"	"Mixed School"	"embakasiwest.jnr@kemis.go.ke"	"+254711000020"	"Esther Njoki"	"P.O Box 120, Nairobi"	"Nairobi"	"Embakasi West Sub County"	"Embakasi West"	"P.O Box 120"	"Regular School with Special Unit"	"Junior School"	true	"/uploads/cert120.pdf"	"CERT-120"	290	"-1.3160"	"36.8710"	"Day"	"Private"	true	"pending"	"2026-01-29T09:00:00.000Z"			13
39	"Embakasi West Senior"	"Mixed School"	"embakasiwest.sec@kemis.go.ke"	"+254711000021"	"Anthony Mwaura"	"P.O Box 121, Nairobi"	"Nairobi"	"Embakasi West Sub County"	"Embakasi West"	"P.O Box 121"	"Integrated School"	"Secondary"	true	"/uploads/cert121.pdf"	"CERT-121"	330	"-1.3170"	"36.8720"	"Boarding"	"Private"	true	"approved"	"2026-01-30T10:00:00.000Z"			13
40	"Kamukunji Primary"	"Mixed School"	"kamukunji.pri@kemis.go.ke"	"+254711000022"	"Fatuma Ali"	"P.O Box 122, Nairobi"	"Nairobi"	"Kamukunji Sub County"	"Kamukunji"	"P.O Box 122"	"Regular School"	"Primary"	true	"/uploads/cert122.pdf"	"CERT-122"	400	"-1.2800"	"36.8400"	"Day"	"Public"	true	"pending"	"2026-01-31T08:00:00.000Z"			13
41	"Kamukunji Junior"	"Boys School"	"kamukunji.jnr@kemis.go.ke"	"+254711000023"	"Hassan Omar"	"P.O Box 123, Nairobi"	"Nairobi"	"Kamukunji Sub County"	"Kamukunji"	"P.O Box 123"	"Regular School"	"Junior School"	true	"/uploads/cert123.pdf"	"CERT-123"	210	"-1.2810"	"36.8410"	"Day"	"Public"	true	"approved"	"2026-02-01T09:00:00.000Z"			13

  ];

  // --- Modals State ---
  showAssignModal = false;
  showViewModal = false;
  selectedInstitution: any = null; // The school being viewed/assigned
  selectedSCDE = '';
  
  // Hardcoded Assignees
  scdeList = ['HAMISI SCDE VIHIGA', 'SABATIA SCDE VIHIGA', 'VIHIGA SCDE CENTRAL'];

  // Tabs insinstitutionIde View Modal
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