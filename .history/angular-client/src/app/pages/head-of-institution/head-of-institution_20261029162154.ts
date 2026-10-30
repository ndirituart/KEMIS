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

  // Initialize with default/fallback data so the page isn't blank
  schoolData: any = {
    name: 'Loading...',
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
    console.log('Institution ID from LocalStorage:', instId); // Debugging
    
    if (instId) {
      this.http.get<any>(`http://localhost:5215/api/BasicEducation/GetSchools/${instId}`).subscribe({
        next: (res) => {
          console.log('School Data from API:', res); // Debugging
          this.schoolData = {
            name: res.institutionName || 'Unknown School',
            role: 'HOI',
            status: res.status || 'pending',
            activeLearners: res.totalLearners || 0,
            inactiveLearners: 0,
            newAdmissions: 0,
            totalTransfers: 0,
            transfers: { released: 0, pending: 0, appeals: 0 },
            gender: { male: 0, female: 0 }
          };
          //since th
        },
        error: (err) => {
          console.error('Failed to fetch school data:', err);
          this.isLoading = false;
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