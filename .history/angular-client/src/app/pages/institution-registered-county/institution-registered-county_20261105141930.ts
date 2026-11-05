

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
    county: 'Vihiga',
    subCounty: 'All'
  };

  // Hardcoded Table Data based on your screenshot
  institutions = [
    { sNo: 1, certNo: 'null', type: "Mixed School", name: 'Nairobi Primary School', phone: '711972827', level: 'Junior School', subCounty: 'Thika East', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'joshuaodex99@gmail.com' },
    { sNo: 2, certNo: 'CERT-00234', type: "Boys School", name: 'Star Academy', phone: '701531972', level: 'Junior School', subCounty: 'Pokot Central', createdDate: '25-06-2026', createdBy: '', constituency: 'SIGOR', email: 'sylviachepkemoi6@gmail.com' },
    { sNo: 3, certNo: 'CERT-101', type: 'Mixed School', name: 'Dagoretti North Primary School', phone: '789056734', level: 'Junior School', subCounty: 'Pokot North', createdDate: '25-06-2026', createdBy: '', constituency: 'KACHELIBA', email: 'jagoli2132@fishnone.com' },
    { sNo: 4, certNo: 'CERT-102', type: 'Mixed School', name: 'Dagoretti North Junior School', phone: '0718017424', level: 'Junior School', subCounty: 'Turkana North', createdDate: '25-06-2026', createdBy: '', constituency: 'TURKANA NORTH', email: 'signoraimbali@gmail.com' },
    { sNo: 5, certNo: 'CERT-103', type: 'Girls School', name: 'Dagoretti North Senior School', phone: '713817072', level: 'Junior School', subCounty: 'Chepalungu', createdDate: '06-07-2026', createdBy: '', constituency: '', email: 'kiplaarobert922@gmail.com' },
    { sNo: 6, certNo: 'CERT-104', type: 'Mixed School', name: 'Dagoretti South Primary School', phone: '723747169', level: 'Junior School', subCounty: 'Thika East', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'ruthkiberu@gmail.com' },
    { sNo: 7, certNo: 'CERT-105', type: 'Mixed School', name: 'Dagoretti South Junior School', phone: '0703268104', level: 'Junior School', subCounty: 'Chepalungu', createdDate: '06-07-2026', createdBy: '', constituency: 'CHEPALUNGU', email: 'koechyahdah@gmail.com' },
    { sNo: 8, certNo: 'Aqwertyu78', type: 'Mixed School', name: 'Dagoretti South Senior School', phone: '7244934876', level: 'Junior School', subCounty: 'Nzambani', createdDate: '11-06-2026', createdBy: '', constituency: 'KITUI WEST', email: 'nyoikesteve08@gmail.com' },
    { sNo: 9, certNo: '23sI2345677890', type: 'Mixed School', name: 'Kabichbich Junior school', phone: '110081527', level: 'Junior School', subCounty: 'Pokot South', createdDate: '25-06-2026', createdBy: '', constituency: 'POKOT SOUTH', email: 'nashonkibet145@gmail.com' }
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