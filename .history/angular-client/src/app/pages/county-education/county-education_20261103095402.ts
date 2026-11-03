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
        "Bumula",
        "Kabuchai",
        "Kanduyi",
        "Kimilil",
        "Mt Elgon",
        "Sirisia",
        "Tongaren",
        "Webuye east",
        "Webuye west"
      ]
    }
    //4. Busia
    else if (this.dashboardData.county === 'Busia') {
      this.subCounty = [
         "Budalangi",
        "Butula",
        "Funyula",
        "Nambele",
        "Teso North",
        "Teso South"
      ]
    }
    //5. 
    else if (this.dashboardData.county === 'Elgeyo-Marakwet') {
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
    //16. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //17. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //18. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //19.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //20. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //21. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //22. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //23. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //24. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //25. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //26. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //27. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //28. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //29. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //30.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //31.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //32. e
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //33. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //34. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //35. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //36. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //37. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
   //38. 
   else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //39.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //40. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //41. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //42.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //43.
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //44. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //45. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //46. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }
    //47. 
    else if (this.dashboardData.county === '') {
      this.subCounty = [
        
      ]
    }

}


  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}