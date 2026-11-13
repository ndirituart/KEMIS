import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-learners-institution',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './learners-institution.html',
  styleUrl: './learners-institution.css'
})
export class LearnersInstitution implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  // --- Filter Data ---
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  genders = ['All', 'Male', 'Female'];
  grades = ['All', 'PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
  counties = ['All', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kwale', 'Siaya', 'Nyeri'];
  subCounties = ['All', 'Embakasi East', 'Westlands', 'Kibra', 'Kinango', 'Bondo', 'Nyeri Town'];

  // --- Filter Model ---
  filter = {
    institutionLevel: 'Junior School',
    gender: 'All',
    grade: 'All',
    fromDate: '',
    toDate: '',
    county: 'All',
    subCounty: 'All'
  };

  tableSearch = '';

  // --- Live Data ---
  allLearners: any[] = [];
  learners: any[] = [];
  institutionId: number = 18; // Default fallback

  ngOnInit() {
    // Get the institutionId of the logged-in HOI
    const storedId = localStorage.getItem('institutionId');
    if (storedId) {
      this.institutionId = parseInt(storedId, 10);
    }

    this.fetchLearners();
  }

  fetchLearners() {
    // Fetch all active learners for this specific institution
    this.http.get<any[]>(`http://localhost:5215/api/learners/institution/${this.institutionId}`).subscribe({
      next: (res) => {
        this.allLearners = res;
        this.learners = [...this.allLearners];
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to load learners', err)
    });
  }

  onSearch() {
    let filtered = this.allLearners;

    if (this.filter.gender !== 'All') {
      filtered = filtered.filter(l => l.gender === this.filter.gender);
    }

    if (this.filter.grade !== 'All') {
      filtered = filtered.filter(l => l.grade === this.filter.grade);
    }

    if (this.filter.county !== 'All') {
      filtered = filtered.filter(l => l.countyOfBirth === this.filter.county);
    }

    if (this.filter.subCounty !== 'All') {
      filtered = filtered.filter(l => l.subCountyOfBirth === this.filter.subCounty);
    }

    this.learners = filtered;
    this.cdr.detectChanges();
  }

  onDownload() {
    console.log('Downloading data...');
  }
}
