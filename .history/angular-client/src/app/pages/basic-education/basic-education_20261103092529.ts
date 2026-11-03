import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Needed for *ngFor
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../services/notifications.service';

@Component({
  selector: 'app-basic-education',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-education.html',
  styleUrl: './basic-education.css',
})




export class BasicEducation {

  //  Dependency Injection MUST be at the class level
  private readonly notification = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:5215/api/BasicEducation';

  isLoading = false;

  formData = {
    // Section 1: Institution Details
    institutionName: '',
    institutionType: '',
    emailId: '',
    mobileNo: '',
    headOfInstitution: '',
    postalAddressHoi: '',
    county: '',
    subCounty: '',
    constituency: '',
    postalAddressInstitution: '',
    applicationType: '',
    institutionLevel: '',
    certificateValid: true,
    certificatePdfUrl: null as File | null,
    certificateNumber: '',
    totalLearners: '',

    //Section 2: Coordinates
    latitude: '',
    longitude: '',

    // Section 3: Other Details
    accomodationType:  '',
    schoolCategory: '',


    //4. Section 4: Terms & Conditions
    isActive: true,

  };

  // 1. Dropdown Data
  schoolApplicationTypes = [
    {
      applicationType: 'Regular School',
      institutionLevels: ['Pre-Primary', 'Primary', 'Junior High', 'Senior High'],
    },
    {
      applicationType: 'Regular School with Special Unit',
      institutionLevels: ['Pre-Primary', 'Primary', 'Junior High', 'Senior High'],

    },
    {
      applicationType: 'Special School',
     institutionLevels: ['Pre-Primary', 'Primary', 'Junior High', 'Senior High'],
    },
    {
      applicationType: 'Integrated School',
     institutionLevels: ['Pre-Primary', 'Primary', 'Junior High', 'Senior High'],
    },
  ];

  // This holds the levels for the selected application type
  availableInstitutionLevels: string[] = [];


  // 2. The logic to handle the dependency
  onApplicationTypeChange() {
    // Find the selected type in the array
    const selected = this.schoolApplicationTypes.find(
      (item) => item.applicationType === this.formData.applicationType
    );

    if (selected) {
      // Populate the second dropdown
      this.availableInstitutionLevels = selected.institutionLevels;

      // Reset the institution level so they don't submit an invalid old value
      this.formData.institutionLevel = '';
    } else {
      this.availableInstitutionLevels = [];
      this.formData.institutionLevel = '';
    }
  }

  // Replacing static counties with array for county and subscounty
  
  availableSubCounty: string[] = [];

  onCountyChange() {
    const selected = this.countiesData.find(c => c.county === this.formData.county);
    if (selected) {
      this.availableSubCounty = selected.subCounty;
      this.formData.subCounty = '';
    } else {
      this.availableSubCounty = [];
      this.formData.subCounty = '';
    }
  }

    //To shrink PDF file size, we can use a library like pdf-lib or pdfkit before sending it to the server.
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      // Validate Type
      if (file.type !== 'application/pdf') {
        this.notification.showError('Only PDF files are allowed.');
        event.target.value = ''; // Clear the input
        return;
      }

      // Validate Size (8MB = 8 * 1024 * 1024 bytes)
      const maxSize = 8 * 1024 * 1024;
      if (file.size > maxSize) {
        this.notification.showError('File is too large. Maximum size is 8MB.');
        event.target.value = ''; // Clear the input
        return;
      }

      // Valid file, save it to the form data
      this.formData.certificatePdfUrl = file;
    }
  }

  //Validate data, prevents people from living valid entries as empty
  validate(): string | null {
    if (!this.formData.institutionName?.trim()) return 'Institution Name is required.';
    if (!this.formData.emailId?.trim()) return 'Email is required.';
    if (!this.formData.mobileNo?.trim()) return 'Mobile Number is required.';
    if (!this.formData.county) return 'Please select a County.';
    if (!this.formData.subCounty) return 'Please select a Sub-County.';
    if (!this.formData.applicationType) return 'Please select an Application Type.';
    if (!this.formData.institutionLevel) return 'Please select an Institution Level.';
    if (!this.formData.certificatePdfUrl) return 'Please upload the Registration Certificate (PDF).';
    if (!this.formData.isActive) return 'You must accept the Terms & Conditions.';
    return null;
  }

  // ---School Registration Handler---

  onSubmit(): void {
  const error = this.validate();
  if (error) {
    this.notification.showError(error);
    return;
  }

  this.isLoading = true;
  this.notification.showLoading('Creating your school...');

  const formPayload = new FormData();

  // Text fields (Fallbacks added just in case)
  formPayload.append('institutionName', this.formData.institutionName || '');
  formPayload.append('institutionType', this.formData.institutionType || 'Mixed School');
  formPayload.append('emailId', this.formData.emailId || '');
  formPayload.append('mobileNo', this.formData.mobileNo || '');
  formPayload.append('headOfInstitution', this.formData.headOfInstitution || '');
  formPayload.append('postalAddressHoi', this.formData.postalAddressHoi || '');
  formPayload.append('county', this.formData.county || '');
  formPayload.append('subCounty', this.formData.subCounty || '');
  formPayload.append('constituency', this.formData.constituency || '');
  formPayload.append('postalAddressInstitution', this.formData.postalAddressInstitution || '');

  // THE CULPRITS: Application Type & Level
  formPayload.append('applicationType', this.formData.applicationType || 'Regular School');
  formPayload.append('institutionLevel', this.formData.institutionLevel || 'Primary');

  formPayload.append('schoolCategory', this.formData.schoolCategory || 'Public');
  formPayload.append('accomodationType', this.formData.accomodationType || 'Day');
  formPayload.append('certificateNumber', this.formData.certificateNumber || '');

  // Numbers and Booleans (Convert to string for FormData)
  formPayload.append('totalLearners', String(this.formData.totalLearners || 0));
  formPayload.append('certificateValid', String(this.formData.certificateValid));
  formPayload.append('isActive', String(this.formData.isActive));

  formPayload.append('latitude', this.formData.latitude || '');
  formPayload.append('longitude', this.formData.longitude || '');

  // The File
  if (this.formData.certificatePdfUrl) {
    formPayload.append('certificatePdfUrl', this.formData.certificatePdfUrl, this.formData.certificatePdfUrl.name);
  }

   this.http.post<any>(`${this.apiUrl}/CreateNewSchool`, formPayload).subscribe({
    next: (res: any) => {
    this.isLoading = false;
    this.notification.showSuccess('Registration successful! Await approval.');

    // Save everything needed for the next screen
    localStorage.setItem('token', res.token);
    localStorage.setItem('institutionId', res.id);
    localStorage.setItem('role', res.role);

    // Navigate to the dashboard
    this.router.navigate(['/head-of-institution']);
  },
    error: (err: any) => {
      this.isLoading = false;
      console.error('Backend Error Details:', err.error);
      this.notification.showError('Registration failed. Please check your details.');
    },
  });
}
}
