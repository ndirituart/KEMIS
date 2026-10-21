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
    longitude: '',
    
    // Section 3: Other Details
    accomodationType: '',
    schoolCategory: '',
    
  };

  //TODO: Implement County and nested SubCounty list array here:
  var dropdown = [
  {"region":"Delhi",
  "destinations":["Connaught Place","Chandni Chowk","Dilli Haat"],},
  {"region":"HK",
  "destinations":["Cheung Chau Island","Lamma Island","Clearwater Bay","Lantau Island"],},
  {"region":"California",
  "destinations":["Los Angeles", "Berkeley","Irvine"],},
]
var dropDRegion = document.querySelector('#dropDRegion');
var dropDDestination = document.querySelector('#dropDDestin');

var regions = dropdown.map(function(b){return b.region;});

function populateDropD(sourceArray,dropDId){
      dropD = document.getElementById(dropDId);
      for (var i=0; i<sourceArray.length; i++){
      var option = document.createElement('option');
      option.textContent = sourceArray[i];
      option.value = sourceArray[i];
      dropD.appendChild(option);
    }
}
populateDropD(regions,"dropDRegion");
dropDDestin.disabled = true;
dropDRegion.onchange = function(){ 
  dropDRegion.style.backgroundColor = "white";
  dropDDestin.disabled = false;  
  dropDDestin.focus();
  dropDDestin.innerHTML = null;
  if (dropDRegion.selectedIndex!=0){
    var chosen_region_index = dropDRegion.selectedIndex-1;
    var destinations = dropdown[chosen_region_index].destinations;
    populateDropD(destinations, "dropDDestin");  
  }
  else{
    var PickADest = document.createElement('option');
    PickADest.textContent = "Pick a destination!";
    PickADest.value = "Pick a destination!";
    dropDDestin.innerHTML = null;
    dropDDestin.appendChild(PickADest);
  }
}

  onSubmit() {
    console.log(this.formData);
  }
}
