import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function InstitutionsRegisteredSubCounty_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const institutionLevel_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", institutionLevel_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(institutionLevel_r1);
} }
function InstitutionsRegisteredSubCounty_option_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const county_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", county_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(county_r2);
} }
function InstitutionsRegisteredSubCounty_option_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r3);
} }
function InstitutionsRegisteredSubCounty_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "h5", 24);
    i0.ɵɵtext(4, "Download Data");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 25);
    i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_div_35_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.showDownloadModal = false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 26)(7, "p", 27);
    i0.ɵɵtext(8, "Select the format you want to download.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 28)(10, "button", 29);
    i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_div_35_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.downloadData("excel")); });
    i0.ɵɵelement(11, "i", 30);
    i0.ɵɵtext(12, " Excel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 31);
    i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_div_35_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r4); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.downloadData("csv")); });
    i0.ɵɵelement(14, "i", 32);
    i0.ɵɵtext(15, " CSV ");
    i0.ɵɵelementEnd()()()()();
} }
function InstitutionsRegisteredSubCounty_div_36_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r7);
} }
function InstitutionsRegisteredSubCounty_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "div", 22)(2, "div", 23)(3, "h5", 24);
    i0.ɵɵtext(4, "Filter Institutions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 25);
    i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_div_36_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.showSearchModal = false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 33)(7, "div", 34)(8, "label", 35);
    i0.ɵɵtext(9, "Institution Level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 5);
    i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_div_36_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.filter.institutionLevel, $event) || (ctx_r4.filter.institutionLevel = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(11, InstitutionsRegisteredSubCounty_div_36_option_11_Template, 2, 2, "option", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 34)(13, "label", 35);
    i0.ɵɵtext(14, "From Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 7);
    i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_div_36_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.filter.fromDate, $event) || (ctx_r4.filter.fromDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 34)(17, "label", 35);
    i0.ɵɵtext(18, "To Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 7);
    i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_div_36_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.filter.toDate, $event) || (ctx_r4.filter.toDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 36)(21, "button", 37);
    i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_div_36_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.showSearchModal = false); });
    i0.ɵɵtext(22, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 38);
    i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_div_36_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onApplyFilters()); });
    i0.ɵɵtext(24, "Apply Filters");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.filter.institutionLevel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r4.institutionLevels);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.filter.fromDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.filter.toDate);
} }
function InstitutionsRegisteredSubCounty_tr_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 39);
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
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const inst_r8 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.institutionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.institutionType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.institutionLevel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.certificateNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.mobileNo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.emailId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.subCounty);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.constituency);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.headOfInstitution);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.createdAt);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.supervisorId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r8.updatedAt);
} }
export class InstitutionsRegisteredSubCounty {
    constructor() {
        this.http = inject(HttpClient);
        this.profileCounty = '';
        this.cdr = inject(ChangeDetectorRef);
        this.notification = inject(NotificationService);
        // Filter Options
        this.institutionLevels = ['All', 'Pre-Primary', 'Primary', 'Junior School', 'Secondary', 'High School'];
        this.county = [];
        this.subCounty = []; // Will be populated from the logged-in SCDE profile
        // Filter Model
        this.filter = {
            institutionLevel: 'All',
            fromDate: '',
            toDate: '',
            county: '',
            subCounty: 'Loading...' // Default state
        };
        // Live Table Data
        this.allInstitutions = [];
        this.institutions = [];
        this.tableSearch = '';
        // Modals State
        this.showDownloadModal = false;
        this.showSearchModal = false;
    }
    ngOnInit() {
        this.loadScdeProfileAndSchools();
    }
    loadScdeProfileAndSchools() {
        // 1. Fetch the SCDE's profile to get their subCounty
        this.http.get('http://localhost:5215/api/sub-county-education/profile').subscribe({
            next: (profile) => {
                this.profileCounty = profile.county;
                this.county = [profile.county];
                this.filter.county = profile.county;
                this.subCounty = [profile.subCounty];
                // 2. Set the subCounty in the filter
                this.filter.subCounty = profile.subCounty;
                // 3. Fetch the schools using the dynamic subCounty
                this.fetchApprovedInstitutions(profile.subCounty);
            },
            error: (err) => {
                console.error('Failed to load SCDE profile', err);
                this.notification.showError('Failed to load SCDE profile.');
            }
        });
    }
    fetchApprovedInstitutions(subCountyName) {
        //new dynamic endpoint
        this.http.get('http://localhost:5215/api/sub-county-education/institutions', { params: { county: this.profileCounty, subCounty: subCountyName, status: 'approved' } }).subscribe({
            next: (res) => {
                this.allInstitutions = res.schools || [];
                this.institutions = [...this.allInstitutions];
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Failed to fetch institutions', err)
        });
    }
    // --- Filtering & Search ---
    onApplyFilters() {
        let filtered = this.allInstitutions;
        if (this.filter.institutionLevel !== 'All') {
            filtered = filtered.filter(i => i.institutionLevel === this.filter.institutionLevel);
        }
        if (this.filter.fromDate) {
            filtered = filtered.filter(i => new Date(i.createdAt) >= new Date(this.filter.fromDate));
        }
        if (this.filter.toDate) {
            filtered = filtered.filter(i => new Date(i.createdAt) <= new Date(this.filter.toDate));
        }
        this.institutions = filtered;
        this.showSearchModal = false;
        this.notification.showSuccess('Filters applied successfully.');
        this.cdr.detectChanges();
    }
    // --- Download Logic ---
    downloadData(format) {
        if (this.institutions.length === 0) {
            this.notification.showError('No data to download.');
            return;
        }
        this.showDownloadModal = false;
        if (format === 'csv') {
            // Generate CSV
            const headers = ['Institution ID', 'Certificate Number', 'Institution Name', 'Type', 'Sub County', 'Level', 'Created At'];
            const csvData = this.institutions.map(i => [
                i.institutionId, i.certificateNumber || 'N/A', i.institutionName,
                i.institutionType, i.subCounty, i.institutionLevel, i.createdAt, i.supervisorId, i.updatedAt
            ]);
            const csvContent = [
                headers.join(','),
                ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
            ].join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            this.triggerDownload(blob, `Institutions_${this.filter.subCounty}.csv`);
        }
        else {
            // For Excel, we generate an HTML table and download as .xls
            // (A simple way to do it without external libraries)
            let html = '<table><thead><tr><th>ID</th><th>Cert No</th><th>Name</th><th>Type</th><th>Sub County</th><th>Level</th><th>Date</th></tr></thead><tbody>';
            this.institutions.forEach(i => {
                html += `<tr><td>${i.institutionId}</td><td>${i.certificateNumber}</td><td>${i.institutionName}</td><td>${i.institutionType}</td><td>${i.subCounty}</td><td>${i.institutionLevel}</td><td>${i.createdAt}</td><td>${i.supervisorId}</td><td>${i.updatedAt}</td></tr>`;
            });
            html += '</tbody></table>';
            const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
            this.triggerDownload(blob, `Institutions_${this.filter.subCounty}.xls`);
        }
        this.notification.showSuccess(`Downloaded as ${format.toUpperCase()}`);
    }
    triggerDownload(blob, filename) {
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    static { this.ɵfac = function InstitutionsRegisteredSubCounty_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InstitutionsRegisteredSubCounty)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstitutionsRegisteredSubCounty, selectors: [["app-institutions-registered-sub-county"]], decls: 73, vars: 15, consts: [[1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "filter-grid"], [1, "filter-group"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-select", "bg-light", 3, "ngModelChange", "ngModel"], [1, "action-row"], [1, "btn-download", 3, "click"], [1, "bi", "bi-caret-down-fill", "ms-1"], [1, "btn-search", 3, "click"], ["class", "modal-backdrop", 4, "ngIf"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], [3, "value"], [1, "modal-backdrop"], [1, "modal-dialog", "small-modal"], [1, "modal-header", "bg-info", "text-white"], [1, "modal-title"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body", "text-center", "py-4"], [1, "mb-4"], [1, "d-flex", "justify-content-center", "gap-3"], [1, "btn", "btn-outline-success", "btn-lg", "px-4", 3, "click"], [1, "bi", "bi-file-earmark-excel"], [1, "btn", "btn-outline-primary", "btn-lg", "px-4", 3, "click"], [1, "bi", "bi-filetype-csv"], [1, "modal-body"], [1, "mb-3"], [1, "form-label", "fw-bold"], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "text-center"]], template: function InstitutionsRegisteredSubCounty_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "List of institutions onboarded per Sub County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "label");
            i0.ɵɵtext(8, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_Template_select_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.institutionLevel, $event) || (ctx.filter.institutionLevel = $event); return $event; });
            i0.ɵɵtemplate(10, InstitutionsRegisteredSubCounty_option_10_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 4)(12, "label");
            i0.ɵɵtext(13, "From");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.fromDate, $event) || (ctx.filter.fromDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 4)(16, "label");
            i0.ɵɵtext(17, "To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.toDate, $event) || (ctx.filter.toDate = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 4)(20, "label");
            i0.ɵɵtext(21, "County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_Template_select_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.county, $event) || (ctx.filter.county = $event); return $event; });
            i0.ɵɵtemplate(23, InstitutionsRegisteredSubCounty_option_23_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 4)(25, "label");
            i0.ɵɵtext(26, "Subcounty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "select", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_Template_select_ngModelChange_27_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.subCounty, $event) || (ctx.filter.subCounty = $event); return $event; });
            i0.ɵɵtemplate(28, InstitutionsRegisteredSubCounty_option_28_Template, 2, 2, "option", 6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(29, "div", 9)(30, "button", 10);
            i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_Template_button_click_30_listener() { return ctx.showDownloadModal = true; });
            i0.ɵɵtext(31, " Download ");
            i0.ɵɵelement(32, "i", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "button", 12);
            i0.ɵɵlistener("click", function InstitutionsRegisteredSubCounty_Template_button_click_33_listener() { return ctx.showSearchModal = true; });
            i0.ɵɵtext(34, " Search ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(35, InstitutionsRegisteredSubCounty_div_35_Template, 16, 0, "div", 13)(36, InstitutionsRegisteredSubCounty_div_36_Template, 25, 4, "div", 13);
            i0.ɵɵelementStart(37, "div", 14)(38, "div", 15)(39, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function InstitutionsRegisteredSubCounty_Template_input_ngModelChange_39_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 17)(41, "table", 18)(42, "thead")(43, "tr")(44, "th");
            i0.ɵɵtext(45, "S. No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "th");
            i0.ɵɵtext(47, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "th");
            i0.ɵɵtext(49, "Institution Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "th");
            i0.ɵɵtext(51, "Institution Level");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "th");
            i0.ɵɵtext(53, "Institution Certificate Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "th");
            i0.ɵɵtext(55, "Institution TelemobileNo Number/Landline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "th");
            i0.ɵɵtext(57, "Institution Email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "th");
            i0.ɵɵtext(59, "Sub County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "th");
            i0.ɵɵtext(61, "Constituency");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "th");
            i0.ɵɵtext(63, "Created By");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "th");
            i0.ɵɵtext(65, "Created Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "th");
            i0.ɵɵtext(67, "Assigned CDE ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "th");
            i0.ɵɵtext(69, "Assigned At");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(70, "tbody");
            i0.ɵɵtemplate(71, InstitutionsRegisteredSubCounty_tr_71_Template, 27, 13, "tr", 19);
            i0.ɵɵpipe(72, "search");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
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
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.showDownloadModal);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showSearchModal);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(32);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(72, 12, ctx.institutions, ctx.tableSearch));
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, SearchPipe], styles: ["\r\n.page-container[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.filter-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem 2rem;\r\n  max-width: 1000px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.filter-group[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n}\r\n\r\n.filter-group[_ngcontent-%COMP%]   .form-select.bg-light[_ngcontent-%COMP%] {\r\n  background-color: #eef2f6; \r\n  border-color: #d0d7de;\r\n}\r\n\r\n\r\n.action-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1000px;\r\n}\r\n\r\n.btn-download[_ngcontent-%COMP%] {\r\n  background-color: #6c757d;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-download[_ngcontent-%COMP%]:hover {\r\n  background-color: #5a6268;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn-search[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal[_ngcontent-%COMP%] {\r\n  max-width: 450px;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8; \r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\r\n  border-right: none;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.text-center[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n\r\n@media (max-width: 992px) {\r\n  .filter-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .filter-grid[_ngcontent-%COMP%] {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .action-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n  }\r\n  .search-input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstitutionsRegisteredSubCounty, [{
        type: Component,
        args: [{ selector: 'app-institutions-registered-sub-county', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"page-container\">\n  \n  <!-- Page Title -->\n  <div class=\"page-header\">\n    <h2>List of institutions onboarded per Sub County</h2>\n  </div>\n\n  <!-- Filters Section -->\n  <div class=\"filter-section\">\n    <div class=\"filter-grid\">\n      \n      <!-- Institution Level -->\n      <div class=\"filter-group\">\n        <label>Institution Level</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.institutionLevel\">\n          <option *ngFor=\"let institutionLevel of institutionLevels\" [value]=\"institutionLevel\">{{ institutionLevel }}</option>\n        </select>\n      </div>\n\n      <!-- From Date -->\n      <div class=\"filter-group\">\n        <label>From</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n      </div>\n\n      <!-- To Date -->\n      <div class=\"filter-group\">\n        <label>To</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n      </div>\n\n      <!-- County -->\n      <div class=\"filter-group\">\n        <label>County</label>\n        <select class=\"form-select bg-light\" [(ngModel)]=\"filter.county\">\n          <option *ngFor=\"let county of county\" [value]=\"county\">{{ county }}</option>\n        </select>\n      </div>\n\n      <!-- Subcounty -->\n      <div class=\"filter-group\">\n        <label>Subcounty</label>\n        <select class=\"form-select\" [(ngModel)]=\"filter.subCounty\">\n          <option *ngFor=\"let sub of subCounty\" [value]=\"sub\">{{ sub }}</option>\n        </select>\n      </div>\n\n    </div>\n\n      <!-- Action Buttons (Update these) -->\n      <div class=\"action-row\">\n        <button class=\"btn-download\" (click)=\"showDownloadModal = true\">\n          Download <i class=\"bi bi-caret-down-fill ms-1\"></i>\n        </button>\n        <button class=\"btn-search\" (click)=\"showSearchModal = true\">\n          Search\n        </button>\n      </div>\n\n      <!-- ========================================== -->\n      <!-- MODAL 1: DOWNLOAD OPTIONS                  -->\n      <!-- ========================================== -->\n      <div class=\"modal-backdrop\" *ngIf=\"showDownloadModal\">\n        <div class=\"modal-dialog small-modal\">\n          <div class=\"modal-header bg-info text-white\">\n            <h5 class=\"modal-title\">Download Data</h5>\n            <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"showDownloadModal = false\"></button>\n          </div>\n          <div class=\"modal-body text-center py-4\">\n            <p class=\"mb-4\">Select the format you want to download.</p>\n            <div class=\"d-flex justify-content-center gap-3\">\n              <button class=\"btn btn-outline-success btn-lg px-4\" (click)=\"downloadData('excel')\">\n                <i class=\"bi bi-file-earmark-excel\"></i> Excel\n              </button>\n              <button class=\"btn btn-outline-primary btn-lg px-4\" (click)=\"downloadData('csv')\">\n                <i class=\"bi bi-filetype-csv\"></i> CSV\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- ========================================== -->\n      <!-- MODAL 2: ADVANCED SEARCH/FILTERS           -->\n      <!-- ========================================== -->\n      <div class=\"modal-backdrop\" *ngIf=\"showSearchModal\">\n        <div class=\"modal-dialog small-modal\">\n          <div class=\"modal-header bg-info text-white\">\n            <h5 class=\"modal-title\">Filter Institutions</h5>\n            <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"showSearchModal = false\"></button>\n          </div>\n          <div class=\"modal-body\">\n            \n            <div class=\"mb-3\">\n              <label class=\"form-label fw-bold\">Institution Level</label>\n              <select class=\"form-select\" [(ngModel)]=\"filter.institutionLevel\">\n                <option *ngFor=\"let level of institutionLevels\" [value]=\"level\">{{ level }}</option>\n              </select>\n            </div>\n\n            <div class=\"mb-3\">\n              <label class=\"form-label fw-bold\">From Date</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.fromDate\">\n            </div>\n\n            <div class=\"mb-3\">\n              <label class=\"form-label fw-bold\">To Date</label>\n              <input type=\"date\" class=\"form-control\" [(ngModel)]=\"filter.toDate\">\n            </div>\n\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-secondary\" (click)=\"showSearchModal = false\">Cancel</button>\n            <button class=\"btn btn-primary\" (click)=\"onApplyFilters()\">Apply Filters</button>\n          </div>\n        </div>\n      </div>\n\n  <!-- Table Section -->\n  <div class=\"table-section\">\n    \n    <!-- Table Search Bar -->\n    <div class=\"table-search-row\">\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\n    </div>\n\n    <!-- Data Table Wrapper (for horizontal scrolling) -->\n    <div class=\"table-responsive\">\n      <table class=\"custom-table\">\n        <thead>\n          <tr>\n            <th>S. No</th>\n            <th>Institution Name</th>\n            <th>Institution Type</th>\n            <th>Institution Level</th>\n            <th>Institution Certificate Number</th>  \n            <th>Institution TelemobileNo Number/Landline</th>\n            <th>Institution Email</th>\n            <th>Sub County</th>\n            <th>Constituency</th>\n            <th>Created By</th>\n            <th>Created Date</th>\n            <th>Assigned CDE </th>\n            <th>Assigned At</th>\n            \n            \n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let inst of institutions | search: tableSearch\">\n            <td class=\"text-center\">{{ inst.institutionId }}</td>\n            <td>{{ inst.institutionName }}</td>\n            <td>{{ inst.institutionType }}</td>\n            <td>{{ inst.institutionLevel }}</td>\n            <td>{{ inst.certificateNumber }}</td>\n            <td>{{ inst.mobileNo }}</td>\n             <td>{{ inst.emailId }}</td>\n            <td>{{ inst.subCounty }}</td>\n            <td>{{ inst.constituency }}</td>\n            <td>{{ inst.headOfInstitution }}</td>\n            <td>{{ inst.createdAt }}</td>\n            <td>{{inst.supervisorId}}</td>\n            <td>{{inst.updatedAt}}</td>\n            \n            \n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>", styles: ["/* BASE LAYOUT */\r\n.page-container {\r\n  background-color: #ffffff;\r\n  min-height: 100vh;\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  color: #333;\r\n}\r\n\r\n.page-header {\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.25rem;\r\n  font-weight: 700;\r\n  margin: 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n/* FILTERS SECTION */\r\n.filter-section {\r\n  margin-bottom: 3rem;\r\n}\r\n\r\n.filter-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem 2rem;\r\n  max-width: 1000px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.filter-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.filter-group label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-group .form-control,\r\n.filter-group .form-select {\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n}\r\n\r\n.filter-group .form-select.bg-light {\r\n  background-color: #eef2f6; /* Match the grayed-out County select in screenshot */\r\n  border-color: #d0d7de;\r\n}\r\n\r\n/* Actions */\r\n.action-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  max-width: 1000px;\r\n}\r\n\r\n.btn-download {\r\n  background-color: #6c757d;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-download:hover {\r\n  background-color: #5a6268;\r\n}\r\n\r\n.btn-search {\r\n  background-color: white;\r\n  color: #dc3545;\r\n  border: 1px solid #dc3545;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn-search:hover {\r\n  background-color: #f8d7da;\r\n}\r\n\r\n/* Modal Backdrop */\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n/* Modal Dialog */\r\n.modal-dialog {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal {\r\n  max-width: 450px;\r\n}\r\n\r\n.modal-header {\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header h5 {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.modal-body {\r\n  padding: 1.5rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n}\r\n\r\n/* TABLE SECTION */\r\n.table-section {\r\n  width: 100%;\r\n}\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n/* Custom Blue Table Header */\r\n.custom-table thead {\r\n  background-color: #00b4d8; /* Cyan Blue */\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table th:last-child {\r\n  border-right: none;\r\n}\r\n\r\n.custom-table td {\r\n  padding: 0.75rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n.custom-table tbody tr:hover {\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.text-center {\r\n  text-align: center;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 992px) {\r\n  .filter-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .filter-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  .action-row {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n  }\r\n  .search-input {\r\n    width: 100%;\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InstitutionsRegisteredSubCounty, { className: "InstitutionsRegisteredSubCounty", filePath: "app/pages/institutions-registered-sub-county/institutions-registered-sub-county.ts", lineNumber: 15 }); })();
