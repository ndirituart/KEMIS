

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