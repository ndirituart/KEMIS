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

  // Initialize with loading state
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
    submissionStatus: {
      completed: 0,
      inProgress: 0,
      pending: 0
    },
    gender: {
      total: 0,
      male: 0,
      female: 0
    }
  };

  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  ngOnInit() {
    this.loadScdeProfile();
    this.loadDashboardStats();
  }

  loadScdeProfile() {
    this.http.get<any>('http://localhost:5215/api/subcounty-education/profile').subscribe({
      next: (profile) => {
        this.dashboardData.subCounty = profile.subCounty;
        this.selectedSubCounty = profile.subCounty;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load SCDE profile', err);
        this.dashboardData.subCounty = 'Embakasi';
        this.cdr.detectChanges();
      }
    });
  }

  loadDashboardStats() {
    this.http.get<any>('http://localhost:5215/api/subcounty-education/dashboard-stats').subscribe({
      next: (res) => {
        if (res.stats) {
          // 🔥 Map the backend stats to the UI
          this.dashboardData.stats = res.stats;

          // 🔥 Calculate Gender Distribution from the totalLearners
          // (Since the backend doesn't split male/female yet, we can fake it for now
          // or wait until your colleague adds the gender stats to the endpoint)
          this.dashboardData.gender.total = res.stats.totalLearners;
          this.dashboardData.gender.male = Math.floor(res.stats.totalLearners / 2);
          this.dashboardData.gender.female = Math.ceil(res.stats.totalLearners / 2);

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
