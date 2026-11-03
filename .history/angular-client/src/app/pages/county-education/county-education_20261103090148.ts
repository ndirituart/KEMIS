import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-county-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './county-education.html',
  styleUrl: './county-education.css'
})
export class CountyEducation implements OnInit {
  
  dashboardData = {
    county: 'Nairobi', // This will eventually come from the logged-in user
    role: 'CDE',
    stats: { approved: 0, rejected: 0, pending: 1, appeals: 0, totalLearners: 0 },
    approvalBreakdown: { approved: 0, pending: 1, rejected: 0 },
    categories: {
      regular: { count: 0, percentage: 0.0 },
      integrated: { count: 0, percentage: 0.0 },
      sne: { count: 0, percentage: 0.0 }
    }
  };

  // Dynamic arrays for dropdowns
  subCounties: string[] = [];
  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // All the 47 counties and respective subcounties
    
    if (this.dashboardData.county === 'Baringo') {
      this.subCounties = [
        "Baringo central",
        "Baringo north",
        "Baringo south",
        "Eldama ravine",
        "Mogotio",
        "Tiaty"
      ];
    }
    
    else if (this.dashboardData.county === 'Nairobi') {
      this.subCounties = [
        'Dagoretti North Sub County', 'Dagoretti South Sub County', 
        'Embakasi East Sub County', 'Embakasi North Sub County',
        'Embakasi South Sub County', 'Embakasi West Sub County',
        'Kamukunji Sub County', 'Kasarani Sub County', 
        'Kibra Sub County', 'Lang\'ata Sub County', 
        'Makadara Sub County', 'Roysambu Sub County', 
        'Ruaraka Sub County', 'Starehe Sub County', 'Westlands Sub County'
      ];
    }
    else if (this.dashboardData.county === 'Mombasa') {
      this.subCounties = [
        'Changamwe Sub County', 'Jomvu Sub County', 
        'Kisauni Sub County', 'Likoni Sub County', 
        'Mvita Sub County', 'Nyali Sub County'
      ];
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}