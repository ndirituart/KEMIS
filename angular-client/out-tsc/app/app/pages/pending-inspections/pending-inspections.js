import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';
import { NotificationService } from '../../services/notifications.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = (a0, a1, a2, a3, a4) => ({ "badge-pending": a0, "badge-assigned": a1, "badge-recommended": a2, "badge-rejected": a3, "badge-review": a4 });
function PendingInspections_tr_32_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11, "New Onboarding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "button", 9);
    i0.ɵɵlistener("click", function PendingInspections_tr_32_Template_button_click_13_listener() { const school_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openDetailsModal(school_r2)); });
    i0.ɵɵtext(14, "View");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "button", 10);
    i0.ɵɵlistener("click", function PendingInspections_tr_32_Template_button_click_18_listener() { const school_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openUploadModal(school_r2)); });
    i0.ɵɵtext(19, " Submit inspection ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "button", 9);
    i0.ɵɵlistener("click", function PendingInspections_tr_32_Template_button_click_21_listener() { const school_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openCommentModal(school_r2)); });
    i0.ɵɵtext(22, "View");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "span", 11);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const school_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.emailId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(school_r2.mobileNo);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 8, school_r2.createdAt, "dd-MM-yyyy"));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(school_r2.inspectionDate || "-");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !school_r2.canSubmit);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(11, _c0, school_r2.status === "Pending" || school_r2.status === "pending", school_r2.status === "Assigned SCDE" || school_r2.status === "Assigned SCQASO", school_r2.status === "SCDE Approved", school_r2.status === "SCDE Rejected" || school_r2.status === "Rejected" || school_r2.status === "rejected", school_r2.status === "SCQASO Recommended"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", school_r2.status, " ");
} }
function PendingInspections_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "h5");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function PendingInspections_div_34_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModals()); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 16)(8, "fieldset", 17)(9, "legend");
    i0.ɵɵtext(10, "Institution Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 18)(12, "div", 19)(13, "span", 20);
    i0.ɵɵtext(14, "Institute Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 21);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 19)(18, "span", 20);
    i0.ɵɵtext(19, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span", 21);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 19)(23, "span", 20);
    i0.ɵɵtext(24, "Mobile Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 21);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 19)(28, "span", 20);
    i0.ɵɵtext(29, "Institution Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span", 21);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 19)(33, "span", 20);
    i0.ɵɵtext(34, "Head of Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span", 21);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div", 19)(38, "span", 20);
    i0.ɵɵtext(39, "Postal Address (HOI)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "span", 21);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div", 19)(43, "span", 20);
    i0.ɵɵtext(44, "County");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "span", 21);
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 19)(48, "span", 20);
    i0.ɵɵtext(49, "Sub County");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "span", 21);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 19)(53, "span", 20);
    i0.ɵɵtext(54, "Constituency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "span", 21);
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div", 19)(58, "span", 20);
    i0.ɵɵtext(59, "Institution Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "span", 21);
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div", 19)(63, "span", 20);
    i0.ɵɵtext(64, "Application Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "span", 21);
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div", 19)(68, "span", 20);
    i0.ɵɵtext(69, "Onboarding Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "span", 21);
    i0.ɵɵtext(71);
    i0.ɵɵpipe(72, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "div", 19)(74, "span", 20);
    i0.ɵɵtext(75, "Total Number of Learners");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "span", 21);
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(78, "fieldset", 17)(79, "legend");
    i0.ɵɵtext(80, "Other Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "div", 18)(82, "div", 19)(83, "span", 20);
    i0.ɵɵtext(84, "Accommodation Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "span", 21);
    i0.ɵɵtext(86);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(87, "div", 19)(88, "span", 20);
    i0.ɵɵtext(89, "School Categories");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "span", 21);
    i0.ɵɵtext(91);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(92, "div", 22)(93, "button", 23);
    i0.ɵɵlistener("click", function PendingInspections_div_34_Template_button_click_93_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModals()); });
    i0.ɵɵtext(94, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Institution Details - ", ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.institutionName);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.institutionType) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.emailId) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.mobileNo) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.institutionName) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.headOfInstitution) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.postalAddressHoi) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.county) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.subCounty) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.constituency) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.postalAddressInstitution) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.applicationType) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(72, 16, ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.createdAt, "dd-MM-yyyy"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.totalLearners) || 0);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.accomodationType) || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((ctx_r2.selectedSchool == null ? null : ctx_r2.selectedSchool.schoolCategory) || "N/A");
} }
function PendingInspections_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 24)(2, "div", 14)(3, "h5");
    i0.ɵɵtext(4, "Upload Inspection Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function PendingInspections_div_35_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModals()); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 16)(8, "div", 25)(9, "label", 26);
    i0.ɵɵtext(10, "Inspection Report (PDF or Image)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 27);
    i0.ɵɵlistener("change", function PendingInspections_div_35_Template_input_change_11_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onFileSelected($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 25)(13, "label", 26);
    i0.ɵɵtext(14, "Inspection Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function PendingInspections_div_35_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.uploadData.date, $event) || (ctx_r2.uploadData.date = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 25)(17, "label", 26);
    i0.ɵɵtext(18, "Inspection Comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "textarea", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function PendingInspections_div_35_Template_textarea_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r2.commentData.text, $event) || (ctx_r2.commentData.text = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "div", 22)(21, "button", 23);
    i0.ɵɵlistener("click", function PendingInspections_div_35_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModals()); });
    i0.ɵɵtext(22, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 30);
    i0.ɵɵlistener("click", function PendingInspections_div_35_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitReport()); });
    i0.ɵɵtext(24, "Submit Inspection");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.uploadData.date);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.commentData.text);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.submitting);
} }
function PendingInspections_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 24)(2, "div", 14)(3, "h5");
    i0.ɵɵtext(4, "Sendback Comments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function PendingInspections_div_36_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModals()); });
    i0.ɵɵtext(6, "\u2715");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 16)(8, "label", 26);
    i0.ɵɵtext(9, "Supervisor (SCDE) Comment:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 31);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 22)(13, "button", 23);
    i0.ɵɵlistener("click", function PendingInspections_div_36_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r6); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeModals()); });
    i0.ɵɵtext(14, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.supervisorComments, " ");
} }
export class PendingInspections {
    constructor() {
        this.http = inject(HttpClient);
        this.cdr = inject(ChangeDetectorRef);
        this.notification = inject(NotificationService);
        // --- Table & Filter State ---
        this.tableSearch = '';
        this.schools = [];
        // --- Modal State ---
        this.showDetailsModal = false;
        this.showUploadModal = false;
        this.showCommentModal = false;
        this.selectedSchool = null; //changed from any
        // --- Upload Form ---
        this.submitting = false;
        this.uploadData = { file: null, date: '' };
        // --- Comment Form ---
        this.commentData = { text: '' };
        this.supervisorComments = 'No comments available.';
    }
    ngOnInit() {
        this.fetchPendingInspections();
    }
    fetchPendingInspections() {
        this.http.get('http://localhost:5215/api/sub-county-quality-assurance/pending-inspections').subscribe({
            next: (res) => {
                this.schools = res.schools || [];
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error(err);
                this.notification.showError('Failed to load pending inspections');
            }
        });
    }
    // --- Modal Actions ---
    openDetailsModal(school) {
        this.selectedSchool = school;
        console.log('Selected School Details:', this.selectedSchool); //Check console
        this.showDetailsModal = true;
    }
    openUploadModal(school) {
        this.selectedSchool = school;
        this.uploadData = { file: null, date: new Date().toISOString().split('T')[0] };
        this.commentData.text = '';
        this.showUploadModal = true;
    }
    openCommentModal(school) {
        this.selectedSchool = school;
        this.commentData.text = '';
        this.showCommentModal = true;
        // Fetch SCDE comments for this specific school
        this.http.get(`http://localhost:5215/api/sub-county-quality-assurance/comments/${school.institutionId}`).subscribe({
            next: (res) => this.supervisorComments = res.commentText || 'No comments available.',
            error: () => this.supervisorComments = 'Failed to load comments.'
        });
    }
    closeModals() {
        this.showDetailsModal = false;
        this.showUploadModal = false;
        this.showCommentModal = false;
        this.selectedSchool = null;
    }
    // --- File Upload Logic ---
    onFileSelected(event) {
        const file = event.target.files[0];
        this.uploadData.file = file ?? null;
    }
    //submit report PDF and comment both at once
    submitReport() {
        if (this.submitting || !this.selectedSchool?.canSubmit)
            return;
        const file = this.uploadData.file;
        if (!file) {
            this.notification.showError('Please attach an inspection report.');
            return;
        }
        if (!this.commentData.text.trim()) {
            this.notification.showError('Please enter a recommendation.');
            return;
        }
        // Build the FormData payload
        const formData = new FormData();
        formData.append('institutionId', this.selectedSchool.institutionId.toString());
        formData.append('comment', this.commentData.text);
        if (this.uploadData.date) {
            formData.append('inspectionDate', this.uploadData.date);
        }
        formData.append('file', file, file.name);
        this.submitting = true;
        this.http.post('http://localhost:5215/api/sub-county-quality-assurance/submit-inspection', formData).subscribe({
            next: () => {
                this.submitting = false;
                this.notification.showSuccess('Inspection submitted to SCDE!');
                this.closeModals();
                this.fetchPendingInspections();
            },
            error: (err) => {
                this.submitting = false;
                const message = typeof err.error === 'string' ? err.error : err.error?.message;
                this.notification.showError(message || 'Submission failed.');
                this.cdr.detectChanges();
            }
        });
    }
    static { this.ɵfac = function PendingInspections_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PendingInspections)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PendingInspections, selectors: [["app-pending-inspections"]], decls: 37, vars: 8, consts: [[1, "page-container"], [1, "page-header"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 4, "ngIf"], [1, "btn-outline-danger", 3, "click"], [1, "btn-outline-danger", 3, "click", "disabled"], [1, "badge-status", 3, "ngClass"], [1, "modal-backdrop"], [1, "modal-dialog", "large-modal"], [1, "modal-header"], ["type", "button", 1, "btn-close-white", 3, "click"], [1, "modal-body"], [1, "custom-fieldset"], [1, "details-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], [1, "modal-footer"], [1, "btn-danger", 3, "click"], [1, "modal-dialog", "small-modal"], [2, "margin-bottom", "1rem"], [1, "form-label"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 1, "form-control", 3, "change"], ["type", "date", 1, "form-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "Enter inspection notes here...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "btn-primary", 3, "click", "disabled"], [2, "padding", "1rem", "background", "#f8f9fa", "border", "1px solid #e0e0e0", "border-radius", "6px"]], template: function PendingInspections_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "Institution Evaluation & Inspection");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInspections_Template_input_ngModelChange_6_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5)(8, "table", 6)(9, "thead")(10, "tr")(11, "th");
            i0.ɵɵtext(12, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "th");
            i0.ɵɵtext(14, "Email Id");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "th");
            i0.ɵɵtext(16, "Mobile Number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "th");
            i0.ɵɵtext(18, "Date of Onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "th");
            i0.ɵɵtext(20, "Onboarding Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "th");
            i0.ɵɵtext(22, "Onboarding Form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "th");
            i0.ɵɵtext(24, "Inspection Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "th");
            i0.ɵɵtext(26, "Upload Inspection Report");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "Sendback Comments");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Status");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(31, "tbody");
            i0.ɵɵtemplate(32, PendingInspections_tr_32_Template, 26, 17, "tr", 7);
            i0.ɵɵpipe(33, "search");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(34, PendingInspections_div_34_Template, 95, 19, "div", 8)(35, PendingInspections_div_35_Template, 25, 3, "div", 8)(36, PendingInspections_div_36_Template, 15, 1, "div", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(26);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(33, 5, ctx.schools, ctx.tableSearch));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showDetailsModal);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showUploadModal);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showCommentModal);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.DatePipe, SearchPipe], styles: ["\r\n\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  background-color: #f4f7f9;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n  border-bottom: 2px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #1e3a8a; \r\n  margin: 0;\r\n}\r\n\r\n.table-section[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  padding: 1.5rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 6px rgba(0,0,0,0.05);\r\n}\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  vertical-align: middle;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #f1f8fa;\r\n}\r\n\r\n\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 20px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.badge-pending[_ngcontent-%COMP%] { background-color: #ffc107; color: #333; }\r\n.badge-assigned[_ngcontent-%COMP%] { background-color: #3fbeeb; color: #fff; }\r\n.badge-recommended[_ngcontent-%COMP%] { background-color: #1e40af; color: #fff; }\r\n.badge-rejected[_ngcontent-%COMP%] { background-color: #dc143c; color: #fff; }\r\n.badge-review[_ngcontent-%COMP%] { background-color: #28a745; color: #fff; }\r\n\r\n\r\n\r\n\r\n.btn-outline-danger[_ngcontent-%COMP%] {\r\n  border: 1px solid #dc3545;\r\n  color: #dc3545;\r\n  background: transparent;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 4px;\r\n  font-size: 0.85rem;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn-outline-danger[_ngcontent-%COMP%]:hover:not([disabled]) {\r\n  background-color: #dc3545;\r\n  color: white;\r\n}\r\n\r\n.btn-outline-danger[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n  border-color: #ccc;\r\n  color: #888;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  border: none;\r\n  color: white;\r\n  padding: 0.6rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #008fa8;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #dc143c;\r\n  border: none;\r\n  color: white;\r\n  padding: 0.6rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-tabs[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  border-bottom: 1px solid #dee2e6;\r\n  padding: 0 1.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 0.95rem;\r\n  color: #6c757d;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%]:hover {\r\n  color: #00b4d8;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.tab-btn.active[_ngcontent-%COMP%] {\r\n  color: #00b4d8;\r\n  border-bottom: 3px solid #00b4d8;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 10px 25px rgba(0,0,0,0.2);\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 90vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal[_ngcontent-%COMP%] { max-width: 500px; }\r\n.large-modal[_ngcontent-%COMP%] { max-width: 850px; }\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-close-white[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  line-height: 1;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  background-color: #f8f9fa;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 600;\r\n  margin-bottom: 0.4rem;\r\n  display: block;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.7rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n  border-color: #00b4d8;\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 180, 216, 0.25);\r\n}\r\n\r\ntextarea.form-control[_ngcontent-%COMP%] {\r\n  resize: vertical;\r\n}\r\n\r\n\r\nfieldset.custom-fieldset[_ngcontent-%COMP%] {\r\n  border: 1px solid #d0d7de;\r\n  border-radius: 8px;\r\n  padding: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  background: #ffffff;\r\n}\r\n\r\nfieldset.custom-fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  padding: 0 10px;\r\n  width: auto;\r\n  border-bottom: none;\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n.details-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem 2rem;\r\n}\r\n\r\n.detail-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.detail-label[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #6c757d;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.2rem;\r\n}\r\n\r\n.detail-value[_ngcontent-%COMP%] {\r\n  font-size: 0.95rem;\r\n  color: #1a1a1a;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #eee;\r\n  padding-bottom: 0.3rem;\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PendingInspections, [{
        type: Component,
        args: [{ selector: 'app-pending-inspections', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"page-container\">\r\n  <div class=\"page-header\">\r\n    <h2>Institution Evaluation & Inspection</h2>\r\n  </div>\r\n\r\n  <div class=\"table-section\">\r\n    <div class=\"table-search-row\">\r\n      <input type=\"text\" class=\"search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\r\n    </div>\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"custom-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Institution Name</th>\r\n            <th>Email Id</th>\r\n            <th>Mobile Number</th>\r\n            <th>Date of Onboarding</th>\r\n            <th>Onboarding Type</th>\r\n            <th>Onboarding Form</th>\r\n            <th>Inspection Date</th>\r\n            <th>Upload Inspection Report</th>\r\n            <th>Sendback Comments</th>\r\n            <th>Status</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let school of schools | search: tableSearch\">\r\n            <td>{{ school.institutionName }}</td>\r\n            <td>{{ school.emailId }}</td>\r\n            <td>{{ school.mobileNo }}</td>\r\n            <td>{{ school.createdAt | date:'dd-MM-yyyy' }}</td>\r\n            <td>New Onboarding</td>\r\n\r\n            <td><button class=\"btn-outline-danger\" (click)=\"openDetailsModal(school)\">View</button></td>\r\n            <td>{{ school.inspectionDate || '-' }}</td>\r\n            <td>\r\n              <button class=\"btn-outline-danger\" [disabled]=\"!school.canSubmit\" (click)=\"openUploadModal(school)\">\r\n                Submit inspection\r\n              </button>\r\n            </td>\r\n            <td><button class=\"btn-outline-danger\" (click)=\"openCommentModal(school)\">View</button></td>\r\n            <td>\r\n              <span class=\"badge-status\" [ngClass]=\"{\r\n                'badge-pending': school.status === 'Pending' || school.status === 'pending',\r\n                'badge-assigned': school.status === 'Assigned SCDE' || school.status === 'Assigned SCQASO',\r\n                'badge-recommended': school.status === 'SCDE Approved',\r\n                'badge-rejected': school.status === 'SCDE Rejected' || school.status === 'Rejected' || school.status === 'rejected',\r\n                'badge-review': school.status === 'SCQASO Recommended'\r\n              }\">\r\n                {{ school.status }}\r\n              </span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MODAL 1: INSTITUTION DETAILS -->\r\n  <div class=\"modal-backdrop\" *ngIf=\"showDetailsModal\">\r\n    <div class=\"modal-dialog large-modal\">\r\n      <div class=\"modal-header\">\r\n        <h5>Institution Details - {{ selectedSchool?.institutionName }}</h5>\r\n        <button type=\"button\" class=\"btn-close-white\" (click)=\"closeModals()\">\u2715</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <fieldset class=\"custom-fieldset\">\r\n          <legend>Institution Details</legend>\r\n          <div class=\"details-grid\">\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Institute Type</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.institutionType || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Email</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.emailId || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Mobile Number</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.mobileNo || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Institution Name</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.institutionName || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Head of Institution</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.headOfInstitution || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Postal Address (HOI)</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.postalAddressHoi || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">County</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.county || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Sub County</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.subCounty || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Constituency</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.constituency || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Institution Location</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.postalAddressInstitution || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Application Type</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.applicationType || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Onboarding Date</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.createdAt | date:'dd-MM-yyyy' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Total Number of Learners</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.totalLearners || 0 }}</span>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <fieldset class=\"custom-fieldset\">\r\n          <legend>Other Details</legend>\r\n          <div class=\"details-grid\">\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">Accommodation Type</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.accomodationType || 'N/A' }}</span>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <span class=\"detail-label\">School Categories</span>\r\n              <span class=\"detail-value\">{{ selectedSchool?.schoolCategory || 'N/A' }}</span>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn-danger\" (click)=\"closeModals()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MODAL 2: UPLOAD -->\r\n  <div class=\"modal-backdrop\" *ngIf=\"showUploadModal\">\r\n    <div class=\"modal-dialog small-modal\">\r\n      <div class=\"modal-header\">\r\n        <h5>Upload Inspection Report</h5>\r\n        <button type=\"button\" class=\"btn-close-white\" (click)=\"closeModals()\">\u2715</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n\r\n        <div style=\"margin-bottom: 1rem;\">\r\n          <label class=\"form-label\">Inspection Report (PDF or Image)</label>\r\n          <input type=\"file\" class=\"form-control\" (change)=\"onFileSelected($event)\" accept=\".pdf,.jpg,.jpeg,.png\">\r\n        </div>\r\n\r\n        <div style=\"margin-bottom: 1rem;\">\r\n          <label class=\"form-label\">Inspection Date</label>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"uploadData.date\">\r\n        </div>\r\n\r\n        <div style=\"margin-bottom: 1rem;\">\r\n          <label class=\"form-label\">Inspection Comment</label>\r\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"commentData.text\" placeholder=\"Enter inspection notes here...\"></textarea>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn-danger\" (click)=\"closeModals()\">Close</button>\r\n        <button class=\"btn-primary\" [disabled]=\"submitting\" (click)=\"submitReport()\">Submit Inspection</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- MODAL 3: COMMENTS -->\r\n  <div class=\"modal-backdrop\" *ngIf=\"showCommentModal\">\r\n    <div class=\"modal-dialog small-modal\">\r\n      <div class=\"modal-header\">\r\n        <h5>Sendback Comments</h5>\r\n        <button type=\"button\" class=\"btn-close-white\" (click)=\"closeModals()\">\u2715</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <label class=\"form-label\">Supervisor (SCDE) Comment:</label>\r\n        <div style=\"padding: 1rem; background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 6px;\">\r\n          {{ supervisorComments }}\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn-danger\" (click)=\"closeModals()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["/* ==========================================\r\n   BASE LAYOUT & TABLES\r\n   ========================================== */\r\n.page-container {\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  background-color: #f4f7f9;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-header {\r\n  margin-bottom: 2rem;\r\n  border-bottom: 2px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #1e3a8a; /* Dark blue */\r\n  margin: 0;\r\n}\r\n\r\n.table-section {\r\n  background: #ffffff;\r\n  padding: 1.5rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 6px rgba(0,0,0,0.05);\r\n}\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 1rem;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #e0e0e0;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table thead {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  font-weight: 600;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table td {\r\n  padding: 0.8rem 1rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  border-right: 1px solid #e0e0e0;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  vertical-align: middle;\r\n}\r\n\r\n.custom-table tbody tr:hover {\r\n  background-color: #f1f8fa;\r\n}\r\n\r\n/* ==========================================\r\n   BADGES\r\n   ========================================== */\r\n.badge-status {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 20px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n  text-align: center;\r\n}\r\n\r\n.badge-pending { background-color: #ffc107; color: #333; }\r\n.badge-assigned { background-color: #3fbeeb; color: #fff; }\r\n.badge-recommended { background-color: #1e40af; color: #fff; }\r\n.badge-rejected { background-color: #dc143c; color: #fff; }\r\n.badge-review { background-color: #28a745; color: #fff; }\r\n\r\n/* ==========================================\r\n   BUTTONS\r\n   ========================================== */\r\n.btn-outline-danger {\r\n  border: 1px solid #dc3545;\r\n  color: #dc3545;\r\n  background: transparent;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 4px;\r\n  font-size: 0.85rem;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.btn-outline-danger:hover:not([disabled]) {\r\n  background-color: #dc3545;\r\n  color: white;\r\n}\r\n\r\n.btn-outline-danger:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n  border-color: #ccc;\r\n  color: #888;\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #00b4d8;\r\n  border: none;\r\n  color: white;\r\n  padding: 0.6rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: background-color 0.2s;\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: #008fa8;\r\n}\r\n\r\n.btn-danger {\r\n  background-color: #dc143c;\r\n  border: none;\r\n  color: white;\r\n  padding: 0.6rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n/* ==========================================\r\n   MODAL TABS & HEADER\r\n   ========================================== */\r\n.modal-tabs {\r\n  display: flex;\r\n  border-bottom: 1px solid #dee2e6;\r\n  padding: 0 1.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.tab-btn {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 0.95rem;\r\n  color: #6c757d;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.tab-btn:hover {\r\n  color: #00b4d8;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.tab-btn.active {\r\n  color: #00b4d8;\r\n  border-bottom: 3px solid #00b4d8;\r\n}\r\n\r\n/* ==========================================\r\n   MODALS\r\n   ========================================== */\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n.modal-dialog {\r\n  background: #fff;\r\n  border-radius: 10px;\r\n  box-shadow: 0 10px 25px rgba(0,0,0,0.2);\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 90vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal { max-width: 500px; }\r\n.large-modal { max-width: 850px; }\r\n\r\n.modal-header {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header h5 {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn-close-white {\r\n  background: transparent;\r\n  border: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  line-height: 1;\r\n}\r\n\r\n.modal-body {\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  background-color: #f8f9fa;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 1rem;\r\n}\r\n\r\n/* ==========================================\r\n   FORM ELEMENTS & FIELDSETS\r\n   ========================================== */\r\n.form-label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  font-weight: 600;\r\n  margin-bottom: 0.4rem;\r\n  display: block;\r\n}\r\n\r\n.form-control, .form-select {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.7rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-control:focus {\r\n  border-color: #00b4d8;\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 180, 216, 0.25);\r\n}\r\n\r\ntextarea.form-control {\r\n  resize: vertical;\r\n}\r\n\r\n/* Fieldsets for the Details Modal */\r\nfieldset.custom-fieldset {\r\n  border: 1px solid #d0d7de;\r\n  border-radius: 8px;\r\n  padding: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  background: #ffffff;\r\n}\r\n\r\nfieldset.custom-fieldset legend {\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  padding: 0 10px;\r\n  width: auto;\r\n  border-bottom: none;\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* CSS Grid for the Details fields */\r\n.details-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem 2rem;\r\n}\r\n\r\n.detail-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.detail-label {\r\n  font-size: 0.8rem;\r\n  color: #6c757d;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  margin-bottom: 0.2rem;\r\n}\r\n\r\n.detail-value {\r\n  font-size: 0.95rem;\r\n  color: #1a1a1a;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #eee;\r\n  padding-bottom: 0.3rem;\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PendingInspections, { className: "PendingInspections", filePath: "app/pages/pending-inspections/pending-inspections.ts", lineNumber: 39 }); })();
