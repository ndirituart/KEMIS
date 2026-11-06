import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; // for filtering

@Component({
  selector: 'app-institutions-onboarded-per-cluster',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './institutions-onboarded-per-cluster.html',
  styleUrl: './institutions-onboarded-per-cluster.css'
})
export class InstitutionsOnboardedPerCluster {
  
  // --- Filter Options ---
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
  clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'];
  counties = [ 'Nairobi', 'Mombasa', 'Kisumu'];
  subCounties = ['All', 'Hamisi', 'Sabatia', 'Vihiga', 'Emuhaya'];

  // --- Filter Model ---
  filter = {
    institutionLevel: 'Pre-Vocational',
    cluster: 'All',
    fromDate: '',
    toDate: '',
    county: 'Vihiga',
    subCounty: 'All'
  };

  tableSearch = '';

  // --- Table Data ---
  // The backend is down, so this is an empty array. 
  // When your backend is up, you will push data here from your HTTP response.
  institutions: any[] = [];

  onSearch() {
    console.log('Searching with filters:', this.filter);
    // TODO: Fetch from backend using this.filter
  }
}