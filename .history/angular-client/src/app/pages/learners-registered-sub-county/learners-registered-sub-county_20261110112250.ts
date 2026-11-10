import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-learners-registered-sub-county',
  standalone: true, // Added this to ensure it compiles as standalone
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './learners-registered-sub-county.html',
  styleUrl: './learners-registered-sub-county.css',
})
export class LearnersRegisteredSubCounty {

  // --- Filter Options ---
  institutionLevels = ['All', 'Primary', 'Junior', 'Senior', 'Foundational', 'Intermediate', 'Pre-Vocational', 'Vocational'];
  counties = ['Nairobi']; //default for now
  subCounty= [
        "Dagoretti North Sub County",
        "Dagoretti South Sub County ",
        "Embakasi Central Sub Count",
        "Embakasi East Sub County",
        "Embakasi North Sub County ",
        "Embakasi South Sub County",
        "Embakasi West Sub County",
        "Kamukunji Sub County",
        "Kasarani Sub County ",
        "Kibra Sub County ",
        "Lang'ata Sub County ",
        "Makadara Sub County",
        "Mathare Sub County ",
        "Roysambu Sub County ",
        "Ruaraka Sub County ",
        "Starehe Sub County ",
        "Westlands Sub County "
  ]; // Added this for the dropdown
  genders = ['All', 'Male', 'Female'];
  grades = ['All', 'PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  // --- Filter Model ---
  filter = {
    institutionLevel: 'All',
    county: 'Nairobi',
    subCounty: 'All', // Added this to fix the error
    gender: 'All',
    grade: 'All',
    fromDate: '',
    toDate: ''
  };

  tableSearch = '';

  // --- Hardcoded Table Data ---
  learners: any[] = [];

  // Methods are now INSIDE the class
  onSearch() {
    console.log('Searching with filters:', this.filter);
  }

  onDownload() {
    console.log('Downloading data...');
  }
}
