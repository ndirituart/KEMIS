import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; //for filtering

@Component({
  selector: 'app-learners-registered-county',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './learners-registered-county.html',
  styleUrl: './learners-registered-county.css'
})
export class LearnersRegisteredCountyComponent {
  
  // --- Filter Options ---
  institutionLevels = ['All', 'Primary', 'Junior', 'Senior', 'Foundational', 'Intermediate', 'Pre-Vocational', 'Vocational'];
  counties = 'Nairobi';
  genders = ['All', 'Male', 'Female'];
 grades = ['All', 'PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];


  // --- Filter Model ---
  filter = {
    institutionLevel: 'All',
    county: 'Vihiga',
    gender: 'All',
    grade: 'All',
    fromDate: '',
    toDate: ''
  };

  tableSearch = '';

  // --- Hardcoded Table Data (Matching your screenshots) ---
  learners = [
    { sNo: 1, uli: 'MiMu38125959', indexNo: '3856789022', firstName: 'Mike', middleName: 'Joho', lastName: 'Muhoro', institution: 'MBALE MUSLIM SENIOR', grade: 'Form 4', gender: 'Male', sneStatus: 'NO', sneType: 'NA', age: 19, createdDate: '13-03-2026', createdBy: 'MBALE MUSLIM SENIOR', constituency: 'VIHIGA' },
    { sNo: 2, uli: 'soka41469181', indexNo: '380000000', firstName: 'sophia', middleName: 'sophy', lastName: 'kams', institution: 'MBALE MUSLIM SENIOR', grade: 'Form 4', gender: 'Female', sneStatus: 'NO', sneType: 'NA', age: 18, createdDate: '14-03-2026', createdBy: 'MBALE MUSLIM SENIOR', constituency: 'VIHIGA' },
    // Add more mock data here if needed
  ];

  onSearch() {
    console.log('Searching with filters:', this.filter);
  }

  onDownload() {
    console.log('Downloading data...');
  }
}