

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering

@Component({
  selector: 'app-institutions-registered-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
 templateUrl: './institution-registered-county.html',
  styleUrl: './institution-registered-county.css',
})
export class InstitutionRegisteredCounty {

  // Hardcoded filter data
  institutionLevels = ['Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  county = ['Nairobi']; //hardcoded to Nairobi by default
  subCounty = [
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

  // Filter Model
  filter = {
    institutionLevel: 'Junior School',
    fromDate: '',
    toDate: '',
  county: 'Nairobi',
    subCounty: 'All'
  };

  // Hardcoded Table Data based on your screenshot
  institutions = [
  ];

  //{ institutionId: 1, certificateNumber: 'null', institutionType: "Mixed School", institutionName: 'Nairobi Primary School', mobileNo: '+254711000111', institutionLevel: 'Primary School', subCounty: 'Starehe', createdAt: '2026-10-22', headOfInstitution: 'Mr. Paul Ndirangu', constituency: 'null', emailId: 'info@nairobiprimaryschool.ac.ke' },
    { institutionId: 2, certificateNumber: 'CERT-00234', institutionType: "Boys School", institutionName: 'Star Academy', mobileNo: '+254712345678', institutionLevel: 'Primary School', subCounty: 'Embakasi East', createdAt: '2026-10-29', headOfInstitution: 'Patience Njeri Ndiritu', constituency: 'Lower Savannah', emailId: 'staracademy@gmail.com' },
    { institutionId: 3, certificateNumber: 'CERT-101', institutionType: 'Mixed School', institutionName: 'Dagoretti North Primary School', mobileNo: '+2547110000001', institutionLevel: 'Primary School', subCounty: 'Dagoretti North', createdAt: '2026-01-10', headOfInstitution: 'John Kamau', constituency: 'Dagoretti North', emailId: 'dagorettinorth.pri@kemis.go.ke' },
    { institutionId: 4, certificateNumber: 'CERT-102', institutionType: 'Mixed School', institutionName: 'Dagoretti North Junior School', mobileNo: '+2547110000002', institutionLevel: 'Junior School', subCounty: 'Dagoretti North', createdAt: '2026-01-11', headOfInstitution: 'Mary Wambui', constituency: 'Dagoretti North', emailId: 'dagorettinorth.jnr@kemis.go.ke' },
    { institutionId: 5, certificateNumber: 'CERT-103', institutionType: 'Girls School', institutionName: 'Dagoretti North Senior School', mobileNo: '+2547110000003', institutionLevel: 'Senior School', subCounty: 'Dagoretti North', createdAt: '2026-01-12', headOfInstitution: 'Grace Njeri', constituency: 'Dagoretti North', emailId: 'dagorettinorth.sec@kemis.go.ke' },
    { institutionId: 6, certificateNumber: 'CERT-104', institutionType: 'Mixed School', institutionName: 'Dagoretti South Primary School', mobileNo: '+2547110000004', institutionLevel: 'Primary School', subCounty: 'Dagoretti South', createdAt: '2026-01-13', headOfInstitution: 'Peter Mwangi', constituency: 'Dagoretti South', emailId: 'dagorettisouth.pri@kemis.go.ke' },
    { institutionId: 7, certificateNumber: 'CERT-105', institutionType: 'Mixed School', institutionName: 'Dagoretti South Junior School', mobileNo: '+2547110000005', institutionLevel: 'Junior School', subCounty: 'Dagoretti South', createdAt: '2026-01-14', headOfInstitution: 'Alice Omondi', constituency: 'Dagoretti South', emailId: 'dagorettisouth.jnr@kemis.go.ke' },
    { institutionId: 8, certificateNumber: 'CERT-106', institutionType: 'Mixed School', institutionName: 'Dagoretti South Senior School', mobileNo: '+2547110000006', institutionLevel: 'Senior School', subCounty: 'Dagoretti South', createdAt: '2026-01-15', headOfInstitution: 'Samuel Kiprop', constituency: 'Dagoretti South', emailId: 'dagorettisouth.sec@kemis.go.ke' },
    

  

  // Hardcoded search term for the table
  tableSearch = '';

  onSearch() {
    console.log('Searching with filters:', this.filter);
    //  To be replaced with API calls: this.http.get(apiUrl, { params: this.filter })
  }

  // Method to handle download
  onDownload() {
    console.log('Downloading data...');
  }
}