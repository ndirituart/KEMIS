

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
    { institutionId: 1, certificateNumber: 'null', institutionType: "Mixed School", name: 'Nairobi Primary School', phone: '711972827', level: 'Junior School', subCounty: 'Thika East', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'joshuaodex99@gmail.com' },
    { institutionId: 2, certificateNumber: 'CERT-00234', institutionType: "Boys School", name: 'Star Academy', phone: '701531972', level: 'Junior School', subCounty: 'Pokot Central', createdDate: '25-06-2026', createdBy: '', constituency: 'SIGOR', email: 'sylviachepkemoi6@gmail.com' },
    { institutionId: 3, certificateNumber: 'CERT-101', institutionType: 'Mixed School', name: 'Dagoretti North Primary School', phone: '789056734', level: 'Junior School', subCounty: 'Pokot North', createdDate: '25-06-2026', createdBy: '', constituency: 'KACHELIBA', email: 'jagoli2132@fishnone.com' },
    { institutionId: 4, certificateNumber: 'CERT-102', institutionType: 'Mixed School', name: 'Dagoretti North Junior School', phone: '0718017424', level: 'Junior School', subCounty: 'Turkana North', createdDate: '25-06-2026', createdBy: '', constituency: 'TURKANA NORTH', email: 'signoraimbali@gmail.com' },
    { institutionId: 5, certificateNumber: 'CERT-103', institutionType: 'Girls School', name: 'Dagoretti North Senior School', phone: '713817072', level: 'Junior School', subCounty: 'Chepalungu', createdDate: '06-07-2026', createdBy: '', constituency: '', email: 'kiplaarobert922@gmail.com' },
    { institutionId: 6, certificateNumber: 'CERT-104', institutionType: 'Mixed School', name: 'Dagoretti South Primary School', phone: '723747169', level: 'Junior School', subCounty: 'Thika East', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'ruthkiberu@gmail.com' },
    { institutionId: 7, certificateNumber: 'CERT-105', institutionType: 'Mixed School', name: 'Dagoretti South Junior School', phone: '0703268104', level: 'Junior School', subCounty: 'Chepalungu', createdDate: '06-07-2026', createdBy: '', constituency: 'CHEPALUNGU', email: 'koechyahdah@gmail.com' },
    { institutionId: 8, certificateNumber: 'CERT-106', institutionType: 'Mixed School', name: 'Dagoretti South Senior School', phone: '7244934876', level: 'Junior School', subCounty: 'Nzambani', createdDate: '11-06-2026', createdBy: '', constituency: 'KITUI WEST', email: 'nyoikesteve08@gmail.com' },
    { institutionId: 9, certificateNumber: 'CERT-107', institutionType: 'Mixed School', name: 'Kabichbich Junior school', phone: '110081527', level: 'Junior School', subCounty: 'Pokot South', createdDate: '25-06-2026', createdBy: '', constituency: 'POKOT SOUTH', email: 'nashonkibet145@gmail.com' }
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