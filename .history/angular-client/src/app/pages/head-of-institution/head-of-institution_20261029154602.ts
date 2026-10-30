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

  // Initialize empty
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

  isLoading = true;

  ngOnInit() {
    const instId = localStorage.getItem('institutionId');

    if (instId) {
      // Fetch data from backend
      this.http.get<any>(`http://localhost:5215/api/BasicEducation/GetSchools/${instId}`).subscribe({
        next: (res) => {
          this.schoolData = {
            name: res.institutionName,
            role: 'HOI',
            status: res.status, // 'pending', 'approved', 'draft' etc.
            activeLearners: res.totalLearners,
            inactiveLearners: 0,
            newAdmissions: 0,
            totalTransfers: 0,
            transfers: { released: 0, pending: 0, appeals: 0 }, // Bado sijafika learner registration
            gender: { male: 0, female: 0 } // Bado sijafika learner registration
          };
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          this.isLoading = false;
        }
      });
    }
  }

  logout() {
    localStorage.clear(); // Clear token
    this.router.navigate(['/login']);
  }
}
