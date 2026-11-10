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

  // Use the institutions endpoint!
  private apiUrl = 'http://localhost:5215/api/county-education/institutions/all';

  dashboardData: any = {
    fullName: 'Loading...',
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

  // (Make sure your countiesData array is still here)
  countiesData = [ /* ... your array ... */ ];

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (res) => {
        if (res.error) {
          console.error(res.error);
          return;
        }

        // 1. Set CDE Name and County
        this.dashboardData.fullName = res.cdeName;
        this.dashboardData.county = res.county;

        // 2. Calculate Stats from the schools array!
        const schools = res.schools;
        const approved = schools.filter((s: any) => s.status === 'approved').length;
        const rejected = schools.filter((s: any) => s.status === 'rejected' || s.status === 'denied').length;
        const pending = schools.filter((s: any) => s.status === 'pending' || s.status === 'under_review').length;
        const totalLearners = schools.reduce((sum: number, s: any) => sum + (s.totalLearners || 0), 0);

        // 3. Update the UI Stats
        this.dashboardData.stats = { approved, rejected, pending, appeals: 0, totalLearners };
        this.dashboardData.approvalBreakdown = { approved, pending, rejected };
        
        this.dashboardData.categories.regular.count = schools.length;
        this.dashboardData.categories.regular.percentage = 100;

        // 4. Load Subcounties
        const countyObj = this.countiesData.find(c => c.county.toLowerCase() === res.county.toLowerCase());
        if (countyObj) {
          this.subCounty = countyObj.subCounty;
        }

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load dashboard stats', err);
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}