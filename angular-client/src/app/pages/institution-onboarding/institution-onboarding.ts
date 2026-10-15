import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface InstitutionType {
  value: string;
  label: string;
  description: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-institution-onboarding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './institution-onboarding.html',
  styleUrls: ['./institution-onboarding.css']
})
export class InstitutionOnboardingComponent {
  selectedType: string | null = null;

  institutionTypes: InstitutionType[] = [
    {
      value: 'basic-education',
      label: 'Basic Education',
      description: 'Primary and Secondary Schools',
      icon: 'bi-mortarboard-fill',
      route: '/basic-education'
    },
    {
      value: 'tvet',
      label: 'TVET',
      description: 'Technical and Vocational Education',
      icon: 'bi-scissors',
      route: '/tvet'
    },
    {
      value: 'higher-education',
      label: 'Higher Education',
      description: 'Universities and Colleges',
      icon: 'bi-bank',
      route: '/higher-education'
    }
  ];

  constructor(private router: Router) {}

  proceed(): void {
    const selected = this.institutionTypes.find(t => t.value === this.selectedType);
    if (selected) {
      this.router.navigate([selected.route]);
    }
  }
}
