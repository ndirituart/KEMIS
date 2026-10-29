import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-county-education.html',
  styleUrl: './sub-county-education.css'
})
export class SubCountyEducation {

  // Static data mapping to the screenshot
  dashboardData = {
    countyName: 'Nairobi',
    userRole: 'SCDE',
    stats: {
      totalApplications: 119,
      totalInstitutions: 119,
      schoolsReceived: 0,
      totalLearners: 345,
      subjectCombinations: 0
    },
    submissionStatus: {
      completed: 0,
      inProgress: 0,
      pending: 0
    },
    gender: {
      total: 345,
      male: 172, // Estimated from the 50/50 visual in the screenshot
      female: 173
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
