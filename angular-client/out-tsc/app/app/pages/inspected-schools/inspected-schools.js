import { Component, input, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = a0 => ({ "badge-review": a0 });
function InspectedSchools_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r1);
} }
function InspectedSchools_tr_53_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "span", 20);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const school_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i_r3 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.certificateNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.mobileNo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.institutionType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.institutionLevel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 11, school_r2.createdAt, "dd-MM-yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(14, _c0, school_r2.status === "Approved"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", school_r2.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.constituency);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.emailId);
} }
function InspectedSchools_tr_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.pending() ? "No pending inspections found." : "No inspected schools found.");
} }
export class InspectedSchools {
    constructor() {
        this.http = inject(HttpClient);
        this.cdr = inject(ChangeDetectorRef);
        this.notification = inject(NotificationService);
        this.pending = input(false, ...(ngDevMode ? [{ debugName: "pending" }] : /* istanbul ignore next */ []));
        // Filters
        this.institutionLevels = ['All', 'Primary School Education', 'Junior School', 'Senior School'];
        this.filter = {
            institutionLevel: 'All',
            fromDate: '',
            toDate: ''
        };
        this.tableSearch = '';
        // Data
        this.allSchools = [];
        this.schools = [];
    }
    ngOnInit() {
        this.fetchSchools();
    }
    fetchSchools() {
        const endpoint = this.pending() ? 'pending-inspections' : 'inspected-schools';
        this.http.get(`http://localhost:5215/api/sub-county-quality-assurance/${endpoint}`).subscribe({
            next: (res) => {
                this.allSchools = res.schools || [];
                this.schools = [...this.allSchools];
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Failed to fetch SCQASO schools', err);
                this.notification.showError('Failed to fetch schools');
            }
        });
    }
    onSearch() {
        let filtered = this.allSchools;
        if (this.filter.institutionLevel !== 'All') {
            filtered = filtered.filter(s => s.institutionLevel === this.filter.institutionLevel);
        }
        if (this.filter.fromDate) {
            filtered = filtered.filter(s => new Date(s.createdAt) >= new Date(this.filter.fromDate));
        }
        if (this.filter.toDate) {
            filtered = filtered.filter(s => new Date(s.createdAt) <= new Date(this.filter.toDate));
        }
        this.schools = filtered;
        this.cdr.detectChanges();
    }
    onDownload() {
        if (this.schools.length === 0) {
            this.notification.showError('No data to download.');
            return;
        }
        const headers = ['S.No', 'Cert No', 'Institution Name', 'Phone', 'Type', 'Level', 'Created Date', 'Status', 'Constituency', 'Email'];
        const csvData = this.schools.map((s, index) => [
            index + 1,
            s.certificateNumber || 'N/A',
            s.institutionName,
            s.mobileNo || 'N/A',
            s.institutionType || 'N/A',
            s.institutionLevel || 'N/A',
            new Date(s.createdAt).toLocaleDateString(),
            s.status,
            s.constituency || 'N/A',
            s.emailId || 'N/A'
        ]);
        const csvContent = [
            headers.join(','),
            ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = this.pending() ? 'Pending_Inspections.csv' : 'Inspected_Schools.csv';
        link.click();
    }
    static { this.ɵfac = function InspectedSchools_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InspectedSchools)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InspectedSchools, selectors: [["app-inspected-schools"]], inputs: { pending: [1, "pending"] }, decls: 56, vars: 11, consts: [[1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "filter-grid"], [1, "filter-group"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "action-row"], [1, "btn-download", 3, "click"], [1, "bi", "bi-caret-down-fill", "ms-1"], [1, "btn-search", 3, "click"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], [1, "badge-status", 3, "ngClass"], ["colspan", "10", 1, "text-center", "py-4"]], template: function InspectedSchools_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label");
            i0.ɵɵtext(8, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function InspectedSchools_Template_select_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.institutionLevel, $event) || (ctx.filter.institutionLevel = $event); return $event; });
            i0.ɵɵtemplate(10, InspectedSchools_option_10_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 4)(12, "label");
            i0.ɵɵtext(13, "From");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function InspectedSchools_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 4)(16, "label");
            i0.ɵɵtext(17, "To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function InspectedSchools_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 8)(20, "button", 9);
            i0.ɵɵlistener("click", function InspectedSchools_Template_button_click_20_listener() { return ctx.onDownload(); });
            i0.ɵɵtext(21, " Download ");
            i0.ɵɵelement(22, "i", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 11);
            i0.ɵɵlistener("click", function InspectedSchools_Template_button_click_23_listener() { return ctx.onSearch(); });
            i0.ɵɵtext(24, "Search");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 12)(26, "div", 13)(27, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function InspectedSchools_Template_input_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "div", 15)(29, "table", 16)(30, "thead")(31, "tr")(32, "th");
            i0.ɵɵtext(33, "S. No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "th");
            i0.ɵɵtext(35, "Institution Certificate Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "th");
            i0.ɵɵtext(37, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "th");
            i0.ɵɵtext(39, "Institution Telephone Number/Landline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "th");
            i0.ɵɵtext(41, "Institution Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "th");
            i0.ɵɵtext(43, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "th");
            i0.ɵɵtext(45, "Created Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "th");
            i0.ɵɵtext(47, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "th");
            i0.ɵɵtext(49, "Constituency");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "th");
            i0.ɵɵtext(51, "Institution Email");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "tbody");
            i0.ɵɵtemplate(53, InspectedSchools_tr_53_Template, 23, 16, "tr", 17);
            i0.ɵɵpipe(54, "search");
            i0.ɵɵtemplate(55, InspectedSchools_tr_55_Template, 3, 1, "tr", 18);
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.pending() ? "Pending Inspections" : "List of Inspected Schools");
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.institutionLevel);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.institutionLevels);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.fromDate);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.toDate);
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(26);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(54, 8, ctx.schools, ctx.tableSearch));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.schools.length === 0);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i1.DatePipe, SearchPipe], styles: ["\r\n.page-container[_ngcontent-%COMP%] { padding: 2rem; font-family: system-ui, sans-serif; background: #f8f9fa; min-height: 100vh;}\r\n.page-header[_ngcontent-%COMP%] { border-bottom: 1px solid #e0e0e0; padding-bottom: 1rem; margin-bottom: 2rem; }\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 1.25rem; font-weight: 700; color: #333; margin: 0; }\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] { margin-bottom: 2rem; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);}\r\n.filter-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }\r\n.filter-group[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 0.5rem; }\r\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { font-size: 0.9rem; color: #555; font-weight: 500; }\r\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], .filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] { border-radius: 6px; border: 1px solid #ccc; padding: 0.6rem; font-size: 0.95rem; }\r\n\r\n.action-row[_ngcontent-%COMP%] { display: flex; justify-content: space-between; align-items: center; }\r\n.btn-download[_ngcontent-%COMP%] { background-color: #6c757d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 600; cursor: pointer; }\r\n.btn-search[_ngcontent-%COMP%] { background-color: white; color: #dc3545; border: 1px solid #dc3545; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 600; cursor: pointer; }\r\n.btn-search[_ngcontent-%COMP%]:hover { background-color: #f8d7da; }\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] { background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }\r\n.table-search-row[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; margin-bottom: 1rem; }\r\n.search-input[_ngcontent-%COMP%] { width: 300px; border-radius: 6px; border: 1px solid #ccc; padding: 0.5rem 1rem; }\r\n.table-responsive[_ngcontent-%COMP%] { width: 100%; overflow-x: auto; border: 1px solid #ddd; border-radius: 8px; }\r\n.custom-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; white-space: nowrap; }\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] { background-color: #00b4d8; color: white; }\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { padding: 0.8rem 1rem; text-align: left; font-size: 0.85rem; border-right: 1px solid rgba(255,255,255,0.2); }\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 0.8rem 1rem; border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-size: 0.9rem; color: #333; }\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover { background-color: #f1f8fa; }\r\n\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n}\r\n\r\n.badge-review[_ngcontent-%COMP%] {\r\n  background-color: #28a745; \r\n  color: #fff;\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InspectedSchools, [{
        type: Component,
        args: [{ selector: 'app-inspected-schools', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"page-container\">\n  <div class=\"page-header\">\n    <h2>{{ pending() ? 'Pending Inspections' : 'List of Inspected Schools' }}</h2>\n  </div>\n\n  <!-- Filters -->\n  <div class=\"filter-section\">\n    <div class=\"filter-grid\">\n      <div class=\"filter-group\">\n        <label>Institution Level</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.institutionLevel\">\n          <option *ngFor=\"let level of institutionLevels\" [value]=\"level\">{{ level }}</option>\n        </select>\n      </div>\n\n      <div class=\"filter-group\">\n        <label>From</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n      </div>\n\n      <div class=\"filter-group\">\n        <label>To</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n      </div>\n    </div>\n\n    <div class=\"action-row\">\n      <button class=\"btn-download\" (click)=\"onDownload()\">\n        Download <i class=\"bi bi-caret-down-fill ms-1\"></i>\n      </button>\n      <button class=\"btn-search\" (click)=\"onSearch()\">Search</button>\n    </div>\n  </div>\n\n  <!-- Table -->\n  <div class=\"table-section\">\n    <div class=\"table-search-row\">\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\n    </div>\n\n    <div class=\"table-responsive\">\n      <table class=\"custom-table\">\n        <thead>\n          <tr>\n            <th>S. No</th>\n            <th>Institution Certificate Number</th>\n            <th>Institution Name</th>\n            <th>Institution Telephone Number/Landline</th>\n            <th>Institution Type</th>\n            <th>Institution Level</th>\n            <th>Created Date</th>\n            <th>Status</th>\n            <th>Constituency</th>\n            <th>Institution Email</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let school of schools | search: tableSearch; let i = index\">\n            <td>{{ i + 1 }}</td>\n            <td>{{ school.certificateNumber }}</td>\n            <td>{{ school.institutionName }}</td>\n            <td>{{ school.mobileNo }}</td>\n            <td>{{ school.institutionType }}</td>\n            <td>{{ school.institutionLevel }}</td>\n            <td>{{ school.createdAt | date:'dd-MM-yyyy' }}</td>\n            <td>\n                <!-- Dynamic badge colors based on status -->\n                <span class=\"badge-status\" [ngClass]=\"{ 'badge-review': school.status ==='Approved' }\">\n                  {{ school.status }}\n                </span>\n            </td>\n            <td>{{ school.constituency }}</td>\n            <td>{{ school.emailId }}</td>\n          </tr>\n          <!-- Empty state -->\n          <tr *ngIf=\"schools.length === 0\">\n            <td colspan=\"10\" class=\"text-center py-4\">{{ pending() ? 'No pending inspections found.' : 'No inspected schools found.' }}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n", styles: ["/* --- Base --- */\r\n.page-container { padding: 2rem; font-family: system-ui, sans-serif; background: #f8f9fa; min-height: 100vh;}\r\n.page-header { border-bottom: 1px solid #e0e0e0; padding-bottom: 1rem; margin-bottom: 2rem; }\r\n.page-header h2 { font-size: 1.25rem; font-weight: 700; color: #333; margin: 0; }\r\n\r\n/* --- Filters --- */\r\n.filter-section { margin-bottom: 2rem; background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);}\r\n.filter-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 1.5rem; }\r\n.filter-group { display: flex; flex-direction: column; gap: 0.5rem; }\r\n.filter-group label { font-size: 0.9rem; color: #555; font-weight: 500; }\r\n.filter-group .form-control, .filter-group .form-select { border-radius: 6px; border: 1px solid #ccc; padding: 0.6rem; font-size: 0.95rem; }\r\n\r\n.action-row { display: flex; justify-content: space-between; align-items: center; }\r\n.btn-download { background-color: #6c757d; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; font-weight: 600; cursor: pointer; }\r\n.btn-search { background-color: white; color: #dc3545; border: 1px solid #dc3545; padding: 0.5rem 1.5rem; border-radius: 4px; font-weight: 600; cursor: pointer; }\r\n.btn-search:hover { background-color: #f8d7da; }\r\n\r\n/* --- Table --- */\r\n.table-section { background: #fff; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }\r\n.table-search-row { display: flex; justify-content: flex-end; margin-bottom: 1rem; }\r\n.search-input { width: 300px; border-radius: 6px; border: 1px solid #ccc; padding: 0.5rem 1rem; }\r\n.table-responsive { width: 100%; overflow-x: auto; border: 1px solid #ddd; border-radius: 8px; }\r\n.custom-table { width: 100%; border-collapse: collapse; white-space: nowrap; }\r\n.custom-table thead { background-color: #00b4d8; color: white; }\r\n.custom-table th { padding: 0.8rem 1rem; text-align: left; font-size: 0.85rem; border-right: 1px solid rgba(255,255,255,0.2); }\r\n.custom-table td { padding: 0.8rem 1rem; border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-size: 0.9rem; color: #333; }\r\n.custom-table tbody tr:hover { background-color: #f1f8fa; }\r\n\r\n/* Approved/Review Badge */\r\n/* Default Badge Style */\r\n.badge-status {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n}\r\n\r\n.badge-review {\r\n  background-color: #28a745; /* --kemis-success */\r\n  color: #fff;\r\n}\r\n"] }]
    }], null, { pending: [{ type: i0.Input, args: [{ isSignal: true, alias: "pending", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InspectedSchools, { className: "InspectedSchools", filePath: "app/pages/inspected-schools/inspected-schools.ts", lineNumber: 15 }); })();
