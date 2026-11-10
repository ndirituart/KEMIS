import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; // for filtering

@Component({
  selector: 'app-institution-onboarded-per-cluster-sub-county',
   imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './institution-onboarded-per-cluster-sub-county.html',
  styleUrl: './institution-onboarded-per-cluster-sub-county.css',
})
export class InstitutionOnboardedPerClusterSubCounty {

  // --- Filter Options ---
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
  clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Private'];
  counties = [ 'Nairobi', ];
  subCounties = [ 'All',
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

  // --- Filter Model ---
  filter = {
    institutionLevel: 'Pre-Vocational',
    cluster: 'All',
    fromDate: '',
    toDate: '',
  county: 'Nairobi',
    subCounty: 'All'
  };

  tableSearch = '';

  //Empty array to hold institutions data fetched from backend
  institutions: any[] = [];

  onSearch() {
    console.log('Searching with filters:', this.filter);
    // TODO: Fetch from backend using this.filter
  }
}
