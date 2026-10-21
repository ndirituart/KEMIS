import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Needed for *ngFor

@Component({
  selector: 'app-basic-education',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-education.html',
  styleUrl: './basic-education.css',
})
export class BasicEducation {

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
    certificatePdf: null, // Changed from Image to null
    certificateNumber: '',
    totalLearners: '',

    //Section 2: Coordinates
    latitude: '',
    longitude: '',

    // Section 3: Other Details
    accomodationType: '',
    schoolCategory: '',

    //4. Section 4: Terms & Conditions
    isActive: true,
  };

  // 1. Dropdown Data
  applicationTypes = [
    {
      applicationType: 'Regular School',
      institutionLevels: ['Pre-Primary', 'Primary', 'Secondary', 'High School'],
    },
    {
      applicationType: 'Regular School with Special Unit',
      institutionLevels: ['Pre-Primary', 'Primary', 'Secondary', 'High School'],
    },
    {
      applicationType: 'Special School',
      institutionLevels: ['Pre-Primary', 'Primary', 'Secondary', 'High School'],
    },
    {
      applicationType: 'Integrated School',
      institutionLevels: ['Pre-Primary', 'Primary', 'Secondary', 'High School'],
    },
  ];

  // This holds the levels for the selected application type
  availableInstitutionLevels: string[] = [];

  // 2. The logic to handle the dependency
  onApplicationTypeChange() {
    // Find the selected type in the array
    const selected = this.applicationTypes.find(
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
  countiesData = [
    {
      county: "Baringo",
      subCounties: ["Baringo central", "Baringo north",
            "Baringo south",
            "Eldama ravine",
            "Mogotio",
            "Tiaty"]
    },

  ];

  availableSubCounties: string[] = [];

  onCountyChange() {
    const selected = this.countiesData.find(c => c.county === this.formData.county);
    if (selected) {
      this.availableSubCounties = selected.subCounties;
      this.formData.subCounty = '';
    } else {
      this.availableSubCounties = [];
      this.formData.subCounty = '';
    }
  }

  onSubmit() {
    console.log(this.formData);
  }
}
