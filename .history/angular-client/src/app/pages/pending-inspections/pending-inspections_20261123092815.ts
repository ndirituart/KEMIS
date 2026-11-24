import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';

@Component({
  selector: 'app-pending-institution-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institution-county.html',
  styleUrl: './pending-institution-county.css',
})
export class PendingInstitutionCounty implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private notification = inject(NotificationService);

  // --- Table & Filter State ---
  filter = { status: 'Assigned SCQASO' };
  tableSearch = '';
  schools: any[] = [];

  // --- Modal State ---
  showDetailsModal = false;
  showUploadModal = false;
  showCommentModal = false;

  selectedSchool: any = null;

  // --- Upload Form ---
  uploadData = { file: null as File | null, date: '' };

  // --- Comment Form ---
  commentData = { text: '' };
  supervisorComments = 'No comments available.';

  ngOnInit() {
    this.fetchPendingInspections();
  }

  fetchPendingInspections() {
    // Fetch schools assigned to this SCQASO
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
  openDetailsModal(school: any) {
    this.selectedSchool = school;
    this.showDetailsModal = true;
  }

  openUploadModal(school: any) {
    this.selectedSchool = school;
    this.uploadData = { file: null, date: new Date().toISOString().split('T')[0] };
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
    if (file) {
      this.uploadData.file = file;
    }
  }

  submitReport() {
    if (!this.uploadData.file) {
      this.notification.showError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('institutionId', this.selectedSchool.institutionId.toString());
    formData.append('inspectionDate', this.uploadData.date);
    formData.append('file', this.uploadData.file);

    this.http.post('http://localhost:5215/api/sub-county-quality-assurance/upload-report', formData).subscribe({
      next: () => {
        this.notification.showSuccess('Report uploaded successfully!');
        this.closeModals();
      },
      error: () => this.notification.showError('Upload failed.')
    });
  }

  // --- Comment & Status Update Logic ---
  submitRecommendation() {
    if (!this.commentData.text.trim()) {
      this.notification.showError('Please enter a recommendation.');
      return;
    }

    const payload = {
      institutionId: this.selectedSchool.institutionId,
      comment: this.commentData.text
    };

    this.http.post('http://localhost:5215/api/sub-county-quality-assurance/submit-inspection', payload).subscribe({
      next: () => {
        this.notification.showSuccess('Recommendation submitted to SCDE!');
        this.closeModals();
        this.fetchPendingInspections(); // Refresh table (school will disappear as it's now recommended)
      },
      error: () => this.notification.showError('Submission failed.')
    });
  }
}
