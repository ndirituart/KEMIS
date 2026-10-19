import { Component } from '@angular/core';

@Component({
  selector: 'app-tvet',
  imports: [],
  templateUrl: './tvet.html',
  styleUrl: './tvet.css',
})
export class Tvet {
  //basic information to be changed to fit this form
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
