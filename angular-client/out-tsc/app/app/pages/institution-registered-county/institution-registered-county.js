import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router'; //nav l
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function InstitutionRegisteredCounty_option_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r1);
} }
function InstitutionRegisteredCounty_option_109_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r2);
} }
function InstitutionRegisteredCounty_option_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r3);
} }
function InstitutionRegisteredCounty_tr_151_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const inst_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.institutionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.certificateNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.institutionType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.mobileNo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.institutionLevel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.subCounty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.createdAt);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.headOfInstitution);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.constituency);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.emailId);
} }
export class InstitutionRegisteredCounty {
    constructor() {
        this.http = inject(HttpClient);
        //  private router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        // Filter Options
        this.institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
        this.county = [];
        this.subCounty = ['All'];
        // Filter Model
        this.filter = {
            institutionLevel: 'All',
            fromDate: '',
            toDate: '',
            county: '',
            subCounty: 'All'
        };
        // Live Table Data
        this.allInstitutions = [];
        this.institutions = [];
        this.tableSearch = '';
    }
    ngOnInit() {
        this.http.get('http://localhost:5215/api/county-education/profile').subscribe({
            next: ({ county }) => {
                this.county = [county];
                this.filter.county = county;
                this.fetchApprovedInstitutions();
            },
            error: (err) => console.error('Failed to load county profile', err)
        });
    }
    fetchApprovedInstitutions() {
        this.http.get('http://localhost:5215/api/county-education/institutions', { params: { county: this.filter.county, status: 'approved' } }).subscribe({
            next: (res) => {
                this.allInstitutions = res.schools || [];
                this.subCounty = [...new Set(['All', ...this.allInstitutions.map(school => school.subCounty).filter(Boolean)])];
                this.institutions = [...this.allInstitutions];
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Failed to fetch institutions', err)
        });
    }
    onSearch() {
        let filtered = this.allInstitutions;
        if (this.filter.subCounty !== 'All') {
            filtered = filtered.filter(i => i.subCounty === this.filter.subCounty);
        }
        if (this.filter.institutionLevel !== 'All') {
            filtered = filtered.filter(i => i.institutionLevel === this.filter.institutionLevel);
        }
        this.institutions = filtered;
        this.cdr.detectChanges();
    }
    onDownload() {
        console.log('Downloading data...');
    }
    static { this.ɵfac = function InstitutionRegisteredCounty_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InstitutionRegisteredCounty)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstitutionRegisteredCounty, selectors: [["app-institutions-registered-county"]], decls: 153, vars: 13, consts: [[1, "dashboard-wrapper"], [1, "sidebar"], [1, "sidebar-nav"], ["routerLink", "/county-education", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-grid-fill"], [1, "nav-item"], [1, "bi", "bi-search"], [1, "nav-parent", "has-children"], [1, "bi", "bi-clipboard-check"], [1, "nav-children"], ["routerLink", "/institution-registered-county"], ["routerLink", "/learners-registered-county"], ["routerLink", "/learners-per-grade-county"], ["routerLink", "/pending-institution-county"], ["routerLink", "/institutions-onboarded-per-cluster"], ["routerLink", "/learners-registered-per-cluster"], [1, "bi", "bi-pencil-square"], ["routerLink", "#"], [1, "nav-item", "text-danger", "mt-4"], [1, "bi", "bi-book"], [1, "main-content"], [1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "filter-grid"], [1, "filter-group"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", "bg-light", 3, "ngModelChange", "ngModel"], [1, "action-row"], [1, "btn-download", 3, "click"], [1, "bi", "bi-caret-down-fill", "ms-1"], [1, "btn-search", 3, "click"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], [3, "value"], [1, "text-center"]], template: function InstitutionRegisteredCounty_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "nav", 2)(3, "a", 3);
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 5);
            i0.ɵɵelement(8, "i", 6);
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10, "Menu Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 7)(12, "a", 5);
            i0.ɵɵelement(13, "i", 8);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "KEMIS Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "ul", 9)(17, "li")(18, "a", 10);
            i0.ɵɵtext(19, "Institutions onboarded in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "li")(21, "a", 11);
            i0.ɵɵtext(22, "Learner list in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "li")(24, "a", 12);
            i0.ɵɵtext(25, "Learners Per Grade in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "li")(27, "a", 13);
            i0.ɵɵtext(28, "Pending Institutions onboarding");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "li")(30, "a", 14);
            i0.ɵɵtext(31, "Institution Onboarding per Cluster");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "li")(33, "a", 15);
            i0.ɵɵtext(34, "Learners Registered Per Cluster");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "div", 7)(36, "a", 5);
            i0.ɵɵelement(37, "i", 16);
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "ul", 9)(41, "li")(42, "a", 17);
            i0.ɵɵtext(43, "Learner Transfer approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "li")(45, "a", 17);
            i0.ɵɵtext(46, "Learner Admissions");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "li")(48, "a", 17);
            i0.ɵɵtext(49, "Institution Update Request");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "li")(51, "a", 17);
            i0.ɵɵtext(52, "User Registration");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(53, "a", 18);
            i0.ɵɵelement(54, "i", 19);
            i0.ɵɵelementStart(55, "span");
            i0.ɵɵtext(56, "Escalations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "div", 7)(58, "a", 5);
            i0.ɵɵelement(59, "i", 16);
            i0.ɵɵelementStart(60, "span");
            i0.ɵɵtext(61, "Admin Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "ul", 9)(63, "li")(64, "a", 17);
            i0.ɵɵtext(65, "Institution Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "li")(67, "a", 17);
            i0.ɵɵtext(68, "Learner Transfer Appeal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "li")(70, "a", 17);
            i0.ɵɵtext(71, "System Admin User Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "li")(73, "a", 17);
            i0.ɵɵtext(74, "Certificate Issuance recommendation");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "li")(76, "a", 17);
            i0.ɵɵtext(77, "Institution Details Update Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(78, "li")(79, "a", 17);
            i0.ɵɵtext(80, "Institution Email Update");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(81, "a", 18);
            i0.ɵɵelement(82, "i", 19);
            i0.ɵɵelementStart(83, "span");
            i0.ɵɵtext(84, "User Manual");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(85, "main", 20)(86, "div", 21)(87, "div", 22)(88, "h2");
            i0.ɵɵtext(89, "List of institutions onboarded per county");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "div", 23)(91, "div", 24)(92, "div", 25)(93, "label");
            i0.ɵɵtext(94, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "select", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionRegisteredCounty_Template_select_ngModelChange_95_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.institutionLevel, $event) || (ctx.filter.institutionLevel = $event); return $event; });
            i0.ɵɵtemplate(96, InstitutionRegisteredCounty_option_96_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 25)(98, "label");
            i0.ɵɵtext(99, "From");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "input", 28);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionRegisteredCounty_Template_input_ngModelChange_100_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(101, "div", 25)(102, "label");
            i0.ɵɵtext(103, "To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "input", 28);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionRegisteredCounty_Template_input_ngModelChange_104_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(105, "div", 25)(106, "label");
            i0.ɵɵtext(107, "County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(108, "select", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionRegisteredCounty_Template_select_ngModelChange_108_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.county, $event) || (ctx.filter.county = $event); return $event; });
            i0.ɵɵtemplate(109, InstitutionRegisteredCounty_option_109_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(110, "div", 25)(111, "label");
            i0.ɵɵtext(112, "Subcounty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "select", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionRegisteredCounty_Template_select_ngModelChange_113_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.subCounty, $event) || (ctx.filter.subCounty = $event); return $event; });
            i0.ɵɵtemplate(114, InstitutionRegisteredCounty_option_114_Template, 2, 2, "option", 27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(115, "div", 30)(116, "button", 31);
            i0.ɵɵlistener("click", function InstitutionRegisteredCounty_Template_button_click_116_listener() { return ctx.onDownload(); });
            i0.ɵɵtext(117, " Download ");
            i0.ɵɵelement(118, "i", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "button", 33);
            i0.ɵɵlistener("click", function InstitutionRegisteredCounty_Template_button_click_119_listener() { return ctx.onSearch(); });
            i0.ɵɵtext(120, " Search ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(121, "div", 34)(122, "div", 35)(123, "input", 36);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionRegisteredCounty_Template_input_ngModelChange_123_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(124, "div", 37)(125, "table", 38)(126, "thead")(127, "tr")(128, "th");
            i0.ɵɵtext(129, "S. No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "th");
            i0.ɵɵtext(131, "Institution Certificate Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "th");
            i0.ɵɵtext(133, "Institution Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "th");
            i0.ɵɵtext(135, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(136, "th");
            i0.ɵɵtext(137, "Institution Telephone Number/Landline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "th");
            i0.ɵɵtext(139, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(140, "th");
            i0.ɵɵtext(141, "Sub County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(142, "th");
            i0.ɵɵtext(143, "Created Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(144, "th");
            i0.ɵɵtext(145, "Created By");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(146, "th");
            i0.ɵɵtext(147, "Constituency");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(148, "th");
            i0.ɵɵtext(149, "Institution Email");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(150, "tbody");
            i0.ɵɵtemplate(151, InstitutionRegisteredCounty_tr_151_Template, 23, 11, "tr", 39);
            i0.ɵɵpipe(152, "search");
            i0.ɵɵelementEnd()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(95);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.institutionLevel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.institutionLevels);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.fromDate);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.toDate);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.county);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.county);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.subCounty);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.subCounty);
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(28);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(152, 10, ctx.institutions, ctx.tableSearch));
        } }, dependencies: [CommonModule, i1.NgForOf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, RouterLink, RouterLinkActive, SearchPipe], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden; \r\n}\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  overflow: visible !important; \r\n  z-index: 1000;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n  overflow: visible !important; \r\n}\r\n\r\n\r\n.sidebar[_ngcontent-%COMP%]::-webkit-scrollbar, \r\n.sidebar-nav[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] { border-bottom: none; }\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover { background-color: #f4f7f9; color: var(--kemis-blue, #1e40af); padding-left: 25px; }\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] { opacity: 1; visibility: visible; transform: translateX(0); }\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n\r\n\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex-grow: 1; \r\n  height: 100vh;\r\n  overflow-y: auto; \r\n  overflow-x: hidden;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  padding: 2rem;\r\n  min-height: 100%; \r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.filter-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem 2rem;\r\n  max-width: 1000px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-select.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n}\r\n\r\n\r\n.action-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1000px;\r\n}\r\n\r\n.btn-download[_ngcontent-%COMP%] {\r\n  background-color: #6c757d;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-download[_ngcontent-%COMP%]:hover { background-color: #5a6268; }\r\n\r\n.btn-search[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%]:hover { background-color: #f8d7da; }\r\n\r\n\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal[_ngcontent-%COMP%] {\r\n  max-width: 450px;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] { width: 100%; }\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child { border-right: none; }\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background-color: #f8f9fa; }\r\n\r\n.text-center[_ngcontent-%COMP%] { text-align: center; }\r\n\r\n\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .filter-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .filter-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .action-row[_ngcontent-%COMP%] { flex-direction: column; align-items: flex-start; gap: 1rem; }\r\n  .search-input[_ngcontent-%COMP%] { width: 100%; }\r\n  .sidebar[_ngcontent-%COMP%] { width: 80px; } \r\n  .nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstitutionRegisteredCounty, [{
        type: Component,
        args: [{ selector: 'app-institutions-registered-county', standalone: true, imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, SearchPipe], template: "<div class=\"dashboard-wrapper\">\n  \n  <!-- SIDEBAR -->\n  <aside class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      \n      <!-- 1. Dashboard (No children) -->\n      <a class=\"nav-item\" routerLink=\"/county-education\" routerLinkActive=\"active\">\n        <i class=\"bi bi-grid-fill\"></i>\n        <span>Dashboard</span>\n      </a>\n\n      <!-- 2. Menu Search (No children) -->\n      <a class=\"nav-item\">\n        <i class=\"bi bi-search\"></i>\n        <span>Menu Search</span>\n      </a>\n\n      <!-- 3. KEMIS Reports (Has children) -->\n      <!-- Notice the 'has-children' class added below -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-clipboard-check\"></i>\n          <span>KEMIS Reports</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a routerLink=\"/institution-registered-county\">Institutions onboarded in the County</a></li>\n          <li><a routerLink=\"/learners-registered-county\">Learner list in the County</a></li>\n          <li><a routerLink=\"/learners-per-grade-county\">Learners Per Grade in the County</a></li>\n          <li><a routerLink=\"/pending-institution-county\">Pending Institutions onboarding</a></li>\n          <li><a routerLink=\"/institutions-onboarded-per-cluster\">Institution Onboarding per Cluster</a></li>\n          <li><a routerLink=\"/learners-registered-per-cluster\">Learners Registered Per Cluster</a></li>\n        </ul>\n      </div>\n\n      <!-- 4. Registration (Has children) -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a routerLink=\"#\">Learner Transfer approval</a></li>\n          <li><a routerLink=\"#\">Learner Admissions</a></li>\n          <li><a routerLink=\"#\">Institution Update Request</a></li>\n          <li><a routerLink=\"#\">User Registration</a></li>\n        </ul>\n      </div>\n\n      <!-- 5. Escalations (No children) -->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>Escalations</span>\n      </a>\n\n      <!-- 6. Admin Registration (Has children) -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Admin Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a routerLink=\"#\">Institution Approval</a></li>\n          <li><a routerLink=\"#\">Learner Transfer Appeal</a></li>\n          <li><a routerLink=\"#\">System Admin User Registration</a></li>\n          <li><a routerLink=\"#\">Certificate Issuance recommendation</a></li>\n          <li><a routerLink=\"#\">Institution Details Update Approval</a></li>\n          <li><a routerLink=\"#\">Institution Email Update</a></li>\n        </ul>\n      </div>\n\n      <!-- 7. User Manual (No children) -->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>User Manual</span>\n      </a>\n\n    </nav>\n  </aside>\n\n\n  <!-- MAIN CONTENT (Moved INSIDE the dashboard-wrapper) -->\n  <main class=\"main-content\">\n    <div class=\"page-container\">\n      <!-- Page Title -->\n      <div class=\"page-header\">\n        <h2>List of institutions onboarded per county</h2>\n      </div>\n\n      <!-- Filters Section -->\n      <div class=\"filter-section\">\n        <div class=\"filter-grid\">\n          <!-- Institution Level -->\n          <div class=\"filter-group\">\n            <label>Institution Level</label>\n            <select class=\"form-select\" [(ngModel)]=\"filter.institutionLevel\">\n              <option *ngFor=\"let level of institutionLevels\" [value]=\"level\">{{ level }}</option>\n            </select>\n          </div>\n\n          <!-- From Date -->\n          <div class=\"filter-group\">\n            <label>From</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n          </div>\n\n          <!-- To Date -->\n          <div class=\"filter-group\">\n            <label>To</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n          </div>\n\n          <!-- County -->\n          <div class=\"filter-group\">\n            <label>County</label>\n            <select class=\"form-select bg-light\" [(ngModel)]=\"filter.county\">\n              <option *ngFor=\"let c of county\" [value]=\"c\">{{ c }}</option>\n            </select>\n          </div>\n\n          <!-- Subcounty -->\n          <div class=\"filter-group\">\n            <label>Subcounty</label>\n            <select class=\"form-select\" [(ngModel)]=\"filter.subCounty\">\n              <option *ngFor=\"let sub of subCounty\" [value]=\"sub\">{{ sub }}</option>\n            </select>\n          </div>\n        </div>\n\n        <!-- Action Buttons -->\n        <div class=\"action-row\">\n          <button class=\"btn-download\" (click)=\"onDownload()\">\n            Download <i class=\"bi bi-caret-down-fill ms-1\"></i>\n          </button>\n          <button class=\"btn-search\" (click)=\"onSearch()\">\n            Search\n          </button>\n        </div>\n      </div>\n\n      <!-- Table Section -->\n      <div class=\"table-section\">\n        <!-- Table Search Bar -->\n        <div class=\"table-search-row\">\n          <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\n        </div>\n\n        <!-- Data Table -->\n        <div class=\"table-responsive\">\n          <table class=\"custom-table\">\n            <thead>\n              <tr>\n                <th>S. No</th>\n                <th>Institution Certificate Number</th>\n                <th>Institution Type</th>\n                <th>Institution Name</th>\n                <th>Institution Telephone Number/Landline</th>\n                <th>Institution Level</th>\n                <th>Sub County</th>\n                <th>Created Date</th>\n                <th>Created By</th>\n                <th>Constituency</th>\n                <th>Institution Email</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let inst of institutions | search: tableSearch\">\n                <td class=\"text-center\">{{ inst.institutionId }}</td>\n                <td>{{ inst.certificateNumber }}</td>\n                <td>{{ inst.institutionType }}</td>\n                <td>{{ inst.institutionName }}</td>\n                <td>{{ inst.mobileNo }}</td>\n                <td>{{ inst.institutionLevel }}</td>\n                <td>{{ inst.subCounty }}</td>\n                <td>{{ inst.createdAt }}</td>\n                <td>{{ inst.headOfInstitution }}</td>\n                <td>{{ inst.constituency }}</td>\n                <td>{{ inst.emailId }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n", styles: ["/* 1. Fix the main wrapper to hide scrollbars */\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden; \r\n}\r\n\r\n/* 2. Fix the Sidebar */\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  overflow: visible !important; \r\n  z-index: 1000;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n  overflow: visible !important; \r\n}\r\n\r\n\r\n.sidebar::-webkit-scrollbar,\r\n.sidebar-nav::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n/* Dropdowns */\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a { border-bottom: none; }\r\n.nav-children li a:hover { background-color: #f4f7f9; color: var(--kemis-blue, #1e40af); padding-left: 25px; }\r\n\r\n.nav-parent.has-children:hover .nav-children { opacity: 1; visibility: visible; transform: translateX(0); }\r\n.nav-parent.has-children:hover > .nav-item { background-color: #f0f8ff; }\r\n\r\n/* ==========================================\r\n   3. MAIN CONTENT AREA (The Fix)\r\n   ========================================== */\r\n.main-content {\r\n  flex-grow: 1; /* Takes up all remaining space */\r\n  height: 100vh;\r\n  overflow-y: auto; /* ONLY the main content scrolls, not the sidebar */\r\n  overflow-x: hidden;\r\n}\r\n\r\n.page-container {\r\n  background-color: #ffffff;\r\n  padding: 2rem;\r\n  min-height: 100%; /* Fills the main-content area */\r\n}\r\n\r\n.page-header {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n/* ==========================================\r\n   4. FILTERS SECTION\r\n   ========================================== */\r\n.filter-section {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.filter-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem 2rem;\r\n  max-width: 1000px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group .form-control,\r\n.filter-group .form-select {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n}\r\n\r\n.filter-group .form-select.bg-light {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n}\r\n\r\n/* Actions */\r\n.action-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1000px;\r\n}\r\n\r\n.btn-download {\r\n  background-color: #6c757d;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-download:hover { background-color: #5a6268; }\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn-search:hover { background-color: #f8d7da; }\r\n\r\n/* Modal Backdrop */\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n/* Modal Dialog */\r\n.modal-dialog {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal {\r\n  max-width: 450px;\r\n}\r\n\r\n.modal-header {\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header h5 {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.modal-body {\r\n  padding: 1.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n}\r\n\r\n/* ==========================================\r\n   5. TABLE SECTION\r\n   ========================================== */\r\n.table-section { width: 100%; }\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table thead {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table th:last-child { border-right: none; }\r\n\r\n.custom-table td {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table tbody tr:hover { background-color: #f8f9fa; }\r\n\r\n.text-center { text-align: center; }\r\n\r\n/* ==========================================\r\n   6. RESPONSIVE ADJUSTMENTS\r\n   ========================================== */\r\n@media (max-width: 992px) {\r\n  .filter-grid { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .filter-grid { grid-template-columns: 1fr; }\r\n  .action-row { flex-direction: column; align-items: flex-start; gap: 1rem; }\r\n  .search-input { width: 100%; }\r\n  .sidebar { width: 80px; } /* Collapse sidebar on mobile */\r\n  .nav-item span { display: none; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InstitutionRegisteredCounty, { className: "InstitutionRegisteredCounty", filePath: "app/pages/institution-registered-county/institution-registered-county.ts", lineNumber: 17 }); })();
