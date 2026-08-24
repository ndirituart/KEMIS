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
  templateUrl: 'index.html'
})
export class AppComponent {
  private learnerService = inject(LearnerService);

  currentStep: 'classification' | 'registration' = 'classification';
  isSubmitting = false;

  selectedClassification: {
    category: string;
    subCategory: string;
    subSubCategory: string;
  } | null = null;

  handleClassificationSubmit(classification: {
    category: string;
    subCategory: string;
    subSubCategory: string;
  }): void {
    this.selectedClassification = classification;
    this.currentStep = 'registration';
  }


  // To be improved on because this only handles classification
  handleFinalSubmit(details: { fullName?: string; email?: string; specialty?: string }): void {
    if (!this.selectedClassification) {
      console.error('Classification data is missing.');
      return;
    }
  }
}