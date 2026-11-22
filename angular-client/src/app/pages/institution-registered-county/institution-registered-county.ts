import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service'; //pop up notifications
import { RouterLink, RouterLinkActive } from '@angular/router'; //nav l


@Component({
  selector: 'app-institutions-registered-county',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, SearchPipe],
  templateUrl: './institution-registered-county.html',
  styleUrl: './institution-registered-county.css',
})
export class InstitutionRegisteredCounty implements OnInit {
  private http = inject(HttpClient);
  //  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  // Filter Options
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  county: string[] = [];
  subCounty = ['All'];

  // Filter Model
  filter = {
    institutionLevel: 'All',
    fromDate: '',
    toDate: '',
    county: '',
    subCounty: 'All'
  };

  // Live Table Data
  allInstitutions: any[] = [];
  institutions: any[] = [];
  tableSearch = '';

  ngOnInit() {
    this.http.get<{ county: string }>('http://localhost:5215/api/county-education/profile').subscribe({
      next: ({ county }) => {
        this.county = [county];
        this.filter.county = county;
        this.fetchApprovedInstitutions();
      },
      error: (err) => console.error('Failed to load county profile', err)
    });
  }

  fetchApprovedInstitutions() {
    this.http.get<any>('http://localhost:5215/api/county-education/institutions', { params: { county: this.filter.county, status: 'approved' } }).subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.subCounty = [...new Set(['All', ...this.allInstitutions.map(school => school.subCounty).filter(Boolean)])];
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch institutions', err)
    });
  }

  onSearch() {
    let filtered = this.allInstitutions;

    if (this.filter.subCounty !== 'All') {
      filtered = filtered.filter(i => i.subCounty === this.filter.subCounty);
    }

    if (this.filter.institutionLevel !== 'All') {
      filtered = filtered.filter(i => i.institutionLevel === this.filter.institutionLevel);
    }

    this.institutions = filtered;
    this.cdr.detectChanges();
  }

  onDownload() {
    console.log('Downloading data...');
  }
}
