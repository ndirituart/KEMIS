import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-education',
  imports: [],
  templateUrl: './basic-education.html',
  styleUrl: './basic-education.css',
})
export class BasicEducation {
  //temporary data to be changed to fit this form:
  formData = {
    // Section 1
    fullName: '',
    gender: '',
    isActive: true,
    // Section 2
    email: '',
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
