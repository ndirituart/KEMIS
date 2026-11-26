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
const _c1 = () => ["Assigned SCDE", "Assigned SCQASO", "SCDE Rejected"];
function PendingInstitutionsSubCounty_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", status_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r1);
} }
function PendingInstitutionsSubCounty_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 23);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "button", 24);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_tr_46_Template_button_click_20_listener() { const inst_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openAssignSCQASOModal(inst_r3)); });
    i0.ɵɵtext(21, "Assign");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td")(23, "button", 25);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_tr_46_Template_button_click_23_listener() { const inst_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.openViewModal(inst_r3)); });
    i0.ɵɵelement(24, "i", 26);
    i0.ɵɵtext(25, " View ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const inst_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r3.institutionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r3.certificateNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r3.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 10, inst_r3.createdAt, "dd-MM-yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(inst_r3.subCounty);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(13, _c0, inst_r3.status === "Pending" || inst_r3.status === "pending", inst_r3.status === "Assigned SCDE" || inst_r3.status === "Assigned SCQASO", inst_r3.status === "Approved" || inst_r3.status === "SCDE Approved" || inst_r3.status === "SCDE Recommended", inst_r3.status === "SCDE Rejected" || inst_r3.status === "Rejected" || inst_r3.status === "rejected", inst_r3.status === "SCQASO Recommended"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", inst_r3.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r3.supervisorId || "Logged in SCDE");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r3.assigneeId || (inst_r3.status === "Assigned SCQASO" ? "Needs officer assignment" : "None"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !i0.ɵɵpureFunction0(19, _c1).includes(inst_r3.status));
} }
function PendingInstitutionsSubCounty_div_48_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const scqaso_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", scqaso_r6.userId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(scqaso_r6.fullName);
} }
function PendingInstitutionsSubCounty_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "h5", 30);
    i0.ɵɵtext(4, "Assign SCQASO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 31);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_48_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showAssignScqasoModal = false); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 32)(7, "label", 33);
    i0.ɵɵtext(8, "Select SCQASO");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionsSubCounty_div_48_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.selectedSCQASO, $event) || (ctx_r3.selectedSCQASO = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(10, "option", 34);
    i0.ɵɵtext(11, "Select an SCQASO...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, PendingInstitutionsSubCounty_div_48_option_12_Template, 2, 2, "option", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 35)(14, "button", 36);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_48_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.showAssignScqasoModal = false); });
    i0.ɵɵtext(15, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 37);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_48_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitSCQASOAssignment()); });
    i0.ɵɵtext(17, "Submit");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.selectedSCQASO);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.scqasoList);
} }
function PendingInstitutionsSubCounty_div_49_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "fieldset")(2, "legend");
    i0.ɵɵtext(3, "Institution Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "dl", 47)(5, "dt");
    i0.ɵɵtext(6, "Institution type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "dd");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "dt");
    i0.ɵɵtext(10, "Institution name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "dd");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "dt");
    i0.ɵɵtext(14, "Institution level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "dt");
    i0.ɵɵtext(18, "Certificate number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "dd");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "dt");
    i0.ɵɵtext(22, "Head of institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "dd");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dt");
    i0.ɵɵtext(26, "Email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "dd");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "dt");
    i0.ɵɵtext(30, "Mobile number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "dd");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "dt");
    i0.ɵɵtext(34, "Postal code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "dt");
    i0.ɵɵtext(38, "County");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "dd");
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "dt");
    i0.ɵɵtext(42, "Sub-county");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "dd");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dt");
    i0.ɵɵtext(46, "Constituency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "dd");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "dt");
    i0.ɵɵtext(50, "Institution location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "dd");
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "dt");
    i0.ɵɵtext(54, "Application type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "dd");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "dt");
    i0.ɵɵtext(58, "Onboarding date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "dd");
    i0.ɵɵtext(60);
    i0.ɵɵpipe(61, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "dt");
    i0.ɵɵtext(63, "Total learners");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "dd");
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(66, "fieldset")(67, "legend");
    i0.ɵɵtext(68, "Other Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "dl", 47)(70, "dt");
    i0.ɵɵtext(71, "Accommodation type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "dd");
    i0.ɵɵtext(73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "dt");
    i0.ɵɵtext(75, "School category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "dd");
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const school_r8 = ctx.ngIf;
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(school_r8.institutionType || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.institutionName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.institutionLevel || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.certificateNumber || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.headOfInstitution || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.emailId || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.mobileNo || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.postalAddressHoi || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.county || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.subCounty || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.constituency || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.postalAddressInstitution || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.applicationType || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(61, 17, school_r8.createdAt, "dd-MM-yyyy") || "N/A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(school_r8.totalLearners || 0);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(school_r8.accomodationType || "N/A");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(school_r8.schoolCategory || "N/A");
} }
function PendingInstitutionsSubCounty_div_49_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, PendingInstitutionsSubCounty_div_49_div_18_div_1_Template, 78, 20, "div", 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.viewData);
} }
function PendingInstitutionsSubCounty_div_49_div_19_ng_container_1_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Inspection date ", ctx_r3.inspection.inspectionDate);
} }
function PendingInstitutionsSubCounty_div_49_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h6");
    i0.ɵɵtext(2, "Inspection officer comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 50);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PendingInstitutionsSubCounty_div_49_div_19_ng_container_1_p_5_Template, 2, 1, "p", 46);
    i0.ɵɵelementStart(6, "button", 51);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_div_19_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.openInspectionReport()); });
    i0.ɵɵtext(7, "View inspection report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.inspection.commentText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.inspection.inspectionDate);
} }
function PendingInstitutionsSubCounty_div_49_div_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No inspection report is available.");
    i0.ɵɵelementEnd();
} }
function PendingInstitutionsSubCounty_div_49_div_19_div_4_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.review.summary);
} }
function PendingInstitutionsSubCounty_div_49_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "h6");
    i0.ɵɵtext(2, "Sub-county review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PendingInstitutionsSubCounty_div_49_div_19_div_4_p_5_Template, 2, 1, "p", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.review.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.review.summary);
} }
function PendingInstitutionsSubCounty_div_49_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, PendingInstitutionsSubCounty_div_49_div_19_ng_container_1_Template, 8, 2, "ng-container", 48)(2, PendingInstitutionsSubCounty_div_49_div_19_ng_template_2_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, PendingInstitutionsSubCounty_div_49_div_19_div_4_Template, 6, 2, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noInspection_r10 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.inspection)("ngIfElse", noInspection_r10);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.review);
} }
function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "button", 58);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.pendingDecision = true); });
    i0.ɵɵtext(2, "Approve");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span");
    i0.ɵɵelementStart(4, "button", 59);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r11); const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.pendingDecision = false); });
    i0.ɵɵtext(5, "Reject");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r3.deciding);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r3.deciding);
} }
function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 60);
    i0.ɵɵlistener("ngSubmit", function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_form_2_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r3.submitDecision()); });
    i0.ɵɵelementStart(1, "label", 61);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_form_2_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r3.decisionSummary, $event) || (ctx_r3.decisionSummary = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 57)(5, "button", 63);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 64);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_form_2_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r12); const ctx_r3 = i0.ɵɵnextContext(4); ctx_r3.pendingDecision = null; return i0.ɵɵresetView(ctx_r3.decisionSummary = ""); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.pendingDecision ? "Approval summary" : "Rejection reason");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.decisionSummary);
    i0.ɵɵproperty("readonly", ctx_r3.deciding);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r3.pendingDecision ? "btn-success" : "btn-danger")("disabled", ctx_r3.deciding || !ctx_r3.decisionSummary.trim());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r3.pendingDecision ? "Confirm approval" : "Confirm rejection");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r3.deciding);
} }
function PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_div_1_Template, 6, 2, "div", 55)(2, PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_form_2_Template, 9, 7, "form", 56);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.pendingDecision === null);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.pendingDecision !== null);
} }
function PendingInstitutionsSubCounty_div_49_div_20_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Current status: ", (ctx_r3.viewData == null ? null : ctx_r3.viewData.status) || (ctx_r3.selectedInstitution == null ? null : ctx_r3.selectedInstitution.status));
} }
function PendingInstitutionsSubCounty_div_49_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵtemplate(1, PendingInstitutionsSubCounty_div_49_div_20_ng_container_1_Template, 3, 2, "ng-container", 48)(2, PendingInstitutionsSubCounty_div_49_div_20_ng_template_2_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const awaitingReview_r13 = i0.ɵɵreference(3);
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.canDecide)("ngIfElse", awaitingReview_r13);
} }
function PendingInstitutionsSubCounty_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 38)(2, "div", 39)(3, "h5", 30);
    i0.ɵɵtext(4, " Institution - ");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 40);
    i0.ɵɵtext(8, "SCDE REVIEW");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 31);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeModals()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 41)(11, "button", 42);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.activeViewTab = "form"); });
    i0.ɵɵtext(12, "Institution Onboarding Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 42);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.activeViewTab = "reports"); });
    i0.ɵɵtext(14, "Comments & Reports");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 42);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.activeViewTab = "actions"); });
    i0.ɵɵtext(16, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 43);
    i0.ɵɵtemplate(18, PendingInstitutionsSubCounty_div_49_div_18_Template, 2, 1, "div", 44)(19, PendingInstitutionsSubCounty_div_49_div_19_Template, 5, 3, "div", 44)(20, PendingInstitutionsSubCounty_div_49_div_20_Template, 4, 2, "div", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 35)(22, "button", 36);
    i0.ɵɵlistener("click", function PendingInstitutionsSubCounty_div_49_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r7); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeModals()); });
    i0.ɵɵtext(23, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.selectedInstitution == null ? null : ctx_r3.selectedInstitution.institutionName);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("active", ctx_r3.activeViewTab === "form");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r3.activeViewTab === "reports");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r3.activeViewTab === "actions");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r3.activeViewTab === "form");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.activeViewTab === "reports");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.activeViewTab === "actions");
} }
export class PendingInstitutionsSubCounty {
    constructor() {
        this.notification = inject(NotificationService);
        this.http = inject(HttpClient);
        this.profileCounty = '';
        this.cdr = inject(ChangeDetectorRef);
        this.subCounties = [];
        this.statusList = ['All', 'Pending', 'Approved', 'Rejected', 'SCDE Approved', 'Assigned SCDE', 'Assigned SCQASO', 'SCQASO Recommended', 'SCDE Rejected', 'SCDE Recommended'];
        this.filter = { onboardingType: 'New Onboarding', subCounty: 'All', status: 'All' };
        this.tableSearch = '';
        this.allInstitutions = [];
        this.institutions = [];
        // Modals State
        this.showAssignModal = false;
        this.showAssignScqasoModal = false;
        this.showViewModal = false;
        this.showDownloadModal = false;
        this.selectedInstitution = null;
        this.scdeSubCounty = ''; //open to whichever SCDE logs in
        this.selectedSCQASO = '';
        this.scqasoList = [];
        this.activeViewTab = 'form';
        this.inspection = null;
        this.review = null;
        this.canDecide = false;
        this.deciding = false;
        this.pendingDecision = null;
        this.decisionSummary = '';
        this.viewData = null;
    }
    ngOnInit() {
        // 1. Load the profile FIRST to get the subcounty
        this.http.get('http://localhost:5215/api/sub-county-education/profile').subscribe({
            next: (profile) => {
                this.profileCounty = profile.county;
                this.scdeSubCounty = profile.subCounty;
                this.subCounties = [this.scdeSubCounty];
                this.filter.subCounty = this.scdeSubCounty;
                // 2. Fetches the pending schools linked to only the logged in SCDE
                this.onSearch();
            },
            error: (err) => {
                console.error('Failed to load profile', err);
                this.notification.showError('Failed to load SCDE profile.');
            }
        });
    }
    fetchInstitutions(status = 'Select') {
        if (!this.scdeSubCounty)
            return;
        this.http.get('http://localhost:5215/api/sub-county-education/institutions', { params: { county: this.profileCounty, subCounty: this.scdeSubCounty, status } }).subscribe({
            next: (res) => {
                this.allInstitutions = res.schools || [];
                this.institutions = [...this.allInstitutions];
                this.cdr.detectChanges();
            },
            error: (err) => this.notification.showError('Failed to fetch schools.')
        });
    }
    onSearch() {
        this.fetchInstitutions(this.filter.status);
    }
    // --- Download Logic ---
    downloadData(format) {
        if (this.institutions.length === 0) {
            this.notification.showError('No data to download.');
            return;
        }
        this.showDownloadModal = false;
        if (format === 'csv') {
            const headers = ['ID', 'Cert No', 'Name', 'Sub County', 'Status', 'Assigned To', 'Date'];
            const csvData = this.institutions.map(i => [
                i.institutionId || 'N/A', i.certificateNumber || 'N/A', i.institutionName || 'N/A',
                i.subCounty || 'N/A', i.status || 'N/A', i.supervisorId || 'N/A', i.createdAt || 'N/A'
            ]);
            const csvContent = [headers.join(','), ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))].join('\n');
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            this.triggerDownload(blob, `Institutions_SubCounty.csv`);
        }
        else {
            let html = '<table><thead><tr><th>ID</th><th>Cert No</th><th>Name</th><th>Sub County</th><th>Status</th><th>Assigned To</th><th>Date</th></tr></thead><tbody>';
            this.institutions.forEach(i => {
                html += `<tr><td>${i.institutionId}</td><td>${i.certificateNumber}</td><td>${i.institutionName}</td><td>${i.subCounty}</td><td>${i.status}</td><td>${i.supervisorId}</td><td>${i.createdAt}</td></tr>`;
            });
            html += '</tbody></table>';
            const blob = new Blob([html], { type: 'application/vnd.ms-excel' });
            this.triggerDownload(blob, `Institutions_SubCounty.xls`);
        }
        this.notification.showSuccess(`Downloaded as ${format.toUpperCase()}`);
    }
    triggerDownload(blob, filename) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
    // --- Assign SCQASO Logic ---
    openAssignSCQASOModal(inst) {
        this.selectedInstitution = inst;
        this.selectedSCQASO = '';
        this.showAssignScqasoModal = true;
        // Fetch SCQASOs specific to this SCDE's subcounty
        this.http.get('http://localhost:5215/api/sub-county-education/scqasos').subscribe({
            next: (res) => this.scqasoList = res,
            error: (err) => this.notification.showError('Failed to load SCQASOs')
        });
    }
    submitSCQASOAssignment() {
        if (!this.selectedSCQASO) {
            this.notification.showError('Please select an SCQASO.');
            return;
        }
        const payload = { assigneeId: Number(this.selectedSCQASO) };
        // Changes status to "Assigned SCQASO" and assigns a SCQASO
        this.http.post(`http://localhost:5215/api/sub-county-education/institutions/${this.selectedInstitution.institutionId}/assign-scqaso`, payload).subscribe({
            next: () => {
                this.notification.showSuccess('Assigned to SCQASO successfully.');
                this.onSearch();
                this.showAssignScqasoModal = false;
            },
            error: (err) => this.notification.showError(typeof err.error === 'string' ? err.error : 'Failed to assign to SCQASO.')
        });
    }
    // --- View Logic ---
    openViewModal(inst) {
        this.selectedInstitution = inst;
        this.activeViewTab = inst.status === 'SCQASO Recommended' ? 'reports' : 'form';
        this.inspection = null;
        this.review = null;
        this.viewData = null;
        this.canDecide = false;
        this.pendingDecision = null;
        this.decisionSummary = '';
        this.showViewModal = true;
        this.http.get(`http://localhost:5215/api/sub-county-education/institutions/${inst.institutionId}`).subscribe({
            next: (detail) => {
                if (!this.showViewModal || this.selectedInstitution?.institutionId !== inst.institutionId)
                    return;
                this.inspection = detail.inspection;
                this.review = detail.review;
                this.canDecide = detail.canReview && detail.status === 'SCQASO Recommended' && !!detail.inspection;
                this.viewData = detail.school;
                this.cdr.detectChanges();
            },
            error: (err) => this.notification.showError('Failed to fetch details')
        });
    }
    closeModals() {
        if (this.deciding)
            return;
        this.showAssignModal = false;
        this.showAssignScqasoModal = false;
        this.showViewModal = false;
    }
    openInspectionReport() {
        if (!this.inspection || !this.selectedInstitution)
            return;
        const url = `http://localhost:5215/api/sub-county-education/institutions/${this.selectedInstitution.institutionId}/inspection-report/${this.inspection.commentId}`;
        const tab = window.open('about:blank', '_blank');
        if (!tab) {
            this.notification.showError('Allow pop-ups to view the inspection report.');
            return;
        }
        tab.opener = null;
        this.http.get(url, { responseType: 'blob' }).subscribe({
            next: (file) => {
                const objectUrl = URL.createObjectURL(file);
                tab.location.replace(objectUrl);
                setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
            },
            error: () => {
                tab.close();
                this.notification.showError('Failed to open the inspection report.');
            }
        });
    }
    submitDecision() {
        const isApproved = this.pendingDecision;
        if (isApproved === null)
            return;
        if (!this.canDecide || this.deciding || !this.selectedInstitution)
            return;
        const decisionSummary = this.decisionSummary.trim();
        if (!decisionSummary) {
            this.notification.showError('Enter a summary for the decision.');
            return;
        }
        this.deciding = true;
        this.http.post(`http://localhost:5215/api/sub-county-education/reports`, { institutionId: this.selectedInstitution.institutionId, isApproved, summary: decisionSummary }).subscribe({
            next: () => {
                this.deciding = false;
                this.selectedInstitution.status = isApproved ? 'SCDE Recommended' : 'Rejected';
                this.notification.showSuccess(isApproved ? 'Institution recommended for county review.' : 'Institution rejected.');
                this.closeModals();
                this.onSearch();
            },
            error: (err) => {
                this.deciding = false;
                this.notification.showError(typeof err.error === 'string' ? err.error : 'Failed to save the decision.');
                this.cdr.detectChanges();
            }
        });
    }
    static { this.ɵfac = function PendingInstitutionsSubCounty_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PendingInstitutionsSubCounty)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PendingInstitutionsSubCounty, selectors: [["app-pending-institutions-sub-county"]], decls: 50, vars: 10, consts: [["noInspection", ""], ["awaitingReview", ""], [1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "radio-row"], [1, "fw-bold", "me-3"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "onboardingType", "id", "newOnboarding", "value", "New Onboarding", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "newOnboarding", 1, "form-check-label"], [1, "row", "mt-4"], [1, "col-md-6"], [1, "form-label", "fw-bold"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 4, "ngIf"], [3, "value"], [1, "badge-status", 3, "ngClass"], [1, "btn-outline-gray", 3, "click", "disabled"], [1, "btn-outline-red", 3, "click"], [1, "bi", "bi-eye-fill", "text-danger", "me-1"], [1, "modal-backdrop"], [1, "modal-dialog", "small-modal"], [1, "modal-header", "bg-info", "text-white"], [1, "modal-title"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "form-label", "fw-bold", "text-muted"], ["value", "", "disabled", "", "selected", ""], [1, "modal-footer"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "modal-dialog", "large-modal"], [1, "modal-header", "bg-info", "text-white", "align-items-center"], [1, "badge", "bg-warning", "text-dark", "ms-3"], [1, "modal-tabs"], [1, "tab-btn", 3, "click"], [1, "modal-body", "scrollable-body"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [4, "ngIf"], [1, "row"], [4, "ngIf", "ngIfElse"], ["class", "mt-3", 4, "ngIf"], [1, "text-break", 2, "white-space", "pre-wrap"], ["type", "button", 1, "btn-view-inspection-report", 3, "click"], [1, "mt-3"], ["class", "text-break", 4, "ngIf"], [1, "text-break"], ["class", "d-flex flex-wrap gap-2", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn-success", 3, "click", "disabled"], ["type", "button", 1, "btn-danger", 3, "click", "disabled"], [3, "ngSubmit"], ["for", "decision-summary", 1, "form-label"], ["id", "decision-summary", "name", "decisionSummary", "rows", "3", "required", "", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel", "readonly"], ["type", "submit", 1, "btn", 3, "ngClass", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"]], template: function PendingInstitutionsSubCounty_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "h2");
            i0.ɵɵtext(3, "Institution Approval in Sub County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "label", 6);
            i0.ɵɵtext(7, "Select Onboarding Type:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 7)(9, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionsSubCounty_Template_input_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.onboardingType, $event) || (ctx.filter.onboardingType = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "label", 9);
            i0.ɵɵtext(11, "New Onboarding");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 10)(13, "div", 11)(14, "label", 12);
            i0.ɵɵtext(15, "Status:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "select", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionsSubCounty_Template_select_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.status, $event) || (ctx.filter.status = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function PendingInstitutionsSubCounty_Template_select_ngModelChange_16_listener($event) { return ctx.fetchInstitutions($event); });
            i0.ɵɵtemplate(17, PendingInstitutionsSubCounty_option_17_Template, 2, 2, "option", 14);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(18, "div", 15)(19, "div", 16)(20, "input", 17);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionsSubCounty_Template_input_ngModelChange_20_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "div", 18)(22, "table", 19)(23, "thead")(24, "tr")(25, "th");
            i0.ɵɵtext(26, "Institution Id");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "Cert No.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "th");
            i0.ɵɵtext(32, "Date of Onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "th");
            i0.ɵɵtext(34, "Subcounty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "th");
            i0.ɵɵtext(36, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "th");
            i0.ɵɵtext(38, "Assigned SCDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "th");
            i0.ɵɵtext(40, "Assigned SCQASO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "th");
            i0.ɵɵtext(42, "Assign SCQASO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "th");
            i0.ɵɵtext(44, "View Details");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(45, "tbody");
            i0.ɵɵtemplate(46, PendingInstitutionsSubCounty_tr_46_Template, 26, 20, "tr", 20);
            i0.ɵɵpipe(47, "search");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(48, PendingInstitutionsSubCounty_div_48_Template, 18, 2, "div", 21)(49, PendingInstitutionsSubCounty_div_49_Template, 24, 10, "div", 21);
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.onboardingType);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.status);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.statusList);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(26);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(47, 7, ctx.institutions, ctx.tableSearch));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showAssignScqasoModal);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showViewModal);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.NgModel, i2.NgForm, i1.DatePipe, SearchPipe], styles: ["\r\n\r\n\r\n.page-container[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  background-color: #f8f9fa;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  margin: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] {\r\n  margin-bottom: 2rem;\r\n  background: #fff;\r\n  padding: 1.5rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.radio-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  padding: 0.6rem;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n\r\n\r\n\r\n.table-section[_ngcontent-%COMP%] {\r\n  background: #ffffff;\r\n  padding: 1.5rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.table-search-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.table-responsive[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #ddd;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.8rem 1rem;\r\n  border-bottom: 1px solid #eee;\r\n  border-right: 1px solid #eee;\r\n  font-size: 0.9rem;\r\n  vertical-align: middle;\r\n}\r\n\r\n\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n}\r\n\r\n.badge-pending[_ngcontent-%COMP%] { background-color: #ffc107; color: #333; }\r\n.badge-assigned[_ngcontent-%COMP%] { background-color: #3fbeeb; color: #fff; }\r\n.badge-recommended[_ngcontent-%COMP%] { background-color: #1e40af; color: #fff; }\r\n.badge-rejected[_ngcontent-%COMP%] { background-color: #dc143c; color: #fff; }\r\n.badge-review[_ngcontent-%COMP%] { background-color: #28a745; color: #fff; }\r\n\r\n\r\n\r\n\r\n.btn-outline-gray[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: 1px solid #ccc;\r\n  color: #555;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 4px;\r\n  font-size: 0.85rem;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-outline-gray[_ngcontent-%COMP%]:hover:not(:disabled) { background: #f8f9fa; }\r\n.btn-outline-gray[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\r\n\r\n.btn-outline-red[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border: 1px solid #dc3545;\r\n  color: #dc3545;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 4px;\r\n  font-size: 0.85rem;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-outline-red[_ngcontent-%COMP%]:hover { background: #dc3545; color: #fff; }\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  background-color: #dc143c;\r\n  border: none;\r\n  color: white;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-view-inspection-report[_ngcontent-%COMP%]\r\n{ padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n  background-color: #1e40af;\r\n  color: #fff;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 90vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal[_ngcontent-%COMP%] { max-width: 500px; }\r\n.large-modal[_ngcontent-%COMP%] { max-width: 800px; }\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] { margin: 0; font-size: 1.1rem; font-weight: 600; }\r\n.btn-close-white[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-tabs[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  border-bottom: 1px solid #dee2e6;\r\n  padding: 0 1.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 0.95rem;\r\n  color: #6c757d;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%]:hover { color: #00b4d8; background-color: #f8f9fa; }\r\n.tab-btn.active[_ngcontent-%COMP%] { color: #00b4d8; border-bottom: 3px solid #00b4d8; font-weight: 700; }\r\n\r\n.modal-body.scrollable-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem 2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n}\r\n\r\n\r\n\r\n\r\nfieldset[_ngcontent-%COMP%] {\r\n  border: 1px solid #d0d7de;\r\n  border-radius: 8px;\r\n  padding: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  background: #ffffff;\r\n}\r\n\r\nlegend[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  padding: 0 10px;\r\n  width: auto;\r\n}\r\n\r\ndl.row[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.5rem;\r\n}\r\n\r\ndl.row[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  color: #555;\r\n  font-size: 0.9rem;\r\n}\r\n\r\ndl.row[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  color: #333;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n\r\n\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  margin-bottom: 0.5rem;\r\n  display: block;\r\n  font-weight: 600;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\r\n  border-color: #00b4d8;\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 180, 216, 0.25);\r\n}\r\n\r\ntextarea.form-control[_ngcontent-%COMP%] { resize: vertical; }\r\n\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #28a745 0%, #198754 100%);\r\n  color: white;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, #34ce57 0%, #28a745 100%);\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 12px rgba(40, 167, 69, 0.3);\r\n}\r\n\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\r\n  color: white;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, #e4606d 0%, #dc3545 100%);\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 12px rgba(220, 53, 69, 0.3);\r\n}\r\n\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 0.9rem;\r\n  border-radius: 6px;\r\n  box-shadow: none;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]:hover {\r\n  transform: none;\r\n  background: #bd2130;\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PendingInstitutionsSubCounty, [{
        type: Component,
        args: [{ selector: 'app-pending-institutions-sub-county', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"page-container\">\r\n\r\n  <div class=\"page-header\">\r\n    <h2>Institution Approval in Sub County</h2>\r\n  </div>\r\n\r\n  <!-- Top Filters -->\r\n  <div class=\"filter-section\">\r\n    <div class=\"radio-row\">\r\n      <label class=\"fw-bold me-3\">Select Onboarding Type:</label>\r\n      <div class=\"form-check form-check-inline\">\r\n        <input class=\"form-check-input\" type=\"radio\" name=\"onboardingType\" id=\"newOnboarding\" value=\"New Onboarding\" [(ngModel)]=\"filter.onboardingType\">\r\n        <label class=\"form-check-label\" for=\"newOnboarding\">New Onboarding</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mt-4\">\r\n      <div class=\"col-md-6\">\r\n        <label class=\"form-label fw-bold\">Status:</label>\r\n        <select class=\"form-select\" [(ngModel)]=\"filter.status\" (ngModelChange)=\"fetchInstitutions($event)\">\r\n          <option *ngFor=\"let status of statusList\" [value]=\"status\">{{ status }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Table Section -->\r\n  <div class=\"table-section\">\r\n    <div class=\"table-search-row\">\r\n      <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\r\n    </div>\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"custom-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Institution Id</th>\r\n            <th>Cert No.</th>\r\n            <th>Institution Name</th>\r\n            <th>Date of Onboarding</th>\r\n            <th>Subcounty</th>\r\n            <th>Status</th>\r\n            <th>Assigned SCDE</th>\r\n            <th>Assigned SCQASO</th>\r\n            <th>Assign SCQASO</th> <!-- Renamed to Assign -->\r\n            <th>View Details</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let inst of institutions | search: tableSearch; let i = index\">\r\n            <td>{{ inst.institutionId }}</td>\r\n            <td>{{ inst.certificateNumber }}</td>\r\n            <td>{{ inst.institutionName }}</td>\r\n            <td>{{ inst.createdAt | date:'dd-MM-yyyy' }}</td>\r\n            <td>{{ inst.subCounty }}</td>\r\n            <td>\r\n              <!-- Dynamic badge colors based on status -->\r\n              <span class=\"badge-status\" [ngClass]=\"{\r\n                'badge-pending': inst.status === 'Pending' || inst.status === 'pending',\r\n                'badge-assigned': inst.status === 'Assigned SCDE' || inst.status === 'Assigned SCQASO',\r\n                'badge-recommended': inst.status === 'Approved' || inst.status === 'SCDE Approved' || inst.status === 'SCDE Recommended',\r\n                'badge-rejected': inst.status === 'SCDE Rejected' || inst.status === 'Rejected' || inst.status === 'rejected',\r\n                'badge-review': inst.status === 'SCQASO Recommended'\r\n              }\">\r\n                {{ inst.status }}\r\n              </span>\r\n            </td>\r\n            <td>{{ inst.supervisorId || 'Logged in SCDE' }}</td>\r\n            <td>{{ inst.assigneeId || (inst.status === 'Assigned SCQASO' ? 'Needs officer assignment' : 'None') }}</td>\r\n            <td>\r\n              <!-- Changed to openAssignSCQASOModal -->\r\n              <button class=\"btn-outline-gray\" [disabled]=\"!['Assigned SCDE', 'Assigned SCQASO', 'SCDE Rejected'].includes(inst.status)\" (click)=\"openAssignSCQASOModal(inst)\">Assign</button>\r\n            </td>\r\n            <td>\r\n              <button class=\"btn-outline-red\" (click)=\"openViewModal(inst)\">\r\n                <i class=\"bi bi-eye-fill text-danger me-1\"></i> View\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ========================================== -->\r\n<!-- MODAL 1: ASSIGN SCQASO                     -->\r\n<!-- ========================================== -->\r\n<div class=\"modal-backdrop\" *ngIf=\"showAssignScqasoModal\">\r\n  <div class=\"modal-dialog small-modal\">\r\n    <div class=\"modal-header bg-info text-white\">\r\n      <h5 class=\"modal-title\">Assign SCQASO</h5>\r\n      <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"showAssignScqasoModal = false\"></button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <label class=\"form-label fw-bold text-muted\">Select SCQASO</label>\r\n      <select class=\"form-select\" [(ngModel)]=\"selectedSCQASO\">\r\n        <option value=\"\" disabled selected>Select an SCQASO...</option>\r\n        <option *ngFor=\"let scqaso of scqasoList\" [value]=\"scqaso.userId\">{{ scqaso.fullName }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-danger\" (click)=\"showAssignScqasoModal = false\">Close</button>\r\n      <button class=\"btn btn-outline-danger\" (click)=\"submitSCQASOAssignment()\">Submit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ========================================== -->\r\n<!-- MODAL 2: VIEW INSTITUTION DETAILS          -->\r\n<!-- ========================================== -->\r\n<div class=\"modal-backdrop\" *ngIf=\"showViewModal\">\r\n  <div class=\"modal-dialog large-modal\">\r\n\r\n    <!-- Header -->\r\n    <div class=\"modal-header bg-info text-white align-items-center\">\r\n      <h5 class=\"modal-title\">\r\n        Institution - <strong>{{ selectedInstitution?.institutionName }}</strong>\r\n        <span class=\"badge bg-warning text-dark ms-3\">SCDE REVIEW</span>\r\n      </h5>\r\n      <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeModals()\"></button>\r\n    </div>\r\n\r\n    <!-- Tabs -->\r\n    <div class=\"modal-tabs\">\r\n      <button class=\"tab-btn\" [class.active]=\"activeViewTab === 'form'\" (click)=\"activeViewTab = 'form'\">Institution Onboarding Form</button>\r\n      <button class=\"tab-btn\" [class.active]=\"activeViewTab === 'reports'\" (click)=\"activeViewTab = 'reports'\">Comments & Reports</button>\r\n      <button class=\"tab-btn\" [class.active]=\"activeViewTab === 'actions'\" (click)=\"activeViewTab = 'actions'\">Actions</button>\r\n    </div>\r\n\r\n    <!-- Modal Body -->\r\n    <div class=\"modal-body scrollable-body\">\r\n\r\n      <div *ngIf=\"activeViewTab === 'form'\" class=\"tab-content\">\r\n        <div *ngIf=\"viewData as school\">\r\n\r\n          <fieldset>\r\n            <legend>Institution Details</legend>\r\n            <dl class=\"row\">\r\n              <dt>Institution type</dt><dd>{{ school.institutionType || 'N/A' }}</dd>\r\n              <dt>Institution name</dt><dd>{{ school.institutionName }}</dd>\r\n              <dt>Institution level</dt><dd>{{ school.institutionLevel || 'N/A' }}</dd>\r\n              <dt>Certificate number</dt><dd>{{ school.certificateNumber || 'N/A' }}</dd>\r\n              <dt>Head of institution</dt><dd>{{ school.headOfInstitution || 'N/A' }}</dd>\r\n              <dt>Email</dt><dd>{{ school.emailId || 'N/A' }}</dd>\r\n              <dt>Mobile number</dt><dd>{{ school.mobileNo || 'N/A' }}</dd>\r\n              <dt>Postal code</dt><dd>{{ school.postalAddressHoi || 'N/A' }}</dd>\r\n              <dt>County</dt><dd>{{ school.county || 'N/A' }}</dd>\r\n              <dt>Sub-county</dt><dd>{{ school.subCounty || 'N/A' }}</dd>\r\n              <dt>Constituency</dt><dd>{{ school.constituency || 'N/A' }}</dd>\r\n              <dt>Institution location</dt><dd>{{ school.postalAddressInstitution || 'N/A' }}</dd>\r\n              <dt>Application type</dt><dd>{{ school.applicationType || 'N/A' }}</dd>\r\n              <dt>Onboarding date</dt><dd>{{ (school.createdAt | date:'dd-MM-yyyy') || 'N/A' }}</dd>\r\n              <dt>Total learners</dt><dd>{{ school.totalLearners || 0 }}</dd>\r\n            </dl>\r\n          </fieldset>\r\n\r\n          <fieldset>\r\n            <legend>Other Details</legend>\r\n            <dl class=\"row\">\r\n              <dt>Accommodation type</dt><dd>{{ school.accomodationType || 'N/A' }}</dd>\r\n              <dt>School category</dt><dd>{{ school.schoolCategory || 'N/A' }}</dd>\r\n            </dl>\r\n          </fieldset>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"activeViewTab === 'reports'\" class=\"tab-content\">\r\n        <ng-container *ngIf=\"inspection; else noInspection\">\r\n          <h6>Inspection officer comment</h6>\r\n          <p class=\"text-break\" style=\"white-space: pre-wrap\">{{ inspection.commentText }}</p>\r\n          <p *ngIf=\"inspection.inspectionDate\">Inspection date {{ inspection.inspectionDate }}</p>\r\n          <button type=\"button\" class=\"btn-view-inspection-report\" (click)=\"openInspectionReport()\">View inspection report</button>\r\n        </ng-container>\r\n        <ng-template #noInspection><p>No inspection report is available.</p></ng-template>\r\n        <div *ngIf=\"review\" class=\"mt-3\">\r\n          <h6>Sub-county review</h6>\r\n          <p>{{ review.status }}</p>\r\n          <p *ngIf=\"review.summary\" class=\"text-break\">{{ review.summary }}</p>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"activeViewTab === 'actions'\" class=\"tab-content\">\r\n        <ng-container *ngIf=\"canDecide; else awaitingReview\">\r\n          <div *ngIf=\"pendingDecision === null\" class=\"d-flex flex-wrap gap-2\">\r\n            <button type=\"button\" class=\"btn-success\" [disabled]=\"deciding\" (click)=\"pendingDecision = true\">Approve</button>\r\n            <span></span>\r\n            <button type=\"button\" class=\"btn-danger\" [disabled]=\"deciding\" (click)=\"pendingDecision = false\">Reject</button>\r\n          </div>\r\n          <form *ngIf=\"pendingDecision !== null\" (ngSubmit)=\"submitDecision()\">\r\n            <label for=\"decision-summary\" class=\"form-label\">{{ pendingDecision ? 'Approval summary' : 'Rejection reason' }}</label>\r\n            <textarea id=\"decision-summary\" name=\"decisionSummary\" class=\"form-control mb-3\" rows=\"3\"\r\n              [(ngModel)]=\"decisionSummary\" [readonly]=\"deciding\" required></textarea>\r\n            <div class=\"d-flex flex-wrap gap-2\">\r\n              <button type=\"submit\" class=\"btn\" [ngClass]=\"pendingDecision ? 'btn-success' : 'btn-danger'\" [disabled]=\"deciding || !decisionSummary.trim()\">{{ pendingDecision ? 'Confirm approval' : 'Confirm rejection' }}</button>\r\n              <button type=\"button\" class=\"btn btn-outline-secondary\" [disabled]=\"deciding\" (click)=\"pendingDecision = null; decisionSummary = ''\">Cancel</button>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n        <ng-template #awaitingReview><p>Current status: {{ viewData?.status || selectedInstitution?.status }}</p></ng-template>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Footer -->\r\n    <div class=\"modal-footer\">\r\n      <button class=\"btn btn-danger\" (click)=\"closeModals()\">Close</button>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n", styles: ["/* ==========================================\r\n   BASE LAYOUT & TABLES\r\n   ========================================== */\r\n.page-container {\r\n  padding: 2rem;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  background-color: #f8f9fa;\r\n  min-height: 100vh;\r\n}\r\n\r\n.page-header {\r\n  margin-bottom: 2rem;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.page-header h2 {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  margin: 0;\r\n}\r\n\r\n/* ==========================================\r\n   FILTERS\r\n   ========================================== */\r\n.filter-section {\r\n  margin-bottom: 2rem;\r\n  background: #fff;\r\n  padding: 1.5rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.radio-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.filter-section .form-select {\r\n  padding: 0.6rem;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n}\r\n\r\n/* ==========================================\r\n   TABLE\r\n   ========================================== */\r\n.table-section {\r\n  background: #ffffff;\r\n  padding: 1.5rem;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.table-search-row {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.search-input {\r\n  width: 300px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.table-responsive {\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  border: 1px solid #ddd;\r\n  border-radius: 8px;\r\n}\r\n\r\n.custom-table {\r\n  width: 100%;\r\n  border-collapse: collapse;\r\n  white-space: nowrap;\r\n}\r\n\r\n.custom-table thead {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n}\r\n\r\n.custom-table th {\r\n  padding: 0.8rem 1rem;\r\n  text-align: left;\r\n  font-size: 0.85rem;\r\n  border-right: 1px solid rgba(255,255,255,0.2);\r\n}\r\n\r\n.custom-table td {\r\n  padding: 0.8rem 1rem;\r\n  border-bottom: 1px solid #eee;\r\n  border-right: 1px solid #eee;\r\n  font-size: 0.9rem;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* ==========================================\r\n   BADGES\r\n   ========================================== */\r\n.badge-status {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n}\r\n\r\n.badge-pending { background-color: #ffc107; color: #333; }\r\n.badge-assigned { background-color: #3fbeeb; color: #fff; }\r\n.badge-recommended { background-color: #1e40af; color: #fff; }\r\n.badge-rejected { background-color: #dc143c; color: #fff; }\r\n.badge-review { background-color: #28a745; color: #fff; }\r\n\r\n/* ==========================================\r\n   BUTTONS\r\n   ========================================== */\r\n.btn-outline-gray {\r\n  background: transparent;\r\n  border: 1px solid #ccc;\r\n  color: #555;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 4px;\r\n  font-size: 0.85rem;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-outline-gray:hover:not(:disabled) { background: #f8f9fa; }\r\n.btn-outline-gray:disabled { opacity: 0.5; cursor: not-allowed; }\r\n\r\n.btn-outline-red {\r\n  background: #fff;\r\n  border: 1px solid #dc3545;\r\n  color: #dc3545;\r\n  padding: 0.4rem 1rem;\r\n  border-radius: 4px;\r\n  font-size: 0.85rem;\r\n  transition: 0.2s;\r\n}\r\n\r\n.btn-outline-red:hover { background: #dc3545; color: #fff; }\r\n\r\n.btn-danger {\r\n  background-color: #dc143c;\r\n  border: none;\r\n  color: white;\r\n  padding: 0.5rem 1.5rem;\r\n  border-radius: 4px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-view-inspection-report\r\n{ padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n  background-color: #1e40af;\r\n  color: #fff;\r\n}\r\n\r\n/* ==========================================\r\n   MODALS & TABS\r\n   ========================================== */\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n.modal-dialog {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 90vh;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.small-modal { max-width: 500px; }\r\n.large-modal { max-width: 800px; }\r\n\r\n.modal-header {\r\n  background-color: #00b4d8;\r\n  color: white;\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.modal-header h5 { margin: 0; font-size: 1.1rem; font-weight: 600; }\r\n.btn-close-white {\r\n  background: transparent;\r\n  border: none;\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.modal-tabs {\r\n  display: flex;\r\n  border-bottom: 1px solid #dee2e6;\r\n  padding: 0 1.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.tab-btn {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 1rem 1.5rem;\r\n  font-size: 0.95rem;\r\n  color: #6c757d;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.tab-btn:hover { color: #00b4d8; background-color: #f8f9fa; }\r\n.tab-btn.active { color: #00b4d8; border-bottom: 3px solid #00b4d8; font-weight: 700; }\r\n\r\n.modal-body.scrollable-body {\r\n  padding: 1.5rem 2rem;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-footer {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  gap: 10px;\r\n}\r\n\r\n/* ==========================================\r\n   DETAILS MODAL SPECIFIC (Fields & Lists)\r\n   ========================================== */\r\nfieldset {\r\n  border: 1px solid #d0d7de;\r\n  border-radius: 8px;\r\n  padding: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n  background: #ffffff;\r\n}\r\n\r\nlegend {\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  padding: 0 10px;\r\n  width: auto;\r\n}\r\n\r\ndl.row {\r\n  margin-bottom: 0;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 0.5rem;\r\n}\r\n\r\ndl.row dt {\r\n  font-weight: 600;\r\n  color: #555;\r\n  font-size: 0.9rem;\r\n}\r\n\r\ndl.row dd {\r\n  margin-bottom: 0.5rem;\r\n  color: #333;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n/* ==========================================\r\n   FORM ELEMENTS\r\n   ========================================== */\r\n.form-label {\r\n  font-size: 0.9rem;\r\n  color: #555;\r\n  margin-bottom: 0.5rem;\r\n  display: block;\r\n  font-weight: 600;\r\n}\r\n\r\n.form-control, .form-select {\r\n  width: 100%;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.6rem 0.8rem;\r\n  font-size: 0.95rem;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.form-control:focus, .form-select:focus {\r\n  border-color: #00b4d8;\r\n  outline: none;\r\n  box-shadow: 0 0 0 0.2rem rgba(0, 180, 216, 0.25);\r\n}\r\n\r\ntextarea.form-control { resize: vertical; }\r\n\r\n/* Approve Button */\r\n.btn-success {\r\n  background: linear-gradient(135deg, #28a745 0%, #198754 100%);\r\n  color: white;\r\n}\r\n\r\n.btn-success:hover {\r\n  background: linear-gradient(135deg, #34ce57 0%, #28a745 100%);\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 12px rgba(40, 167, 69, 0.3);\r\n}\r\n\r\n/* Reject Button */\r\n.btn-danger {\r\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\r\n  color: white;\r\n}\r\n\r\n.btn-danger:hover {\r\n  background: linear-gradient(135deg, #e4606d 0%, #dc3545 100%);\r\n  transform: translateY(-2px);\r\n  box-shadow: 0 6px 12px rgba(220, 53, 69, 0.3);\r\n}\r\n\r\n/* Close Button in Footer */\r\n.modal-footer .btn-danger {\r\n  padding: 0.5rem 1.5rem;\r\n  font-size: 0.9rem;\r\n  border-radius: 6px;\r\n  box-shadow: none;\r\n}\r\n\r\n.modal-footer .btn-danger:hover {\r\n  transform: none;\r\n  background: #bd2130;\r\n}\r\n\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PendingInstitutionsSubCounty, { className: "PendingInstitutionsSubCounty", filePath: "app/pages/pending-institutions-sub-county/pending-institutions-sub-county.ts", lineNumber: 16 }); })();
