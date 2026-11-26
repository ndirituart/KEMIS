import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';
import type { School } from '../pending-inspections/pending-inspections';

@Component({
  selector: 'app-pending-institutions-sub-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pending-institutions-sub-county.html',
  styleUrl: './pending-institutions-sub-county.css',
})
export class PendingInstitutionsSubCounty implements OnInit {
  private notification = inject(NotificationService);
  private http = inject(HttpClient);
  private profileCounty = '';
  private cdr = inject(ChangeDetectorRef);

  subCounties: string[] = [];
  statusList = ['All', 'Pending', 'Approved', 'Rejected', 'SCDE Approved', 'Assigned SCDE', 'Assigned SCQASO', 'SCQASO Recommended', 'SCDE Rejected', 'SCDE Recommended'];

  filter = { onboardingType: 'New Onboarding', subCounty: 'All', status: 'All' };
  tableSearch = '';

  allInstitutions: any[] = [];
  institutions: any[] = [];

  // Modals State
  showAssignModal = false;
  showAssignScqasoModal = false;
  showViewModal = false;
  showDownloadModal = false;

  selectedInstitution: any = null;
  scdeSubCounty: string = ''; //open to whichever SCDE logs in
  selectedSCQASO = '';
  scqasoList: any[] = [];

  activeViewTab = 'form';
  inspection: { commentId: number; commentText: string; inspectionDate?: string } | null = null;
  review: { status: string; summary: string } | null = null;
  canDecide = false;
  deciding = false;
  showingRejectionForm = false;
  rejectionReason = '';
  viewData: School | null = null;

  ngOnInit() {

    // 1. Load the profile FIRST to get the subcounty
    this.http.get<any>('http://localhost:5215/api/sub-county-education/profile').subscribe({
      next: (profile) => {
        this.profileCounty = profile.county;
        this.scdeSubCounty = profile.subCounty;
        this.subCounties = [this.scdeSubCounty];
        this.filter.subCounty = this.scdeSubCounty;

        // 2. Fetches the pending schools linked to only the logged in SCDE
        this.onSearch();
      },
      error: (err) => {
        console.error('Failed to load profile', err);
        this.notification.showError('Failed to load SCDE profile.');
      }
    });
  }

