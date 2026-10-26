import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head-of-institution',
  imports: [CommonModule],
  templateUrl: './head-of-institution.html',
  styleUrl: './head-of-institution.css',
})
export class HeadOfInstitution {

  // Hardcoded for now will be replaced with dynamic data to fetch from APIs
  schoolData = {
    name: 'JONTE SCHOOL',
    role: 'HOI',
    activeLearners: 2,
    inactiveLearners: 0,
    newAdmissions: 2,
    totalTransfers: 1,
    transfers: {
      released: 1,
      pending: 0,
      appeals: 0
    },
    gender: {
      male: 2,
      female: 0
    }
  };

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  logout() {
    //To logout and allow login
    this.router.navigate(['/login']);
  }
}
