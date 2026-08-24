import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
//to connect to .NET backend
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

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
                <option value="Junior School">Junior School</option>
                <option value="Foundational">Foundational</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Pre-Vocational">Pre-Vocational</option>
                <option value="Vocational">Vocational</option>
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
                <option value="Pre-Primary">Dwarf Cavendish</option>
                <option value="Primary">Grand Naine</option>
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
                <option value="Foundation">French Plantain</option>
                <option value="Intermediate">Horn Plantain</option>
                <option value="Pre-Vocational">False Horn Plantain</option>
                <option value="Vocational">Vocational</option>
              </select>
            </div>
          }

       <!-- Sub-sub options for Special Schools and Regular Schools with Special Unit BOTH-->
          @if ((form.value.category === 'Special School' && form.value.subCategory === 'Both') || form.value.category === 'Regular Schools with Special Unit') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">
                {{ form.value.category === 'Regular Schools with Special Unit' ? 'Regular Schools with Special Unit Options (Red Special School Specification)' : 'Red Special School Classification' }}
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

           <!-- Conditional Sub-Options: Regular with Special Unit -->
          @if (form.value.category === 'Regular with Special Unit') {
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 600; color: #334155; margin-bottom: 6px;">Integrated School Variety</label>
              <select formControlName="subCategory" style="width: 100%; padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; background-color: white;">
                <option value="">-- Select Regular with Special Unit Type --</option>
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

        <div style="margin-top: 16px; background-color: #e2e8f0; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px;">
          <strong>Form State:</strong> {{ form.value | json }}
        </div>
      }
    </div>
  `
})
export class App {
  fb = new FormBuilder();
  showForm = false;

  form = this.fb.group({
    category: ['', Validators.required],
    subCategory: ['', Validators.required]
  });

  // Reset the sub-category dropdown whenever the primary category changes
  onCategoryChange() {
    this.form.patchValue({ subCategory: '' });
  }

  onSubmit() {
    alert(`Selected Classification: ${this.form.value.category} -> ${this.form.value.subCategory}`);
  }
}

//TODO: Create the form for actual student details for admission
//TODO: registration of learners as per normal registration on KEMIS
//TODO: Connect to .NET for API calls to the open-source database

bootstrapApplication(App, {
  providers: [
    provideHttpClient() // Registers HttpClient globally
  ]
}).catch((err) => console.error(err));
