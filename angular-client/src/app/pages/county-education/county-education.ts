import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface CountyData {
  county: string;
  subCounty: string[];
}

@Component({
  selector: 'app-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './county-education.html',
  styleUrl: './county-education.css'
})
export class CountyEducation implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  dashboardData: any = {
    fullName: 'Loading...', // We will set this to "Nairobi CDE"
    county: 'Loading...',
    role: 'CDE',
    stats: { approved: 0, rejected: 0, pending: 0, appeals: 0, totalLearners: 0 },
    approvalBreakdown: { approved: 0, pending: 0, rejected: 0 },
    categories: {
      regular: { count: 0, percentage: 0 },
      integrated: { count: 0, percentage: 0 },
      sne: { count: 0, percentage: 0 }
    }
  };

  subCounty: string[] = [];
  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  countiesData: CountyData[] = [
    // ... your 47 counties array ...
    { county: "Nairobi", subCounty: ["Dagoretti North", "Dagoretti South", "Embakasi Central", "Embakasi East", "Embakasi North", "Embakasi South", "Embakasi West", "Kamukunji", "Kasarani", "Kibra", "Lang'ata", "Makadara", "Mathare", "Roysambu", "Ruaraka", "Starehe", "Westlands"] }
  ];

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // STEP 1: Fetch the CDE Profile
    this.http.get<any>('http://localhost:5215/api/county-education/profile').subscribe({
      next: (profile) => {
        // Construct the display name: e.g., "NAIROBI CDE"
        this.dashboardData.fullName = `${profile.county} CDE`;
        this.dashboardData.county = profile.county;

        // Load subcounties
        const countyObj = this.countiesData.find(c => c.county.toLowerCase() === profile.county.toLowerCase());
        if (countyObj) this.subCounty = countyObj.subCounty;

        // STEP 2: Fetch schools using the county from the profile
        this.fetchSchools(profile.county);
      },
      error: (err) => {
        console.error('Failed to load profile', err);
        this.dashboardData.county = 'Nairobi'; // Fallback for testing
        this.fetchSchools('Nairobi');
      }
    });
  }

  fetchSchools(countyName: string) {
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=${countyName}`).subscribe({
      next: (res) => {
        const schools = res.schools || [];

        // Calculate stats
        const approved = schools.filter((s: any) => s.status === 'approved').length;
        const rejected = schools.filter((s: any) => s.status === 'rejected' || s.status === 'denied').length;
        const pending = schools.filter((s: any) => s.status === 'pending' || s.status === 'under_review').length;
        const totalLearners = schools.reduce((sum: number, s: any) => sum + (s.totalLearners || 0), 0);

        // Update UI
        this.dashboardData.stats = { approved, rejected, pending, appeals: 0, totalLearners };
        this.dashboardData.approvalBreakdown = { approved, pending, rejected };
        this.dashboardData.categories.regular = { count: schools.length, percentage: 100 };

        // Force Angular to render the new data
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to load schools', err)
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}