   fetchInstitutions(status: string = 'Select') {
    if (!this.scdeSubCounty) return;
    this.http.get<any>('http://localhost:5215/api/sub-county-education/institutions', { params: { county: this.profileCounty, subCounty: this.scdeSubCounty, status } }).subscribe({
      next: (res) => {
        this.allInstitutions = res.schools || [];
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => this.notification.showError('Failed to fetch schools.')
    });
  }

  onSearch() {
    this.fetchInstitutions(this.filter.status);
  }

  // --- Download Logic ---
  downloadData(format: 'csv' | 'excel') {
    if (this.institutions.length === 0) {
      this.notification.showError('No data to download.');
      return;
    }
    this.showDownloadModal = false;

    if (format === 'csv') {
      const headers = ['ID', 'Cert No', 'Name', 'Sub County', 'Status', 'Assigned To', 'Date'];
      const csvData = this.institutions.map(i => [
        i.institutionId || 'N/A', i.certificateNumber || 'N/A', i.institutionName || 'N/A',
        i.subCounty || 'N/A', i.status || 'N/A', i.supervisorId || 'N/A', i.createdAt || 'N/A'
      ]);
      const csvContent = [headers.join(','), ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      this.triggerDownload(blob, `Institutions_SubCounty.csv`);
    } else {
      let html = '<table><thead><tr><th>ID</th><th>Cert No</th><th>Name</th><th>Sub County</th><th>Status</th><th>Assigned To</th><th>Date</th></tr></thead><tbody>';
      this.institutions.forEach(i => {
        html += `<tr><td>${i.institutionId}</td><td>${i.certificateNumber}</td><td>${i.institutionName}</td><td>${i.subCounty}</td><td>${i.status}</td><td>${i.supervisorId}</td><td>${i.createdAt}</td></tr>`;
      });
      html += '</tbody></table>';
      const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
      this.triggerDownload(blob, `Institutions_SubCounty.xls`);
    }
    this.notification.showSuccess(`Downloaded as ${format.toUpperCase()}`);
  }

  private triggerDownload(blob: Blob, filename: string) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  // --- Assign SCQASO Logic ---
  openAssignSCQASOModal(inst: any) {
    this.selectedInstitution = inst;
    this.selectedSCQASO = '';
    this.showAssignScqasoModal = true;

    // Fetch SCQASOs specific to this SCDE's subcounty
    this.http.get<any[]>('http://localhost:5215/api/sub-county-education/scqasos').subscribe({
      next: (res) => this.scqasoList = res,
      error: (err) => this.notification.showError('Failed to load SCQASOs')
    });
  }

    submitSCQASOAssignment() {
    if (!this.selectedSCQASO) {
      this.notification.showError('Please select an SCQASO.');
      return;
    }

    const payload = { assigneeId: Number(this.selectedSCQASO) };

    // Changes status to "Assigned SCQASO" and assigns a SCQASO
    this.http.post(`http://localhost:5215/api/sub-county-education/institutions/${this.selectedInstitution.institutionId}/assign-scqaso`, payload).subscribe({
      next: () => {
        this.notification.showSuccess('Assigned to SCQASO successfully.');
        this.onSearch();
        this.showAssignScqasoModal = false;
      },
      error: (err) => this.notification.showError(typeof err.error === 'string' ? err.error : 'Failed to assign to SCQASO.')
    });
  }

  // --- View Logic ---
  openViewModal(inst: any) {
    this.selectedInstitution = inst;
    this.activeViewTab = inst.status === 'SCQASO Recommended' ? 'reports' : 'form';
    this.inspection = null;
    this.review = null;
    this.viewData = null;
    this.canDecide = false;
    this.showingRejectionForm = false;
    this.rejectionReason = '';
    this.showViewModal = true;

    this.http.get<any>(`http://localhost:5215/api/sub-county-education/institutions/${inst.institutionId}`).subscribe({
      next: (detail) => {
        if (!this.showViewModal || this.selectedInstitution?.institutionId !== inst.institutionId) return;
        this.inspection = detail.inspection;
        this.review = detail.review;
        this.canDecide = detail.canReview && detail.status === 'SCQASO Recommended' && !!detail.inspection;
        this.viewData = detail.school;
        this.cdr.detectChanges();
      },
      error: (err) => this.notification.showError('Failed to fetch details')
    });
  }

  closeModals() {
    if (this.deciding) return;
    this.showAssignModal = false;
    this.showAssignScqasoModal = false;
    this.showViewModal = false;
  }
  openInspectionReport() {
    if (!this.inspection || !this.selectedInstitution) return;
    const url = `http://localhost:5215/api/sub-county-education/institutions/${this.selectedInstitution.institutionId}/inspection-report/${this.inspection.commentId}`;
    const tab = window.open('about:blank', '_blank');
    if (!tab) {
      this.notification.showError('Allow pop-ups to view the inspection report.');
      return;
    }
    tab.opener = null;
    this.http.get(url, { responseType: 'blob' }).subscribe({
      next: (file) => {
        const objectUrl = URL.createObjectURL(file);
        tab.location.replace(objectUrl);
        setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
      },
      error: () => {
        tab.close();
        this.notification.showError('Failed to open the inspection report.');
      }
    });
  }

  submitDecision(isApproved: boolean) {
    if (!this.canDecide || this.deciding || !this.selectedInstitution) return;
    const rejectionReason = this.rejectionReason.trim();
    if (!isApproved && !rejectionReason) {
      this.notification.showError('Enter a reason for rejecting the inspection.');
      return;
    }

    this.deciding = true;
    this.http.post(`http://localhost:5215/api/sub-county-education/reports`, { institutionId: this.selectedInstitution.institutionId, isApproved, rejectionReason }).subscribe({
      next: () => {
        this.deciding = false;
        this.selectedInstitution.status = isApproved ? 'Approved' : 'Rejected';
        this.notification.showSuccess(isApproved ? 'Institution approved.' : 'Institution rejected.');
        this.closeModals();
        this.onSearch();
      },
      error: (err) => {
        this.deciding = false;
        this.notification.showError(typeof err.error === 'string' ? err.error : 'Failed to save the decision.');
        this.cdr.detectChanges();
      }
    });
  }
}
