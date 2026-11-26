import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CountyEducation_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 87);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", "assets/counties/" + ctx_r0.dashboardData.county.toLowerCase() + ".png", i0.ɵɵsanitizeUrl);
} }
function CountyEducation_option_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 88);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subCounty_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", subCounty_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", subCounty_r2, " ");
} }
export class CountyEducation {
    constructor() {
        this.http = inject(HttpClient);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        this.loggedInCounty = '';
        this.dashboardData = {
            county: 'Loading...',
            role: 'CDE',
            stats: { approved: 0, rejected: 0, pending: 0, appeals: 0, totalLearners: 0 },
            approvalBreakdown: { approved: 0, pending: 0, rejected: 0 },
            categories: {
                regular: { count: 0, percentage: 100.0 },
                integrated: { count: 0, percentage: 0.0 },
                sne: { count: 0, percentage: 0.0 }
            }
        };
        this.subCounty = [];
        this.selectedLevel = 'Primary School';
        this.selectedSubCounty = '';
    }
    ngOnInit() {
        this.loadDashboardData();
    }
    loadDashboardData() {
        // 1. Fetch Profile to get the CDE's County
        this.http.get('http://localhost:5215/api/county-education/profile').subscribe({
            next: (profile) => {
                this.dashboardData.county = profile.county;
                this.loggedInCounty = profile.county;
                // 2. Populate Sub-Counties based on the fetched County
                this.populateSubCounties(profile.county);
                // 3. Fetch Schools to calculate stats
                this.fetchSchools(profile.county);
            },
            //Fallback
            error: (err) => {
                console.error('Failed to load profile', err);
                this.dashboardData.county = 'County profile unavailable';
                this.cdr.detectChanges();
            }
        });
    }
    fetchSchools(countyName) {
        this.http.get('http://localhost:5215/api/county-education/institutions', { params: { county: countyName } }).subscribe({
            next: (res) => {
                const schools = res.schools || [];
                let approved = 0;
                let rejected = 0;
                let pending = 0;
                let totalLearners = 0;
                schools.forEach((school) => {
                    const status = school.status?.trim().toLowerCase();
                    if (status === 'approved')
                        approved++;
                    else if (status === 'rejected' || status === 'denied')
                        rejected++;
                    else if (status === 'pending' || status === 'scqaso recommended')
                        pending++;
                    totalLearners += (school.totalLearners || 0);
                });
                // Update UI
                this.dashboardData.stats = { approved, rejected, pending, appeals: 0, totalLearners };
                this.dashboardData.approvalBreakdown = { approved, pending, rejected };
                this.dashboardData.categories.regular = {
                    count: schools.length,
                    percentage: 100
                };
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Failed to fetch schools', err)
        });
    }
    // --- YOUR ORIGINAL SUB-COUNTY LOGIC ---
    populateSubCounties(countyName) {
        if (countyName === 'Baringo') {
            this.subCounty = ["Baringo central", "Baringo north", "Baringo south", "Eldama ravine", "Mogotio", "Tiaty"];
        }
        else if (countyName === 'Bomet') {
            this.subCounty = ["Bomet central", "Bomet east", "Chepalungu", "Konoin", "Sotik"];
        }
        else if (countyName === 'Bungoma') {
            this.subCounty = ["Bumula", "Kabuchai", "Kanduyi", "Kimilil", "Mt Elgon", "Sirisia", "Tongaren", "Webuye east", "Webuye west"];
        }
        else if (countyName === 'Busia') {
            this.subCounty = ["Budalangi", "Butula", "Funyula", "Nambele", "Teso North", "Teso South"];
        }
        else if (countyName === 'Elgeyo-Marakwet') {
            this.subCounty = ["Keiyo north", "Keiyo south", "Marakwet east", "Marakwet west"];
        }
        else if (countyName === 'Embu') {
            this.subCounty = ["Manyatta", "Mbeere north", "Mbeere south", "Runyenjes"];
        }
        else if (countyName === 'Garissa') {
            this.subCounty = ["Daadab", "Fafi", "Garissa", "Hulugho", "Ijara", "Lagdera balambala"];
        }
        else if (countyName === 'HomaBay') {
            this.subCounty = ["Homabay town", "Kabondo", "Karachwonyo", "Kasipul", "Mbita", "Ndhiwa", "Rangwe", "Suba"];
        }
        else if (countyName === 'Isiolo') {
            this.subCounty = ["Isiolo", "Garba tula", "Merit"];
        }
        else if (countyName === 'Kajiado') {
            this.subCounty = ["Isinya", "Kajiado Central", "Kajiado North", "Loitokitok", "Mashuuru"];
        }
        else if (countyName === 'Kakamega') {
            this.subCounty = ["Butere", "Kakamega central", "Kakamega east", "Kakamega north", "Kakamega south", "Khwisero", "Lugari", "Lukuyani", "Lurambi", "Matete", "Mumias", "Mutungu", "Navakholo"];
        }
        else if (countyName === 'Kericho') {
            this.subCounty = ["Ainamoi", "Belgut", "Bureti", "Kipkelion east", "Kipkelion west", "Soin sigowet"];
        }
        else if (countyName === 'Kiambu') {
            this.subCounty = ["Gatundu north", "Gatundu south", "Githunguri", "Juja", "Kabete", "Kiambaa", "Kiambu", "Kikuyu", "Limuru", "Ruiru", "Thika town", "lari"];
        }
        else if (countyName === 'Kilifi') {
            this.subCounty = ["Genzw", "Kaloleni", "Kilifi north", "Kilifi south", "Magarini", "Malindi", "Rabai"];
        }
        else if (countyName === 'Kirinyaga') {
            this.subCounty = ["Kirinyaga central", "Kirinyaga east", "Kirinyaga west", "Mwea east", "Mwea west"];
        }
        else if (countyName === 'Kisii') {
            this.subCounty = ['Etago', 'Gucha', 'Gucha South', 'Kenyenya', 'Kisii Central', 'Kisii South ', 'Kitutu Central', 'Marani', 'Masaba South', 'Nyamache', 'Sameta '];
        }
        else if (countyName === 'Kisumu') {
            this.subCounty = ["Kisumu central", "Kisumu east ", "Kisumu west", "Mohoroni", "Nyakach", "Nyando", "Seme"];
        }
        else if (countyName === 'Kitui') {
            this.subCounty = ["Ikutha", "Katulani", "Kisasi", "Kitui central", "Kitui west ", "Lower yatta", "Matiyani", "Migwani", "Mutitu", "Mutomo", "Muumonikyusu", "Mwingi central", "Mwingi east", "Nzambani", "Tseikuru"];
        }
        else if (countyName === 'Kwale') {
            this.subCounty = ["Kinango", "Lungalunga", "Msambweni", "Mutuga"];
        }
        else if (countyName === 'Laikipia') {
            this.subCounty = ["Laikipia central", "Laikipia east", "Laikipia north", "Laikipia west ", "Nyahururu"];
        }
        else if (countyName === 'Lamu') {
            this.subCounty = ["Lamu East", "Lamu West"];
        }
        else if (countyName === 'Machakos') {
            this.subCounty = ["Kathiani", "Machakos town", "Masinga", "Matungulu", "Mavoko", "Mwala", "Yatta"];
        }
        else if (countyName === 'Makueni') {
            this.subCounty = ["Kaiti", "Kibwei west", "Kibwezi east", "Kilome", "Makueni", "Mbooni"];
        }
        else if (countyName === 'Mandera') {
            this.subCounty = ["Banissa", "Lafey", "Mandera East", "Mandera North", "Mandera South", "Mandera West"];
        }
        else if (countyName === 'Marsabit') {
            this.subCounty = ["Laisamis", "Moyale", "North hor", "Saku"];
        }
        else if (countyName === 'Meru') {
            this.subCounty = ["Buuri", "Igembe central", "Igembe north", "Igembe south", "Imenti central", "Imenti north", "Imenti south", "Tigania east", "Tigania west"];
        }
        else if (countyName === 'Migori') {
            this.subCounty = ["Awendo", "Kuria east", "Kuria west", "Mabera", "Ntimaru", "Rongo", "Suna east", "Suna west", "Uriri"];
        }
        else if (countyName === 'Mombasa') {
            this.subCounty = ["Changamwe", "Jomvu", "Kisauni", "Likoni", "Mvita", "Nyali"];
        }
        else if (countyName === "Murang'a") {
            this.subCounty = ["Gatanga", "Kahuro", "Kandara", "Kangema", "Kigumo", "Kiharu", "Mathioya", "Murang’a south"];
        }
        else if (countyName === 'Nairobi') {
            this.subCounty = ["Dagoretti North Sub County", "Dagoretti South Sub County ", "Embakasi Central Sub Count", "Embakasi Sub County", "Embakasi North Sub County ", "Embakasi South Sub County", "Embakasi West Sub County", "Kamukunji Sub County", "Kasarani Sub County ", "Kibra Sub County ", "Lang'ata Sub County ", "Makadara Sub County", "Mathare Sub County ", "Roysambu Sub County ", "Ruaraka Sub County ", "Starehe Sub County ", "Westlands Sub County "];
        }
        else if (countyName === 'Nakuru') {
            this.subCounty = ["Bahati", "Gilgil", "Kuresoi north", "Kuresoi south", "Molo", "Naivasha", "Nakuru town east", "Nakuru town west", "Njoro", "Rongai", "Subukia"];
        }
        else if (countyName === 'Nandi') {
            this.subCounty = ["Aldai", "Chesumei", "Emgwen", "Mosop", "Namdi hills", "Tindiret"];
        }
        else if (countyName === 'Narok') {
            this.subCounty = ["Narok east", "Narok north", "Narok south", "Narok west", "Transmara east", "Transmara west"];
        }
        else if (countyName === 'Nyamira') {
            this.subCounty = ["Borabu", "Manga", "Masaba north", "Nyamira north", "Nyamira south"];
        }
        else if (countyName === 'Nyandarua') {
            this.subCounty = ["Kinangop", "Kipipiri", "Ndaragwa", "Ol Kalou", "Ol joro orok"];
        }
        else if (countyName === 'Nyeri') {
            this.subCounty = ["Kieni east", "Kieni west", "Mathira east", "Mathira west", "Mkurweni", "Nyeri town", "Othaya", "Tetu"];
        }
        else if (countyName === 'Samburu') {
            this.subCounty = ["Samburu east", "Samburu north", "Samburu west"];
        }
        else if (countyName === 'Siaya') {
            this.subCounty = ["Alego usonga", "Bondo", "Gem", "Rarieda", "Ugenya", "Unguja"];
        }
        else if (countyName === 'Taita Taveta') {
            this.subCounty = ["Mwatate", "Taveta", "Voi", "Wundanyi"];
        }
        else if (countyName === 'Tana River') {
            this.subCounty = ["Bura", "Galole", "Garsen"];
        }
        else if (countyName === 'Tharaka Nithi') {
            this.subCounty = [];
        }
        else if (countyName === 'Trans Nzoia') {
            this.subCounty = ["Cherangany", "Endebess", "Kiminini", "Kwanza", "Saboti"];
        }
        else if (countyName === 'Turkana') {
            this.subCounty = ["Loima", "Turkana central", "Turkana east", "Turkana north", "Turkana south"];
        }
        else if (countyName === 'Uasin Gishu') {
            this.subCounty = [];
        }
        else if (countyName === 'Wajir') {
            this.subCounty = ["Eldas", "Tarbaj", "Wajir East", "Wajir North", "Wajir South", "Wajir West"];
        }
        else if (countyName === 'West Pokot') {
            this.subCounty = ["Central Pokot", "North Pokot", "Pokot South", "West Pokot"];
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = function CountyEducation_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CountyEducation)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CountyEducation, selectors: [["app-county-education"]], decls: 249, vars: 27, consts: [[1, "dashboard-wrapper"], [1, "sidebar"], [1, "sidebar-logo"], ["alt", "County Logo", "onerror", "this.src='assets/counties/default.png'", 3, "src", 4, "ngIf"], [1, "sidebar-nav"], [1, "nav-item", "active"], [1, "bi", "bi-grid-fill"], [1, "nav-item"], [1, "bi", "bi-search"], [1, "nav-parent", "has-children"], [1, "bi", "bi-clipboard-check"], [1, "nav-children"], ["href", "/institution-registered-county"], ["href", "/learners-registered-county"], ["href", "/learners-per-grade-county"], ["href", "/pending-institution-county"], ["href", "/institutions-onboarded-per-cluster"], ["href", "/learners-registered-per-cluster"], [1, "bi", "bi-pencil-square"], ["href", "#"], [1, "nav-item", "text-danger", "mt-4"], [1, "bi", "bi-book"], [1, "main-content"], [1, "top-header"], [1, "header-left"], [1, "back-btn"], [1, "bi", "bi-chevron-left"], [1, "header-right"], [1, "form-select", "header-select", 3, "ngModelChange", "ngModel"], ["value", "Junior School"], ["value", "Primary School"], ["value", "Secondary School"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "user-profile", "ms-3"], [1, "avatar"], [1, "bi", "bi-person-fill"], [1, "user-info"], [1, "name"], [1, "role"], [1, "logout-btn", 3, "click"], [1, "bi", "bi-power"], [1, "content-body"], [1, "page-title"], [1, "stats-grid-5"], [1, "stat-card"], [1, "stat-icon"], [1, "bi", "bi-building-check"], [1, "stat-number"], [1, "stat-label"], [1, "stat-subtext"], [1, "bi", "bi-building-x"], [1, "bi", "bi-file-earmark-text"], [1, "bi", "bi-scale"], [1, "bi", "bi-people-fill"], [1, "lower-grid"], [1, "card"], [1, "card-header"], [1, "bi", "bi-check-circle-fill", "me-2"], [1, "card-body"], [1, "progress-row"], [1, "progress-label"], [1, "dot", "blue"], [1, "progress-bar-bg"], [1, "progress-bar-fill", "blue", 2, "width", "0%"], [1, "progress-value"], [1, "dot", "yellow"], [1, "progress-bar-fill", "yellow", 2, "width", "100%"], [1, "dot", "red"], [1, "progress-bar-fill", "red", 2, "width", "0%"], [1, "progress-footer"], [1, "footer-stat"], [1, "value", "blue-text"], [1, "label"], [1, "value", "yellow-text"], [1, "value", "red-text"], [1, "bi", "bi-pie-chart-fill", "me-2"], [1, "card-body", "chart-body"], [1, "chart-container"], [1, "donut-chart", 2, "background", "conic-gradient(#ffc107 0% 3.2%, #00b4d8 3.2% 100%)"], [1, "donut-inner"], [1, "chart-legend-vertical"], [1, "legend-row"], [1, "legend-left"], [1, "legend-text"], [1, "legend-right"], [1, "dot", "green"], ["alt", "County Logo", "onerror", "this.src='assets/counties/default.png'", 3, "src"], [3, "value"]], template: function CountyEducation_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
            i0.ɵɵtemplate(3, CountyEducation_img_3_Template, 1, 1, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nav", 4)(5, "a", 5);
            i0.ɵɵelement(6, "i", 6);
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "a", 7);
            i0.ɵɵelement(10, "i", 8);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Menu Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 9)(14, "a", 7);
            i0.ɵɵelement(15, "i", 10);
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "KEMIS Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "ul", 11)(19, "li")(20, "a", 12);
            i0.ɵɵtext(21, "Institutions onboarded in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "li")(23, "a", 13);
            i0.ɵɵtext(24, "Learner list in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "li")(26, "a", 14);
            i0.ɵɵtext(27, "Learners Per Grade in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "li")(29, "a", 15);
            i0.ɵɵtext(30, "Pending Institutions onboarding");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "li")(32, "a", 16);
            i0.ɵɵtext(33, " Institution Onboarding per Cluster");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "li")(35, "a", 17);
            i0.ɵɵtext(36, "Learners Registered Per Cluster");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(37, "div", 9)(38, "a", 7);
            i0.ɵɵelement(39, "i", 18);
            i0.ɵɵelementStart(40, "span");
            i0.ɵɵtext(41, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "ul", 11)(43, "li")(44, "a", 19);
            i0.ɵɵtext(45, "Learner Transfer approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "li")(47, "a", 19);
            i0.ɵɵtext(48, "Learner Admissions");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "li")(50, "a", 19);
            i0.ɵɵtext(51, "Institution Update Request");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "li")(53, "a", 19);
            i0.ɵɵtext(54, "User Registration");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(55, "a", 20);
            i0.ɵɵelement(56, "i", 21);
            i0.ɵɵelementStart(57, "span");
            i0.ɵɵtext(58, "Escalations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "div", 9)(60, "a", 7);
            i0.ɵɵelement(61, "i", 18);
            i0.ɵɵelementStart(62, "span");
            i0.ɵɵtext(63, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "ul", 11)(65, "li")(66, "a", 19);
            i0.ɵɵtext(67, "Institution Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "li")(69, "a", 19);
            i0.ɵɵtext(70, "Learner Transfer Appeal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "li")(72, "a", 19);
            i0.ɵɵtext(73, "System Admin User Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "li")(75, "a", 19);
            i0.ɵɵtext(76, "Certificate Issuance recommendation");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "li")(78, "a", 19);
            i0.ɵɵtext(79, "Institution Details Update Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "li")(81, "a", 19);
            i0.ɵɵtext(82, "Institution Email Update");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(83, "a", 20);
            i0.ɵɵelement(84, "i", 21);
            i0.ɵɵelementStart(85, "span");
            i0.ɵɵtext(86, "User Manual");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(87, "main", 22)(88, "header", 23)(89, "div", 24)(90, "button", 25);
            i0.ɵɵelement(91, "i", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(92, "div", 27)(93, "select", 28);
            i0.ɵɵtwoWayListener("ngModelChange", function CountyEducation_Template_select_ngModelChange_93_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedLevel, $event) || (ctx.selectedLevel = $event); return $event; });
            i0.ɵɵelementStart(94, "option", 29);
            i0.ɵɵtext(95, "Junior School");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "option", 30);
            i0.ɵɵtext(97, "Primary School");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "option", 31);
            i0.ɵɵtext(99, "Secondary School");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(100, "select", 28);
            i0.ɵɵtwoWayListener("ngModelChange", function CountyEducation_Template_select_ngModelChange_100_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedSubCounty, $event) || (ctx.selectedSubCounty = $event); return $event; });
            i0.ɵɵelementStart(101, "option", 32);
            i0.ɵɵtext(102, "\u25BC Select Sub-County");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(103, CountyEducation_option_103_Template, 2, 2, "option", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "div", 34)(105, "div", 35);
            i0.ɵɵelement(106, "i", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "div", 37)(108, "span", 38);
            i0.ɵɵtext(109);
            i0.ɵɵpipe(110, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(111, "span", 39);
            i0.ɵɵtext(112);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(113, "button", 40);
            i0.ɵɵlistener("click", function CountyEducation_Template_button_click_113_listener() { return ctx.logout(); });
            i0.ɵɵelement(114, "i", 41);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(115, "div", 42)(116, "div", 43)(117, "h1");
            i0.ɵɵtext(118);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "p");
            i0.ɵɵtext(120);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(121, "div", 44)(122, "div", 45)(123, "div", 46);
            i0.ɵɵelement(124, "i", 47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "div", 48);
            i0.ɵɵtext(126);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "div", 49);
            i0.ɵɵtext(128, "Approved Institutions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "div", 50);
            i0.ɵɵtext(130, "Onboard under KEMIS");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(131, "div", 45)(132, "div", 46);
            i0.ɵɵelement(133, "i", 51);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "div", 48);
            i0.ɵɵtext(135);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "div", 49);
            i0.ɵɵtext(137, "Rejected Institutions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "div", 50);
            i0.ɵɵtext(139, "Onboard under KEMIS");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(140, "div", 45)(141, "div", 46);
            i0.ɵɵelement(142, "i", 52);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(143, "div", 48);
            i0.ɵɵtext(144);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(145, "div", 49);
            i0.ɵɵtext(146, "Pending Applications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(147, "div", 50);
            i0.ɵɵtext(148, "Awaiting CDE Review");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(149, "div", 45)(150, "div", 46);
            i0.ɵɵelement(151, "i", 53);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(152, "div", 48);
            i0.ɵɵtext(153);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(154, "div", 49);
            i0.ɵɵtext(155, "Transfer Appeals");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(156, "div", 50);
            i0.ɵɵtext(157, "Requiring Decision");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(158, "div", 45)(159, "div", 46);
            i0.ɵɵelement(160, "i", 54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(161, "div", 48);
            i0.ɵɵtext(162);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(163, "div", 49);
            i0.ɵɵtext(164, "Total Learners");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(165, "div", 50);
            i0.ɵɵtext(166, "County-wide Enrollment");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(167, "div", 55)(168, "div", 56)(169, "div", 57)(170, "h3");
            i0.ɵɵelement(171, "i", 58);
            i0.ɵɵtext(172, " Institution Approval Status Breakdown");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(173, "p");
            i0.ɵɵtext(174, "Current status of institution applications");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(175, "div", 59)(176, "div", 60)(177, "div", 61);
            i0.ɵɵelement(178, "span", 62);
            i0.ɵɵtext(179, " Approved");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(180, "div", 63);
            i0.ɵɵelement(181, "div", 64);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(182, "div", 65);
            i0.ɵɵtext(183);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(184, "div", 60)(185, "div", 61);
            i0.ɵɵelement(186, "span", 66);
            i0.ɵɵtext(187, " Pending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(188, "div", 63);
            i0.ɵɵelement(189, "div", 67);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(190, "div", 65);
            i0.ɵɵtext(191);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(192, "div", 60)(193, "div", 61);
            i0.ɵɵelement(194, "span", 68);
            i0.ɵɵtext(195, " Rejected");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(196, "div", 63);
            i0.ɵɵelement(197, "div", 69);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(198, "div", 65);
            i0.ɵɵtext(199);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(200, "div", 70)(201, "div", 71)(202, "span", 72);
            i0.ɵɵtext(203);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(204, "span", 73);
            i0.ɵɵtext(205, "Approved");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(206, "div", 71)(207, "span", 74);
            i0.ɵɵtext(208);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(209, "span", 73);
            i0.ɵɵtext(210, "Pending");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(211, "div", 71)(212, "span", 75);
            i0.ɵɵtext(213);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(214, "span", 73);
            i0.ɵɵtext(215, "Rejected");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(216, "div", 56)(217, "div", 57)(218, "h3");
            i0.ɵɵelement(219, "i", 76);
            i0.ɵɵtext(220, " Institution Categories");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(221, "p");
            i0.ɵɵtext(222, "Distribution by institution type");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(223, "div", 77)(224, "div", 78)(225, "div", 79);
            i0.ɵɵelement(226, "div", 80);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(227, "div", 81)(228, "div", 82)(229, "div", 83);
            i0.ɵɵelement(230, "span", 62);
            i0.ɵɵelementStart(231, "span", 84);
            i0.ɵɵtext(232);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(233, "div", 85);
            i0.ɵɵtext(234);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(235, "div", 82)(236, "div", 83);
            i0.ɵɵelement(237, "span", 66);
            i0.ɵɵelementStart(238, "span", 84);
            i0.ɵɵtext(239);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(240, "div", 85);
            i0.ɵɵtext(241);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(242, "div", 82)(243, "div", 83);
            i0.ɵɵelement(244, "span", 86);
            i0.ɵɵelementStart(245, "span", 84);
            i0.ɵɵtext(246);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(247, "div", 85);
            i0.ɵɵtext(248);
            i0.ɵɵelementEnd()()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.dashboardData.county && ctx.dashboardData.county !== "Loading...");
            i0.ɵɵadvance(90);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedLevel);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedSubCounty);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.subCounty);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(110, 25, ctx.dashboardData.county));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dashboardData.role);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.county, " County");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.county, " \u2013 Educational Oversight & Management");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.approved);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.rejected);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.pending);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.appeals);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.totalLearners);
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate(ctx.dashboardData.approvalBreakdown.approved);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.dashboardData.approvalBreakdown.pending);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.dashboardData.approvalBreakdown.rejected);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.dashboardData.approvalBreakdown.approved);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.dashboardData.approvalBreakdown.pending);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.dashboardData.approvalBreakdown.rejected);
            i0.ɵɵadvance(19);
            i0.ɵɵtextInterpolate1("Regular ", ctx.dashboardData.categories.regular.count);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.categories.regular.percentage, "%");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("Integrated (", ctx.dashboardData.categories.integrated.count, ")");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.categories.integrated.percentage, "%");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("SNE (", ctx.dashboardData.categories.sne.count, ")");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.categories.sne.percentage, "%");
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.UpperCasePipe], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%; \r\n  top: 0;   \r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0; \r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px; \r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n.top-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.header-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\r\n.back-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text[_ngcontent-%COMP%] { font-size: 1.2rem; font-weight: 600; color: #333; }\r\n\r\n.header-right[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 1rem; }\r\n\r\n\r\n.header-select[_ngcontent-%COMP%] {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.header-select-icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n.user-profile[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; }\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\r\n.user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] { font-size: 0.8rem; color: #888; }\r\n.logout-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n.content-body[_ngcontent-%COMP%] { padding: 1rem 2rem 2rem; max-width: 1500px; }\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n\r\n.stats-grid-5[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);\r\n  border-radius: 8px;\r\n  padding: 1.2rem 1rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute; top: -50%; right: -20%;\r\n  width: 100px; height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.stat-icon[_ngcontent-%COMP%] { position: absolute; top: 1rem; right: 1rem; font-size: 1.8rem; opacity: 0.4; }\r\n.stat-number[_ngcontent-%COMP%] { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }\r\n.stat-label[_ngcontent-%COMP%] { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.2rem; }\r\n.stat-subtext[_ngcontent-%COMP%] { font-size: 0.75rem; opacity: 0.8; }\r\n\r\n\r\n.lower-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] { background: #00b4d8; color: white; padding: 1.2rem 1.5rem; }\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 0.2rem 0; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; }\r\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; font-size: 0.85rem; opacity: 0.9; }\r\n.card-body[_ngcontent-%COMP%] { padding: 2rem 1.5rem; flex: 1; }\r\n\r\n\r\n.progress-row[_ngcontent-%COMP%] { display: flex; align-items: center; margin-bottom: 1.5rem; }\r\n.progress-label[_ngcontent-%COMP%] { width: 100px; font-size: 0.9rem; color: #333; display: flex; align-items: center; gap: 8px; }\r\n.dot[_ngcontent-%COMP%] { width: 12px; height: 12px; border-radius: 2px; display: inline-block; }\r\n.dot.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.dot.yellow[_ngcontent-%COMP%] { background-color: #ffc107; }\r\n.dot.red[_ngcontent-%COMP%] { background-color: #dc3545; }\r\n.dot.green[_ngcontent-%COMP%] { background-color: #28a745; }\r\n\r\n.progress-bar-bg[_ngcontent-%COMP%] { flex: 1; height: 8px; background-color: #e9ecef; border-radius: 4px; margin: 0 1rem; overflow: hidden; }\r\n.progress-bar-fill[_ngcontent-%COMP%] { height: 100%; border-radius: 4px; }\r\n.progress-bar-fill.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.progress-bar-fill.yellow[_ngcontent-%COMP%] { background-color: #ffc107; }\r\n.progress-bar-fill.red[_ngcontent-%COMP%] { background-color: #dc3545; }\r\n.progress-value[_ngcontent-%COMP%] { width: 30px; text-align: right; font-weight: 700; font-size: 0.95rem; }\r\n\r\n\r\n.progress-footer[_ngcontent-%COMP%] { display: flex; justify-content: space-around; padding-top: 2rem; margin-top: 1rem; border-top: 1px solid #eee; }\r\n.footer-stat[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; }\r\n.footer-stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] { font-size: 1.5rem; font-weight: 700; }\r\n.blue-text[_ngcontent-%COMP%] { color: #00b4d8; }\r\n.yellow-text[_ngcontent-%COMP%] { color: #ffc107; }\r\n.red-text[_ngcontent-%COMP%] { color: #dc3545; }\r\n.footer-stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] { font-size: 0.85rem; color: #555; margin-top: 4px; }\r\n\r\n\r\n.chart-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1.5rem 2rem;\r\n}\r\n\r\n.chart-container[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-chart[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%] {\r\n  width: 130px;\r\n  height: 130px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chart-legend-vertical[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.legend-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.legend-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\r\n.legend-text[_ngcontent-%COMP%] { font-size: 0.9rem; color: #333; }\r\n.legend-right[_ngcontent-%COMP%] { font-size: 0.9rem; font-weight: 700; color: #333; }\r\n\r\n\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .chart-body[_ngcontent-%COMP%] { flex-direction: column; gap: 2rem; }\r\n  .chart-container[_ngcontent-%COMP%], .chart-legend-vertical[_ngcontent-%COMP%] { width: 100%; }\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountyEducation, [{
        type: Component,
        args: [{ selector: 'app-county-education', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"dashboard-wrapper\">\n\n  <!-- SIDEBAR           -->\n   <aside class=\"sidebar\">\n    <div class=\"sidebar-logo\">\n  <img *ngIf=\"dashboardData.county && dashboardData.county !== 'Loading...'\"\n       [src]=\"'assets/counties/' + dashboardData.county.toLowerCase() + '.png'\"\n       alt=\"County Logo\"\n       onerror=\"this.src='assets/counties/default.png'\" />\n</div>\n        <nav class=\"sidebar-nav\">\n      <!-- 1. Dashboard (Default) -->\n      <a class=\"nav-item active\">\n        <i class=\"bi bi-grid-fill\"></i>\n        <span>Dashboard</span>\n      </a>\n\n      <!-- 2. Menu Search (Will just do a search tab instead) -->\n      <a class=\"nav-item\">\n        <i class=\"bi bi-search\"></i>\n        <span>Menu Search</span>\n      </a>\n\n      <!-- 3. KEMIS Reports-->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-clipboard-check\"></i>\n          <span>KEMIS Reports</span>\n        </a>\n        <ul class=\"nav-children\">\n         <li><a href=\"/institution-registered-county\">Institutions onboarded in the County</a></li>\n          <li><a href=\"/learners-registered-county\">Learner list in the County</a></li>\n          <li><a href=\"/learners-per-grade-county\">Learners Per Grade in the County</a></li>\n          <li><a href=\"/pending-institution-county\">Pending Institutions onboarding</a></li>\n          <li><a href=\"/institutions-onboarded-per-cluster\"> Institution Onboarding per Cluster</a></li>\n          <li><a href=\"/learners-registered-per-cluster\">Learners Registered Per Cluster</a></li>\n        </ul>\n      </div>\n\n      <!-- 4. Registration -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"#\">Learner Transfer approval</a></li>\n          <li><a href=\"#\">Learner Admissions</a></li>\n          <li><a href=\"#\">Institution Update Request</a></li>\n          <li><a href=\"#\">User Registration</a></li>\n        </ul>\n      </div>\n\n      <!--5.  Escalations from SCDE -->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>Escalations</span>\n      </a>\n\n       <!-- 4. Registration -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"#\">Institution Approval</a></li>\n          <li><a href=\"#\">Learner Transfer Appeal</a></li>\n          <li><a href=\"#\">System Admin User Registration</a></li>\n          <li><a href=\"#\">Certificate Issuance recommendation</a></li>\n          <li><a href=\"#\">Institution Details Update Approval</a></li>\n          <li><a href=\"#\">Institution Email Update</a></li>\n        </ul>\n      </div>\n\n      <!--5. User Manual-->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>User Manual</span>\n      </a>\n    </nav>\n  </aside>\n\n  <!-- MAIN CONTENT AREA -->\n  <main class=\"main-content\">\n\n    <!-- Top Header -->\n    <header class=\"top-header\">\n      <div class=\"header-left\">\n        <button class=\"back-btn\"><i class=\"bi bi-chevron-left\"></i></button>\n        <!-- The text \"nation\" is cut off in the screenshot, likely part of \"Onboarding Nation\" or similar\n        <span class=\"header-text\">nation</span> -->\n      </div>\n\n      <div class=\"header-right\">\n        <!-- New Dropdowns -->\n        <select class=\"form-select header-select\" [(ngModel)]=\"selectedLevel\">\n          <option value=\"Junior School\">Junior School</option>\n          <option value=\"Primary School\">Primary School</option>\n          <option value=\"Secondary School\">Secondary School</option>\n        </select>\n        <select class=\"form-select header-select\" [(ngModel)]=\"selectedSubCounty\">\n          <option value=\"\" disabled selected>\u25BC Select Sub-County</option>\n          <!--Collects Subcounty based on County -->\n          <option *ngFor=\"let subCounty of subCounty\" [value]=\"subCounty\">\n            {{ subCounty }}\n          </option>\n        </select>\n\n        <!-- User Profile -->\n        <div class=\"user-profile ms-3\">\n          <div class=\"avatar\">\n            <i class=\"bi bi-person-fill\"></i>\n          </div>\n          <div class=\"user-info\">\n            <span class=\"name\">{{ dashboardData.county| uppercase }}</span>\n            <span class=\"role\">{{ dashboardData.role }}</span>\n          </div>\n        </div>\n        <button class=\"logout-btn\" (click)=\"logout()\">\n          <i class=\"bi bi-power\"></i>\n        </button>\n      </div>\n    </header>\n\n    <!-- Page Content -->\n    <div class=\"content-body\">\n\n      <div class=\"page-title\">\n        <h1>{{ dashboardData.county }} County</h1>\n        <p>{{ dashboardData.county }} \u2013 Educational Oversight & Management</p>\n      </div>\n\n      <!-- 5 Stat Cards -->\n      <div class=\"stats-grid-5\">\n        <!-- Approved -->\n        <div class=\"stat-card\">\n          <div class=\"stat-icon\"><i class=\"bi bi-building-check\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.approved }}</div>\n          <div class=\"stat-label\">Approved Institutions</div>\n          <div class=\"stat-subtext\">Onboard under KEMIS</div>\n        </div>\n\n        <!-- Rejected -->\n        <div class=\"stat-card\">\n          <div class=\"stat-icon\"><i class=\"bi bi-building-x\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.rejected }}</div>\n          <div class=\"stat-label\">Rejected Institutions</div>\n          <div class=\"stat-subtext\">Onboard under KEMIS</div>\n        </div>\n\n        <!-- Pending -->\n        <div class=\"stat-card\">\n          <div class=\"stat-icon\"><i class=\"bi bi-file-earmark-text\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.pending }}</div>\n          <div class=\"stat-label\">Pending Applications</div>\n          <div class=\"stat-subtext\">Awaiting CDE Review</div>\n        </div>\n\n        <!-- Appeals -->\n        <div class=\"stat-card\">\n          <div class=\"stat-icon\"><i class=\"bi bi-scale\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.appeals }}</div>\n          <div class=\"stat-label\">Transfer Appeals</div>\n          <div class=\"stat-subtext\">Requiring Decision</div>\n        </div>\n\n        <!-- Total Learners -->\n        <div class=\"stat-card\">\n          <div class=\"stat-icon\"><i class=\"bi bi-people-fill\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.totalLearners }}</div>\n          <div class=\"stat-label\">Total Learners</div>\n          <div class=\"stat-subtext\">County-wide Enrollment</div>\n        </div>\n      </div>\n\n      <!-- Lower Grid: Approvals & Categories -->\n      <div class=\"lower-grid\">\n\n        <!-- Institution Approval Status Card -->\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3><i class=\"bi bi-check-circle-fill me-2\"></i> Institution Approval Status Breakdown</h3>\n            <p>Current status of institution applications</p>\n          </div>\n          <div class=\"card-body\">\n\n            <div class=\"progress-row\">\n              <div class=\"progress-label\"><span class=\"dot blue\"></span> Approved</div>\n              <div class=\"progress-bar-bg\">\n                <!-- Width calculated dynamically based on total -->\n                <div class=\"progress-bar-fill blue\" style=\"width: 0%;\"></div>\n              </div>\n              <div class=\"progress-value\">{{ dashboardData.approvalBreakdown.approved }}</div>\n            </div>\n\n            <div class=\"progress-row\">\n              <div class=\"progress-label\"><span class=\"dot yellow\"></span> Pending</div>\n              <div class=\"progress-bar-bg\">\n                <div class=\"progress-bar-fill yellow\" style=\"width: 100%;\"></div>\n              </div>\n              <div class=\"progress-value\">{{ dashboardData.approvalBreakdown.pending }}</div>\n            </div>\n\n            <div class=\"progress-row\">\n              <div class=\"progress-label\"><span class=\"dot red\"></span> Rejected</div>\n              <div class=\"progress-bar-bg\">\n                <div class=\"progress-bar-fill red\" style=\"width: 0%;\"></div>\n              </div>\n              <div class=\"progress-value\">{{ dashboardData.approvalBreakdown.rejected }}</div>\n            </div>\n\n            <div class=\"progress-footer\">\n              <div class=\"footer-stat\">\n                <span class=\"value blue-text\">{{ dashboardData.approvalBreakdown.approved }}</span>\n                <span class=\"label\">Approved</span>\n              </div>\n              <div class=\"footer-stat\">\n                <span class=\"value yellow-text\">{{ dashboardData.approvalBreakdown.pending }}</span>\n                <span class=\"label\">Pending</span>\n              </div>\n              <div class=\"footer-stat\">\n                <span class=\"value red-text\">{{ dashboardData.approvalBreakdown.rejected }}</span>\n                <span class=\"label\">Rejected</span>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- Institution Categories Card -->\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3><i class=\"bi bi-pie-chart-fill me-2\"></i> Institution Categories</h3>\n            <p>Distribution by institution type</p>\n          </div>\n          <div class=\"card-body chart-body\">\n\n            <div class=\"chart-container\">\n              <!-- Pure CSS Donut Chart for 96.8% / 3.2% -->\n              <!-- Using conic-gradient to represent the 3.2% yellow slice -->\n              <div class=\"donut-chart\" style=\"background: conic-gradient(#ffc107 0% 3.2%, #00b4d8 3.2% 100%);\">\n                <div class=\"donut-inner\"></div>\n              </div>\n            </div>\n\n            <div class=\"chart-legend-vertical\">\n              <div class=\"legend-row\">\n                <div class=\"legend-left\">\n                  <span class=\"dot blue\"></span>\n                  <span class=\"legend-text\">Regular {{ dashboardData.categories.regular.count }}</span>\n                </div>\n                <div class=\"legend-right\">{{ dashboardData.categories.regular.percentage }}%</div>\n              </div>\n\n              <div class=\"legend-row\">\n                <div class=\"legend-left\">\n                  <span class=\"dot yellow\"></span>\n                  <span class=\"legend-text\">Integrated ({{ dashboardData.categories.integrated.count }})</span>\n                </div>\n                <div class=\"legend-right\">{{ dashboardData.categories.integrated.percentage }}%</div>\n              </div>\n\n              <div class=\"legend-row\">\n                <div class=\"legend-left\">\n                  <span class=\"dot green\"></span>\n                  <span class=\"legend-text\">SNE ({{ dashboardData.categories.sne.count }})</span>\n                </div>\n                <div class=\"legend-right\">{{ dashboardData.categories.sne.percentage }}%</div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </main>\n</div>\n", styles: ["/*Sidebar*/\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* The Dropdown Menu (Hidden by default IMPORTANT!) */\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%; \r\n  top: 0;   \r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0; \r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children li a:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px; \r\n}\r\n\r\n.nav-parent.has-children:hover .nav-children {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children:hover > .nav-item {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n/* Main content & Header */\r\n.main-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n.top-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.header-left { display: flex; align-items: center; gap: 10px; }\r\n.back-btn { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text { font-size: 1.2rem; font-weight: 600; color: #333; }\r\n\r\n.header-right { display: flex; align-items: center; gap: 1rem; }\r\n\r\n/* Header Dropdowns */\r\n.header-select {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.header-select-icon {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n/* User Profile */\r\n.user-profile { display: flex; align-items: center; gap: 12px; }\r\n.avatar {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info { display: flex; flex-direction: column; }\r\n.user-info .name { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info .role { font-size: 0.8rem; color: #888; }\r\n.logout-btn { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n.content-body { padding: 1rem 2rem 2rem; max-width: 1500px; }\r\n.page-title h1 { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title p { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n/* Stat cards */\r\n.stats-grid-5 {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card {\r\n  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);\r\n  border-radius: 8px;\r\n  padding: 1.2rem 1rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card::before {\r\n  content: '';\r\n  position: absolute; top: -50%; right: -20%;\r\n  width: 100px; height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.stat-icon { position: absolute; top: 1rem; right: 1rem; font-size: 1.8rem; opacity: 0.4; }\r\n.stat-number { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }\r\n.stat-label { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.2rem; }\r\n.stat-subtext { font-size: 0.75rem; opacity: 0.8; }\r\n\r\n/* Card grid */\r\n.lower-grid {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header { background: #00b4d8; color: white; padding: 1.2rem 1.5rem; }\r\n.card-header h3 { margin: 0 0 0.2rem 0; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; }\r\n.card-header p { margin: 0; font-size: 0.85rem; opacity: 0.9; }\r\n.card-body { padding: 2rem 1.5rem; flex: 1; }\r\n\r\n/* PROGRESS BARS (Approval Breakdown) */\r\n.progress-row { display: flex; align-items: center; margin-bottom: 1.5rem; }\r\n.progress-label { width: 100px; font-size: 0.9rem; color: #333; display: flex; align-items: center; gap: 8px; }\r\n.dot { width: 12px; height: 12px; border-radius: 2px; display: inline-block; }\r\n.dot.blue { background-color: #00b4d8; }\r\n.dot.yellow { background-color: #ffc107; }\r\n.dot.red { background-color: #dc3545; }\r\n.dot.green { background-color: #28a745; }\r\n\r\n.progress-bar-bg { flex: 1; height: 8px; background-color: #e9ecef; border-radius: 4px; margin: 0 1rem; overflow: hidden; }\r\n.progress-bar-fill { height: 100%; border-radius: 4px; }\r\n.progress-bar-fill.blue { background-color: #00b4d8; }\r\n.progress-bar-fill.yellow { background-color: #ffc107; }\r\n.progress-bar-fill.red { background-color: #dc3545; }\r\n.progress-value { width: 30px; text-align: right; font-weight: 700; font-size: 0.95rem; }\r\n\r\n/* Footer summary */\r\n.progress-footer { display: flex; justify-content: space-around; padding-top: 2rem; margin-top: 1rem; border-top: 1px solid #eee; }\r\n.footer-stat { display: flex; flex-direction: column; align-items: center; }\r\n.footer-stat .value { font-size: 1.5rem; font-weight: 700; }\r\n.blue-text { color: #00b4d8; }\r\n.yellow-text { color: #ffc107; }\r\n.red-text { color: #dc3545; }\r\n.footer-stat .label { font-size: 0.85rem; color: #555; margin-top: 4px; }\r\n\r\n/*Institution Categories */\r\n.chart-body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1.5rem 2rem;\r\n}\r\n\r\n.chart-container {\r\n  width: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-chart {\r\n  width: 200px;\r\n  height: 200px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-inner {\r\n  width: 130px;\r\n  height: 130px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chart-legend-vertical {\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.legend-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.legend-left { display: flex; align-items: center; gap: 10px; }\r\n.legend-text { font-size: 0.9rem; color: #333; }\r\n.legend-right { font-size: 0.9rem; font-weight: 700; color: #333; }\r\n\r\n/* Responsiveness */\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5 { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid { grid-template-columns: 1fr; }\r\n  .chart-body { flex-direction: column; gap: 2rem; }\r\n  .chart-container, .chart-legend-vertical { width: 100%; }\r\n  .stats-grid-5 { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CountyEducation, { className: "CountyEducation", filePath: "app/pages/county-education/county-education.ts", lineNumber: 14 }); })();
