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
    subCountyName: 'Loading...',
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
  }

  loadScdeProfile() {
    // Fetch the profile from the backend using the userId hardcoded in the controller
    this.http.get<any>('http://localhost:5215/api/subcounty-education/profile').subscribe({
      next: (profile) => {
        // 🔥 Dynamically set the Sub-County name from the database!
        this.dashboardData.subCountyName = profile.subCounty;

        // Update the dropdown to match
        this.selectedSubCounty = profile.subCounty;

        // Optional: You can also fetch the stats for this specific subcounty here later
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load SCDE profile', err);
        // Fallback for UI testing
        this.dashboardData.subCountyName = 'Embakasi East';
        this.cdr.detectChanges();
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
