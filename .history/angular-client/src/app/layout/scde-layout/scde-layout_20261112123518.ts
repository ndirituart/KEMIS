import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-scde-layout',
  imports: [ RouterOutlet,CommonModule, FormsModule],
  templateUrl: './scde-layout.html',
  styleUrl: './scde-layout.css',
})
export class ScdeLayout {

  //SCDE Dashboard data
  // Static data mapping to the screenshot
    dashboardData = {
      subCountyName: 'Embakasi East',
      userRole: 'SCDE',
      stats: {
        totalApplications: 1,
        totalInstitutions: 1,
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
        male: 0, // Estimated from the 50/50 visual in the screenshot
        female: 0
      }
    };

    // For the top right dropdowns
    selectedLevel = 'Primary School';
    selectedSubCounty = '';

    constructor(private router: Router) {}

    navigateTo(route: string) {
      this.router.navigate([route]);
    }

    logout() {
      // Add logout logic here
      this.router.navigate(['/login']);
    }
  }
