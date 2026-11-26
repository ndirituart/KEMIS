import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Needed for *ngFor
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../services/notifications.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => ({ standalone: true });
function BasicEducation_option_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r2.county);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r2.county);
} }
function BasicEducation_option_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r3);
} }
function BasicEducation_option_88_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r4.applicationType);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r4.applicationType);
} }
function BasicEducation_option_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r5);
} }
function BasicEducation_span_149_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 71);
} }
export class BasicEducation {
    constructor() {
        //  Dependency Injection MUST be at the class level
        this.notification = inject(NotificationService);
        this.router = inject(Router);
        this.http = inject(HttpClient);
        this.apiUrl = 'http://localhost:5215/api/county-education/institutions/all';
        this.isLoading = false;
        this.formData = {
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
            certificatePdfUrl: null,
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
        this.schoolApplicationTypes = [
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
        this.availableInstitutionLevels = [];
        // Replacing static counties with array for county and subscounty
        this.countiesData = [
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
                    "Isinya",
                    "Kajiado Central",
                    "Kajiado North",
                    "Loitokitok",
                    "Mashuuru"
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
                    'Etago',
                    'Gucha',
                    'Gucha South',
                    'Kenyenya',
                    'Kisii Central',
                    'Kisii South ',
                    'Kitutu Central',
                    'Marani',
                    'Masaba South',
                    'Nyamache',
                    'Sameta '
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
                    "Embakasi Sub County",
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
                county: 'Nairobi',
                capital: 'Mbale',
                code: 38,
                subCounty: []
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
        this.availableSubCounty = [];
    }
    // 2. The logic to handle the dependency
    onApplicationTypeChange() {
        // Find the selected type in the array
        const selected = this.schoolApplicationTypes.find((item) => item.applicationType === this.formData.applicationType);
        if (selected) {
            // Populate the second dropdown
            this.availableInstitutionLevels = selected.institutionLevels;
            // Reset the institution level so they don't submit an invalid old value
            this.formData.institutionLevel = '';
        }
        else {
            this.availableInstitutionLevels = [];
            this.formData.institutionLevel = '';
        }
    }
    onCountyChange() {
        const selected = this.countiesData.find(c => c.county === this.formData.county);
        if (selected) {
            this.availableSubCounty = selected.subCounty;
            this.formData.subCounty = '';
        }
        else {
            this.availableSubCounty = [];
            this.formData.subCounty = '';
        }
    }
    //To shrink PDF file size, we can use a library like pdf-lib or pdfkit before sending it to the server.
    onFileSelected(event) {
        const file = event.target.files[0];
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
            this.formData.certificatePdfUrl = file;
        }
    }
    //Validate data, prevents people from living valid entries as empty
    validate() {
        if (!this.formData.institutionName?.trim())
            return 'Institution Name is required.';
        if (!this.formData.emailId?.trim())
            return 'Email is required.';
        if (!this.formData.mobileNo?.trim())
            return 'Mobile Number is required.';
        if (!this.formData.county)
            return 'Please select a County.';
        if (!this.formData.subCounty)
            return 'Please select a Sub-County.';
        if (!this.formData.applicationType)
            return 'Please select an Application Type.';
        if (!this.formData.institutionLevel)
            return 'Please select an Institution Level.';
        if (!this.formData.certificatePdfUrl)
            return 'Please upload the Registration Certificate (PDF).';
        if (!this.formData.isActive)
            return 'You must accept the Terms & Conditions.';
        return null;
    }
    // ---School Registration Handler---
    onSubmit() {
        const error = this.validate();
        if (error) {
            this.notification.showError(error);
            return;
        }
        this.isLoading = true;
        this.notification.showLoading('Creating your school...');
        const formPayload = new FormData();
        // Text fields (Fallbacks added just in case)
        formPayload.append('institutionName', this.formData.institutionName || '');
        formPayload.append('institutionType', this.formData.institutionType || 'Mixed School');
        formPayload.append('emailId', this.formData.emailId || '');
        formPayload.append('mobileNo', this.formData.mobileNo || '');
        formPayload.append('headOfInstitution', this.formData.headOfInstitution || '');
        formPayload.append('postalAddressHoi', this.formData.postalAddressHoi || '');
        formPayload.append('county', this.formData.county || '');
        formPayload.append('subCounty', this.formData.subCounty || '');
        formPayload.append('constituency', this.formData.constituency || '');
        formPayload.append('postalAddressInstitution', this.formData.postalAddressInstitution || '');
        // THE CULPRITS: Application Type & Level
        formPayload.append('applicationType', this.formData.applicationType || 'Regular School');
        formPayload.append('institutionLevel', this.formData.institutionLevel || 'Primary');
        formPayload.append('schoolCategory', this.formData.schoolCategory || 'Public');
        formPayload.append('accomodationType', this.formData.accomodationType || 'Day');
        formPayload.append('certificateNumber', this.formData.certificateNumber || '');
        // Numbers and Booleans (Convert to string for FormData)
        formPayload.append('totalLearners', String(this.formData.totalLearners || 0));
        formPayload.append('certificateValid', String(this.formData.certificateValid));
        formPayload.append('isActive', String(this.formData.isActive));
        formPayload.append('latitude', this.formData.latitude || '');
        formPayload.append('longitude', this.formData.longitude || '');
        // The File
        if (this.formData.certificatePdfUrl) {
            formPayload.append('certificatePdfUrl', this.formData.certificatePdfUrl, this.formData.certificatePdfUrl.name);
        }
        this.http.post(`${this.apiUrl}/CreateNewSchool`, formPayload).subscribe({
            next: (res) => {
                this.isLoading = false;
                this.notification.showSuccess('Registration successful! Await approval.');
                // Save everything needed for the next screen
                localStorage.setItem('token', res.token);
                localStorage.setItem('institutionId', res.id);
                localStorage.setItem('role', res.role);
                // Navigate to the dashboard
                this.router.navigate(['/head-of-institution']);
            },
            error: (err) => {
                this.isLoading = false;
                console.error('Backend Error Details:', err.error);
                this.notification.showError('Registration failed. Please check your details.');
            },
        });
    }
    static { this.ɵfac = function BasicEducation_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BasicEducation)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BasicEducation, selectors: [["app-basic-education"]], decls: 151, vars: 30, consts: [["myForm", "ngForm"], [1, "kemis-form", 3, "ngSubmit"], [1, "kemis-form-wrapper"], [1, "text-center", "mb-4"], [1, "text-center", "mb-0"], [1, "mb-4", "p-3", "border", "rounded"], [1, "float-none", "w-auto", "px-2", "fs-5", "fw-bold", "text-primary"], [1, "row", "g-3"], [1, "col-md-6"], ["for", "institutionName", 1, "form-label", "fw-semibold"], ["type", "text", "id", "institutionName", "name", "institutionName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "institutionType", 1, "form-label", "fw-semibold"], ["id", "institutionType", "name", "institutionType", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "Boys School"], ["value", "Girls School"], ["value", "Mixed School"], ["for", "emailId", 1, "form-label", "fw-semibold"], ["type", "email", "id", "emailId", "name", "emailId", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "mobileNo", 1, "form-label", "fw-semibold"], ["type", "text", "id", "mobileNo", "name", "mobileNo", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "headOfInstitution", 1, "form-label", "fw-semibold"], ["type", "text", "id", "headOfInstitution", "name", "headOfInstitution", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "postalAddressHoi", 1, "form-label", "fw-semibold"], ["type", "text", "id", "postalAddressHoi", "name", "postalAddressHoi", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "county", 1, "form-label", "fw-semibold"], ["id", "county", "name", "county", "required", "", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "subCounty", 1, "form-label", "fw-semibold"], ["id", "subCounty", "name", "subCounty", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "constituency", 1, "form-label", "fw-semibold"], ["type", "text", "id", "constituency", "name", "constituency", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "postalAddressInstitution", 1, "form-label", "fw-semibold"], ["type", "text", "id", "postalAddressInstitution", "name", "postalAddressInstitution", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "latitude", 1, "form-label", "fw-semibold"], ["type", "text", "id", "latitude", "name", "latitude", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "longitude", 1, "form-label", "fw-semibold"], ["type", "text", "id", "longitude", "name", "longitude", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "applicationType", 1, "form-label", "fw-semibold"], ["id", "applicationType", "name", "applicationType", "required", "", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["for", "institutionLevel", 1, "form-label", "fw-semibold"], ["id", "institutionLevel", "name", "institutionLevel", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["for", "accomodationType", 1, "form-label", "fw-semibold"], ["id", "accomodationType", "name", "accomodationType", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Day"], ["value", "Boarding"], ["value", "Day & Boarding"], ["for", "schoolCategory", 1, "form-label", "fw-semibold"], ["id", "schoolCategory", "name", "schoolCategory", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "Private"], ["value", "Public"], ["value", "Refugee Camp-Based School"], ["for", "totalLearners", 1, "form-label", "fw-semibold"], ["type", "number", "id", "totalLearners", "name", "totalLearners", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "certificateNumber", 1, "form-label", "fw-semibold"], ["type", "text", "id", "certificateNumber", "name", "certificateNumber", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "col-12", "mt-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "certificateValid", "name", "certificateValid", 1, "form-check-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "certificateValid", 1, "form-check-label", "fw-semibold"], [1, "col-12"], [1, "upload"], ["for", "certificatePdf", 1, "upload__description"], ["type", "file", "id", "certificatePdf", "name", "certificatePdfUrl", "accept", "application/pdf", 1, "upload__input", 3, "change"], [1, "form-check"], ["type", "checkbox", "role", "switch", "id", "isActive", "name", "isActive", 1, "form-check-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "isActive", 1, "form-check-label", "fw-semibold"], [1, "d-grid", "gap-2", "mt-4"], ["type", "submit", 1, "submit-btn"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [3, "value"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "me-2"]], template: function BasicEducation_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 1, 0);
            i0.ɵɵlistener("ngSubmit", function BasicEducation_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(2, "div", 2)(3, "h1", 3);
            i0.ɵɵtext(4, "Basic Education Institution Onboarding Form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 4);
            i0.ɵɵtext(6, "Please fill in the details below to onboard your pre-primary, primary and secondary school.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "span");
            i0.ɵɵelementStart(8, "fieldset", 5)(9, "legend", 6);
            i0.ɵɵtext(10, "Section 1: Institution Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7)(12, "div", 8)(13, "label", 9);
            i0.ɵɵtext(14, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.institutionName, $event) || (ctx.formData.institutionName = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 8)(17, "label", 11);
            i0.ɵɵtext(18, "Institution Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.institutionType, $event) || (ctx.formData.institutionType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(20, "option", 13);
            i0.ɵɵtext(21, "Select Institution Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 14);
            i0.ɵɵtext(23, "Boy's School");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 15);
            i0.ɵɵtext(25, "Girl's School");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "option", 16);
            i0.ɵɵtext(27, "Mixed School");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div", 8)(29, "label", 17);
            i0.ɵɵtext(30, "Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.emailId, $event) || (ctx.formData.emailId = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "div", 8)(33, "label", 19);
            i0.ɵɵtext(34, "Mobile Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "input", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.mobileNo, $event) || (ctx.formData.mobileNo = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(36, "div", 8)(37, "label", 21);
            i0.ɵɵtext(38, "Head of Institution");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "input", 22);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.headOfInstitution, $event) || (ctx.formData.headOfInstitution = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 8)(41, "label", 23);
            i0.ɵɵtext(42, "Postal Address (HOI)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "input", 24);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.postalAddressHoi, $event) || (ctx.formData.postalAddressHoi = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(44, "fieldset", 5)(45, "legend", 6);
            i0.ɵɵtext(46, "Section 2: Location Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 7)(48, "div", 8)(49, "label", 25);
            i0.ɵɵtext(50, "County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "select", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_51_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.county, $event) || (ctx.formData.county = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function BasicEducation_Template_select_change_51_listener() { return ctx.onCountyChange(); });
            i0.ɵɵelementStart(52, "option", 13);
            i0.ɵɵtext(53, "Select County");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(54, BasicEducation_option_54_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 8)(56, "label", 28);
            i0.ɵɵtext(57, "Sub-County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "select", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_58_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.subCounty, $event) || (ctx.formData.subCounty = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(59, "option", 13);
            i0.ɵɵtext(60, "Select Sub-County");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(61, BasicEducation_option_61_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "div", 8)(63, "label", 30);
            i0.ɵɵtext(64, "Constituency");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "input", 31);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.constituency, $event) || (ctx.formData.constituency = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "div", 8)(67, "label", 32);
            i0.ɵɵtext(68, "Postal Address (Institution)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "input", 33);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_69_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.postalAddressInstitution, $event) || (ctx.formData.postalAddressInstitution = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "div", 8)(71, "label", 34);
            i0.ɵɵtext(72, "Latitude");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "input", 35);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_73_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.latitude, $event) || (ctx.formData.latitude = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "div", 8)(75, "label", 36);
            i0.ɵɵtext(76, "Longitude");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "input", 37);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_77_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.longitude, $event) || (ctx.formData.longitude = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(78, "fieldset", 5)(79, "legend", 6);
            i0.ɵɵtext(80, "Section 3: Application Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 7)(82, "div", 8)(83, "label", 38);
            i0.ɵɵtext(84, "Application Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "select", 39);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_85_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.applicationType, $event) || (ctx.formData.applicationType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵlistener("change", function BasicEducation_Template_select_change_85_listener() { return ctx.onApplicationTypeChange(); });
            i0.ɵɵelementStart(86, "option", 13);
            i0.ɵɵtext(87, "Select Application Type");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(88, BasicEducation_option_88_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(89, "div", 8)(90, "label", 40);
            i0.ɵɵtext(91, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "select", 41);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_92_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.institutionLevel, $event) || (ctx.formData.institutionLevel = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(93, "option", 13);
            i0.ɵɵtext(94, "Select Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(95, BasicEducation_option_95_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(96, "div", 8)(97, "label", 42);
            i0.ɵɵtext(98, "Accommodation Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "select", 43);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_99_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.accomodationType, $event) || (ctx.formData.accomodationType = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(100, "option", 13);
            i0.ɵɵtext(101, "Select Accommodation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "option", 44);
            i0.ɵɵtext(103, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "option", 45);
            i0.ɵɵtext(105, "Boarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "option", 46);
            i0.ɵɵtext(107, "Day & Boarding");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(108, "div", 8)(109, "label", 47);
            i0.ɵɵtext(110, "School Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "select", 48);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_select_ngModelChange_111_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.schoolCategory, $event) || (ctx.formData.schoolCategory = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(112, "option", 13);
            i0.ɵɵtext(113, "Select Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "option", 49);
            i0.ɵɵtext(115, "Private");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "option", 50);
            i0.ɵɵtext(117, "Public");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "option", 51);
            i0.ɵɵtext(119, "Refugee Camp-Based School");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(120, "div", 8)(121, "label", 52);
            i0.ɵɵtext(122, "Total Learners");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "input", 53);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_123_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.totalLearners, $event) || (ctx.formData.totalLearners = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(124, "div", 8)(125, "label", 54);
            i0.ɵɵtext(126, "Certificate Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "input", 55);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_127_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.certificateNumber, $event) || (ctx.formData.certificateNumber = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(128, "fieldset", 5)(129, "legend", 6);
            i0.ɵɵtext(130, "Section 4: Certificates & Terms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "div", 7)(132, "div", 56)(133, "div", 57)(134, "input", 58);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_134_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.certificateValid, $event) || (ctx.formData.certificateValid = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(135, "label", 59);
            i0.ɵɵtext(136, "Institution has a valid Registration Certificate");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(137, "div", 60)(138, "div", 61)(139, "label", 62);
            i0.ɵɵtext(140, " Upload Registration Certificate (PDF, Max 8MB) ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(141, "input", 63);
            i0.ɵɵlistener("change", function BasicEducation_Template_input_change_141_listener($event) { return ctx.onFileSelected($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(142, "div", 56)(143, "div", 64)(144, "input", 65);
            i0.ɵɵtwoWayListener("ngModelChange", function BasicEducation_Template_input_ngModelChange_144_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.formData.isActive, $event) || (ctx.formData.isActive = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "label", 66);
            i0.ɵɵtext(146, " I accept the Terms & Conditions and confirm all information is accurate. ");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(147, "div", 67)(148, "button", 68);
            i0.ɵɵtemplate(149, BasicEducation_span_149_Template, 1, 0, "span", 69);
            i0.ɵɵtext(150);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.institutionName);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.institutionType);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.emailId);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.mobileNo);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.headOfInstitution);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.postalAddressHoi);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.county);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.countiesData);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.subCounty);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.availableSubCounty);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.constituency);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.postalAddressInstitution);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.latitude);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.longitude);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.applicationType);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.schoolApplicationTypes);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.institutionLevel);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.availableInstitutionLevels);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.accomodationType);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.schoolCategory);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.totalLearners);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.certificateNumber);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.certificateValid);
            i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(28, _c0));
            i0.ɵɵadvance(10);
            i0.ɵɵtwoWayProperty("ngModel", ctx.formData.isActive);
            i0.ɵɵproperty("ngModelOptions", i0.ɵɵpureFunction0(29, _c0));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.isLoading);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.isLoading ? "Submitting..." : "Register School", " ");
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.NgModel, i1.NgForm, CommonModule, i2.NgForOf, i2.NgIf], styles: ["\r\n\r\n\r\n.kemis-form-wrapper[_ngcontent-%COMP%] {\r\n  max-width: 950px;\r\n  margin: 3rem auto;\r\n  padding: 3rem 4rem;\r\n  background: var(--kemis-white);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  border-top: 6px solid var(--kemis-primary);\r\n  \r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n}\r\n\r\n\r\n.kemis-form-wrapper[_ngcontent-%COMP%]   .text-center.mb-4[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \r\n.kemis-form-wrapper[_ngcontent-%COMP%]   .text-center.mb-4[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \r\n.kemis-form-wrapper[_ngcontent-%COMP%]   .text-center.mb-4[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  color: var(--kemis-dark-blue);\r\n  font-weight: 800;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n\r\n.kemis-form-wrapper[_ngcontent-%COMP%]   .text-center.mb-0[_ngcontent-%COMP%] {\r\n  color: var(--kemis-secondary);\r\n  font-size: 1.1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\r\n  background: var(--kemis-white);\r\n  border: 1px solid var(--kemis-border) !important;\r\n  border-radius: var(--border-radius);\r\n  padding: 2.5rem !important;\r\n  margin-bottom: 3rem !important;\r\n  box-shadow: var(--kemis-shadow);\r\n  position: relative;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-white);\r\n  background: var(--kemis-green); \r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 50px;\r\n  border: none;\r\n  box-shadow: var(--kemis-shadow);\r\n  margin-bottom: 0;\r\n  width: auto;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .row.g-3[_ngcontent-%COMP%] {\r\n  \r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%], \r\n.kemis-form[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem; \r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\r\n  color: var(--kemis-dark);\r\n  font-size: 0.95rem;\r\n  font-weight: 700 !important; \r\n  margin-bottom: 0.6rem !important; \r\n  display: block;\r\n  letter-spacing: 0.3px;\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3n+1)   .form-label[_ngcontent-%COMP%] { color: var(--kemis-dark-blue); }\r\n.kemis-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3n+2)   .form-label[_ngcontent-%COMP%] { color: var(--kemis-red); }\r\n.kemis-form[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3n+3)   .form-label[_ngcontent-%COMP%] { color: var(--kemis-green); }\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.kemis-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border: 2px solid var(--kemis-border);\r\n  border-radius: var(--border-radius);\r\n  padding: 0.85rem 1rem;\r\n  font-size: 0.95rem;\r\n  color: var(--kemis-black);\r\n  background-color: var(--kemis-light);\r\n  transition: all 0.2s ease;\r\n  width: 100%;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \r\n.kemis-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\r\n  border-color: var(--kemis-primary);\r\n  background-color: var(--kemis-white);\r\n  box-shadow: 0 0 0 0.25rem rgba(63, 190, 235, 0.25);\r\n  outline: none;\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: var(--kemis-secondary);\r\n  opacity: 0.7;\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  background-color: var(--kemis-primary-light);\r\n  color: var(--kemis-dark-blue);\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  \r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%231e40af' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 1rem center;\r\n  background-size: 16px 12px;\r\n  padding-right: 2.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .col-12.mt-3[_ngcontent-%COMP%] {\r\n  margin-top: 0 !important; \r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check.form-switch[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.5rem;\r\n  background: var(--kemis-white);\r\n  border: 2px dashed var(--kemis-border); \r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-color: var(--kemis-secondary);\r\n  width: 3em;\r\n  height: 1.5em;\r\n  margin-top: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\r\n  background-color: var(--kemis-warning);\r\n  border-color: var(--kemis-warning);\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\r\n  border-color: var(--kemis-warning);\r\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);\r\n  outline: none;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: var(--kemis-dark);\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%] {\r\n  background: var(--kemis-light);\r\n  border: 2px dashed var(--kemis-primary);\r\n  border-radius: var(--border-radius);\r\n  padding: 2rem;\r\n  text-align: center;\r\n  margin-bottom: 1.5rem;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .upload[_ngcontent-%COMP%]:hover {\r\n  background: var(--kemis-primary-light);\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .upload__description[_ngcontent-%COMP%] {\r\n  color: var(--kemis-dark-blue);\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n  display: block;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .upload__input[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 0.5rem;\r\n  background: var(--kemis-white);\r\n  border: 1px solid var(--kemis-border);\r\n  border-radius: var(--border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .upload__files[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  color: var(--kemis-green);\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]:last-of-type   .form-check[_ngcontent-%COMP%]:not(.form-switch) {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.75rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]:last-of-type   .form-check-input[_ngcontent-%COMP%] {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]:last-of-type   .form-check-input[_ngcontent-%COMP%]:checked {\r\n  background-color: var(--kemis-green);\r\n  border-color: var(--kemis-green);\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .d-grid.gap-2.mt-4[_ngcontent-%COMP%] {\r\n  margin-top: 2rem !important;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{\r\n  background: var(--kemis-dark-blue);\r\n  border: none;\r\n  border-radius: var(--border-radius);\r\n  font-weight: 800;\r\n  font-size: 1.2rem;\r\n  letter-spacing: 1px;\r\n  padding: 1.2rem 2rem;\r\n  color: var(--kemis-white);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  transition: all 0.25s ease;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .btn-primary.btn-lg[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, var(--kemis-blue) 0%, var(--kemis-red) 100%);\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 10px 20px rgba(220, 20, 60, 0.3); \r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 767.98px) {\r\n  .kemis-form-wrapper[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    padding: 2rem 1.5rem;\r\n  }\r\n\r\n  .kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\r\n    padding: 1.5rem !important;\r\n  }\r\n\r\n  .kemis-form[_ngcontent-%COMP%]   .form-check.form-switch[_ngcontent-%COMP%] {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .kemis-form[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 100%;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BasicEducation, [{
        type: Component,
        args: [{ selector: 'app-basic-education', standalone: true, imports: [FormsModule, CommonModule], template: "<form class=\"kemis-form\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n  <div class=\"kemis-form-wrapper\">\n    <h1 class=\"text-center mb-4\">Basic Education Institution Onboarding Form</h1>\n    <p class=\"text-center mb-0\">Please fill in the details below to onboard your pre-primary, primary and secondary school.</p>\n    <span></span>\n\n    <!-- ========================================== -->\n    <!-- SECTION 1: Institution Details             -->\n    <!-- ========================================== -->\n    <fieldset class=\"mb-4 p-3 border rounded\">\n      <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 1: Institution Details</legend>\n\n      <div class=\"row g-3\">\n        <div class=\"col-md-6\">\n          <label for=\"institutionName\" class=\"form-label fw-semibold\">Institution Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"institutionName\" name=\"institutionName\" [(ngModel)]=\"formData.institutionName\" required>\n          </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"institutionType\" class=\"form-label fw-semibold\">Institution Type</label>\n          <select class=\"form-select\" id=\"institutionType\" name=\"institutionType\" [(ngModel)]=\"formData.institutionType\" required>\n            <option value=\"\" disabled selected>Select Institution Type</option>\n            <option value=\"Boys School\">Boy's School</option>\n            <option value=\"Girls School\">Girl's School</option>\n            <option value=\"Mixed School\">Mixed School</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"emailId\" class=\"form-label fw-semibold\">Email Address</label>\n          <input type=\"email\" class=\"form-control\" id=\"emailId\" name=\"emailId\" [(ngModel)]=\"formData.emailId\" required>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"mobileNo\" class=\"form-label fw-semibold\">Mobile Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"mobileNo\" name=\"mobileNo\" [(ngModel)]=\"formData.mobileNo\" required>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"headOfInstitution\" class=\"form-label fw-semibold\">Head of Institution</label>\n          <input type=\"text\" class=\"form-control\" id=\"headOfInstitution\" name=\"headOfInstitution\" [(ngModel)]=\"formData.headOfInstitution\" required>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"postalAddressHoi\" class=\"form-label fw-semibold\">Postal Address (HOI)</label>\n          <input type=\"text\" class=\"form-control\" id=\"postalAddressHoi\" name=\"postalAddressHoi\" [(ngModel)]=\"formData.postalAddressHoi\">\n        </div>\n      </div>\n    </fieldset>\n\n    <!-- ========================================== -->\n    <!-- SECTION 2: Location Details                -->\n    <!-- ========================================== -->\n    <fieldset class=\"mb-4 p-3 border rounded\">\n      <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 2: Location Details</legend>\n\n      <div class=\"row g-3\">\n        <!-- County -->\n        <div class=\"col-md-6\">\n          <label for=\"county\" class=\"form-label fw-semibold\">County</label>\n          <select class=\"form-select\" id=\"county\" name=\"county\" [(ngModel)]=\"formData.county\" (change)=\"onCountyChange()\" required>\n            <option value=\"\" disabled selected>Select County</option>\n            <option *ngFor=\"let c of countiesData\" [value]=\"c.county\">{{ c.county }}</option>\n          </select>\n        </div>\n\n        <!-- Sub-County -->\n        <div class=\"col-md-6\">\n          <label for=\"subCounty\" class=\"form-label fw-semibold\">Sub-County</label>\n          <select class=\"form-select\" id=\"subCounty\" name=\"subCounty\" [(ngModel)]=\"formData.subCounty\" required>\n            <option value=\"\" disabled selected>Select Sub-County</option>\n            <option *ngFor=\"let sub of availableSubCounty\" [value]=\"sub\">{{ sub }}</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"constituency\" class=\"form-label fw-semibold\">Constituency</label>\n          <input type=\"text\" class=\"form-control\" id=\"constituency\" name=\"constituency\" [(ngModel)]=\"formData.constituency\">\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"postalAddressInstitution\" class=\"form-label fw-semibold\">Postal Address (Institution)</label>\n          <input type=\"text\" class=\"form-control\" id=\"postalAddressInstitution\" name=\"postalAddressInstitution\" [(ngModel)]=\"formData.postalAddressInstitution\">\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"latitude\" class=\"form-label fw-semibold\">Latitude</label>\n          <input type=\"text\" class=\"form-control\" id=\"latitude\" name=\"latitude\" [(ngModel)]=\"formData.latitude\">\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"longitude\" class=\"form-label fw-semibold\">Longitude</label>\n          <input type=\"text\" class=\"form-control\" id=\"longitude\" name=\"longitude\" [(ngModel)]=\"formData.longitude\">\n        </div>\n      </div>\n    </fieldset>\n\n    <!-- ========================================== -->\n    <!-- SECTION 3: Application Details             -->\n    <!-- ========================================== -->\n    <fieldset class=\"mb-4 p-3 border rounded\">\n      <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 3: Application Details</legend>\n\n      <div class=\"row g-3\">\n        <!-- Application Type -->\n        <div class=\"col-md-6\">\n          <label for=\"applicationType\" class=\"form-label fw-semibold\">Application Type</label>\n          <select class=\"form-select\" id=\"applicationType\" name=\"applicationType\" [(ngModel)]=\"formData.applicationType\" (change)=\"onApplicationTypeChange()\" required>\n            <option value=\"\" disabled selected>Select Application Type</option>\n            <option *ngFor=\"let type of schoolApplicationTypes\" [value]=\"type.applicationType\">{{ type.applicationType }}</option>\n          </select>\n        </div>\n\n        <!-- Institution Level -->\n        <div class=\"col-md-6\">\n          <label for=\"institutionLevel\" class=\"form-label fw-semibold\">Institution Level</label>\n          <select class=\"form-select\" id=\"institutionLevel\" name=\"institutionLevel\" [(ngModel)]=\"formData.institutionLevel\" required>\n            <option value=\"\" disabled selected>Select Institution Level</option>\n            <option *ngFor=\"let level of availableInstitutionLevels\" [value]=\"level\">{{ level }}</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"accomodationType\" class=\"form-label fw-semibold\">Accommodation Type</label>\n          <select class=\"form-select\" id=\"accomodationType\" name=\"accomodationType\" [(ngModel)]=\"formData.accomodationType\">\n            <option value=\"\" disabled selected>Select Accommodation</option>\n            <option value=\"Day\">Day</option>\n            <option value=\"Boarding\">Boarding</option>\n            <option value=\"Day & Boarding\">Day & Boarding</option>\n          </select>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"schoolCategory\" class=\"form-label fw-semibold\">School Category</label>\n          <select class=\"form-select\" id=\"schoolCategory\" name=\"schoolCategory\" [(ngModel)]=\"formData.schoolCategory\">\n            <option value=\"\" disabled selected>Select Category</option>\n            <option value=\"Private\">Private</option>\n            <option value=\"Public\">Public</option>\n            <option value=\"Refugee Camp-Based School\">Refugee Camp-Based School</option>\n          </select>\n        </div>\n\n\n\n        <div class=\"col-md-6\">\n          <label for=\"totalLearners\" class=\"form-label fw-semibold\">Total Learners</label>\n          <input type=\"number\" class=\"form-control\" id=\"totalLearners\" name=\"totalLearners\" [(ngModel)]=\"formData.totalLearners\" required>\n        </div>\n\n        <div class=\"col-md-6\">\n          <label for=\"certificateNumber\" class=\"form-label fw-semibold\">Certificate Number</label>\n          <input type=\"text\" class=\"form-control\" id=\"certificateNumber\" name=\"certificateNumber\" [(ngModel)]=\"formData.certificateNumber\">\n        </div>\n      </div>\n    </fieldset>\n\n    <!-- ========================================== -->\n    <!-- SECTION 4: Certificates & Terms            -->\n    <!-- ========================================== -->\n    <fieldset class=\"mb-4 p-3 border rounded\">\n      <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 4: Certificates & Terms</legend>\n\n      <div class=\"row g-3\">\n        <!-- Certificate Valid Switch -->\n        <div class=\"col-12 mt-3\">\n          <div class=\"form-check form-switch\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"certificateValid\" name=\"certificateValid\" [(ngModel)]=\"formData.certificateValid\" [ngModelOptions]=\"{standalone: true}\">\n            <label class=\"form-check-label fw-semibold\" for=\"certificateValid\">Institution has a valid Registration Certificate</label>\n          </div>\n        </div>\n\n        <!-- File Upload (No ngModel here, handled by (change)) -->\n        <div class=\"col-12\">\n          <div class=\"upload\">\n            <label class=\"upload__description\" for=\"certificatePdf\">\n              Upload Registration Certificate (PDF, Max 8MB)\n            </label>\n            <input type=\"file\"\n              id=\"certificatePdf\"\n              name=\"certificatePdfUrl\"\n              class=\"upload__input\"\n              accept=\"application/pdf\"\n              (change)=\"onFileSelected($event)\"\n            />\n          </div>\n        </div>\n\n        <!-- Terms and Conditions -->\n        <div class=\"col-12 mt-3\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"isActive\" name=\"isActive\" [(ngModel)]=\"formData.isActive\" [ngModelOptions]=\"{standalone: true}\">\n            <label class=\"form-check-label fw-semibold\" for=\"isActive\">\n              I accept the Terms & Conditions and confirm all information is accurate.\n            </label>\n          </div>\n        </div>\n      </div>\n    </fieldset>\n\n    <!-- Submit Button -->\n     <!--Removed the phrase [disabled]=\"!myForm.valid || isLoading\" because Angular's ngForm\n      will automatically prevent submission if the form is invalid because you have required on your inputs.-->\n    <div class=\"d-grid gap-2 mt-4\">\n      <button type=\"submit\" class=\"submit-btn\">\n        <span *ngIf=\"isLoading\" class=\"spinner-border spinner-border-sm me-2\" role=\"status\" aria-hidden=\"true\"></span>\n        {{ isLoading ? 'Submitting...' : 'Register School' }}\n      </button>\n    </div>\n\n  </div>\n  </form>\n\n", styles: ["/* ============================================\r\n   KEMIS FORM GLOBAL LAYOUT & TYPOGRAPHY\r\n   ============================================ */\r\n.kemis-form-wrapper {\r\n  max-width: 950px;\r\n  margin: 3rem auto;\r\n  padding: 3rem 4rem;\r\n  background: var(--kemis-white);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  border-top: 6px solid var(--kemis-primary);\r\n  /* Heading Font */\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n}\r\n\r\n/* Main Page Title */\r\n.kemis-form-wrapper .text-center.mb-4 h1,\r\n.kemis-form-wrapper .text-center.mb-4 h2,\r\n.kemis-form-wrapper .text-center.mb-4 h3 {\r\n  color: var(--kemis-dark-blue);\r\n  font-weight: 800;\r\n  letter-spacing: -0.5px;\r\n}\r\n\r\n/* Subtitle under main title */\r\n.kemis-form-wrapper .text-center.mb-0 {\r\n  color: var(--kemis-secondary);\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/* ============================================\r\n   FIELDSETS (Sections)\r\n   ============================================ */\r\n.kemis-form fieldset {\r\n  background: var(--kemis-white);\r\n  border: 1px solid var(--kemis-border) !important;\r\n  border-radius: var(--border-radius);\r\n  padding: 2.5rem !important;\r\n  margin-bottom: 3rem !important;\r\n  box-shadow: var(--kemis-shadow);\r\n  position: relative;\r\n}\r\n\r\n.kemis-form legend {\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-white);\r\n  background: var(--kemis-green); /* Changed to Green */\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 50px;\r\n  border: none;\r\n  box-shadow: var(--kemis-shadow);\r\n  margin-bottom: 0;\r\n  width: auto;\r\n}\r\n\r\n/* ============================================\r\n   FIXING THE SPACING (Labels vs Inputs)\r\n   ============================================ */\r\n.kemis-form .row.g-3 {\r\n  /* g-3 adds spacing, but we need to ensure rows have bottom margin */\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.kemis-form .col-md-6,\r\n.kemis-form .col-12 {\r\n  margin-bottom: 1.5rem; /* Forces space below every input block */\r\n}\r\n\r\n.kemis-form .form-label {\r\n  color: var(--kemis-dark);\r\n  font-size: 0.95rem;\r\n  font-weight: 700 !important; /* Force bold */\r\n  margin-bottom: 0.6rem !important; /* <--- FIXES THE GAP */\r\n  display: block;\r\n  letter-spacing: 0.3px;\r\n}\r\n\r\n/* Make labels colorful using nth-child (cycles red, blue, green) */\r\n.kemis-form .row > div:nth-child(3n+1) .form-label { color: var(--kemis-dark-blue); }\r\n.kemis-form .row > div:nth-child(3n+2) .form-label { color: var(--kemis-red); }\r\n.kemis-form .row > div:nth-child(3n+3) .form-label { color: var(--kemis-green); }\r\n\r\n/* ============================================\r\n   INPUTS & DROPDOWNS\r\n   ============================================ */\r\n.kemis-form .form-control,\r\n.kemis-form .form-select {\r\n  border: 2px solid var(--kemis-border);\r\n  border-radius: var(--border-radius);\r\n  padding: 0.85rem 1rem;\r\n  font-size: 0.95rem;\r\n  color: var(--kemis-black);\r\n  background-color: var(--kemis-light);\r\n  transition: all 0.2s ease;\r\n  width: 100%;\r\n}\r\n\r\n.kemis-form .form-control:focus,\r\n.kemis-form .form-select:focus {\r\n  border-color: var(--kemis-primary);\r\n  background-color: var(--kemis-white);\r\n  box-shadow: 0 0 0 0.25rem rgba(63, 190, 235, 0.25);\r\n  outline: none;\r\n}\r\n\r\n/* Placeholder */\r\n.kemis-form .form-control::placeholder {\r\n  color: var(--kemis-secondary);\r\n  opacity: 0.7;\r\n}\r\n\r\n/* Colorful Dropdowns */\r\n.kemis-form .form-select {\r\n  background-color: var(--kemis-primary-light);\r\n  color: var(--kemis-dark-blue);\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  /* Custom arrow in KEMIS blue */\r\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%231e40af' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 1rem center;\r\n  background-size: 16px 12px;\r\n  padding-right: 2.5rem;\r\n}\r\n\r\n/* ============================================\r\n   BOOLEAN SWITCHES (Toggles)\r\n   ============================================ */\r\n.kemis-form .col-12.mt-3 {\r\n  margin-top: 0 !important; /* Override inline class */\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.kemis-form .form-check.form-switch {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.5rem;\r\n  background: var(--kemis-white);\r\n  border: 2px dashed var(--kemis-border); /* Dashed border to separate it */\r\n  border-radius: var(--border-radius);\r\n}\r\n\r\n.kemis-form .form-check-input {\r\n  cursor: pointer;\r\n  border-color: var(--kemis-secondary);\r\n  width: 3em;\r\n  height: 1.5em;\r\n  margin-top: 0;\r\n  flex-shrink: 0;\r\n}\r\n\r\n/* Make the switch Yellow/Orange when checked */\r\n.kemis-form .form-check-input:checked {\r\n  background-color: var(--kemis-warning);\r\n  border-color: var(--kemis-warning);\r\n}\r\n\r\n.kemis-form .form-check-input:focus {\r\n  border-color: var(--kemis-warning);\r\n  box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25);\r\n  outline: none;\r\n}\r\n\r\n.kemis-form .form-check-label {\r\n  cursor: pointer;\r\n  color: var(--kemis-dark);\r\n  font-weight: 600;\r\n  font-size: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n/* ============================================\r\n   FILE UPLOAD\r\n   ============================================ */\r\n.kemis-form .upload {\r\n  background: var(--kemis-light);\r\n  border: 2px dashed var(--kemis-primary);\r\n  border-radius: var(--border-radius);\r\n  padding: 2rem;\r\n  text-align: center;\r\n  margin-bottom: 1.5rem;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.kemis-form .upload:hover {\r\n  background: var(--kemis-primary-light);\r\n}\r\n\r\n.kemis-form .upload__description {\r\n  color: var(--kemis-dark-blue);\r\n  font-weight: 600;\r\n  margin-bottom: 1rem;\r\n  display: block;\r\n}\r\n\r\n.kemis-form .upload__input {\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  padding: 0.5rem;\r\n  background: var(--kemis-white);\r\n  border: 1px solid var(--kemis-border);\r\n  border-radius: var(--border-radius);\r\n  cursor: pointer;\r\n}\r\n\r\n.kemis-form .upload__files {\r\n  margin-top: 1rem;\r\n  color: var(--kemis-green);\r\n  font-weight: 600;\r\n}\r\n\r\n/* ============================================\r\n   TERMS & CONDITIONS CHECKBOX\r\n   ============================================ */\r\n/* Specifically targets the last form-check in the form (Terms) */\r\n.kemis-form fieldset:last-of-type .form-check:not(.form-switch) {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.75rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.kemis-form fieldset:last-of-type .form-check-input {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  border-radius: 4px;\r\n}\r\n\r\n.kemis-form fieldset:last-of-type .form-check-input:checked {\r\n  background-color: var(--kemis-green);\r\n  border-color: var(--kemis-green);\r\n}\r\n\r\n/* ============================================\r\n   SUBMIT BUTTON\r\n   ============================================ */\r\n.kemis-form .d-grid.gap-2.mt-4 {\r\n  margin-top: 2rem !important;\r\n}\r\n\r\n.kemis-form .submit-btn{\r\n  background: var(--kemis-dark-blue);\r\n  border: none;\r\n  border-radius: var(--border-radius);\r\n  font-weight: 800;\r\n  font-size: 1.2rem;\r\n  letter-spacing: 1px;\r\n  padding: 1.2rem 2rem;\r\n  color: var(--kemis-white);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  transition: all 0.25s ease;\r\n  width: 100%;\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  display: block;\r\n}\r\n\r\n.kemis-form .btn-primary.btn-lg:hover {\r\n  background: linear-gradient(135deg, var(--kemis-blue) 0%, var(--kemis-red) 100%);\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 10px 20px rgba(220, 20, 60, 0.3); /* Red glow */\r\n}\r\n\r\n/* ============================================\r\n   RESPONSIVE ADJUSTMENTS\r\n   ============================================ */\r\n@media (max-width: 767.98px) {\r\n  .kemis-form-wrapper {\r\n    margin: 1rem;\r\n    padding: 2rem 1.5rem;\r\n  }\r\n\r\n  .kemis-form fieldset {\r\n    padding: 1.5rem !important;\r\n  }\r\n\r\n  .kemis-form .form-check.form-switch {\r\n    padding: 1rem;\r\n  }\r\n\r\n  .kemis-form .submit-btn{\r\n    width: 100%;\r\n    max-width: 100%;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BasicEducation, { className: "BasicEducation", filePath: "app/pages/basic-education/basic-education.ts", lineNumber: 19 }); })();
