import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';

//Declarring the school and all variables
export interface School {
  institutionId: number;
  institutionName: string;
  emailId: string;
  mobileNo: string;
  createdAt: string;
  certificateNumber: string;
  institutionType: string;
  institutionLevel: string;
  status: string;
  headOfInstitution: string;
  postalAddressHoi: string;
  county: string;
  subCounty: string;
  constituency: string;
  postalAddressInstitution: string;
  applicationType: string;
  accomodationType: string;
  schoolCategory: string;
  totalLearners: number;
  inspectionDate?: string;
}
@Component({
  selector: 'app-pending-inspections',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-inspections.html',
  styleUrl: './pending-inspections.css',
})
export class PendingInspections implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private notification = inject(NotificationService);

  // --- Table & Filter State ---
  tableSearch = '';
  schools: any[] = [];

  // --- Modal State ---
  showDetailsModal = false;
  showUploadModal = false;
  showCommentModal = false;

  selectedSchool: School | null = null; //changed from any

  // --- Upload Form ---
  submitting = false;
  uploadData = { file: null as File | null, date: '' };

  // --- Comment Form ---
  commentData = { text: '' };
  supervisorComments = 'No comments available.';

  ngOnInit() {
    this.fetchPendingInspections();
  }

  fetchPendingInspections() {
    this.http.get<any>('http://localhost:5215/api/sub-county-quality-assurance/pending-inspections').subscribe({
      next: (res) => {
        this.schools = res.schools || [];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
        this.notification.showError('Failed to load pending inspections');
      }
    });
  }

  // --- Modal Actions ---
  openDetailsModal(school: School) {
    this.selectedSchool = school;
    console.log('Selected School Details:', this.selectedSchool); //Check console
    this.showDetailsModal = true;
  }

  openUploadModal(school: any) {
    this.selectedSchool = school;
    this.uploadData = { file: null, date: new Date().toISOString().split('T')[0] };
    this.commentData.text = '';
    this.showUploadModal = true;
  }

  openCommentModal(school: any) {
    this.selectedSchool = school;
    this.commentData.text = '';
    this.showCommentModal = true;

    // Fetch SCDE comments for this specific school
    this.http.get<any>(`http://localhost:5215/api/sub-county-quality-assurance/comments/${school.institutionId}`).subscribe({
      next: (res) => this.supervisorComments = res.commentText || 'No comments available.',
      error: () => this.supervisorComments = 'Failed to load comments.'
    });
  }

  closeModals() {
    this.showDetailsModal = false;
    this.showUploadModal = false;
    this.showCommentModal = false;
    this.selectedSchool = null;
  }

  // --- File Upload Logic ---
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadData.file = file ?? null;
  }

  //submit report PDF and comment both at once
  submitReport() {
    if (this.submitting || !this.selectedSchool?.canSubmit) return;

    const file = this.uploadData.file;
    if (!file) {
      this.notification.showError('Please attach an inspection report.');
      return;
    }

    if (!this.commentData.text.trim()) {
      this.notification.showError('Please enter a recommendation.');
      return;
    }

    // Build the FormData payload
    const formData = new FormData();
    formData.append('institutionId', this.selectedSchool.institutionId.toString());
    formData.append('comment', this.commentData.text);
    if (this.uploadData.date) {
      formData.append('inspectionDate', this.uploadData.date);
    }
    formData.append('file', file, file.name);

    this.submitting = true;
    this.http.post('http://localhost:5215/api/sub-county-quality-assurance/submit-inspection', formData).subscribe({
      next: () => {
        this.submitting = false;
        this.notification.showSuccess('Inspection submitted to SCDE!');
        this.closeModals();
        this.fetchPendingInspections();
      },
      error: (err) => {
        this.submitting = false;
        const message = typeof err.error === 'string' ? err.error : err.error?.message;
        this.notification.showError(message || 'Submission failed.');
        this.cdr.detectChanges();
      }
    });
  }
}
