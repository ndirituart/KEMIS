import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-institutions-onboarded-per-cluster',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './institutions-onboarded-per-cluster.html',
  styleUrl: './institutions-onboarded-per-cluster.css'
})
export class InstitutionsOnboardedPerCluster implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  // --- Filter Options ---
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
  clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Private'];
  counties = ['Nairobi'];
  subCounties = [
    'All', "Dagoretti North Sub County", "Dagoretti South Sub County", "Embakasi Central Sub Count",
    "Embakasi East Sub County", "Embakasi North Sub County", "Embakasi South Sub County",
    "Embakasi West Sub County", "Kamukunji Sub County", "Kasarani Sub County", "Kibra Sub County",
    "Lang'ata Sub County", "Makadara Sub County", "Mathare Sub County", "Roysambu Sub County",
    "Ruaraka Sub County", "Starehe Sub County", "Westlands Sub County"
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

  // --- Live Data ---
  allInstitutions: any[] = [];
  institutions: any[] = [];

  ngOnInit() {
    this.fetchSchools();
  }

  fetchSchools() {
    // Fetch all schools in Nairobi (no status filter so we get approved and pending)
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=${this.filter.county}`).subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch schools', err)
    });
  }

  onSearch() {
    let filtered = this.allInstitutions;

    // Filter by Cluster (if not 'All')
    if (this.filter.cluster !== 'All') {
      filtered = filtered.filter(inst => inst.cluster === this.filter.cluster);
    }

    // Filter by Subcounty (if not 'All')
    if (this.filter.subCounty !== 'All') {
      filtered = filtered.filter(inst => inst.subCounty === this.filter.subCounty);
    }

    // Filter by Institution Level (if not 'All')
    if (this.filter.institutionLevel !== 'All') {
      filtered = filtered.filter(inst => inst.institutionLevel === this.filter.institutionLevel);
    }

    this.institutions = filtered;
    this.cdr.detectChanges();
  }
}
