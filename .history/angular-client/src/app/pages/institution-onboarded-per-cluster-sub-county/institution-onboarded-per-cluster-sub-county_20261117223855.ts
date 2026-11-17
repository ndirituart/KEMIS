import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';

@Component({
  selector: 'app-institution-onboarded-per-cluster-sub-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './institution-onboarded-per-cluster-sub-county.html',
  styleUrl: './institution-onboarded-per-cluster-sub-county.css',
})
export class InstitutionOnboardedPerClusterSubCounty implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private notification = inject(NotificationService);

  // --- Filter Options ---
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
  clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4', 'Private'];

  // Will be populated from the logged-in SCDE
  scdeSubCounty: string = '';

  // --- Filter Model ---
  filter = {
    institutionLevel: 'Primary School',
    cluster: 'All',
    fromDate: '',
    toDate: '',
    subCounty: 'Loading...' // Will be set to the SCDE's subcounty
  };

  tableSearch = '';

  // --- Live Data ---
  allInstitutions: any[] = [];
  institutions: any[] = [];

  ngOnInit() {
    this.loadProfileAndSchools();
  }

  loadProfileAndSchools() {
    // 1. Fetch SCDE Profile to get their SubCounty
    this.http.get<any>('http://localhost:5215/api/sub-county-education/profile').subscribe({
      next: (profile) => {
        this.scdeSubCounty = profile.subCounty;
        
        this.filter.subCounty = profile.subCounty;

        // 2. Fetch all schools in that subcounty (ignoring cluster for now)
        this.fetchAllSchools(profile.subCounty);
      },
      error: (err) => {
        console.error('Failed to load SCDE profile', err);
        this.notification.showError('Failed to load profile');
        // Fallback for testing
        this.scdeSubCounty = 'Embakasi';
        this.filter.subCounty = 'Embakasi';
        this.fetchAllSchools('Embakasi');
      }
    });
  }

  fetchAllSchools(subCountyName: string) {
    // We pass 'All' for status to get everything in the subcounty
    this.http.get<any>(`http://localhost:5215/api/sub-county-education/institutions?subCounty=${subCountyName}&status=All`).subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch schools', err);
        this.notification.showError('Failed to fetch schools');
      }
    });
  }

  onSearch() {
    let filtered = this.allInstitutions;

    // 1. Filter by Cluster (if not 'All')
    if (this.filter.cluster !== 'All') {
      filtered = filtered.filter(i => i.cluster === this.filter.cluster);
    }

    // 2. Filter by Institution Level (if not 'All')
    if (this.filter.institutionLevel !== 'All') {
      filtered = filtered.filter(i => i.institutionLevel === this.filter.institutionLevel);
    }

    // 3. Filter by Date (if selected)
    if (this.filter.fromDate) {
      filtered = filtered.filter(i => new Date(i.createdAt) >= new Date(this.filter.fromDate));
    }
    if (this.filter.toDate) {
      filtered = filtered.filter(i => new Date(i.createdAt) <= new Date(this.filter.toDate));
    }

    // Update the table
    this.institutions = filtered;
    this.cdr.detectChanges();
  }
}
