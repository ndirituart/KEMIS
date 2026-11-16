import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';

@Component({
  selector: 'app-institutions-registered-sub-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './institutions-registered-sub-county.html',
  styleUrl: './institutions-registered-sub-county.css',
})
export class InstitutionsRegisteredSubCounty implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private notification = inject(NotificationService);

  // Filter Options
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  county = ['Nairobi'];
  subCounty: string[] = []; // Will be populated from the logged-in SCDE profile

  // Filter Model
  filter = {
    institutionLevel: 'All',
    fromDate: '',
    toDate: '',
    county: 'Nairobi',
    subCounty: 'Loading...' // Default state
  };

  // Live Table Data
  allInstitutions: any[] = [];
  institutions: any[] = [];
  tableSearch = '';

  // Modals State
  showDownloadModal = false;
  showSearchModal = false;

  ngOnInit() {
    this.loadScdeProfileAndSchools();
  }

  loadScdeProfileAndSchools() {
    // 1. First, fetch the SCDE Profile to get their exact subcounty
    this.http.get<any>('http://localhost:5215/api/sub-county-education/profile').subscribe({
      next: (profile) => {
        this.filter.subCounty = profile.subCounty;
        this.subCounty = [profile.subCounty];
        
        // 2. Now fetch the schools for that specific subcounty
        this.fetchApprovedInstitutions(profile.subCounty);
      },
      error: (err) => {
        console.error('Failed to load profile', err);
        // Fallback for testing
        this.filter.subCounty = 'Embakasi East Sub County';
        this.subCounty = ['Embakasi East Sub County'];
        this.fetchApprovedInstitutions('Embakasi East Sub County');
      }
    });
  }

  fetchApprovedInstitutions(subCountyName: string) {
    // Fetch schools where subCounty == SCDE's subCounty and status == approved
    this.http.get<any>(`http://localhost:5215/api/county-education/institutions?county=Nairobi&status=approved`).subscribe({
      next: (res) => {
        // Filter the schools locally to match the SCDE's subcounty
        const schools = res.schools || [];
        this.allInstitutions = schools.filter((s: any) => s.subCounty === subCountyName);
        this.institutions = [...this.allInstitutions];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch institutions', err)
    });
  }

  // --- Filtering & Search ---
  onApplyFilters() {
    let filtered = this.allInstitutions;

    if (this.filter.institutionLevel !== 'All') {
      filtered = filtered.filter(i => i.institutionLevel === this.filter.institutionLevel);
    }

    if (this.filter.fromDate) {
      filtered = filtered.filter(i => new Date(i.createdAt) >= new Date(this.filter.fromDate));
    }

    if (this.filter.toDate) {
      filtered = filtered.filter(i => new Date(i.createdAt) <= new Date(this.filter.toDate));
    }

    this.institutions = filtered;
    this.showSearchModal = false;
    this.notification.showSuccess('Filters applied successfully.');
    this.cdr.detectChanges();
  }

  // --- Download Logic ---
  downloadData(format: 'csv' | 'excel') {
    if (this.institutions.length === 0) {
      this.notification.showError('No data to download.');
      return;
    }

    this.showDownloadModal = false;

    if (format === 'csv') {
      // Generate CSV
      const headers = ['Institution ID', 'Certificate Number', 'Institution Name', 'Type', 'Sub County', 'Level', 'Created At'];
      const csvData = this.institutions.map(i => [
        i.institutionId, i.certificateNumber || 'N/A', i.institutionName, 
        i.institutionType, i.subCounty, i.institutionLevel, i.createdAt
      ]);

      const csvContent = [
        headers.join(','),
        ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      this.triggerDownload(blob, `Institutions_${this.filter.subCounty}.csv`);
      
    } else {
      // For Excel, we generate an HTML table and download as .xls
      // (A simple way to do it without external libraries)
      let html = '<table><thead><tr><th>ID</th><th>Cert No</th><th>Name</th><th>Type</th><th>Sub County</th><th>Level</th><th>Date</th></tr></thead><tbody>';
      this.institutions.forEach(i => {
        html += `<tr><td>${i.institutionId}</td><td>${i.certificateNumber}</td><td>${i.institutionName}</td><td>${i.institutionType}</td><td>${i.subCounty}</td><td>${i.institutionLevel}</td><td>${i.createdAt}</td></tr>`;
      });
      html += '</tbody></table>';
      
      const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
      this.triggerDownload(blob, `Institutions_${this.filter.subCounty}.xls`);
    }

    this.notification.showSuccess(`Downloaded as ${format.toUpperCase()}`);
  }

  private triggerDownload(blob: Blob, filename: string) {
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}