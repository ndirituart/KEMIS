import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-scqaso-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './scqaso-layout.html',
  styleUrl: './scqaso-layout.css',
})
export class ScqasoLayout implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);

    dashboardData = {
    countyName: 'Nairobi', 
    userRole: 'SCQASO'
  }

  selectedLevel = 'Primary School';
  selectedSubCounty = '';

  ngOnInit() {
    this.http.get<any>('http://localhost:5215/api/sub-county-quality-assurance/profile').subscribe({
      next: (profile) => {
        this.dashboardData.countyName = profile.county;
      },
      error: (err) => console.error(err)
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}