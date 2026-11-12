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
  institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Senior School'];
  counties = [ 'Nairobi',];
  subCounties = [
          'All',
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
          "Westlands Sub County "];
  institutions = ['All', "Nairobi Primary School",
"Star Academy",
"Dagoretti North Primary",
"Dagoretti North Junior",
"Dagoretti North Senior",
"Dagoretti South Primary",
"Dagoretti South Junior",
"Dagoretti South Senior",
"Embakasi Central Primary",
"Embakasi Central Junior",
"Embakasi Central Senior",
"Embakasi East Primary",
"Embakasi East Junior",
"Embakasi East Senior",
"Embakasi North Primary",
"Embakasi North Junior",
"Embakasi North Senior",
"Embakasi South Primary",
"Embakasi South Junior",
"Embakasi South Senior",
"Embakasi West Primary",
"Embakasi West Junior",
"Embakasi West Senior",
"Kamukunji Primary",
"Kamukunji Junior",
"Kamukunji Senior",
"Kasarani Primary",
"Kasarani Junior",
"Kasarani Senior",
"Kibra Primary",
"Kibra Junior",
"Kibra Senior",
"Lang'ata Primary",
"Lang'ata Junior",
"Lang'ata Senior",
"Makadara Primary",
"Makadara Junior",
"Makadara Senior",
"Mathare Primary",
"Mathare Junior",
"Mathare Senior",
"Roysambu Primary",
"Roysambu Junior",
"Roysambu Senior",
"Ruaraka Primary",
"Ruaraka Junior",
"Ruaraka Senior",
"Starehe Primary",
"Starehe Junior",
"Starehe Senior",
"Westlands Primary",
"Westlands Junior",
"Westlands Senior",];
  grades = ['All', 'PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  filter = {
    institutionLevel: 'All',
    fromDate: '',
    toDate: '',
    county: 'Nairobi',
    subCounty: ['All', ],
    institution: 'All',
    grade: 'All'
  };

  tableSearch = '';

  // --- Hardcoded Table Data ---
  learners = [];

   // { sNo: 1, uli: '1234567890', indexNo: '40401001001', firstName: 'John', middleName: 'Doe', lastName: 'Ouma', institution: 'CHAVAVO SECONDARY SCHOOL', grade: 'Form 3', gender: 'Male', sneStatus: 'NO', sneType: 'NA', age: 14, createdDate: '12-03-2026', createdBy: 'CHAVAVO SECONDARY SCHOOL', constituency: 'VIHIGA' },
    // { sNo: 2, uli: '2345678901', indexNo: '40401001002', firstName: 'Jane', middleName: 'Wanjiku', lastName: 'Njeri', institution: 'CANICIUS SECONDARY', grade: 'Form 4', gender: 'Male', sneStatus: 'NO', sneType: 'NA', age: 24, createdDate: '20-03-2026', createdBy: 'CANICIUS SECONDARY', constituency: 'HAMISI' },
    // { sNo: 3, uli: '3456789012', indexNo: '40401001003', firstName: 'Mary', middleName: 'Achieng', lastName: 'Omondi', institution: 'MADIRA GIRLS', grade: 'Form 4', gender: 'Female', sneStatus: 'NO', sneType: 'NA', age: 17, createdDate: '12-03-2026', createdBy: 'MADIRA GIRLS', constituency: 'VIHIGA' },
    // { sNo: 4, uli: '4567890123', indexNo: '40401001004', firstName: 'Peter', middleName: 'Kip', lastName: 'Rotich', institution: 'CHAVAVO SECONDARY SCHOOL', grade: 'Form 2', gender: 'Female', sneStatus: 'NO', sneType: 'NA', age: 17, createdDate: '10-03-2026', createdBy: 'CHAVAVO SECONDARY SCHOOL', constituency: 'VIHIGA' },
    // { sNo: 5, uli: '5678901234', indexNo: '40401001005', firstName: 'Paul', middleName: 'Maina', lastName: 'Kamau', institution: 'CANICIUS SECONDARY', grade: 'Form 1', gender: 'Male', sneStatus: 'YES', sneType: 'Physical', age: 15, createdDate: '15-03-2026', createdBy: 'CANICIUS SECONDARY', constituency: 'HAMISI' },
    // // Add more mock data here to fill the table if you want

  onSearch() {
    console.log('Searching with filters:', this.filter);
  }

  onDownload() {
    console.log('Downloading data...');
  }
}
