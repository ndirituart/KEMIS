import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service'; //pop up notifications


@Component({
  selector: 'app-institutions-registered-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe ],
  templateUrl: './institutions-registered-sub-county.html',
  styleUrl: './institutions-registered-sub-county.css',
})
export class InstitutionsRegisteredSubCounty implements OnInit {
  private http = inject(HttpClient);
  //  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  // Filter Options
  institutionLevels = ['Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  county = ['Nairobi'];
  subCounty = ["Embakasi Sub County",];

  // Filter Model
  filter = {
    institutionLevel: 'Junior School',
    fromDate: '',
    toDate: '',
    county: 'Nairobi',
    subCounty: 'All'
  };

  // Live Table Data
  institutions: any[] = [];
  tableSearch = '';

  ngOnInit() {
    this.fetchApprovedInstitutions();
  }

  fetchApprovedInstitutions() {
    // Fetch where county = Nairobi and status = approved
    this.http.get<any>(`http://localhost:5215/api/sub-county-education/institutions?subCounty=${this.filter.county}&status=approved`).subscribe({
      next: (res) => {
        this.institutions = res.schools || [];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to fetch institutions', err)
    });
  }

  onSearch() {
    // The backend only accepts 'county' and 'status' for now.
    // For advanced filters (level, subCounty, dates), you can filter the existing array here.
    let filtered = this.institutions;

    if (this.filter.subCounty !== 'All') {
      filtered = filtered.filter(i => i.subCounty === this.filter.subCounty);
    }

    if (this.filter.institutionLevel) {
      filtered = filtered.filter(i => i.institutionLevel === this.filter.institutionLevel);
    }

    this.institutions = filtered;
    this.cdr.detectChanges();
  }

  onDownload() {
    console.log('Downloading data...');
  }
}
