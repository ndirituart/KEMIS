

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
export class InstitutionsRegisteredCountyComponent {

  // Hardcoded filter data
  institutionLevels = ['Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  counties = ['Vihiga', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'];
  subCounties = ['All', 'Thika East', 'Pokot Central', 'Pokot North', 'Turkana North', 'Chepalungu', 'Nzambani', 'Pokot South'];

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
    { sNo: 1, certNo: '55555653366', type: "Boy's School", name: 'Gatumaini Junior', phone: '711972827', level: 'Junior School', subCounty: 'Thika East', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'joshuaodex99@gmail.com' },
    { sNo: 2, certNo: '345678798', type: 'Mixed School', name: 'Kokwetendwo junior school', phone: '701531972', level: 'Junior School', subCounty: 'Pokot Central', createdDate: '25-06-2026', createdBy: '', constituency: 'SIGOR', email: 'sylviachepkemoi6@gmail.com' },
    { sNo: 3, certNo: '5670487', type: 'Mixed School', name: 'White Sand Junior', phone: '789056734', level: 'Junior School', subCounty: 'Pokot North', createdDate: '25-06-2026', createdBy: '', constituency: 'KACHELIBA', email: 'jagoli2132@fishnone.com' },
    { sNo: 4, certNo: '151-00228', type: 'Mixed School', name: 'Lokamusio primary school', phone: '0718017424', level: 'Junior School', subCounty: 'Turkana North', createdDate: '25-06-2026', createdBy: '', constituency: 'TURKANA NORTH', email: 'signoraimbali@gmail.com' },
    { sNo: 5, certNo: '36sI2000250', type: 'Mixed School', name: 'KOSGEI ROBERT', phone: '713817072', level: 'Junior School', subCounty: 'Chepalungu', createdDate: '06-07-2026', createdBy: '', constituency: '', email: 'kiplaarobert922@gmail.com' },
    { sNo: 6, certNo: '12348', type: 'Mixed School', name: 'Thika junior school', phone: '723747169', level: 'Junior School', subCounty: 'Thika East', createdDate: '26-06-2026', createdBy: '', constituency: 'THIKA TOWN', email: 'ruthkiberu@gmail.com' },
    { sNo: 7, certNo: '56565656', type: 'Mixed School', name: 'Yahdah KOECH JUNIOR', phone: '0703268104', level: 'Junior School', subCounty: 'Chepalungu', createdDate: '06-07-2026', createdBy: '', constituency: 'CHEPALUNGU', email: 'koechyahdah@gmail.com' },
    { sNo: 8, certNo: 'Aqwertyu78', type: 'Mixed School', name: 'Jennifer Junior school', phone: '7244934876', level: 'Junior School', subCounty: 'Nzambani', createdDate: '11-06-2026', createdBy: '', constituency: 'KITUI WEST', email: 'nyoikesteve08@gmail.com' },
    { sNo: 9, certNo: '23sI2345677890', type: 'Mixed School', name: 'Kabichbich Junior school', phone: '110081527', level: 'Junior School', subCounty: 'Pokot South', createdDate: '25-06-2026', createdBy: '', constituency: 'POKOT SOUTH', email: 'nashonkibet145@gmail.com' }
  ];

  // Hardcoded search term for the table
  tableSearch = '';

  // Method to handle the Search button click
  onSearch() {
    console.log('Searching with filters:', this.filter);
    // Later, you will call your API here: this.http.get(apiUrl, { params: this.filter })
  }

  // Method to handle download
  onDownload() {
    console.log('Downloading data...');
  }
}