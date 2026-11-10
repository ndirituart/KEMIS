

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering

@Component({
  selector: 'app-institutions-registered-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
 templateUrl: './institutions-registered-sub-county.html',
  styleUrl: './institutions-registered-sub-county.css',
})
export class InstitutionsRegisteredSubCounty {

  // Hardcoded filter data
  institutionLevels = ['Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  county = ['Nairobi']; //hardcoded to Nairobi by default
  subCounty = [
          "Embakasi East Sub County",
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

   { institutionId: 2, certificateNumber: 'CERT-00234', institutionType: "Boys School", institutionName: 'Star Academy', mobileNo: '+254712345678', institutionLevel: 'Primary School', subCounty: 'Embakasi East', createdAt: '2026-10-29', headOfInstitution: 'Patience Njeri Ndiritu', constituency: 'Lower Savannah', emailId: 'staracademy@gmail.com' },
    

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