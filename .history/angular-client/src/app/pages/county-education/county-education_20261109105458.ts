import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  // The API URL for the backend
  private apiUrl = 'http://localhost:5215/api/county-education';

  // 1. Initialize with fallback data so the screen doesn't crash
  dashboardData: any = {
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

  // Paste your entire countiesData array here
  countiesData = [
    { county: "Baringo", subCounty: ["Baringo central", "Baringo north", "Baringo south", "Eldama ravine", "Mogotio", "Tiaty"] },
      ];

  ngOnInit() {
    // 1. Get the county from LocalStorage (saved during login)
    const userCounty = localStorage.getItem('county') || 'Nairobi';
    this.loadDashboardData(userCounty);
  }

  loadDashboardData(countyName: string) {
    // 2. Find the subcounties for the dropdown
    const countyObj = this.countiesData.find(c => c.county.toLowerCase() === countyName.toLowerCase());
    if (countyObj) {
      this.subCounty = countyObj.subCounty;
    }

    // 3. Fetch real stats from the backend
    this.http.get<any>(`${this.apiUrl}/dashboard-stats`).subscribe({
      next: (res: any) => {
        // Update the dashboard data with the real API response
        this.dashboardData = res;
        
        // Force Angular to render the new data
        this.cdr.detectChanges();
      },
      error: (err:any) => {
        console.error('Failed to load dashboard stats', err);
        // Fallback data if API fails
        this.dashboardData.county = countyName;
        this.cdr.detectChanges();
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}