import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-education',
  imports: [FormsModule],
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
    certificateValid: true, //default MUST have a valid registration certificate
    certificatePdf: Image,
    certificateNumber: '',
    totalLearners: '',


    //Section 2: Coordinates
    latitude: '',
    longitude: '',

    // Section 3: Other Details
    accomodationType: '',
    schoolCategory: '',

    //4. Section 4: T
  };

  // County and nested sub-county options.
  dropdown = [
    {
      region: 'Delhi',
      destinations: ['Connaught Place', 'Chandni Chowk', 'Dilli Haat'],
    },
    {
      region: 'HK',
      destinations: ['Cheung Chau Island', 'Lamma Island', 'Clearwater Bay', 'Lantau Island'],
    },
    {
      region: 'California',
      destinations: ['Los Angeles', 'Berkeley', 'Irvine'],
    },
  ];

  onSubmit() {
    console.log(this.formData);
  }
}
