import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-county-quality-assurance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-county-quality-assurance.html',
  styleUrl: './sub-county-quality-assurance.css',
})
export class SubCountyQualityAssurance implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  dashboardData = {
    countyName: 'Nairobi',
    userRole: 'SCQASO',
    currentLevel: 'Primary School',
    stats: {
      inspectionsDone: 0,
      schedulePending: 0,
      underEvaluation: 0,
      recPending: 0,
      sendBack: 0
    },
    institutionTypes: {
      primary: { count: 0, percentage: 100 }
    }

  };

  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}