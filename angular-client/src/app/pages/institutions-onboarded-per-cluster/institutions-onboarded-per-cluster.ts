import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service'; //pop up notifications

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
  counties: string[] = [];
  subCounties = ['All'];

  // --- Filter Model ---
  filter = {
    institutionLevel: 'All',
    cluster: 'All',
    fromDate: '',
    toDate: '',
    county: '',
    subCounty: 'All'
  };

  tableSearch = '';

  // --- Live Data ---
  allInstitutions: any[] = [];
  institutions: any[] = [];

  ngOnInit() {
    this.http.get<{ county: string }>('http://localhost:5215/api/county-education/profile').subscribe({
      next: ({ county }) => {
        this.counties = [county];
        this.filter.county = county;
        this.fetchSchools();
      },
      error: (err) => console.error('Failed to load county profile', err)
    });
  }

  fetchSchools() {
    this.http.get<any>('http://localhost:5215/api/county-education/institutions', { params: { county: this.filter.county, status: 'approved' } }).subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.subCounties = [...new Set(['All', ...this.allInstitutions.map(school => school.subCounty).filter(Boolean)])];
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
