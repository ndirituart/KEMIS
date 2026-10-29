import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './county-education.html',
  styleUrl: './county-education.css'
})
export class CountyEducation {

  // Static data should be changed to f
  dashboardData = {
    countyName: 'Nairobi',
    userRole: 'CDE',
    stats: {
      approved: 0,
      rejected: 0,
      pending: 1,
      appeals: 0,
      totalLearners: 0
    },
    approvalBreakdown: {
      approved: 0,
      pending: 1,
      rejected: 0
    },
    categories: {
      regular: { count: 0, percentage: 0.0 },
      integrated: { count: 0, percentage: 0.0 },
      sne: { count: 0, percentage: 0.0 }
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
