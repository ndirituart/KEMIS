import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search.pipe'; // for filtering
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function LearnersRegisteredPerClusterSubCounty_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r2);
} }
function LearnersRegisteredPerClusterSubCounty_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", c_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(c_r3);
} }
function LearnersRegisteredPerClusterSubCounty_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const county_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", county_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(county_r4);
} }
function LearnersRegisteredPerClusterSubCounty_option_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r5);
} }
function LearnersRegisteredPerClusterSubCounty_div_40_tr_19_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(11, "td")(12, "span", 20);
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
function LearnersRegisteredPerClusterSubCounty_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "table", 18)(2, "thead")(3, "tr")(4, "th");
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
    i0.ɵɵtemplate(19, LearnersRegisteredPerClusterSubCounty_div_40_tr_19_Template, 17, 10, "tr", 19);
    i0.ɵɵpipe(20, "search");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(20, 1, ctx_r6.learners, ctx_r6.tableSearch));
} }
function LearnersRegisteredPerClusterSubCounty_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtext(1, " No Records to display ");
    i0.ɵɵelementEnd();
} }
export class LearnersRegisteredPerClusterSubCounty {
    constructor() {
        // --- Filter Options ---
        this.institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Pre-Vocational', 'Vocational'];
        this.clusters = ['All', 'Cluster 1', 'Cluster 2', 'Cluster 3', 'Cluster 4'];
        this.counties = ['Nairobi',];
        this.subCounties = ["Embakasi Sub County",];
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
    static { this.ɵfac = function LearnersRegisteredPerClusterSubCounty_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LearnersRegisteredPerClusterSubCounty)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LearnersRegisteredPerClusterSubCounty, selectors: [["app-learners-registered-per-cluster-sub-county"]], decls: 43, vars: 14, consts: [["noDataTpl", ""], [1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "filter-grid"], [1, "filter-group"], [1, "form-select", "bg-light", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "filter-group", "search-btn-group"], [1, "btn-search", 3, "click"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel", "disabled"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [3, "value"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], [1, "badge-status"], [1, "no-data-message"]], template: function LearnersRegisteredPerClusterSubCounty_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "h2");
            i0.ɵɵtext(3, "List of learners registered in Sub County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "label");
            i0.ɵɵtext(8, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.institutionLevel, $event) || (ctx.filter.institutionLevel = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(10, LearnersRegisteredPerClusterSubCounty_option_10_Template, 2, 2, "option", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 5)(12, "label");
            i0.ɵɵtext(13, "Select Cluster");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.cluster, $event) || (ctx.filter.cluster = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(15, LearnersRegisteredPerClusterSubCounty_option_15_Template, 2, 2, "option", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 5)(17, "label");
            i0.ɵɵtext(18, "From");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 5)(21, "label");
            i0.ɵɵtext(22, "To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "input", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 5)(25, "label");
            i0.ɵɵtext(26, "County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.county, $event) || (ctx.filter.county = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(28, LearnersRegisteredPerClusterSubCounty_option_28_Template, 2, 2, "option", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "div", 5)(30, "label");
            i0.ɵɵtext(31, "Subcounty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.filter.subCounty, $event) || (ctx.filter.subCounty = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵtemplate(33, LearnersRegisteredPerClusterSubCounty_option_33_Template, 2, 2, "option", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "div", 10)(35, "button", 11);
            i0.ɵɵlistener("click", function LearnersRegisteredPerClusterSubCounty_Template_button_click_35_listener() { return ctx.onSearch(); });
            i0.ɵɵtext(36, "Search");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(37, "div", 12)(38, "div", 13)(39, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function LearnersRegisteredPerClusterSubCounty_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(40, LearnersRegisteredPerClusterSubCounty_div_40_Template, 21, 4, "div", 15)(41, LearnersRegisteredPerClusterSubCounty_ng_template_41_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const noDataTpl_r8 = i0.ɵɵreference(42);
            i0.ɵɵadvance(9);
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
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.DatePipe, SearchPipe], styles: ["\r\n\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr); \r\n  gap: 1.5rem 3rem; \r\n  max-width: 1200px;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  width: 100%;\r\n}\r\n\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-select.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n  color: #333;\r\n}\r\n\r\n\r\n.search-btn-group[_ngcontent-%COMP%] {\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding-left: 20%; \r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  width: 100%;\r\n  max-width: 150px;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%]:disabled {\r\n  background-color: #f8f9fa;\r\n  cursor: not-allowed;\r\n}\r\n\r\n\r\n.no-data-message[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 3rem 0;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n  background: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] {\r\n  background-color: #e9ecef;\r\n  color: #333;\r\n  padding: 0.3rem 0.6rem;\r\n  border-radius: 4px;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .filter-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .search-btn-group[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n  }\r\n  .search-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LearnersRegisteredPerClusterSubCounty, [{
        type: Component,
        args: [{ selector: 'app-learners-registered-per-cluster-sub-county', imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"page-container\">\n  \n  <!-- Page Title -->\n  <div class=\"page-header\">\n    <h2>List of learners registered in Sub County</h2>\n  </div>\n\n  <!-- Filters Section -->\n  <div class=\"filter-section\">\n    <div class=\"filter-grid\">\n      \n      <!-- Row 1 -->\n      <div class=\"filter-group\">\n        <label>Institution Level</label>\n        <select class=\"form-select bg-light\" [(ngModel)]=\"filter.institutionLevel\">\n          <option *ngFor=\"let level of institutionLevels\" [value]=\"level\">{{ level }}</option>\n        </select>\n      </div>\n\n      <div class=\"filter-group\">\n        <label>Select Cluster</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.cluster\">\n          <option *ngFor=\"let c of clusters\" [value]=\"c\">{{ c }}</option>\n        </select>\n      </div>\n\n      <!-- Row 2 -->\n      <div class=\"filter-group\">\n        <label>From</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n      </div>\n\n      <div class=\"filter-group\">\n        <label>To</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n      </div>\n\n      <!-- Row 3 -->\n      <div class=\"filter-group\">\n        <label>County</label>\n        <select class=\"form-select bg-light\" [(ngModel)]=\"filter.county\">\n          <option *ngFor=\"let county of counties\" [value]=\"county\">{{ county }}</option>\n        </select>\n      </div>\n\n      <div class=\"filter-group\">\n        <label>Subcounty</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.subCounty\">\n          <option *ngFor=\"let sub of subCounties\" [value]=\"sub\">{{ sub }}</option>\n        </select>\n      </div>\n\n      <!-- Search Button (Centered in the grid) -->\n      <div class=\"filter-group search-btn-group\">\n        <button class=\"btn-search\" (click)=\"onSearch()\">Search</button>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Table Section -->\n  <div class=\"table-section\">\n    \n    <!-- Table Search Bar -->\n    <div class=\"table-search-row\">\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\" [disabled]=\"learners.length === 0\">\n    </div>\n\n    <!-- Data Table (Only shows if there is data) -->\n    <div class=\"table-responsive\" *ngIf=\"learners.length > 0; else noDataTpl\">\n      <table class=\"custom-table\">\n        <thead>\n          <tr>\n            <th>Institution ID</th>\n            <th>Institution Name</th>\n            <th>Cluster</th>\n            <th>Sub County</th>\n            <th>Head of Institution</th>\n            <th>Status</th>\n            <th>Created At</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let inst of learners | search: tableSearch\">\n            <td>{{ inst.institutionId }}</td>\n            <td>{{ inst.institutionName }}</td>\n            <td>{{ inst.cluster }}</td>\n            <td>{{ inst.subCounty }}</td>\n            <td>{{ inst.headOfInstitution }}</td>\n            <td>\n              <span class=\"badge-status\">{{ inst.status }}</span>\n            </td>\n            <td>{{ inst.createdAt | date:'dd-MM-yyyy' }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- Empty State Template -->\n    <ng-template #noDataTpl>\n      <div class=\"no-data-message\">\n        No Records to display\n      </div>\n    </ng-template>\n\n  </div>\n</div>", styles: ["/* ============================================\r\n   BASE LAYOUT\r\n   ============================================ */\r\n.page-container {\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.page-header {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n/* ============================================\r\n   FILTERS SECTION\r\n   ============================================ */\r\n.filter-section {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr); \r\n  gap: 1.5rem 3rem; \r\n  max-width: 1200px;\r\n}\r\n\r\n.filter-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group .form-control,\r\n.filter-group .form-select {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  width: 100%;\r\n}\r\n\r\n/* Greyed out active filters */\r\n.filter-group .form-select.bg-light {\r\n  background-color: #eef2f6;\r\n  border-color: #d0d7de;\r\n  color: #333;\r\n}\r\n\r\n/* The Search button sits in the second column */\r\n.search-btn-group {\r\n  align-items: flex-start;\r\n  justify-content: flex-start;\r\n  padding-left: 20%; /* Push it to align roughly like the screenshot */\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  width: 100%;\r\n  max-width: 150px;\r\n}\r\n\r\n.btn-search:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n/* ============================================\r\n   TABLE SECTION & EMPTY STATE\r\n   ============================================ */\r\n.table-section {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.search-input:disabled {\r\n  background-color: #f8f9fa;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* Empty State Message */\r\n.no-data-message {\r\n  text-align: center;\r\n  padding: 3rem 0;\r\n  font-size: 1.1rem;\r\n  color: #333;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Data Table (Hidden until data is present) */\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n  background: white;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table thead {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table td {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table tbody tr:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n/* Badges */\r\n.badge-status {\r\n  background-color: #e9ecef;\r\n  color: #333;\r\n  padding: 0.3rem 0.6rem;\r\n  border-radius: 4px;\r\n  font-size: 0.8rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 992px) {\r\n  .filter-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .search-btn-group {\r\n    padding-left: 0;\r\n  }\r\n  .search-input {\r\n    width: 100%;\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LearnersRegisteredPerClusterSubCounty, { className: "LearnersRegisteredPerClusterSubCounty", filePath: "app/pages/learners-registered-per-cluster-sub-county/learners-registered-per-cluster-sub-county.ts", lineNumber: 15 }); })();
