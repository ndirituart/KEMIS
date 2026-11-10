

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-institutions-registered-county',
  standalone: true,
  imports: [CommonModule, FormsModule],
 templateUrl: './institution-registered-county.html',
  styleUrl: './institution-registered-county.css',
})
export class InstitutionsRegisteredCounty {

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
    { institutionId: 1, certificateNumber: 'null', institutionType: "Mixed School", institutionName: 'Nairobi Primary School', mobileNo: '+254711000111', institutionLevel: 'Junior School', subCounty: 'Starehe', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'joshuaodex99@gmail.com' },
    { institutionId: 2, certificateNumber: 'CERT-00234', institutionType: "Boys School", institutionName: 'Star Academy', mobileNo: '+254', institutionLevel: 'Junior School', subCounty: 'Embakasi East', createdDate: '25-06-2026', createdBy: '', constituency: 'SIGOR', email: 'sylviachepkemoi6@gmail.com' },
    { institutionId: 3, certificateNumber: 'CERT-101', institutionType: 'Mixed School', institutionName: 'Dagoretti North Primary School', mobileNo: '789056734', institutionLevel: 'Junior School', subCounty: 'Dagoretti North', createdDate: '25-06-2026', createdBy: '', constituency: 'KACHELIBA', email: 'jagoli2132@fishnone.com' },
    { institutionId: 4, certificateNumber: 'CERT-102', institutionType: 'Mixed School', institutionName: 'Dagoretti North Junior School', mobileNo: '0718017424', institutionLevel: 'Junior School', subCounty: 'Dagoretti North', createdDate: '25-06-2026', createdBy: '', constituency: 'TURKANA NORTH', email: 'signoraimbali@gmail.com' },
    { institutionId: 5, certificateNumber: 'CERT-103', institutionType: 'Girls School', institutionName: 'Dagoretti North Senior School', mobileNo: '713817072', institutionLevel: 'Junior School', subCounty: 'Dagoretti North', createdDate: '06-07-2026', createdBy: '', constituency: '', email: 'kiplaarobert922@gmail.com' },
    { institutionId: 6, certificateNumber: 'CERT-104', institutionType: 'Mixed School', institutionName: 'Dagoretti South Primary School', mobileNo: '723747169', institutionLevel: 'Junior School', subCounty: 'Dagoretti South', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'ruthkiberu@gmail.com' },
    { institutionId: 7, certificateNumber: 'CERT-105', institutionType: 'Mixed School', institutionName: 'Dagoretti South Junior School', mobileNo: '0703268104', institutionLevel: 'Junior School', subCounty: 'Dagoretti South', createdDate: '06-07-2026', createdBy: '', constituency: 'CHEPALUNGU', email: 'koechyahdah@gmail.com' },
    { institutionId: 8, certificateNumber: 'CERT-106', institutionType: 'Mixed School', institutionName: 'Dagoretti South Senior School', mobileNo: '7244934876', institutionLevel: 'Junior School', subCounty: 'Dagoretti South', createdDate: '11-06-2026', createdBy: '', constituency: 'KITUI WEST', email: 'nyoikesteve08@gmail.com' },
    
  ];

  

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