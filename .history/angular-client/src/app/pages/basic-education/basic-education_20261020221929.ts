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
    totalLearners: '',
    isActive: true,

    //Section 2: Coordinates
    latitude: '',
    longitude:''  
    // Section 3
    
  };

  onSubmit() {
    console.log(this.formData);
  }
}
