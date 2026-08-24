import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//TODO: Create Form Components to carry out registration and submission to .NET
// import { ClassificationFormComponent } from './components/classification-form/classification-form.component';
// import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
// import { ClassificationData, RegistrationDetails } from './models/registration.model';
import { LearnerService } from './services/learner.service';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CommonModule, ClassificationFormComponent, RegistrationFormComponent],
  templateUrl: './app.html'
})
export class AppComponent {
  private learnerService = inject(LearnerService);

  currentStep: 'classification' | 'registration' = 'classification';
  isSubmitting = false;

  selectedClassification: ClassificationData = {
    category: '',
    subCategory: '',
    subSubCategory: ''
  };

  handleClassificationProceed(data: ClassificationData): void {
    this.selectedClassification = data;
    this.currentStep = 'registration';
  }

  handleBackToClassification(): void {
    this.currentStep = 'classification';
  }

  handleFinalSubmit(details: Partial<RegistrationDetails>): void {
    this.isSubmitting = true;

    this.learnerService.registerLearner(this.selectedClassification, details).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        alert('Successfully registered and saved to PostgreSQL!');
        console.log('.NET Response:', response);
      },
      error: (error) => {
        this.isSubmitting = false;
        console.error('API Error:', error);
        alert('Failed to connect to backend. Make sure your .NET API is running.');
      }
    });
  }
}