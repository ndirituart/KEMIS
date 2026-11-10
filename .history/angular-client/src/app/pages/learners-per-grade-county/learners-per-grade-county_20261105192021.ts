import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering


@Component({
  selector: 'app-learners-per-grade-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './learners-per-grade-county.html',
  styleUrl: './learners-per-grade-county.css'
})
export class LearnersPerGradeCounty {
  
  // --- Filter Data ---
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
  counties = ['Vihiga', 'Nairobi', 'Mombasa', 'Kisumu'];
  subCounties = ['All', 'Hamisi', 'Vihiga', 'Emuhaya', 'Sabatia'];
  institutions = ['All', 'Chavavo Secondary School', 'Canicius Secondary', 'Madira Girls'];
  grades = ['All', 'Form 1', 'Form 2', 'Form 3', 'Form 4'];

  filter = {
    institutionLevel: 'All',
    fromDate: '',
    toDate: '',
  county: 'Nairobi',
    subCounty: 'All',
    institution: 'All',
    grade: 'All'
  };

  tableSearch = '';

  // --- Hardcoded Table Data ---
  learners = [];

  onSearch() {
    console.log('Searching with filters:', this.filter);
  }

  onDownload() {
    console.log('Downloading data...');
  }
}