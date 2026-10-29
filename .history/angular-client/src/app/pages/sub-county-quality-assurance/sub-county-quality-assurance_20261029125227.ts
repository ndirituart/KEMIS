
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sub-county-quality-assurance',
  imports: [],
  templateUrl: './sub-county-quality-assurance.html',
  styleUrl: './sub-county-quality-assurance.css',
})
export class SubCountyQualityAssurance {

  // Static data mapping to the screenshot
  dashboardData = {
    countyName: 'Nairobi',
    userRole: 'SCQASO',
    currentLevel: 'Primary School',
    stats: {
      inspectionsDone: 9,
      schedulePending: 0,
      underEvaluation: 0,
      recPending: 0,
      sendBack: 0
    },
    institutionTypes: {
      primary: { count: 120, percentage: 100 }
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
    this.router.navigate(['/login']);
  }
}
