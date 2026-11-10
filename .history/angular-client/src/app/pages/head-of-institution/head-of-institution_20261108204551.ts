import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-head-of-institution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './head-of-institution.html',
  styleUrl: './head-of-institution.css',
})
export class HeadOfInstitution implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);

  isLoading = true;

  // 1. Initialize with fallback data
  schoolData: any = {
    institutionName: 'Loading...',
    headOfInstitution: 'Loading...',
    role: 'HOI',
    status: 'pending',
    activeLearners: 0,
    inactiveLearners: 0,
    newAdmissions: 0,
    totalTransfers: 0,
    transfers: { released: 0, pending: 0, appeals: 0 },
    gender: { male: 0, female: 0 }
  };

  ngOnInit() {
    const instId = localStorage.getItem('institutionId');

    if (instId) {
      this.http.get<any>(`http://localhost:5215/api/county-education/institutions/all/GetSchool/${instId}`).subscribe({
        next: (res) => {
          console.log('School Data from API:', res);

          // 2. Update individual properties instead of replacing the whole object!
          this.schoolData.institutionName = res.institutionName || 'Unknown School';
          this.schoolData.headOfInstitution = res.headOfInstitution || 'HOI Name';
          this.schoolData.status = res.status || 'pending';
          this.schoolData.activeLearners = res.totalLearners || 0;

          // 3. Add a slight delay before flipping isLoading to false
          setTimeout(() => {
            this.isLoading = false;
          }, 0);
        },
        error: (err) => {
          console.error('Failed to fetch school data:', err);
          setTimeout(() => {
            this.isLoading = false;
          }, 0);
        }
      });
    } else {
      console.warn('No institutionId found in LocalStorage.');
      this.isLoading = false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
