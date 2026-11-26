import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; // for filtering
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LearnersRegisteredPerCluster_option_96_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r2);
} }
function LearnersRegisteredPerCluster_option_101_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r3);
} }
function LearnersRegisteredPerCluster_option_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const county_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", county_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(county_r4);
} }
function LearnersRegisteredPerCluster_option_119_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r5);
} }
function LearnersRegisteredPerCluster_div_126_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
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
    i0.ɵɵelementStart(11, "td")(12, "span", 41);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const inst_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r6.institutionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r6.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r6.cluster);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r6.subCounty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r6.headOfInstitution);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(inst_r6.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 7, inst_r6.createdAt, "dd-MM-yyyy"));
} }
function LearnersRegisteredPerCluster_div_126_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "table", 39)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Institution ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Institution Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Cluster");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Sub County");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Head of Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Created At");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "tbody");
    i0.ɵɵtemplate(19, LearnersRegisteredPerCluster_div_126_tr_19_Template, 17, 10, "tr", 40);
    i0.ɵɵpipe(20, "search");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(20, 1, ctx_r6.learners, ctx_r6.tableSearch));
} }
function LearnersRegisteredPerCluster_ng_template_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵtext(1, " No Records to display ");
    i0.ɵɵelementEnd();
} }
export class LearnersRegisteredPerCluster {
    constructor() {
        // --- Filter Options ---
        this.institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
        this.clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'];
        this.counties = ['Nairobi',];
        this.subCounties = ['All',
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
        ];
        // --- Filter Model ---
        this.filter = {
            institutionLevel: 'Pre-Vocational',
            cluster: 'All',
            fromDate: '',
            toDate: '',
            county: 'Nairobi',
            subCounty: 'All'
        };
        this.tableSearch = '';
        //Empty array to hold learners data fetched from backend
        this.learners = [];
    }
    onSearch() {
        console.log('Searching with filters:', this.filter);
        // TODO: Fetch from backend using this.filter
    }
    static { this.ɵfac = function LearnersRegisteredPerCluster_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LearnersRegisteredPerCluster)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LearnersRegisteredPerCluster, selectors: [["app-learners-registered-per-cluster"]], decls: 129, vars: 14, consts: [["noDataTpl", ""], [1, "dashboard-wrapper"], [1, "sidebar"], [1, "sidebar-nav"], [1, "nav-item", "active"], [1, "bi", "bi-grid-fill"], [1, "nav-item"], [1, "bi", "bi-search"], [1, "nav-parent", "has-children"], [1, "bi", "bi-clipboard-check"], [1, "nav-children"], ["href", "/institution-registered-county"], ["href", "/learners-registered-county"], ["href", "/learners-per-grade-county"], ["href", "/pending-institution-county"], ["href", "/institutions-onboarded-per-cluster"], ["href", "/learners-registered-per-cluster"], [1, "bi", "bi-pencil-square"], ["href", "#"], [1, "nav-item", "text-danger", "mt-4"], [1, "bi", "bi-book"], [1, "main-content"], [1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "filter-grid"], [1, "filter-group"], [1, "form-select", "bg-light", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-group", "search-btn-group"], [1, "btn-search", 3, "click"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [3, "value"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], [1, "badge-status"], [1, "no-data-message"]], template: function LearnersRegisteredPerCluster_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "aside", 2)(2, "nav", 3)(3, "a", 4);
            i0.ɵɵelement(4, "i", 5);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 6);
            i0.ɵɵelement(8, "i", 7);
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10, "Menu Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 8)(12, "a", 6);
            i0.ɵɵelement(13, "i", 9);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "KEMIS Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "ul", 10)(17, "li")(18, "a", 11);
            i0.ɵɵtext(19, "Institutions onboarded in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "li")(21, "a", 12);
            i0.ɵɵtext(22, "Learner list in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "li")(24, "a", 13);
            i0.ɵɵtext(25, "Learners Per Grade in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "li")(27, "a", 14);
            i0.ɵɵtext(28, "Pending Institutions onboarding");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "li")(30, "a", 15);
            i0.ɵɵtext(31, "Institution Onboarding per Cluster");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "li")(33, "a", 16);
            i0.ɵɵtext(34, "Learners Registered Per Cluster");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "div", 8)(36, "a", 6);
            i0.ɵɵelement(37, "i", 17);
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "ul", 10)(41, "li")(42, "a", 18);
            i0.ɵɵtext(43, "Learner Transfer approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "li")(45, "a", 18);
            i0.ɵɵtext(46, "Learner Admissions");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "li")(48, "a", 18);
            i0.ɵɵtext(49, "Institution Update Request");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "li")(51, "a", 18);
            i0.ɵɵtext(52, "User Registration");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(53, "a", 19);
            i0.ɵɵelement(54, "i", 20);
            i0.ɵɵelementStart(55, "span");
            i0.ɵɵtext(56, "Escalations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "div", 8)(58, "a", 6);
            i0.ɵɵelement(59, "i", 17);
            i0.ɵɵelementStart(60, "span");
            i0.ɵɵtext(61, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "ul", 10)(63, "li")(64, "a", 18);
            i0.ɵɵtext(65, "Institution Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "li")(67, "a", 18);
            i0.ɵɵtext(68, "Learner Transfer Appeal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "li")(70, "a", 18);
            i0.ɵɵtext(71, "System Admin User Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "li")(73, "a", 18);
            i0.ɵɵtext(74, "Certificate Issuance recommendation");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "li")(76, "a", 18);
            i0.ɵɵtext(77, "Institution Details Update Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(78, "li")(79, "a", 18);
            i0.ɵɵtext(80, "Institution Email Update");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(81, "a", 19);
            i0.ɵɵelement(82, "i", 20);
            i0.ɵɵelementStart(83, "span");
            i0.ɵɵtext(84, "User Manual");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(85, "main", 21)(86, "div", 22)(87, "div", 23)(88, "h2");
            i0.ɵɵtext(89, "List of learners registered per Cluster");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "div", 24)(91, "div", 25)(92, "div", 26)(93, "label");
            i0.ɵɵtext(94, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(95, "select", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_select_ngModelChange_95_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.institutionLevel, $event) || (ctx.filter.institutionLevel = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(96, LearnersRegisteredPerCluster_option_96_Template, 2, 2, "option", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(97, "div", 26)(98, "label");
            i0.ɵɵtext(99, "Select Cluster");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(100, "select", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_select_ngModelChange_100_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.cluster, $event) || (ctx.filter.cluster = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(101, LearnersRegisteredPerCluster_option_101_Template, 2, 2, "option", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(102, "div", 26)(103, "label");
            i0.ɵɵtext(104, "From");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "input", 30);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_input_ngModelChange_105_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(106, "div", 26)(107, "label");
            i0.ɵɵtext(108, "To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "input", 30);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_input_ngModelChange_109_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(110, "div", 26)(111, "label");
            i0.ɵɵtext(112, "County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(113, "select", 27);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_select_ngModelChange_113_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.county, $event) || (ctx.filter.county = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(114, LearnersRegisteredPerCluster_option_114_Template, 2, 2, "option", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(115, "div", 26)(116, "label");
            i0.ɵɵtext(117, "Subcounty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "select", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_select_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.subCounty, $event) || (ctx.filter.subCounty = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(119, LearnersRegisteredPerCluster_option_119_Template, 2, 2, "option", 28);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(120, "div", 31)(121, "button", 32);
            i0.ɵɵlistener("click", function LearnersRegisteredPerCluster_Template_button_click_121_listener() { return ctx.onSearch(); });
            i0.ɵɵtext(122, "Search");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(123, "div", 33)(124, "div", 34)(125, "input", 35);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerCluster_Template_input_ngModelChange_125_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(126, LearnersRegisteredPerCluster_div_126_Template, 21, 4, "div", 36)(127, LearnersRegisteredPerCluster_ng_template_127_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            const noDataTpl_r8 = i0.ɵɵreference(128);
            i0.ɵɵadvance(95);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.institutionLevel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.institutionLevels);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.cluster);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.clusters);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.fromDate);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.toDate);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.county);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.counties);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.subCounty);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.subCounties);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵproperty("disabled", ctx.learners.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.learners.length > 0)("ngIfElse", noDataTpl_r8);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.DatePipe, SearchPipe], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px;\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  width: 100%;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1.5rem 3rem;\r\n  max-width: 1200px;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-select.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n  color: #333;\r\n}\r\n\r\n\r\n.search-btn-group[_ngcontent-%COMP%] {\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding-left: 20%; \r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  width: 100%;\r\n  max-width: 150px;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%]:disabled {\r\n  background-color: #f8f9fa;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.no-data-message[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 3rem 0;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n  background: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] {\r\n  background-color: #e9ecef;\r\n  color: #333;\r\n  padding: 0.3rem 0.6rem;\r\n  border-radius: 4px;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .filter-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .search-btn-group[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n  }\r\n  .search-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LearnersRegisteredPerCluster, [{
        type: Component,
        args: [{ selector: 'app-learners-registered-per-cluster', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"dashboard-wrapper\">\n\n  <!-- SIDEBAR -->\n  <aside class=\"sidebar\">\n    <nav class=\"sidebar-nav\">\n      <!-- 1. Dashboard -->\n      <a class=\"nav-item active\">\n        <i class=\"bi bi-grid-fill\"></i>\n        <span>Dashboard</span>\n      </a>\n\n      <!-- 2. Menu Search -->\n      <a class=\"nav-item\">\n        <i class=\"bi bi-search\"></i>\n        <span>Menu Search</span>\n      </a>\n\n      <!-- 3. KEMIS Reports -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-clipboard-check\"></i>\n          <span>KEMIS Reports</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"/institution-registered-county\">Institutions onboarded in the County</a></li>\n          <li><a href=\"/learners-registered-county\">Learner list in the County</a></li>\n          <li><a href=\"/learners-per-grade-county\">Learners Per Grade in the County</a></li>\n          <li><a href=\"/pending-institution-county\">Pending Institutions onboarding</a></li>\n          <li><a href=\"/institutions-onboarded-per-cluster\">Institution Onboarding per Cluster</a></li>\n          <li><a href=\"/learners-registered-per-cluster\">Learners Registered Per Cluster</a></li>\n        </ul>\n      </div>\n\n      <!-- 4. Registration -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"#\">Learner Transfer approval</a></li>\n          <li><a href=\"#\">Learner Admissions</a></li>\n          <li><a href=\"#\">Institution Update Request</a></li>\n          <li><a href=\"#\">User Registration</a></li>\n        </ul>\n      </div>\n\n      <!-- 5. Escalations -->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>Escalations</span>\n      </a>\n\n      <!-- 6. Admin Registration -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"#\">Institution Approval</a></li>\n          <li><a href=\"#\">Learner Transfer Appeal</a></li>\n          <li><a href=\"#\">System Admin User Registration</a></li>\n          <li><a href=\"#\">Certificate Issuance recommendation</a></li>\n          <li><a href=\"#\">Institution Details Update Approval</a></li>\n          <li><a href=\"#\">Institution Email Update</a></li>\n        </ul>\n      </div>\n\n      <!-- 7. User Manual -->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>User Manual</span>\n      </a>\n    </nav>\n  </aside>\n\n  <!-- MAIN CONTENT AREA -->\n  <main class=\"main-content\">\n    <div class=\"page-container\">\n\n      <!-- Page Title -->\n      <div class=\"page-header\">\n        <h2>List of learners registered per Cluster</h2>\n      </div>\n\n      <!-- Filters Section -->\n      <div class=\"filter-section\">\n        <div class=\"filter-grid\">\n\n          <!-- Row 1 -->\n          <div class=\"filter-group\">\n            <label>Institution Level</label>\n            <select class=\"form-select bg-light\" [(ngModel)]=\"filter.institutionLevel\">\n              <option *ngFor=\"let level of institutionLevels\" [value]=\"level\">{{ level }}</option>\n            </select>\n          </div>\n\n          <div class=\"filter-group\">\n            <label>Select Cluster</label>\n            <select class=\"form-select\" [(ngModel)]=\"filter.cluster\">\n              <option *ngFor=\"let c of clusters\" [value]=\"c\">{{ c }}</option>\n            </select>\n          </div>\n\n          <!-- Row 2 -->\n          <div class=\"filter-group\">\n            <label>From</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n          </div>\n\n          <div class=\"filter-group\">\n            <label>To</label>\n            <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n          </div>\n\n          <!-- Row 3 -->\n          <div class=\"filter-group\">\n            <label>County</label>\n            <select class=\"form-select bg-light\" [(ngModel)]=\"filter.county\">\n              <option *ngFor=\"let county of counties\" [value]=\"county\">{{ county }}</option>\n            </select>\n          </div>\n\n          <div class=\"filter-group\">\n            <label>Subcounty</label>\n            <select class=\"form-select\" [(ngModel)]=\"filter.subCounty\">\n              <option *ngFor=\"let sub of subCounties\" [value]=\"sub\">{{ sub }}</option>\n            </select>\n          </div>\n\n          <!-- Search Button (Centered in the grid) -->\n          <div class=\"filter-group search-btn-group\">\n            <button class=\"btn-search\" (click)=\"onSearch()\">Search</button>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- Table Section -->\n      <div class=\"table-section\">\n\n        <!-- Table Search Bar -->\n        <div class=\"table-search-row\">\n          <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\" [disabled]=\"learners.length === 0\">\n        </div>\n\n        <!-- Data Table (Only shows if there is data) -->\n        <div class=\"table-responsive\" *ngIf=\"learners.length > 0; else noDataTpl\">\n          <table class=\"custom-table\">\n            <thead>\n              <tr>\n                <th>Institution ID</th>\n                <th>Institution Name</th>\n                <th>Cluster</th>\n                <th>Sub County</th>\n                <th>Head of Institution</th>\n                <th>Status</th>\n                <th>Created At</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let inst of learners | search: tableSearch\">\n                <td>{{ inst.institutionId }}</td>\n                <td>{{ inst.institutionName }}</td>\n                <td>{{ inst.cluster }}</td>\n                <td>{{ inst.subCounty }}</td>\n                <td>{{ inst.headOfInstitution }}</td>\n                <td>\n                  <span class=\"badge-status\">{{ inst.status }}</span>\n                </td>\n                <td>{{ inst.createdAt | date:'dd-MM-yyyy' }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <!-- Empty State Template -->\n        <ng-template #noDataTpl>\n          <div class=\"no-data-message\">\n            No Records to display\n          </div>\n        </ng-template>\n\n      </div>\n    </div>\n  </main>\n</div>\n", styles: ["/*Sidebar*/\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* The Dropdown Menu (Hidden by default IMPORTANT!) */\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children li a:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px;\r\n}\r\n\r\n.nav-parent.has-children:hover .nav-children {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children:hover > .nav-item {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n/* ============================================\r\n   BASE LAYOUT\r\n   ============================================ */\r\n.main-content {\r\n  flex-grow: 1;\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n}\r\n\r\n.page-container {\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  width: 100%;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n\r\n.page-header {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n/* ============================================\r\n   FILTERS SECTION\r\n   ============================================ */\r\n.filter-section {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1.5rem 3rem;\r\n  max-width: 1200px;\r\n}\r\n\r\n.filter-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group .form-control,\r\n.filter-group .form-select {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  width: 100%;\r\n}\r\n\r\n/* Greyed out active filters */\r\n.filter-group .form-select.bg-light {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n  color: #333;\r\n}\r\n\r\n/* The Search button sits in the second column */\r\n.search-btn-group {\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding-left: 20%; /* Push it to align roughly like the screenshot */\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  width: 100%;\r\n  max-width: 150px;\r\n}\r\n\r\n.btn-search:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n/* ============================================\r\n   TABLE SECTION & EMPTY STATE\r\n   ============================================ */\r\n.table-section {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.search-input:disabled {\r\n  background-color: #f8f9fa;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Empty State Message */\r\n.no-data-message {\r\n  text-align: center;\r\n  padding: 3rem 0;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Data Table (Hidden until data is present) */\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n  background: white;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table thead {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table td {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table tbody tr:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n/* Badges */\r\n.badge-status {\r\n  background-color: #e9ecef;\r\n  color: #333;\r\n  padding: 0.3rem 0.6rem;\r\n  border-radius: 4px;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 992px) {\r\n  .filter-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .search-btn-group {\r\n    padding-left: 0;\r\n  }\r\n  .search-input {\r\n    width: 100%;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LearnersRegisteredPerCluster, { className: "LearnersRegisteredPerCluster", filePath: "app/pages/learners-registered-per-cluster/learners-registered-per-cluster.ts", lineNumber: 13 }); })();
