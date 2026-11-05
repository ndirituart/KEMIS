import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scde-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sub-county-education.html',
  styleUrl: './sub-county-education.scss',
})
export class SubCountyEducation {
  institutionId: number | null = null;
  summary = '';
  recommendation = '';
  message = '';
  isSubmitting = false;

  private readonly apiUrl: string = 'http://localhost:5215/api/reports';

  constructor(private http: HttpClient) {}

  submitReport(): void {
    this.message = '';

    if (!this.institutionId || !this.summary.trim() || !this.recommendation) {
      this.message = 'Please complete all fields.';
      return;
    }

    const request = {
      institutionId: this.institutionId,
      summary: this.summary.trim(),
      recommendation: this.recommendation,
    };

    this.isSubmitting = true;

    this.http.post(this.apiUrl, request).subscribe({
      next: () => {
        this.message = 'Report submitted successfully.';
        this.institutionId = null;
        this.summary = '';
        this.recommendation = '';
        this.isSubmitting = false;
      },
      error: (error) => {
        this.message =
          error.status === 401 || error.status === 403
            ? 'You are not authorized. Please sign in with an SCDE account.'
            : 'Report submission failed. Check the details and try again.';
        this.isSubmitting = false;
      },
    });
  }
}