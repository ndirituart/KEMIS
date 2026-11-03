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
  subCounty: string[] = [];
  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // All the 47 counties and respective subCounties
    
    //1. Baringo
    if (this.dashboardData.county === 'Baringo') {
      this.subCounty = [
        "Baringo central",
        "Baringo north",
        "Baringo south",
        "Eldama ravine",
        "Mogotio",
        "Tiaty"
      ];
    }
    //2. Bomet
    else if (this.dashboardData.county === 'Bomet') {
      this.subCounty = [
        "Bomet central",
        "Bomet east",
        "Chepalungu",
        "Konoin",
        "Sotik"
      ];
    }
    //3. Bungoma
    else if (this.dashboardData.county === 'Bungoma') {
      this.subCounty = [
        
      ]
    }
   //4. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //5. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //6. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //7. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //8. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //9. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //10.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //11.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //12.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //13.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //14. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //15. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}