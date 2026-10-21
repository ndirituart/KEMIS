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
    // Section 1
    institutionName: '',
    institutionType: '',
    emailId: '',
    mobileNo: '',
    headOfInstitution: '',

    isActive: true,
    // Section 2
    
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
