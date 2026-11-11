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
    // We pass 'All' or omit status to get EVERY school in the county
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=${countyName}`).subscribe({
      next: (res) => {
        const schools = res.schools || [];

        // 🔥 THE LIVE TALLY 🔥
        let approved = 0;
        let rejected = 0;
        let pending = 0;
        let totalLearners = 0;

        schools.forEach((school: any) => {
          // 1. Tally the statuses
          if (school.status === 'approved') {
            approved++;
          } else if (school.status === 'rejected' || school.status === 'denied') {
            rejected++;
          } else if (school.status === 'pending' || school.status === 'under_review') {
            pending++;
          }

          // 2. Tally the learners
          // If totalLearners is null or undefined, it adds 0
          totalLearners += (school.totalLearners || 0);
        });

        // 3. Update the UI object
        this.dashboardData.stats = {
          approved: approved,
          rejected: rejected,
          pending: pending,
          appeals: 0, // Hardcoded for now
          totalLearners: totalLearners
        };

        this.dashboardData.approvalBreakdown = {
          approved: approved,
          pending: pending,
          rejected: rejected
        };

        // 4. Update the donut chart (assuming all are regular for now)
        this.dashboardData.categories.regular = {
          count: schools.length,
          percentage: 100
        };

        // 5. Force Angular to render the new numbers
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