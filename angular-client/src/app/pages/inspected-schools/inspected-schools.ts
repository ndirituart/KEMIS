import { Component, OnInit, input, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';

@Component({
  selector: 'app-inspected-schools',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './inspected-schools.html',
  styleUrl: './inspected-schools.css'
})
export class InspectedSchools implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private notification = inject(NotificationService);

  pending = input(false);

  // Filters
  institutionLevels = ['All', 'Primary School Education', 'Junior School', 'Senior School'];
  filter = {
    institutionLevel: 'All',
    fromDate: '',
    toDate: ''
  };

  tableSearch = '';
  
  // Data
  allSchools: any[] = [];
  schools: any[] = [];

  ngOnInit() {
    this.fetchSchools();
  }

  fetchSchools() {
    const endpoint = this.pending() ? 'pending-inspections' : 'inspected-schools';
    this.http.get<{ schools: any[] }>(`http://localhost:5215/api/sub-county-quality-assurance/${endpoint}`).subscribe({
      next: (res) => {
        this.allSchools = res.schools || [];
        this.schools = [...this.allSchools];
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to fetch SCQASO schools', err);
        this.notification.showError('Failed to fetch schools');
      }
    });
  }

  onSearch() {
    let filtered = this.allSchools;

    if (this.filter.institutionLevel !== 'All') {
      filtered = filtered.filter(s => s.institutionLevel === this.filter.institutionLevel);
    }

    if (this.filter.fromDate) {
      filtered = filtered.filter(s => new Date(s.createdAt) >= new Date(this.filter.fromDate));
    }

    if (this.filter.toDate) {
      filtered = filtered.filter(s => new Date(s.createdAt) <= new Date(this.filter.toDate));
    }

    this.schools = filtered;
    this.cdr.detectChanges();
  }

  onDownload() {
    if (this.schools.length === 0) {
      this.notification.showError('No data to download.');
      return;
    }

    const headers = ['S.No', 'Cert No', 'Institution Name', 'Phone', 'Type', 'Level', 'Created Date', 'Status', 'Constituency', 'Email'];
    const csvData = this.schools.map((s, index) => [
      index + 1,
      s.certificateNumber || 'N/A',
      s.institutionName,
      s.mobileNo || 'N/A',
      s.institutionType || 'N/A',
      s.institutionLevel || 'N/A',
      new Date(s.createdAt).toLocaleDateString(),
      s.status,
      s.constituency || 'N/A',
      s.emailId || 'N/A'
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = this.pending() ? 'Pending_Inspections.csv' : 'Inspected_Schools.csv';
    link.click();
  }
}