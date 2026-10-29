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
    certificatePdf: null as File | null,
    certificateNumber: '',
    totalLearners: '',

    //Section 2: Coordinates
    latitude: '',
    longitude: '',

    // Section 3: Other Details
    accomodationType: '',


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
  countiesData = [
    {
      county: "Baringo",
      capital: "Kabarnet",
      code: 30,
      subCounty: [
        "Baringo central",
        "Baringo north",
        "Baringo south",
        "Eldama ravine",
        "Mogotio",
        "Tiaty"
      ]
    },
    {
      county: "Bomet",
      capital: "Bomet",
      code: 36,
      subCounty: [
        "Bomet central",
        "Bomet east",
        "Chepalungu",
        "Konoin",
        "Sotik"
      ]
    },
    {
      county: "Bungoma",
      capital: "Bungoma",
      code: 39,
      subCounty: [
        "Bumula",
        "Kabuchai",
        "Kanduyi",
        "Kimilil",
        "Mt Elgon",
        "Sirisia",
        "Tongaren",
        "Webuye east",
        "Webuye west"
      ]
    },
    {
      county: "Busia",
      capital: "Busia",
      code: 40,
      subCounty: [
        "Budalangi",
        "Butula",
        "Funyula",
        "Nambele",
        "Teso North",
        "Teso South"
      ]
    },
    {
      county: "Elgeyo-Marakwet",
      capital: "Iten",
      code: 28,
      subCounty: [
        "Keiyo north",
        "Keiyo south",
        "Marakwet east",
        "Marakwet west"
      ]
    },
    {
      county: "Embu",
      capital: "Embu",
      code: 14,
      subCounty: [
        "Manyatta",
        "Mbeere north",
        "Mbeere south",
        "Runyenjes"
      ]
    },
    {
      county: "Garissa",
      capital: "Garissa",
      code: 7,
      subCounty: [
        "Daadab",
        "Fafi",
        "Garissa",
        "Hulugho",
        "Ijara",
        "Lagdera balambala"
      ]
    },
    {
      county: "Homa Bay",
      capital: "Homa Bay",
      code: 43,
      subCounty: [
        "Homabay town",
        "Kabondo",
        "Karachwonyo",
        "Kasipul",
        "Mbita",
        "Ndhiwa",
        "Rangwe",
        "Suba"
      ]
    },
    {
      county: "Isiolo",
      capital: "Isiolo",
      code: 11,
      subCounty: [
        "Isiolo",
        "Garba tula",
        "Merit"
      ]
    },
    {
      county: "Kajiado",
      code: 34,
      subCounty: [
        "Isinya.",
        "Kajiado Central.",
        "Kajiado North.",
        "Loitokitok.",
        "Mashuuru."
      ]
    },
    {
      county: "Kakamega",
      capital: "Kakamega",
      code: 37,
      subCounty: [
        "Butere",
        "Kakamega central",
        "Kakamega east",
        "Kakamega north",
        "Kakamega south",
        "Khwisero",
        "Lugari",
        "Lukuyani",
        "Lurambi",
        "Matete",
        "Mumias",
        "Mutungu",
        "Navakholo"
      ]
    },
    {
      county: "Kericho",
      capital: "Kericho",
      code: 35,
      subCounty: [
        "Ainamoi",
        "Belgut",
        "Bureti",
        "Kipkelion east",
        "Kipkelion west",
        "Soin sigowet"
      ]
    },
    {
      county: "Kiambu",
      capital: "Kiambu",
      code: 22,
      subCounty: [
        "Gatundu north",
        "Gatundu south",
        "Githunguri",
        "Juja",
        "Kabete",
        "Kiambaa",
        "Kiambu",
        "Kikuyu",
        "Limuru",
        "Ruiru",
        "Thika town",
        "lari"
      ]
    },
    {
      county: "Kilifi",
      capital: "Kilifi",
      code: 3,
      subCounty: [
        "Genzw",
        "Kaloleni",
        "Kilifi north",
        "Kilifi south",
        "Magarini",
        "Malindi",
        "Rabai"
      ]
    },
    {
      county: "Kirinyaga",
      capital: "Kerugoya/Kutus",
      code: 20,
      subCounty: [
        "Kirinyaga central",
        "Kirinyaga east",
        "Kirinyaga west",
        "Mwea east",
        "Mwea west"
      ]
    },
    {
      county: "Kisii",
      capital: "Kisii",
      code: 45,
      subCounty: [

      ]
    },
    {
      county: "Kisumu",
      capital: "Kisumu",
      code: 42,
      subCounty: [
        "Kisumu central",
        "Kisumu east ",
        "Kisumu west",
        "Mohoroni",
        "Nyakach",
        "Nyando",
        "Seme"
      ]
    },
    {
      county: "Kitui",
      capital: "Kitui",
      code: 15,
      subCounty: [
        "Ikutha",
        "Katulani",
        "Kisasi",
        "Kitui central",
        "Kitui west ",
        "Lower yatta",
        "Matiyani",
        "Migwani",
        "Mutitu",
        "Mutomo",
        "Muumonikyusu",
        "Mwingi central",
        "Mwingi east",
        "Nzambani",
        "Tseikuru"
      ]
    },
    {
      county: "Kwale",
      capital: "Kwale",
      code: 2,
      subCounty: [
        "Kinango",
        "Lungalunga",
        "Msambweni",
        "Mutuga"
      ]
    },
    {
      county: "Laikipia",
      capital: "Rumuruti",
      code: 31,
      subCounty: [
        "Laikipia central",
        "Laikipia east",
        "Laikipia north",
        "Laikipia west ",
        "Nyahururu"
      ]
    },
    {
      county: "Lamu",
      capital: "Lamu",
      code: 5,
      subCounty: [
        "Lamu East",
        "Lamu West"
      ]
    },
    {
      county: "Machakos",
      capital: "Machakos",
      code: 16,
      subCounty: [
        "Kathiani",
        "Machakos town",
        "Masinga",
        "Matungulu",
        "Mavoko",
        "Mwala",
        "Yatta"
      ]
    },
    {
      county: "Makueni",
      capital: "Wote",
      code: 17,
      subCounty: [
        "Kaiti",
        "Kibwei west",
        "Kibwezi east",
        "Kilome",
        "Makueni",
        "Mbooni"
      ]
    },
    {
      county: "Mandera",
      capital: "Mandera",
      code: 9,
      subCounty: [
        "Banissa",
        "Lafey",
        "Mandera East",
        "Mandera North",
        "Mandera South",
        "Mandera West"
      ]
    },
    {
      county: "Marsabit",
      capital: "Marsabit",
      code: 10,
      subCounty: [
        "Laisamis",
        "Moyale",
        "North hor",
        "Saku"
      ]
    },
    {
      county: "Meru",
      capital: "Meru",
      code: 12,
      subCounty: [
        "Buuri",
        "Igembe central",
        "Igembe north",
        "Igembe south",
        "Imenti central",
        "Imenti north",
        "Imenti south",
        "Tigania east",
        "Tigania west"
      ]
    },
    {
      county: "Migori",
      capital: "Migori",
      code: 44,
      subCounty: [
        "Awendo",
        "Kuria east",
        "Kuria west",
        "Mabera",
        "Ntimaru",
        "Rongo",
        "Suna east",
        "Suna west",
        "Uriri"
      ]
    },
    {
      county: "Mombasa",
      capital: "Mombasa City",
      code: 1,
      subCounty: [
        "Changamwe",
        "Jomvu",
        "Kisauni",
        "Likoni",
        "Mvita",
        "Nyali"
      ]
    },
    {
      county: "Murang'a",
      capital: "Murang'a",
      code: 21,
      subCounty: [
        "Gatanga",
        "Kahuro",
        "Kandara",
        "Kangema",
        "Kigumo",
        "Kiharu",
        "Mathioya",
        "Murang’a south"
      ]
    },
    {
      county: "Nairobi",
      capital: "Nairobi City",
      code: 47,
      subCounty: [
        "Dagoretti North Sub County",
        "Dagoretti South Sub County ",
        "Embakasi Central Sub Count",
        "Embakasi East Sub County",
        "Embakasi North Sub County ",
        "Embakasi South Sub County",
        "Embakasi West Sub County",
        "Kamukunji Sub County",
        "Kasarani Sub County ",
        "Kibra Sub County ",
        "Lang'ata Sub County ",
        "Makadara Sub County",
        "Mathare Sub County ",
        "Roysambu Sub County ",
        "Ruaraka Sub County ",
        "Starehe Sub County ",
        "Westlands Sub County "
      ]
    },
    {
      county: "Nakuru",
      capital: "Nakuru",
      code: 32,
      subCounty: [
        "Bahati",
        "Gilgil",
        "Kuresoi north",
        "Kuresoi south",
        "Molo",
        "Naivasha",
        "Nakuru town east",
        "Nakuru town west",
        "Njoro",
        "Rongai",
        "Subukia"
      ]
    },
    {
      county: "Nandi",
      capital: "Kapsabet",
      code: 29,
      subCounty: [
        "Aldai",
        "Chesumei",
        "Emgwen",
        "Mosop",
        "Namdi hills",
        "Tindiret"
      ]
    },
    {
      county: "Narok",
      capital: "Narok",
      code: 33,
      subCounty: [
        "Narok east",
        "Narok north",
        "Narok south",
        "Narok west",
        "Transmara east",
        "Transmara west"
      ]
    },
    {
      county: "Nyamira",
      capital: "Nyamira",
      code: 46,
      subCounty: [
        "Borabu",
        "Manga",
        "Masaba north",
        "Nyamira north",
        "Nyamira south"
      ]
    },
    {
      county: "Nyandarua",
      capital: "Ol Kalou",
      code: 18,
      subCounty: [
        "Kinangop",
        "Kipipiri",
        "Ndaragwa",
        "Ol Kalou",
        "Ol joro orok"
      ]
    },
    {
      county: "Nyeri",
      capital: "Nyeri",
      code: 19,
      subCounty: [
        "Kieni east",
        "Kieni west",
        "Mathira east",
        "Mathira west",
        "Mkurweni",
        "Nyeri town",
        "Othaya",
        "Tetu"
      ]
    },
    {
      county: "Samburu",
      capital: "Maralal",
      code: 25,
      subCounty: [
        "Samburu east",
        "Samburu north",
        "Samburu west"
      ]
    },
    {
      county: "Siaya",
      capital: "Siaya",
      code: 41,
      subCounty: [
        "Alego usonga",
        "Bondo",
        "Gem",
        "Rarieda",
        "Ugenya",
        "Unguja"
      ]
    },
    {
      county: "Taita-Taveta",
      capital: "Voi",
      code: 6,
      subCounty: [
        "Mwatate",
        "Taveta",
        "Voi",
        "Wundanyi"
      ]
    },
    {
      county: "Tana River",
      capital: "Hola",
      code: 4,
      subCounty: [
        "Bura",
        "Galole",
        "Garsen"
      ]
    },
    {
      county: "Tharaka-Nithi",
      capital: "Chuka",
      code: 13,
      subCounty: [
        "Chuka",
        "Igambangobe",
        "Maara",
        "Muthambi",
        "Tharak north",
        "Tharaka south"
      ]
    },
    {
      county: "Trans-Nzoia",
      capital: "Kitale",
      code: 26,
      subCounty: [
        "Cherangany",
        "Endebess",
        "Kiminini",
        "Kwanza",
        "Saboti"
      ]
    },
    {
      county: "Turkana",
      capital: "Lodwar",
      code: 23,
      subCounty: [
        "Loima",
        "Turkana central",
        "Turkana east",
        "Turkana north",
        "Turkana south"
      ]
    },
    {
      county: "Uasin Gishu",
      capital: "Eldoret",
      code: 27,
      subCounty: [
        "Ainabkoi",
        "Kapseret",
        "Kesses",
        "Moiben",
        "Soy",
        "Turbo"
      ]
    },
    {
      county: "Nairobi",
      capital: "Nairobi",
      code: 38,
      subCounty: [
        "Embakasi East",
        "Hamisi",
        "Luanda",
        "Lower Savannah",
        "Nairobi"
      ]
    },
    {
      county: "Wajir",
      capital: "Wajir",
      code: 8,
      subCounty: [
        "Eldas",
        "Tarbaj",
        "Wajir East",
        "Wajir North",
        "Wajir South",
        "Wajir West"
      ]
    },
    {
      county: "West Pokot",
      capital: "Kapenguria",
      code: 24,
      subCounty: [
        "Central Pokot",
        "North Pokot",
        "Pokot South",
        "West Pokot"
      ]
    }
  ];

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
      this.formData.certificatePdf = file;
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
    if (!this.formData.certificatePdf) return 'Please upload the Registration Certificate (PDF).';
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

    // 3. Use FormData to handle File Uploads
    const formPayload = new FormData();

    // Append standard text fields
    formPayload.append('institutionName', this.formData.institutionName);
    formPayload.append('institutionType', this.formData.institutionType);
    formPayload.append('emailId', this.formData.emailId);
    formPayload.append('mobileNo', this.formData.mobileNo);
    formPayload.append('headOfInstitution', this.formData.headOfInstitution);
    // ... append the rest of your text fields ...
    formPayload.append('county', this.formData.county);
    formPayload.append('isActive', String(this.formData.isActive)); // Convert boolean to string

    // Append the File (if it exists)
    if (this.formData.certificatePdf) {
      formPayload.append('certificatePdf', this.formData.certificatePdf, this.formData.certificatePdf.name);//save the file name
    }

    // 4. Post the FormData (Do NOT set Content-Type headers manually)
    this.http.post<any>(`${this.apiUrl}/CreateNewSchool`, formPayload).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.notification.showSuccess('Registration successful! Await feedback...');
        // this.completeLogin(res); // Ensure this method exists
      },
      error: (err: any) => {
        this.isLoading = false;
        if (err.status === 500) {
          this.notification.showError(err.error || 'Server error occurred.');
        } else {
          this.notification.showError('Registration failed. Please check your details.');
        }
      },
    });
  }
}
