import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; // for filtering

@Component
  ({
    selector: 'app-learners-registered-per-cluster-sub-county',
     imports: [CommonModule, FormsModule, SearchPipe],
    templateUrl: './learners-registered-per-cluster-sub-county.html',
    styleUrl: './learners-registered-per-cluster-sub-county.css',
  })


export class LearnersRegisteredPerClusterSubCounty 
{

  // --- Filter Options ---
    institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
    clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'];
    counties = [ 'Nairobi', ];
    subCounties = [ "Embakasi East Sub County", ];
  
    // --- Filter Model ---
    filter = 
    {
      institutionLevel: 'Pre-Vocational',
      cluster: 'All',
      fromDate: '',
      toDate: '',
      county: 'Nairobi',
      subCounty: 'All'
    };
  
    tableSearch = '';
  
    //Empty array to hold learners data fetched from backend
    learners: any[] = [];
  
    onSearch() {
      console.log('Searching with filters:', this.filter);
      // TODO: Fetch from backend using this.filter
    }
}
