import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';// Use BrowserModule/CommonModule depending on your setup
import { CommonModule } from '@angular/common'; // Needed for *ngFor
import { Router } from '@angular/router';

@Component({
  selector: 'app-school-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './school-dashboard.html',
  styleUrl: './school-dashboard.css'
})
export class SchoolDashboard implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);

  school: any = null;
  isLoading = true;
  errorMessage = '';

  ngOnInit() {
    // Get the ID saved during registration
    const instId = localStorage.getItem('institutionId');

    if (!instId) {
      this.errorMessage = 'No school found. Please register first.';
      this.isLoading = false;
      return;
    }

    // Fetch the school details
    this.http.get<any>(`http://localhost:5215/api/BasicEducation/GetSchool/${instId}`).subscribe({
      next: (res: any) => {
        this.school = res;
        this.isLoading = false;
      },
      error: (err: any) => {
        this.errorMessage = 'Failed to load school data.';
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/institution-onboarding']);
  }
}
