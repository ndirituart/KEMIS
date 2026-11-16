import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-county-education.html',
  styleUrl: './sub-county-education.css'
})
export class SubCountyEducation implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  dashboardData = {
    subCounty: 'Loading...',
    userRole: 'SCDE',
    stats: {
      totalApplications: 0,
      totalInstitutions: 0,
      schoolsReceived: 0,
      totalLearners: 0,
      subjectCombinations: 0
    },
    submissionStatus: { completed: 0, inProgress: 0, pending: 0 },
    gender: { total: 0, male: 0, female: 0 }
  };

  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  ngOnInit() {
    this.loadScdeProfile();
    this.loadDashboardStats();
  }

  loadScdeProfile() {
    this.http.get<any>('http://localhost:5215/api/sub-county-education/profile').subscribe({
      next: (profile) => {
        this.dashboardData.subCounty = profile.subCounty;
        this.selectedSubCounty = profile.subCounty;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.dashboardData.subCounty = 'Embakasi';
        this.cdr.detectChanges();
      }
    });
  }

  loadDashboardStats() {
    this.http.get<any>('http://localhost:5215/api/sub-county-education/dashboard-stats').subscribe({
      next: (res) => {
        if (res.stats) {
          this.dashboardData.stats = res.stats;
          this.cdr.detectChanges();
        }
      },
      error: (err) => console.error('Failed to load stats', err)
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
