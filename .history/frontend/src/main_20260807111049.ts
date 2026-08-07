import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div style="padding: 24px; font-family: system-ui, -Regular School-system, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #1a202c; margin-bottom: 8px;">Welcome to KEMIS</h1>

      <p style="color: #4a5568; line-height: 1.6; margin-bottom: 24px;">
       Welcome to the Kenya Education Management Information System (KEMIS),
        your comprehensive platform for education data management.
        From early childhood development to university excellence,
        KEMIS provides the insights and tools necessary to drive
        informed decision-making and enhance learning outcomes across the nation. </p>

      <button
        type="button"
        (click)="showForm = !showForm"
        style="background-color: #2563eb; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; margin-bottom: 20px;">
        {{ showForm ? 'Close Form' : '+ Go To Your Institution' }}
      </button>

      @if (showForm) {
        <form [formGroup]="form" (ngSubmit)="onSubmit()" style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; background-color: #f8fafc;">

          <!-- Primary Selection Dropdown -->
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">
              Type of Institution
            </label>

            <select formControlName="category" (change)="onCategoryChange()" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
              <option value="">-- Select Option --</option>
              <option value="Regular School">Regular School</option>
              <option value="Integrated School">Integrated School</option>
              <option value="Special School">Special School</option>
              <option value="Regular with Special Unit">Regular with Special Unit</option>

            </select>
          </div>

          <!-- Conditional Sub-Options: Regular School -->
          @if (form.value.category === 'Regular School') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">Regular School Variety</label>
              <select formControlName="subCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Regular School Type --</option>
                <option value="Pre-Primary">Pre-Primary</option>
                <option value="Primary">Primary</option>
                <option value="Junior School">Junior School</option>
                <option value="Senior School">Senior School</option>
              </select>
            </div>
          }

          <!-- Conditional Sub-Options: Integrated School -->
          @if (form.value.category === 'Integrated School') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">Integrated School Variety</label>
              <select formControlName="subCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Integrated School Type --</option>
                <option value="Pre-Primary">Pre-Primary</option>
                <option value="Primary">Primary</option>
                <option value="Junior School">Red Integrated School</option>
              </select>
            </div>
          }

          <!-- Conditional Sub-Options: Special School -->
          @if (form.value.category === 'Special School') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">Special School  Type</label>
              <select formControlName="subCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Special School Type --</option>
                <option value="Age-Based">Age-Based </option>
                <option value="Stage-Based">Stage-Based</option>
                <option value="Both">Both</option>
              </select>
            </div>
          }
            <!-- Sub-sub options for Special Schools -->
          @if (form.value.category === 'Special School' && form.value.subCategory === 'Age-Based') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">Age-Based Classification</label>
              <select formControlName="subSubCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Option --</option>
                <option value="Pre-Primary">Pre-Primary</option>
                <option value="Primary">Primary</option>
                <option value="Junior School">Junior School</option>
              </select>
            </div>
          }

        <!-- Sub-sub options for Special Schools -->
          @if (form.value.category === 'Special School' && form.value.subCategory === 'Stage-Based') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">Stage-Based Classification</label>
              <select formControlName="subSubCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Option --</option>
                <option value="Foundation">Foundation</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Pre-Vocational">Pre-Vocational</option>
                <option value="Vocational">Vocational</option>
              </select>
            </div>
          }

       <!-- Sub-sub options for Special Schools and Regular Schools with Special Unit BOTH-->
          @if ((form.value.category === 'Special School' && form.value.subCategory === 'Both') || form.value.category === 'Regular Schools with Special Unit') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">
                {{ form.value.category === 'Regular Schools with Special Unit' ? 'Regular Schools with Special Unit Options (Both Specification)' : 'Both Classification' }}
              </label>
              <select formControlName="subSubCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Option --</option>
                <option value="Pre-Primary">Pre-Primary</option>
                <option value="Primary">Primary</option>
                <option value="Junior School">Junior School</option>
                <option value="Foundational">Foundational</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Pre-Vocational">Pre-Vocational</option>
                <option value="Vocational">Vocational</option>
              </select>
            </div>
          }


          

          <button
            type="submit"
            [disabled]="form.invalid"
            style="background-color: #16a34a; color: white; border: none; padding: 10px 18px; border-radius: 6px; cursor: pointer; font-weight: 600; opacity: 1;"
            [style.opacity]="form.invalid ? '0.5' : '1'">
            Proceed to Registration
          </button>
        </form>

        <!-- STEP 2: MULTI-SECTION REGISTRATION FORM -->
      @if (currentStep === 'registration') {
        <div style="border: 1px solid #e2e8f0; padding: 24px; border-radius: 8px; background-color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          
          <!-- Selected Classification Summary Badge -->
          <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 4px; margin-bottom: 24px;">
            <span style="font-size: 13px; color: #1e40af; font-weight: 600; display: block;">Selected Classification Path:</span>
            <strong style="color: #1e3a8a; font-size: 15px;">
              {{ selectedClassification.category }} &rsaquo; {{ selectedClassification.subCategory }} &rsaquo; {{ selectedClassification.subSubCategory }}
            </strong>
            <button (click)="backToStep1()" style="display: block; margin-top: 6px; background: none; border: none; color: #2563eb; cursor: pointer; font-size: 12px; padding: 0; text-decoration: underline;">
              &larr; Change Classification
            </button>
          </div>

          <h2 style="margin-top: 0; color: #0f172a; font-size: 20px;">Step 2: Learner Registration</h2>

          <form [formGroup]="step2Form" (ngSubmit)="onFinalSubmit()">
            
            <!-- Section 1: Learner Details -->
            <fieldset style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; margin-bottom: 20px;">
              <legend style="font-weight: 700; color: #334155; padding: 0 6px;">Section 1: Personal Details</legend>
              
              <div style="margin-bottom: 12px;">
                <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 4px;">Full Name</label>
                <input formControlName="fullName" type="text" placeholder="John Doe" style="width: 95%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px;">
              </div>

              <div>
                <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 4px;">Email Address</label>
                <input formControlName="email" type="email" placeholder="john@company.com" style="width: 95%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px;">
              </div>
            </fieldset>

            <!-- Section 2: Account Specifications -->
            <fieldset style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; margin-bottom: 24px;">
              <legend style="font-weight: 700; color: #334155; padding: 0 6px;">Section 2: Account Configurations</legend>
              
              <div style="margin-bottom: 12px;">
                <label style="display: block; font-size: 14px; font-weight: 600; margin-bottom: 4px;">Role Specialty</label>
                <input formControlName="specialty" type="text" placeholder="e.g. Lead Analyst" style="width: 95%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px;">
              </div>

              <div>
                <label style="display: flex; align-items: center; font-size: 14px; cursor: pointer;">
                  <input formControlName="termsAccepted" type="checkbox" style="margin-right: 8px;">
                  I verify that the classification specifications match registry records.
                </label>
              </div>
            </fieldset>

            <button
              type="submit"
              [disabled]="step2Form.invalid"
              style="background-color: #16a34a; color: white; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 15px;"
              [style.opacity]="step2Form.invalid ? '0.5' : '1'">
              Complete Registration
            </button>
          </form>
        </div>
      }
    
  

        <div style="margin-top: 16px; background-color: #e2e8f0; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
          <strong>Form State:</strong> {{ form.value | json }}
        </div>
      
}
  </div>
  `
})
export class App {
  fb = new FormBuilder();
  currentStep: 'classification' | 'registration' = 'classification';

  // 1. KEMIS Institution Classifications (Regular, Integrated, Special and Regular Schools with Special Unit) and their sub-options
  selectedClassification = {
    category: '',
    subCategory: '',
    subSubCategory: ''
  };

  // Scenario 1: Form Controls
  //•	User selects Regular School
    // The system should display the normal institutional levels only as: -
    // -	Pre-Primary
    // -	Primary
    // -	Junior School
    // -	Senior School
      // No SNE pathways should be displayed.
  
  step1Form = this.fb.group({
    category: ['', Validators.required],
    subCategory: ['', Validators.required],
    subSubCategory: ['', Validators.required]
  });

  // Scenario 2 Form Controls
//The institution should automatically follow the Both Pathways and display the levels as:
    // -	Pre-Primary
    // -	Primary
    // -	Junior School
    // -	Foundation
    // -	Intermediate
    // -	Pre-Vocational
    // -	Vocational
//The user should not choose a pathway manually. The system automatically assigns: Pathway = Both
  step2Form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    specialty: ['', Validators.required],
    termsAccepted: [false, Validators.requiredTrue]
  });

  onCategoryChange() {
    const selectedCategory = this.step1Form.value.category;
    if (selectedCategory === 'Candle') {
      this.step1Form.patchValue({
        subCategory: 'red_banana',
        subSubCategory: ''
      });
    } else {
      this.step1Form.patchValue({
        subCategory: '',
        subSubCategory: ''
      });
    }
  }

  onSubCategoryChange() {
    this.step1Form.patchValue({ subSubCategory: '' });
  }

  // Step 2 taking details for registration
  goToStep2() {
    if (this.step1Form.valid) {
      this.selectedClassification = {
        category: this.step1Form.value.category ?? '',
        subCategory: this.step1Form.value.subCategory ?? '',
        subSubCategory: this.step1Form.value.subSubCategory ?? ''
      };
      this.currentStep = 'registration';
    }
  }

  backToStep1() {
    this.currentStep = 'classification';
  }

  // Combine Step 1 + Step 2 data on final submit
  onFinalSubmit() {
    const finalPayload = {
      classification: this.selectedClassification,
      registrationDetails: this.step2Form.value
    };

    console.log('Final Payload Submitted:', finalPayload);
    alert(`Registration Complete!\n\nPayload: ${JSON.stringify(finalPayload, null, 2)}`);
  }
}

bootstrapApplication(App);