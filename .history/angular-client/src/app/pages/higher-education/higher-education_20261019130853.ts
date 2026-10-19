import { Component } from '@angular/core';

@Component({
  selector: 'app-higher-education',
  imports: [],
  templateUrl: './higher-education.html',
  styleUrl: './higher-education.css',
})
export class HigherEducation {
  //basic information to be changed to fit this form
  formData = {
    // Section 1
    fullName: '',
    gender: '',
    isActive: true,
    // Section 2
    emailId: '',
    county: '',
    receiveSms: false,
    // Section 3
    username: '',
    role: '',
    isSuperAdmin: false
  };

  onSubmit() {
    console.log(this.formData);
  }
}
