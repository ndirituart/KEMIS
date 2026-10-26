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

  // Static data should be cha
  dashboardData = {
    countyName: 'Vihiga',
    userRole: 'CDE',
    stats: {
      approved: 117,
      rejected: 0,
      pending: 39,
      appeals: 3,
      totalLearners: 372
    },
    approvalBreakdown: {
      approved: 117,
      pending: 39,
      rejected: 0
    },
    categories: {
      regular: { count: 149, percentage: 96.8 },
      integrated: { count: 5, percentage: 3.2 },
      sne: { count: 0, percentage: 0.0 }
    }
  };

  // For the top right dropdowns
  selectedLevel = 'Junior School';
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
