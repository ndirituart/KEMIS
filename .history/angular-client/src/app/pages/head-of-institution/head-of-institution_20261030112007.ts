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

  schoolData: any = {
    institutionName: 'Loading School ...',
    headOfInstitution: 'Loading HOI ...',
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
      // Note: use GetSchool (singular) not GetSchools (plural) if you are fetching one by ID
      this.http.get<any>(`http://localhost:5215/api/BasicEducation/GetSchool/${instId}`).subscribe({
        next: (res) => {
        console.log('School Data from API:', res); 
        
        // Just assign the response directly!
        this.schoolData = res; 
        
        // Ensure that activeLearners gets mapped from totalLearners since they have different names
        this.schoolData.activeLearners = res.totalLearners || 0;
        this.schoolData.role = 'HOI';

        this.isLoading = false;
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