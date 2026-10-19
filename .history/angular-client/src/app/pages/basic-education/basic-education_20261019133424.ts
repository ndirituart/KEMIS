import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
