import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';

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
  private cdr = inject(ChangeDetectorRef);

  subCounties = ['All', "Embakasi East Sub County"];
  statusList = ['Select', 'Pending', 'Approved', 'Rejected', 'SCDE Recommended', 'Assigned SCDE', 'Assigned SCQASO', 'SCQASO Recommended'];

  filter = { onboardingType: 'New Onboarding', subCounty: 'All', status: 'Pending' };
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
  viewData: any = {}; // Initialized in the fetch method

  ngOnInit() {
    this.onSearch(); // Load default 'Pending' on start

    // 1. Load the profile FIRST to get the subcounty
    this.http.get<any>('http://localhost:5215/api/sub-county-education/profile').subscribe({
      next: (profile) => {
        this.scdeSubCounty = profile.subCounty;
        this.subCounties = [this.scdeSubCounty]; // Lock the dropdown to this SCDE's subcounty
        this.filter.subCounty = this.scdeSubCounty;

        // 2. Now fetch the schools dynamically
        this.onSearch();
      },
      error: (err) => {
        console.error('Failed to load profile', err);
        this.notification.showError('Failed to load SCDE profile.');
        // Fallback for testing if profile fails
        this.scdeSubCounty = 'Embakasi East Sub County';
        this.onSearch();
      }
    });
  }

  fetchInstitutions(status: string = 'Pending') {
    let paramStatus = status === 'Select' ? 'All' : status;

    // Using the dynamic endpoint to fetch only this SCDE's subcounty
    this.http.get<any>(`http://localhost:5215/api/sub-county-education/institutions?subCounty=Embakasi East Sub County&status=${paramStatus}`).subscribe({
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
    const payload = { assigneeId: this.selectedSCQASO };

    // This calls the generic Assign endpoint we updated earlier
    this.http.post(`http://localhost:5215/api/sub-county-education/institutions/${this.selectedInstitution.institutionId}/assign`, payload).subscribe({
      next: () => {
        this.notification.showSuccess('Assigned to SCQASO successfully.');
        this.onSearch();
        this.showAssignScqasoModal = false;
      },
      error: (err) => this.notification.showError('Failed to assign to SCQASO.')
    });
  }

  // --- View Logic ---
  openViewModal(inst: any) {
    this.selectedInstitution = inst;
    this.activeViewTab = 'form';
    this.showViewModal = true;

    this.http.get<any>(`http://localhost:5215/api/sub-county-education/institutions/${inst.institutionId}`).subscribe({
      next: (res) => {
        this.viewData = {
          institutionType: res.institutionType || 'N/A',
          institutionName: res.institutionName || 'N/A',
          headOfInstitution: res.headOfInstitution || 'N/A',
          email: res.emailId || 'N/A',
          mobileNo: res.mobileNo || 'N/A',
          onboardingDate: res.createdAt || 'N/A',
          institutionLevel: res.institutionLevel || 'N/A',
          certNo: res.certificateNumber || 'N/A',
          totalLearners: res.totalLearners || 0,
          county: res.county || 'N/A',
          subCounty: res.subCounty || 'N/A',
          constituency: res.constituency || 'N/A',
          schoolCategory: res.schoolCategory || 'N/A'
        };
        this.cdr.detectChanges();
      },
      error: (err) => this.notification.showError('Failed to fetch details')
    });
  }

  closeModals() {
    this.showAssignModal = false;
    this.showAssignScqasoModal = false;
    this.showViewModal = false;
  }
  recommendSchool() {

  //TODO: this.http.post(`.../recommend/${id}`, {}).subscribe(...)

    this.notification.showSuccess('School recommended to CDE successfully!');
    this.closeModals();
    this.fetchInstitutions(this.filter.status); // Refresh table
  }


  disapproveSchool() {
    // TODO: this.http.post(`.../disapprove/${id}`, {}).subscribe(...)

    this.notification.showSuccess('School disapproved successfully!');
    this.closeModals();
    this.fetchInstitutions(this.filter.status); // Refresh table
  }
}
