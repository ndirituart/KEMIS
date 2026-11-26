import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LearnersInstitution_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r1);
} }
function LearnersInstitution_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const gender_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", gender_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(gender_r2);
} }
function LearnersInstitution_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const grade_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", grade_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(grade_r3);
} }
function LearnersInstitution_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r4);
} }
function LearnersInstitution_option_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r5);
} }
function LearnersInstitution_tr_83_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 23);
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "td");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "td");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const learner_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r7 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.uli);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.knecAssessmentNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.firstName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.middleName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.lastName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.grade);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.gender);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.isSne ? "YES" : "NO");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.isSne ? learner_r6.assistiveDeviceType : "NA");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(learner_r6.dateOfBirth);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(27, 14, learner_r6.createdAt, "dd-MM-yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(learner_r6.institutionName);
} }
function LearnersInstitution_tr_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 24);
    i0.ɵɵtext(2, "No learners found.");
    i0.ɵɵelementEnd()();
} }
export class LearnersInstitution {
    constructor() {
        this.http = inject(HttpClient);
        this.cdr = inject(ChangeDetectorRef);
        // --- Filter Data ---
        this.institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
        this.genders = ['All', 'Male', 'Female'];
        this.grades = ['All', 'PP1', 'PP2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
        this.counties = ['All', 'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kwale', 'Siaya', 'Nyeri'];
        this.subCounties = ['All', 'Embakasi', 'Westlands', 'Kibra', 'Kinango', 'Bondo', 'Nyeri Town'];
        // --- Filter Model ---
        this.filter = {
            institutionLevel: 'Junior School',
            gender: 'All',
            grade: 'All',
            fromDate: '',
            toDate: '',
            county: 'All',
            subCounty: 'All'
        };
        this.tableSearch = '';
        // --- Live Data ---
        this.allLearners = [];
        this.learners = [];
        this.institutionId = 18; // Default fallback
    }
    ngOnInit() {
        // Get the institutionId of the logged-in HOI
        const storedId = localStorage.getItem('institutionId');
        if (storedId) {
            this.institutionId = parseInt(storedId, 10);
        }
        this.fetchLearners();
    }
    fetchLearners() {
        // Fetch all active learners for this specific institution
        this.http.get(`http://localhost:5215/api/learners/institution/${this.institutionId}`).subscribe({
            next: (res) => {
                this.allLearners = res;
                this.learners = [...this.allLearners];
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Failed to load learners', err)
        });
    }
    onSearch() {
        let filtered = this.allLearners;
        if (this.filter.gender !== 'All') {
            filtered = filtered.filter(l => l.gender === this.filter.gender);
        }
        if (this.filter.grade !== 'All') {
            filtered = filtered.filter(l => l.grade === this.filter.grade);
        }
        if (this.filter.county !== 'All') {
            filtered = filtered.filter(l => l.countyOfBirth === this.filter.county);
        }
        if (this.filter.subCounty !== 'All') {
            filtered = filtered.filter(l => l.subCountyOfBirth === this.filter.subCounty);
        }
        this.learners = filtered;
        this.cdr.detectChanges();
    }
    onDownload() {
        console.log('Downloading data...');
    }
    static { this.ɵfac = function LearnersInstitution_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LearnersInstitution)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LearnersInstitution, selectors: [["app-learners-institution"]], decls: 86, vars: 18, consts: [[1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "filter-grid"], [1, "filter-group"], [1, "form-select", "bg-light", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-group", "empty-spacer"], [1, "filter-group", "align-end"], [1, "btn-search", 3, "click"], [1, "action-row"], [1, "btn-download", 3, "click"], [1, "bi", "bi-caret-down-fill", "ms-1"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "text-center"], ["colspan", "14", 1, "text-center", "py-4"]], template: function LearnersInstitution_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "Learner List in the Institution");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label");
            i0.ɵɵtext(8, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_select_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.institutionLevel, $event) || (ctx.filter.institutionLevel = $event); return $event; });
            i0.ɵɵtemplate(10, LearnersInstitution_option_10_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 4)(12, "label");
            i0.ɵɵtext(13, "Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_select_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.gender, $event) || (ctx.filter.gender = $event); return $event; });
            i0.ɵɵtemplate(15, LearnersInstitution_option_15_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 4)(17, "label");
            i0.ɵɵtext(18, "Grade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "select", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_select_ngModelChange_19_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.grade, $event) || (ctx.filter.grade = $event); return $event; });
            i0.ɵɵtemplate(20, LearnersInstitution_option_20_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 4)(22, "label");
            i0.ɵɵtext(23, "From");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_input_ngModelChange_24_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 4)(26, "label");
            i0.ɵɵtext(27, "To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_input_ngModelChange_28_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 4)(30, "label");
            i0.ɵɵtext(31, "Learner County of Birth");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "select", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_select_ngModelChange_32_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.county, $event) || (ctx.filter.county = $event); return $event; });
            i0.ɵɵtemplate(33, LearnersInstitution_option_33_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 4)(35, "label");
            i0.ɵɵtext(36, "Learner Sub-County of Birth");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "select", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_select_ngModelChange_37_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.subCounty, $event) || (ctx.filter.subCounty = $event); return $event; });
            i0.ɵɵtemplate(38, LearnersInstitution_option_38_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(39, "div", 9);
            i0.ɵɵelementStart(40, "div", 10)(41, "button", 11);
            i0.ɵɵlistener("click", function LearnersInstitution_Template_button_click_41_listener() { return ctx.onSearch(); });
            i0.ɵɵtext(42, "Search");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "div", 12)(44, "button", 13);
            i0.ɵɵlistener("click", function LearnersInstitution_Template_button_click_44_listener() { return ctx.onDownload(); });
            i0.ɵɵtext(45, " Download ");
            i0.ɵɵelement(46, "i", 14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(47, "div", 15)(48, "div", 16)(49, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersInstitution_Template_input_ngModelChange_49_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "div", 18)(51, "table", 19)(52, "thead")(53, "tr")(54, "th");
            i0.ɵɵtext(55, "S. No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "th");
            i0.ɵɵtext(57, "Unique Learner Identifier (ULI)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "th");
            i0.ɵɵtext(59, "KCPE/KCSE Index Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "th");
            i0.ɵɵtext(61, "Learners First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "th");
            i0.ɵɵtext(63, "Learners Middle Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "th");
            i0.ɵɵtext(65, "Learners Last Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "th");
            i0.ɵɵtext(67, "Institution");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "th");
            i0.ɵɵtext(69, "Grade");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "th");
            i0.ɵɵtext(71, "Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "th");
            i0.ɵɵtext(73, "SNE Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "th");
            i0.ɵɵtext(75, "SNE Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "th");
            i0.ɵɵtext(77, "Age");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "th");
            i0.ɵɵtext(79, "Created Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "th");
            i0.ɵɵtext(81, "Created By");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(82, "tbody");
            i0.ɵɵtemplate(83, LearnersInstitution_tr_83_Template, 30, 17, "tr", 20);
            i0.ɵɵpipe(84, "search");
            i0.ɵɵtemplate(85, LearnersInstitution_tr_85_Template, 3, 0, "tr", 21);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.institutionLevel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.institutionLevels);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.gender);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.genders);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.grade);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.grades);
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
            i0.ɵɵadvance(11);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(34);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(84, 15, ctx.learners, ctx.tableSearch));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.learners.length === 0);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.DatePipe, SearchPipe], styles: ["\r\n\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  min-height: 100%;\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n\r\n.filter-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem 2rem;\r\n  max-width: 1200px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-select.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n}\r\n\r\n.align-end[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n}\r\n\r\n\r\n.action-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1200px;\r\n}\r\n\r\n.btn-download[_ngcontent-%COMP%] {\r\n  background-color: #6c757d;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-download[_ngcontent-%COMP%]:hover {\r\n  background-color: #5a6268;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  width: 100%;\r\n  max-width: 150px;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n  border-right: none;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .filter-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .action-row[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .filter-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .search-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LearnersInstitution, [{
        type: Component,
        args: [{ selector: 'app-learners-institution', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"page-container\">\n\n  <!-- Page Title -->\n  <div class=\"page-header\">\n    <h2>Learner List in the Institution</h2>\n  </div>\n\n  <!-- Filters Section -->\n  <div class=\"filter-section\">\n    <div class=\"filter-grid\">\n\n      <!-- Institution Level -->\n      <div class=\"filter-group\">\n        <label>Institution Level</label>\n        <select class=\"form-select bg-light\" [(ngModel)]=\"filter.institutionLevel\">\n          <option *ngFor=\"let level of institutionLevels\" [value]=\"level\">{{ level }}</option>\n        </select>\n      </div>\n\n      <!-- Gender -->\n      <div class=\"filter-group\">\n        <label>Gender</label>\n        <select class=\"form-select bg-light\" [(ngModel)]=\"filter.gender\">\n          <option *ngFor=\"let gender of genders\" [value]=\"gender\">{{ gender }}</option>\n        </select>\n      </div>\n\n      <!-- Grade -->\n      <div class=\"filter-group\">\n        <label>Grade</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.grade\">\n          <option *ngFor=\"let grade of grades\" [value]=\"grade\">{{ grade }}</option>\n        </select>\n      </div>\n\n      <!-- From Date -->\n      <div class=\"filter-group\">\n        <label>From</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n      </div>\n\n      <!-- To Date -->\n      <div class=\"filter-group\">\n        <label>To</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n      </div>\n\n      <!-- County -->\n      <div class=\"filter-group\">\n        <label>Learner County of Birth</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.county\">\n          <option *ngFor=\"let c of counties\" [value]=\"c\">{{ c }}</option>\n        </select>\n      </div>\n\n      <!-- Subcounty -->\n      <div class=\"filter-group\">\n        <label>Learner Sub-County of Birth</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.subCounty\">\n          <option *ngFor=\"let sub of subCounties\" [value]=\"sub\">{{ sub }}</option>\n        </select>\n      </div>\n\n      <!-- Spacer and Search Button -->\n      <div class=\"filter-group empty-spacer\"></div>\n\n      <div class=\"filter-group align-end\">\n        <button class=\"btn-search\" (click)=\"onSearch()\">Search</button>\n      </div>\n\n    </div>\n\n    <!-- Download Button -->\n    <div class=\"action-row\">\n      <button class=\"btn-download\" (click)=\"onDownload()\">\n        Download <i class=\"bi bi-caret-down-fill ms-1\"></i>\n      </button>\n    </div>\n  </div>\n\n  <!-- Table Section -->\n  <div class=\"table-section\">\n\n    <!-- Table Search Bar -->\n    <div class=\"table-search-row\">\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\n    </div>\n\n    <!-- Data Table Wrapper -->\n    <div class=\"table-responsive\">\n      <table class=\"custom-table\">\n        <thead>\n          <tr>\n            <th>S. No</th>\n            <th>Unique Learner Identifier (ULI)</th>\n            <th>KCPE/KCSE Index Number</th>\n            <th>Learners First Name</th>\n            <th>Learners Middle Name</th>\n            <th>Learners Last Name</th>\n            <th>Institution</th>\n            <th>Grade</th>\n            <th>Gender</th>\n            <th>SNE Status</th>\n            <th>SNE Type</th>\n            <th>Age</th>\n            <th>Created Date</th>\n            <th>Created By</th>\n          </tr>\n        </thead>\n        <tbody>\n          <!-- Filter pipe applied here -->\n          <tr *ngFor=\"let learner of learners | search: tableSearch; let i = index\">\n            <td class=\"text-center\">{{ i + 1 }}</td>\n            <td>{{ learner.uli }}</td>\n            <td>{{ learner.knecAssessmentNumber }}</td>\n            <td>{{ learner.firstName }}</td>\n            <td>{{ learner.middleName }}</td>\n            <td>{{ learner.lastName }}</td>\n            <td>{{ learner.institutionName }}</td>\n            <td>{{ learner.grade }}</td>\n            <td>{{ learner.gender }}</td>\n            <td>{{ learner.isSne ? 'YES' : 'NO' }}</td>\n            <td>{{ learner.isSne ? learner.assistiveDeviceType : 'NA' }}</td>\n            <td>{{ learner.dateOfBirth }}</td>\n            <td>{{ learner.createdAt | date:'dd-MM-yyyy' }}</td>\n            <td>{{ learner.institutionName }}</td>\n          </tr>\n          <tr *ngIf=\"learners.length === 0\">\n            <td colspan=\"14\" class=\"text-center py-4\">No learners found.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>\n", styles: ["/* ============================================\r\n   BASE LAYOUT\r\n   ============================================ */\r\n.page-container {\r\n  background-color: #ffffff;\r\n  min-height: 100%;\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.page-header {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n/* ============================================\r\n   FILTERS SECTION\r\n   ============================================ */\r\n.filter-section {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n/* 3 column grid as seen in the screenshot */\r\n.filter-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem 2rem;\r\n  max-width: 1200px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group .form-control,\r\n.filter-group .form-select {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n}\r\n\r\n/* Greyed out locked filters */\r\n.filter-group .form-select.bg-light {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n}\r\n\r\n.align-end {\r\n  justify-content: flex-end;\r\n}\r\n\r\n/* Actions */\r\n.action-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1200px;\r\n}\r\n\r\n.btn-download {\r\n  background-color: #6c757d;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-download:hover {\r\n  background-color: #5a6268;\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  width: 100%;\r\n  max-width: 150px;\r\n}\r\n\r\n.btn-search:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n/* ============================================\r\n   TABLE SECTION\r\n   ============================================ */\r\n.table-section {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Custom Blue Table Header */\r\n.custom-table thead {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table th:last-child {\r\n  border-right: none;\r\n}\r\n\r\n.custom-table td {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table tbody tr:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 992px) {\r\n  .filter-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .action-row {\r\n    margin-top: 1rem;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .filter-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .search-input {\r\n    width: 100%;\r\n  }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LearnersInstitution, { className: "LearnersInstitution", filePath: "app/pages/learners-institution/learners-institution.ts", lineNumber: 14 }); })();
