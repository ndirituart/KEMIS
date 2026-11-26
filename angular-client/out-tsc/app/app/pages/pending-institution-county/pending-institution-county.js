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
function PendingInstitutionCounty_option_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", sub_r1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sub_r1);
} }
function PendingInstitutionCounty_option_108_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", status_r2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r2);
} }
function PendingInstitutionCounty_tr_135_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(11, "td")(12, "span", 44);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "button", 45);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_tr_135_Template_button_click_15_listener() { const inst_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.openAssignModal(inst_r4)); });
    i0.ɵɵtext(16, "Assign SCDE");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "button", 46);
    i0.ɵɵtext(19, "Assign");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "button", 47);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_tr_135_Template_button_click_21_listener() { const inst_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.openViewModal(inst_r4)); });
    i0.ɵɵelement(22, "i", 48);
    i0.ɵɵtext(23, " View ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const inst_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.institutionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.certificateNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.institutionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.createdAt);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(inst_r4.subCounty);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(7, _c0, inst_r4.status === "Pending" || inst_r4.status === "pending", inst_r4.status === "Assigned SCDE" || inst_r4.status === "Assigned SCQASO", inst_r4.status === "SCDE Recommended" || inst_r4.status === "SCDE Approved" || inst_r4.status === "SCQASO Recommended", inst_r4.status === "SCDE Rejected" || inst_r4.status === "Rejected" || inst_r4.status === "rejected", inst_r4.status === "Approved"));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", inst_r4.status, " ");
} }
function PendingInstitutionCounty_div_137_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const scde_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", scde_r7.userId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(scde_r7.fullName);
} }
function PendingInstitutionCounty_div_137_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 50)(2, "div", 51)(3, "h5", 52);
    i0.ɵɵtext(4, "Assign SCDE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 53);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_137_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeModals()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 54)(7, "label", 55);
    i0.ɵɵtext(8, "SCDE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 34);
    i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionCounty_div_137_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r4.selectedSCDE, $event) || (ctx_r4.selectedSCDE = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(10, "option", 56);
    i0.ɵɵtext(11, "Select an SCDE...");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, PendingInstitutionCounty_div_137_option_12_Template, 2, 2, "option", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 57)(14, "button", 58);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_137_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeModals()); });
    i0.ɵɵtext(15, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 59);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_137_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r6); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.submitAssignment()); });
    i0.ɵɵtext(17, "Submit");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.selectedSCDE);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r4.scdeList);
} }
function PendingInstitutionCounty_div_138_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67)(1, "h4", 68);
    i0.ɵɵtext(2, "Institution Onboarding Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 69);
    i0.ɵɵtext(4, "Complete institution details as provided during onboarding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h6", 70);
    i0.ɵɵtext(6, "Basic Institution Details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 71)(8, "div", 72)(9, "label", 73);
    i0.ɵɵtext(10, "Institution Type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 72)(13, "label", 73);
    i0.ɵɵtext(14, "Institution Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 72)(17, "label", 73);
    i0.ɵɵtext(18, "Head of Institution *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 72)(21, "label", 73);
    i0.ɵɵtext(22, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 72)(25, "label", 73);
    i0.ɵɵtext(26, "Mobile Number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 72)(29, "label", 73);
    i0.ɵɵtext(30, "Onboarding Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 72)(33, "label", 73);
    i0.ɵɵtext(34, "Application Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(35, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "div", 72)(37, "label", 73);
    i0.ɵɵtext(38, "Educational Pathway");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(39, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 72)(41, "label", 73);
    i0.ɵɵtext(42, "Institution Level *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "div", 72)(45, "label", 73);
    i0.ɵɵtext(46, "Have a Valid Registration Certificate?");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(47, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div", 72)(49, "label", 73);
    i0.ɵɵtext(50, "Institution Certificate Number");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(51, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "div", 72)(53, "label", 73);
    i0.ɵɵtext(54, "Institution Certificate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(55, "br");
    i0.ɵɵelementStart(56, "a", 75);
    i0.ɵɵtext(57, "View Document");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div", 72)(59, "label", 73);
    i0.ɵɵtext(60, "Number of SNE Boys");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(61, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 72)(63, "label", 73);
    i0.ɵɵtext(64, "Number of SNE Girls");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(65, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "div", 72)(67, "label", 73);
    i0.ɵɵtext(68, "Total Number of Learners");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(69, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "div", 72)(71, "label", 73);
    i0.ɵɵtext(72, "Coordinates");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(73, "input", 74);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "h6", 76);
    i0.ɵɵtext(75, "Location Information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "div", 71)(77, "div", 72)(78, "label", 73);
    i0.ɵɵtext(79, "County *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(80, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "div", 72)(82, "label", 73);
    i0.ɵɵtext(83, "Sub County *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(84, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "div", 72)(86, "label", 73);
    i0.ɵɵtext(87, "Constituency");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(88, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "div", 72)(90, "label", 73);
    i0.ɵɵtext(91, "Postal Code *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(92, "input", 74);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(93, "h6", 76);
    i0.ɵɵtext(94, "Additional Information");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "div", 71)(96, "div", 72)(97, "label", 73);
    i0.ɵɵtext(98, "School Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(99, "input", 74);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "div", 32)(101, "label", 73);
    i0.ɵɵtext(102, "Postal Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(103, "input", 74);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("value", ctx_r4.viewData.institutionType);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.institutionName);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.headOfInstitution);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.email);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.mobileNo);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.onboardingDate);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.applicationType);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.educationalPathway);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.institutionLevel);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.hasCert);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.certNo);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("value", ctx_r4.viewData.sneBoys);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.sneGirls);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.totalLearners);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.coordinates);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r4.viewData.county);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.subCounty);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.constituency);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.postalCode);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r4.viewData.schoolCategory);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r4.viewData.postalLocation);
} }
function PendingInstitutionCounty_div_138_div_19_ng_container_1_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Inspection date ", ctx_r4.inspection.inspectionDate);
} }
function PendingInstitutionCounty_div_138_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h6");
    i0.ɵɵtext(2, "Inspection officer comment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 79);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PendingInstitutionCounty_div_138_div_19_ng_container_1_p_5_Template, 2, 1, "p", 80);
    i0.ɵɵelementStart(6, "button", 81);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_div_19_ng_container_1_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r9); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.openInspectionReport()); });
    i0.ɵɵtext(7, "View inspection report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.inspection.commentText);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.inspection.inspectionDate);
} }
function PendingInstitutionCounty_div_138_div_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No inspection report is available.");
    i0.ɵɵelementEnd();
} }
function PendingInstitutionCounty_div_138_div_19_div_4_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r4.review.summary);
} }
function PendingInstitutionCounty_div_138_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 82)(1, "h6");
    i0.ɵɵtext(2, "Sub-county review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PendingInstitutionCounty_div_138_div_19_div_4_p_5_Template, 2, 1, "p", 83);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r4.review.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.review.summary);
} }
function PendingInstitutionCounty_div_138_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, PendingInstitutionCounty_div_138_div_19_ng_container_1_Template, 8, 2, "ng-container", 77)(2, PendingInstitutionCounty_div_138_div_19_ng_template_2_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, PendingInstitutionCounty_div_138_div_19_div_4_Template, 6, 2, "div", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noInspection_r10 = i0.ɵɵreference(3);
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.inspection)("ngIfElse", noInspection_r10);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r4.review);
} }
function PendingInstitutionCounty_div_138_div_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "label", 85);
    i0.ɵɵtext(2, "Reason (required when rejecting)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionCounty_div_138_div_20_ng_container_1_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r4 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r4.rejectionReason, $event) || (ctx_r4.rejectionReason = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 87)(5, "button", 88);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_div_20_ng_container_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r11); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.submitDecision(true)); });
    i0.ɵɵtext(6, "Approve institution");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 89);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_div_20_ng_container_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r4 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r4.submitDecision(false)); });
    i0.ɵɵtext(8, "Reject institution");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r4.rejectionReason);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r4.deciding);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r4.deciding);
} }
function PendingInstitutionCounty_div_138_div_20_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "County decisions are available after the sub-county director approves the inspection.");
    i0.ɵɵelementEnd();
} }
function PendingInstitutionCounty_div_138_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵtemplate(1, PendingInstitutionCounty_div_138_div_20_ng_container_1_Template, 9, 3, "ng-container", 77)(2, PendingInstitutionCounty_div_138_div_20_ng_template_2_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const awaitingReview_r12 = i0.ɵɵreference(3);
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.canDecide)("ngIfElse", awaitingReview_r12);
} }
function PendingInstitutionCounty_div_138_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 60)(2, "div", 61)(3, "h5", 52);
    i0.ɵɵtext(4, " Institution Name - ");
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 62);
    i0.ɵɵtext(8, "CDE REVIEW");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 53);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r8); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeModals()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 63)(11, "button", 64);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r8); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.activeViewTab = "form"); });
    i0.ɵɵtext(12, "Institution Onboarding Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 64);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r8); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.activeViewTab = "reports"); });
    i0.ɵɵtext(14, "Comments & Reports");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 64);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r8); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.activeViewTab = "actions"); });
    i0.ɵɵtext(16, "Actions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 65);
    i0.ɵɵtemplate(18, PendingInstitutionCounty_div_138_div_18_Template, 104, 21, "div", 66)(19, PendingInstitutionCounty_div_138_div_19_Template, 5, 3, "div", 66)(20, PendingInstitutionCounty_div_138_div_20_Template, 4, 2, "div", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 57)(22, "button", 58);
    i0.ɵɵlistener("click", function PendingInstitutionCounty_div_138_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r8); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.closeModals()); });
    i0.ɵɵtext(23, "Close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r4.selectedInstitution == null ? null : ctx_r4.selectedInstitution.institutionName);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("active", ctx_r4.activeViewTab === "form");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r4.activeViewTab === "reports");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r4.activeViewTab === "actions");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r4.activeViewTab === "form");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.activeViewTab === "reports");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r4.activeViewTab === "actions");
} }
export class PendingInstitutionCounty {
    constructor() {
        this.notification = inject(NotificationService);
        this.http = inject(HttpClient);
        this.cdr = inject(ChangeDetectorRef);
        // --- Filters ---
        this.county = '';
        this.subCounties = ['All'];
        this.statusList = [
            'All', 'Pending', 'Approved', 'Rejected',
            'SCDE Recommended', 'SCDE Approved', 'Assigned SCDE', 'Assigned SCQASO', 'SCQASO Recommended', 'SCDE Rejected'
        ];
        this.filter = {
            onboardingType: 'New Onboarding',
            subCounty: 'All',
            status: ''
        };
        this.tableSearch = '';
        // --- Live Data ---
        this.allInstitutions = [];
        this.institutions = [];
        // --- Modals State ---
        this.showAssignModal = false;
        this.showViewModal = false;
        this.selectedInstitution = null;
        this.selectedSCDE = '';
        // Fetch all SCDE users
        this.scdeList = [];
        this.activeViewTab = 'form';
        this.inspection = null;
        this.review = null;
        this.canDecide = false;
        this.deciding = false;
        this.rejectionReason = '';
        // View and fetches live
        this.viewData = {
            institutionType: '', institutionName: '', headOfInstitution: '', email: '', mobileNo: '',
            onboardingDate: '', applicationType: '', educationalPathway: '', institutionLevel: '',
            hasCert: '', certNo: '', sneBoys: 0, sneGirls: 0, totalLearners: 0, coordinates: '',
            county: '', subCounty: '', constituency: '', postalCode: '', schoolCategory: '', postalLocation: '',
        };
    }
    ngOnInit() {
        this.http.get('http://localhost:5215/api/county-education/profile').subscribe({
            next: ({ county }) => {
                this.county = county;
                this.fetchPendingSchools();
            },
            error: (err) => this.notification.showError('Failed to load county profile.', err)
        });
    }
    fetchPendingSchools(status = this.filter.status) {
        if (!this.county)
            return;
        //Changed so as to view other statuses too
        const statusParam = (status === 'Select' || !status) ? 'All' : status;
        this.http.get('http://localhost:5215/api/county-education/institutions', {
            params: { county: this.county, status: statusParam }
        }).subscribe({
            next: (res) => {
                this.notification.showSuccess('Schools fetched successfully!');
                this.allInstitutions = res.schools || [];
                // Dynamically populate the Sub-County dropdown based on the fetched schools
                const uniqueSubCounties = [...new Set(this.allInstitutions.map(school => school.subCounty).filter(Boolean))];
                this.subCounties = ['All', ...uniqueSubCounties];
                // Apply the Sub-County filter locally
                this.institutions = this.filter.subCounty === 'All'
                    ? this.allInstitutions
                    : this.allInstitutions.filter(school => school.subCounty === this.filter.subCounty);
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Failed to fetch schools', err);
                this.notification.showError('Failed to fetch schools.');
            }
        });
    }
    onSearch() {
        this.fetchPendingSchools();
    }
    // --- Actions ---
    openAssignModal(inst) {
        this.selectedInstitution = inst;
        this.selectedSCDE = '';
        this.showAssignModal = true;
        // Fetch SCDEs dynamically from the database
        this.http.get('http://localhost:5215/api/county-education/assignees?role=SCDE').subscribe({
            next: (res) => {
                this.notification.showSuccess('Sucessfully assigned a SCDE!');
                this.scdeList = res;
            },
            error: (err) => this.notification.showError('Failed to load SCDEs', err)
        });
    }
    openViewModal(inst) {
        this.selectedInstitution = inst;
        this.activeViewTab = ['SCDE Recommended', 'SCDE Approved'].includes(inst.status) ? 'reports' : 'form';
        this.inspection = null;
        this.review = null;
        this.canDecide = false;
        this.rejectionReason = '';
        this.showViewModal = true;
        // Fetch school details dynamically based on institutionId
        this.http.get(`http://localhost:5215/api/county-education/institutions/${inst.institutionId}`).subscribe({
            next: (detail) => {
                if (!this.showViewModal || this.selectedInstitution?.institutionId !== inst.institutionId)
                    return;
                const res = detail.school;
                this.inspection = detail.inspection;
                this.review = detail.review;
                this.canDecide = detail.canReview && ['SCDE Recommended', 'SCDE Approved'].includes(detail.status) && !!detail.inspection;
                // Map the backend response to viewData
                this.viewData = {
                    ...this.viewData,
                    institutionType: res.institutionType || 'N/A',
                    institutionName: res.institutionName || 'N/A',
                    headOfInstitution: res.headOfInstitution || 'N/A',
                    email: res.emailId || 'N/A',
                    mobileNo: res.mobileNo || 'N/A',
                    onboardingDate: res.createdAt || 'N/A',
                    institutionLevel: res.institutionLevel || 'N/A',
                    certNo: res.certificateNumber || 'N/A',
                    totalLearners: res.totalLearners || 0,
                    county: res.county || 'N/A',
                    subCounty: res.subCounty || 'N/A',
                    constituency: res.constituency || 'N/A',
                    schoolCategory: res.schoolCategory || 'N/A',
                };
                this.cdr.detectChanges();
            },
            error: (err) => this.notification.showError('Failed to fetch school details', err)
        });
    }
    closeModals() {
        this.showAssignModal = false;
        this.showViewModal = false;
        this.selectedInstitution = null;
    }
    submitAssignment() {
        if (!this.selectedSCDE) {
            this.notification.showError('Please select an SCDE first.');
            return;
        }
        const payload = {
            assigneeId: this.selectedSCDE // The SCDE's userId
        };
        this.http.post(`http://localhost:5215/api/county-education/institutions/${this.selectedInstitution.institutionId}/assign`, payload).subscribe({
            next: () => {
                this.notification.showSuccess('Sucessfully assigned a SCDE!');
                this.selectedInstitution.status = 'Assigned SCDE'; // Instantly update UI
                this.fetchPendingSchools(); // Refresh table
                this.closeModals();
            },
            error: (err) => {
                this.notification.showError('Failed to assign. Please try again.');
                console.error(err);
            }
        });
    }
    openInspectionReport() {
        if (!this.inspection || !this.selectedInstitution)
            return;
        const url = `http://localhost:5215/api/county-education/institutions/${this.selectedInstitution.institutionId}/inspection-report/${this.inspection.commentId}`;
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
    submitDecision(isApproved) {
        if (!this.canDecide || this.deciding || !this.selectedInstitution)
            return;
        const rejectionReason = this.rejectionReason.trim();
        if (!isApproved && !rejectionReason) {
            this.notification.showError('Enter a reason for rejecting the inspection.');
            return;
        }
        this.deciding = true;
        this.http.post(`http://localhost:5215/api/county-education/institutions/${this.selectedInstitution.institutionId}/final-decision`, { isApproved, rejectionReason }).subscribe({
            next: () => {
                this.deciding = false;
                this.notification.showSuccess(isApproved ? 'Institution approved.' : 'Institution rejected.');
                this.closeModals();
                this.fetchPendingSchools();
            },
            error: (err) => {
                this.deciding = false;
                this.notification.showError(typeof err.error === 'string' ? err.error : 'Failed to save the decision.');
                this.cdr.detectChanges();
            }
        });
    }
    static { this.ɵfac = function PendingInstitutionCounty_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PendingInstitutionCounty)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PendingInstitutionCounty, selectors: [["app-pending-institution-county"]], decls: 139, vars: 12, consts: [["noInspection", ""], ["awaitingReview", ""], [1, "dashboard-wrapper"], [1, "sidebar"], [1, "sidebar-nav"], [1, "nav-item", "active"], [1, "bi", "bi-grid-fill"], [1, "nav-item"], [1, "bi", "bi-search"], [1, "nav-parent", "has-children"], [1, "bi", "bi-clipboard-check"], [1, "nav-children"], ["href", "/institution-registered-county"], ["href", "/learners-registered-county"], ["href", "/learners-per-grade-county"], ["href", "/pending-institution-county"], ["href", "/institutions-onboarded-per-cluster"], ["href", "/learners-registered-per-cluster"], [1, "bi", "bi-pencil-square"], ["href", "#"], [1, "nav-item", "text-danger", "mt-4"], [1, "bi", "bi-book"], [1, "main-content"], [1, "page-container"], [1, "page-header"], [1, "filter-section"], [1, "radio-row"], [1, "fw-bold", "me-3"], [1, "form-check", "form-check-inline"], ["type", "radio", "name", "onboardingType", "id", "newOnboarding", "value", "New Onboarding", 1, "form-check-input", 3, "ngModelChange", "ngModel"], ["for", "newOnboarding", 1, "form-check-label"], [1, "row", "mt-4"], [1, "col-md-6"], [1, "form-label", "fw-bold"], [1, "form-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table-section"], [1, "table-search-row"], ["type", "text", "placeholder", "Search", 1, "form-control", "search-input", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "custom-table"], [4, "ngFor", "ngForOf"], ["class", "modal-backdrop", 4, "ngIf"], [3, "value"], [1, "badge-status", 3, "ngClass"], [1, "btn-outline-gray", 3, "click"], ["disabled", "", 1, "btn-outline-gray"], [1, "btn-outline-red", 3, "click"], [1, "bi", "bi-eye-fill", "text-danger", "me-1"], [1, "modal-backdrop"], [1, "modal-dialog", "small-modal"], [1, "modal-header", "bg-info", "text-white"], [1, "modal-title"], ["type", "button", 1, "btn-close", "btn-close-white", 3, "click"], [1, "modal-body"], [1, "form-label", "fw-bold", "text-muted"], ["value", "", "disabled", "", "selected", ""], [1, "modal-footer"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "modal-dialog", "large-modal"], [1, "modal-header", "bg-info", "text-white", "align-items-center"], [1, "badge", "bg-warning", "text-dark", "ms-3"], [1, "modal-tabs"], [1, "tab-btn", 3, "click"], [1, "modal-body", "scrollable-body"], ["class", "tab-content", 4, "ngIf"], [1, "tab-content"], [1, "text-info", "mb-1"], [1, "text-muted", "small", "mb-4"], [1, "section-title"], [1, "row", "g-3"], [1, "col-md-4"], [1, "small-label"], ["type", "text", "readonly", "", 1, "form-control", 3, "value"], ["href", "#", 1, "text-info", "fw-bold"], [1, "section-title", "mt-4"], [4, "ngIf", "ngIfElse"], ["class", "mt-3", 4, "ngIf"], [1, "text-break", 2, "white-space", "pre-wrap"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-info", 3, "click"], [1, "mt-3"], ["class", "text-break", 4, "ngIf"], [1, "text-break"], ["for", "rejection-reason", 1, "form-label"], ["id", "rejection-reason", "rows", "3", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click", "disabled"]], template: function PendingInstitutionCounty_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2)(1, "aside", 3)(2, "nav", 4)(3, "a", 5);
            i0.ɵɵelement(4, "i", 6);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 7);
            i0.ɵɵelement(8, "i", 8);
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10, "Menu Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 9)(12, "a", 7);
            i0.ɵɵelement(13, "i", 10);
            i0.ɵɵelementStart(14, "span");
            i0.ɵɵtext(15, "KEMIS Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "ul", 11)(17, "li")(18, "a", 12);
            i0.ɵɵtext(19, "Institutions onboarded in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "li")(21, "a", 13);
            i0.ɵɵtext(22, "Learner list in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "li")(24, "a", 14);
            i0.ɵɵtext(25, "Learners Per Grade in the County");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(26, "li")(27, "a", 15);
            i0.ɵɵtext(28, "Pending Institutions onboarding");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "li")(30, "a", 16);
            i0.ɵɵtext(31, "Institution Onboarding per Cluster");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(32, "li")(33, "a", 17);
            i0.ɵɵtext(34, "Learners Registered Per Cluster");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "div", 9)(36, "a", 7);
            i0.ɵɵelement(37, "i", 18);
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "ul", 11)(41, "li")(42, "a", 19);
            i0.ɵɵtext(43, "Learner Transfer approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "li")(45, "a", 19);
            i0.ɵɵtext(46, "Learner Admissions");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "li")(48, "a", 19);
            i0.ɵɵtext(49, "Institution Update Request");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(50, "li")(51, "a", 19);
            i0.ɵɵtext(52, "User Registration");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(53, "a", 20);
            i0.ɵɵelement(54, "i", 21);
            i0.ɵɵelementStart(55, "span");
            i0.ɵɵtext(56, "Escalations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "div", 9)(58, "a", 7);
            i0.ɵɵelement(59, "i", 18);
            i0.ɵɵelementStart(60, "span");
            i0.ɵɵtext(61, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(62, "ul", 11)(63, "li")(64, "a", 19);
            i0.ɵɵtext(65, "Institution Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "li")(67, "a", 19);
            i0.ɵɵtext(68, "Learner Transfer Appeal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "li")(70, "a", 19);
            i0.ɵɵtext(71, "System Admin User Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "li")(73, "a", 19);
            i0.ɵɵtext(74, "Certificate Issuance recommendation");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(75, "li")(76, "a", 19);
            i0.ɵɵtext(77, "Institution Details Update Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(78, "li")(79, "a", 19);
            i0.ɵɵtext(80, "Institution Email Update");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(81, "a", 20);
            i0.ɵɵelement(82, "i", 21);
            i0.ɵɵelementStart(83, "span");
            i0.ɵɵtext(84, "User Manual");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(85, "main", 22)(86, "div", 23)(87, "div", 24)(88, "h2");
            i0.ɵɵtext(89, "Institution Approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "div", 25)(91, "div", 26)(92, "label", 27);
            i0.ɵɵtext(93, "Select Onboarding Type:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "div", 28)(95, "input", 29);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionCounty_Template_input_ngModelChange_95_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.onboardingType, $event) || (ctx.filter.onboardingType = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "label", 30);
            i0.ɵɵtext(97, "New Onboarding");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(98, "div", 31)(99, "div", 32)(100, "label", 33);
            i0.ɵɵtext(101, "Sub County:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "select", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionCounty_Template_select_ngModelChange_102_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.subCounty, $event) || (ctx.filter.subCounty = $event); return $event; });
            i0.ɵɵtemplate(103, PendingInstitutionCounty_option_103_Template, 2, 2, "option", 35);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(104, "div", 32)(105, "label", 33);
            i0.ɵɵtext(106, "Status:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "select", 34);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionCounty_Template_select_ngModelChange_107_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filter.status, $event) || (ctx.filter.status = $event); return $event; });
            i0.ɵɵtemplate(108, PendingInstitutionCounty_option_108_Template, 2, 2, "option", 35);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(109, "div", 36)(110, "div", 37)(111, "input", 38);
            i0.ɵɵtwoWayListener("ngModelChange", function PendingInstitutionCounty_Template_input_ngModelChange_111_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.tableSearch, $event) || (ctx.tableSearch = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(112, "div", 39)(113, "table", 40)(114, "thead")(115, "tr")(116, "th");
            i0.ɵɵtext(117, "S. No");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "th");
            i0.ɵɵtext(119, "Institution No.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "th");
            i0.ɵɵtext(121, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(122, "th");
            i0.ɵɵtext(123, "Date of Onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(124, "th");
            i0.ɵɵtext(125, "Subcounty");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(126, "th");
            i0.ɵɵtext(127, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(128, "th");
            i0.ɵɵtext(129, "Assign SCDE");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "th");
            i0.ɵɵtext(131, "Assign CQASO");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(132, "th");
            i0.ɵɵtext(133, "View Details");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(134, "tbody");
            i0.ɵɵtemplate(135, PendingInstitutionCounty_tr_135_Template, 24, 13, "tr", 41);
            i0.ɵɵpipe(136, "search");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵtemplate(137, PendingInstitutionCounty_div_137_Template, 18, 2, "div", 42)(138, PendingInstitutionCounty_div_138_Template, 24, 10, "div", 42);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(95);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.onboardingType);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.subCounty);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.subCounties);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filter.status);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.statusList);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.tableSearch);
            i0.ɵɵadvance(24);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(136, 9, ctx.institutions, ctx.tableSearch));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showAssignModal);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showViewModal);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, FormsModule, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgModel, SearchPipe], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px;\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n\r\n.page-container[_ngcontent-%COMP%] { padding: 2rem; font-family: system-ui, sans-serif; background: #fff; min-height: 100vh;}\r\n.page-header[_ngcontent-%COMP%] { border-bottom: 1px solid #e0e0e0; padding-bottom: 1rem; margin-bottom: 2rem; }\r\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: 1.5rem; font-weight: 700; color: #00b4d8; margin: 0; }\r\n.fw-bold[_ngcontent-%COMP%] { font-weight: 600; }\r\n.form-label[_ngcontent-%COMP%] { color: #333; }\r\n\r\n\r\n.filter-section[_ngcontent-%COMP%] { margin-bottom: 2rem; }\r\n.radio-row[_ngcontent-%COMP%] { display: flex; align-items: center; }\r\n.filter-section[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] { padding: 0.6rem; border-radius: 6px; border: 1px solid #ccc; }\r\n\r\n\r\n.table-search-row[_ngcontent-%COMP%] { display: flex; justify-content: flex-end; margin-bottom: 1rem; }\r\n.search-input[_ngcontent-%COMP%] { width: 300px; border-radius: 6px; border: 1px solid #ccc; padding: 0.5rem 1rem; }\r\n.table-responsive[_ngcontent-%COMP%] { width: 100%; overflow-x: auto; border: 1px solid #ddd; border-radius: 8px; }\r\n.custom-table[_ngcontent-%COMP%] { width: 100%; border-collapse: collapse; white-space: nowrap; }\r\n.custom-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] { background-color: #00b4d8; color: white; }\r\n.custom-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] { padding: 0.8rem 1rem; text-align: left; font-size: 0.85rem; border-right: 1px solid rgba(255,255,255,0.2); }\r\n.custom-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] { padding: 0.8rem 1rem; border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-size: 0.9rem; }\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] { padding: 0.4rem 0.8rem; border-radius: 12px; font-weight: 600; font-size: 0.75rem; display: inline-block;}\r\n.bg-warning[_ngcontent-%COMP%] { background-color: #ffc107 !important; color: #333 !important; }\r\n.bg-info[_ngcontent-%COMP%] { background-color: #00b4d8 !important; }\r\n\r\n.btn-outline-gray[_ngcontent-%COMP%] { background: transparent; border: 1px solid #ccc; color: #555; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.85rem; transition: 0.2s; }\r\n.btn-outline-gray[_ngcontent-%COMP%]:hover:not(:disabled) { background: #f8f9fa; }\r\n.btn-outline-gray[_ngcontent-%COMP%]:disabled { opacity: 0.5; cursor: not-allowed; }\r\n\r\n.btn-outline-red[_ngcontent-%COMP%] { background: #fff; border: 1px solid #dc3545; color: #dc3545; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.85rem; transition: 0.2s; }\r\n.btn-outline-red[_ngcontent-%COMP%]:hover { background: #dc3545; color: #fff; }\r\n\r\n\r\n\r\n\r\n.modal-backdrop[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 95vh; \r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.large-modal[_ngcontent-%COMP%] {\r\n  max-width: 1000px;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.bg-info[_ngcontent-%COMP%] {\r\n  background-color: var(--kemis-primary, #00b4d8) !important;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n  color: var(--kemis-white, #ffffff);\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\n.badge-status[_ngcontent-%COMP%] {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n.badge-pending[_ngcontent-%COMP%] {\r\n  background-color: #ffc107; \r\n  color: #333;\r\n}\r\n\r\n\r\n.badge-assigned[_ngcontent-%COMP%] {\r\n  background-color: #3fbeeb; \r\n  color: #fff;\r\n}\r\n\r\n\r\n.badge-recommended[_ngcontent-%COMP%] {\r\n  background-color: #1e40af; \r\n  color: #fff;\r\n}\r\n\r\n\r\n.badge-rejected[_ngcontent-%COMP%] {\r\n  background-color: #dc143c; \r\n  color: #fff;\r\n}\r\n\r\n\r\n.badge-review[_ngcontent-%COMP%] {\r\n  background-color: #28a745; \r\n  color: #fff;\r\n}\r\n\r\n\r\n.btn-close-white[_ngcontent-%COMP%] {\r\n  filter: invert(1) grayscale(100%) brightness(200%);\r\n}\r\n\r\n\r\n\r\n\r\n.modal-tabs[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  border-bottom: 1px solid var(--kemis-border, #dee2e6);\r\n  padding: 0 1.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 1rem;\r\n  font-size: 0.95rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.tab-btn[_ngcontent-%COMP%]:hover {\r\n  color: var(--kemis-primary, #00b4d8);\r\n}\r\n\r\n.tab-btn.active[_ngcontent-%COMP%] {\r\n  color: var(--kemis-primary, #00b4d8);\r\n  border-bottom: 3px solid var(--kemis-primary, #00b4d8);\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n\r\n\r\n.modal-body.scrollable-body[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n  flex-grow: 1;\r\n}\r\n\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n  color: var(--kemis-dark, #343a40);\r\n  border-bottom: 1px solid var(--kemis-border, #dee2e6);\r\n  padding-bottom: 0.5rem;\r\n  margin-top: 1.5rem;\r\n  margin-bottom: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n\r\n.small-label[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  margin-bottom: 0.2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.modal-body[_ngcontent-%COMP%]   .form-control[readonly][_ngcontent-%COMP%] {\r\n  background-color: var(--kemis-white, #ffffff);\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  color: var(--kemis-dark, #343a40);\r\n  font-size: 0.9rem;\r\n  padding: 0.5rem 0.75rem;\r\n  box-shadow: none;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   .form-control[readonly][_ngcontent-%COMP%]:focus {\r\n  border-color: var(--kemis-border, #dee2e6);\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n\r\n.comment-box[_ngcontent-%COMP%] {\r\n  background: #f8f9fa;\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  border-radius: 6px;\r\n  padding: 1rem;\r\n}\r\n\r\n.comment-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: var(--kemis-primary, #00b4d8);\r\n  margin-bottom: 0.2rem;\r\n  font-size: 0.95rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.comment-box[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0.8rem;\r\n}\r\n\r\n.comment-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  background-color: #fff !important;\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  color: var(--kemis-dark, #343a40);\r\n  font-size: 0.9rem;\r\n  resize: none;\r\n}\r\n\r\n\r\n.report-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: var(--kemis-primary, #00b4d8);\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.report-box[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\r\n  border-color: var(--kemis-border, #dee2e6) !important;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.report-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: var(--kemis-dark, #343a40);\r\n}\r\n\r\n\r\n\r\n\r\n.tab-content.text-center[_ngcontent-%COMP%] {\r\n  padding: 2rem 0;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  color: var(--kemis-dark, #343a40);\r\n  font-weight: 700;\r\n}\r\n\r\n.tab-content[_ngcontent-%COMP%]   .btn-lg[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n  padding: 1rem 2.5rem;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn-success[_ngcontent-%COMP%] {\r\n  background-color: var(--kemis-success, #28a745);\r\n  border-color: var(--kemis-success, #28a745);\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  background-color: var(--kemis-danger, #dc3545);\r\n  border-color: var(--kemis-danger, #dc3545);\r\n}\r\n\r\n\r\n\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid var(--kemis-border, #dee2e6);\r\n  background-color: #f8f9fa;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\r\n  background-color: var(--kemis-red, #dc143c);\r\n  border: none;\r\n  padding: 0.5rem 1.5rem;\r\n  font-weight: 600;\r\n  border-radius: 6px;\r\n}\r\n\r\n\r\n.scrollable-body[_ngcontent-%COMP%] { overflow-y: auto; padding: 1.5rem 2rem; }\r\n.small-label[_ngcontent-%COMP%] { font-size: 0.8rem; color: #555; margin-bottom: 4px; }\r\n.section-title[_ngcontent-%COMP%] { font-size: 1.05rem; color: #333; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem; font-weight: 600; }\r\n.form-control[readonly][_ngcontent-%COMP%] { background-color: #fff; border: 1px solid #ccc; color: #333; }\r\n\r\n\r\n.comment-box[_ngcontent-%COMP%] { background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 1rem; height: 100%; }\r\n.comment-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] { margin-bottom: 2px; }\r\n.report-box[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] { margin-bottom: 2px; }\r\n\r\n\r\n.btn-success[_ngcontent-%COMP%] { background: #198754; border: none; }\r\n.btn-danger[_ngcontent-%COMP%] { background: #dc3545; border: none; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PendingInstitutionCounty, [{
        type: Component,
        args: [{ selector: 'app-pending-institution-county', standalone: true, imports: [CommonModule, FormsModule, SearchPipe], template: "<div class=\"dashboard-wrapper\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <aside class=\"sidebar\">\r\n      <nav class=\"sidebar-nav\">\r\n        <!-- 1. Dashboard -->\r\n        <a class=\"nav-item active\">\r\n          <i class=\"bi bi-grid-fill\"></i>\r\n          <span>Dashboard</span>\r\n        </a>\r\n\r\n        <!-- 2. Menu Search -->\r\n        <a class=\"nav-item\">\r\n          <i class=\"bi bi-search\"></i>\r\n          <span>Menu Search</span>\r\n        </a>\r\n\r\n        <!-- 3. KEMIS Reports -->\r\n        <div class=\"nav-parent has-children\">\r\n          <a class=\"nav-item\">\r\n            <i class=\"bi bi-clipboard-check\"></i>\r\n            <span>KEMIS Reports</span>\r\n          </a>\r\n          <ul class=\"nav-children\">\r\n            <li><a href=\"/institution-registered-county\">Institutions onboarded in the County</a></li>\r\n            <li><a href=\"/learners-registered-county\">Learner list in the County</a></li>\r\n            <li><a href=\"/learners-per-grade-county\">Learners Per Grade in the County</a></li>\r\n            <li><a href=\"/pending-institution-county\">Pending Institutions onboarding</a></li>\r\n            <li><a href=\"/institutions-onboarded-per-cluster\">Institution Onboarding per Cluster</a></li>\r\n            <li><a href=\"/learners-registered-per-cluster\">Learners Registered Per Cluster</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- 4. Registration -->\r\n        <div class=\"nav-parent has-children\">\r\n          <a class=\"nav-item\">\r\n            <i class=\"bi bi-pencil-square\"></i>\r\n            <span>Registration</span>\r\n          </a>\r\n          <ul class=\"nav-children\">\r\n            <li><a href=\"#\">Learner Transfer approval</a></li>\r\n            <li><a href=\"#\">Learner Admissions</a></li>\r\n            <li><a href=\"#\">Institution Update Request</a></li>\r\n            <li><a href=\"#\">User Registration</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- 5. Escalations -->\r\n        <a class=\"nav-item text-danger mt-4\">\r\n          <i class=\"bi bi-book\"></i>\r\n          <span>Escalations</span>\r\n        </a>\r\n\r\n        <!-- 6. Admin Registration -->\r\n        <div class=\"nav-parent has-children\">\r\n          <a class=\"nav-item\">\r\n            <i class=\"bi bi-pencil-square\"></i>\r\n            <span>Registration</span>\r\n          </a>\r\n          <ul class=\"nav-children\">\r\n            <li><a href=\"#\">Institution Approval</a></li>\r\n            <li><a href=\"#\">Learner Transfer Appeal</a></li>\r\n            <li><a href=\"#\">System Admin User Registration</a></li>\r\n            <li><a href=\"#\">Certificate Issuance recommendation</a></li>\r\n            <li><a href=\"#\">Institution Details Update Approval</a></li>\r\n            <li><a href=\"#\">Institution Email Update</a></li>\r\n          </ul>\r\n        </div>\r\n\r\n        <!-- 7. User Manual -->\r\n        <a class=\"nav-item text-danger mt-4\">\r\n          <i class=\"bi bi-book\"></i>\r\n          <span>User Manual</span>\r\n        </a>\r\n      </nav>\r\n    </aside>\r\n\r\n    <!-- MAIN CONTENT AREA -->\r\n    <main class=\"main-content\">\r\n      <div class=\"page-container\">\r\n\r\n        <div class=\"page-header\">\r\n          <h2>Institution Approval</h2>\r\n        </div>\r\n\r\n        <!-- Top Filters -->\r\n        <div class=\"filter-section\">\r\n          <div class=\"radio-row\">\r\n            <label class=\"fw-bold me-3\">Select Onboarding Type:</label>\r\n            <div class=\"form-check form-check-inline\">\r\n              <input class=\"form-check-input\" type=\"radio\" name=\"onboardingType\" id=\"newOnboarding\" value=\"New Onboarding\" [(ngModel)]=\"filter.onboardingType\">\r\n              <label class=\"form-check-label\" for=\"newOnboarding\">New Onboarding</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row mt-4\">\r\n            <div class=\"col-md-6\">\r\n              <label class=\"form-label fw-bold\">Sub County:</label>\r\n              <select class=\"form-select\" [(ngModel)]=\"filter.subCounty\">\r\n                <option *ngFor=\"let sub of subCounties\" [value]=\"sub\">{{ sub }}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label class=\"form-label fw-bold\">Status:</label>\r\n              <select class=\"form-select\" [(ngModel)]=\"filter.status\">\r\n                <option *ngFor=\"let status of statusList\" [value]=\"status\">{{ status }}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Table Section -->\r\n        <div class=\"table-section\">\r\n          <div class=\"table-search-row\">\r\n            <input type=\"text\" class=\"form-control search-input\" placeholder=\"Search\" [(ngModel)]=\"tableSearch\">\r\n          </div>\r\n\r\n          <div class=\"table-responsive\">\r\n            <table class=\"custom-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S. No</th>\r\n                  <th>Institution No.</th>\r\n                  <th>Institution Name</th>\r\n                  <th>Date of Onboarding</th>\r\n                  <th>Subcounty</th>\r\n                  <th>Status</th>\r\n                  <th>Assign SCDE</th>\r\n                  <th>Assign CQASO</th>\r\n                  <th>View Details</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let inst of institutions | search: tableSearch; let i = index\">\r\n                  <td>{{ inst.institutionId }}</td>\r\n                  <td>{{ inst.certificateNumber }}</td>\r\n                  <td>{{ inst.institutionName }}</td>\r\n                  <td>{{ inst.createdAt }}</td>\r\n                  <td>{{ inst.subCounty }}</td>\r\n                  <td>\r\n                      <!-- Dynamic badge colors based on status -->\r\n                      <span class=\"badge-status\" [ngClass]=\"{\r\n                        'badge-pending': inst.status === 'Pending' || inst.status === 'pending',\r\n                        'badge-assigned': inst.status === 'Assigned SCDE' || inst.status === 'Assigned SCQASO',\r\n                        'badge-recommended': inst.status === 'SCDE Recommended' || inst.status === 'SCDE Approved' || inst.status === 'SCQASO Recommended',\r\n                        'badge-rejected': inst.status === 'SCDE Rejected' || inst.status === 'Rejected' || inst.status === 'rejected',\r\n                        'badge-review': inst.status ==='Approved'\r\n                      }\">\r\n                        {{ inst.status }}\r\n                      </span>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"btn-outline-gray\" (click)=\"openAssignModal(inst)\">Assign SCDE</button>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"btn-outline-gray\" disabled>Assign</button>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"btn-outline-red\" (click)=\"openViewModal(inst)\">\r\n                      <i class=\"bi bi-eye-fill text-danger me-1\"></i> View\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- ========================================== -->\r\n      <!-- MODAL 1: ASSIGN SCDE                       -->\r\n      <!-- ========================================== -->\r\n      <div class=\"modal-backdrop\" *ngIf=\"showAssignModal\">\r\n        <div class=\"modal-dialog small-modal\">\r\n          <div class=\"modal-header bg-info text-white\">\r\n            <h5 class=\"modal-title\">Assign SCDE</h5>\r\n            <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeModals()\"></button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <label class=\"form-label fw-bold text-muted\">SCDE</label>\r\n            <!--Updating this assign SCDE Modal to be dynamic and fetch SCDEs in same county as CDE-->\r\n            <select class=\"form-select\" [(ngModel)]=\"selectedSCDE\">\r\n              <option value=\"\" disabled selected>Select an SCDE...</option>\r\n              <option *ngFor=\"let scde of scdeList\" [value]=\"scde.userId\">{{ scde.fullName }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-danger\" (click)=\"closeModals()\">Close</button>\r\n            <button class=\"btn btn-outline-danger\" (click)=\"submitAssignment()\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- ========================================== -->\r\n      <!-- MODAL 2: VIEW INSTITUTION DETAILS          -->\r\n      <!-- ========================================== -->\r\n      <div class=\"modal-backdrop\" *ngIf=\"showViewModal\">\r\n        <div class=\"modal-dialog large-modal\">\r\n\r\n          <!-- Header -->\r\n          <div class=\"modal-header bg-info text-white align-items-center\">\r\n            <h5 class=\"modal-title\">\r\n              Institution Name - <strong>{{ selectedInstitution?.institutionName }}</strong>\r\n              <span class=\"badge bg-warning text-dark ms-3\">CDE REVIEW</span>\r\n            </h5>\r\n            <button type=\"button\" class=\"btn-close btn-close-white\" (click)=\"closeModals()\"></button>\r\n          </div>\r\n\r\n          <!-- Tabs -->\r\n          <div class=\"modal-tabs\">\r\n            <button class=\"tab-btn\" [class.active]=\"activeViewTab === 'form'\" (click)=\"activeViewTab = 'form'\">Institution Onboarding Form</button>\r\n            <button class=\"tab-btn\" [class.active]=\"activeViewTab === 'reports'\" (click)=\"activeViewTab = 'reports'\">Comments & Reports</button>\r\n            <button class=\"tab-btn\" [class.active]=\"activeViewTab === 'actions'\" (click)=\"activeViewTab = 'actions'\">Actions</button>\r\n          </div>\r\n\r\n          <!-- Modal Body (Scrollable) -->\r\n          <div class=\"modal-body scrollable-body\">\r\n\r\n            <!-- TAB 1: FORM -->\r\n            <div *ngIf=\"activeViewTab === 'form'\" class=\"tab-content\">\r\n              <h4 class=\"text-info mb-1\">Institution Onboarding Form</h4>\r\n              <p class=\"text-muted small mb-4\">Complete institution details as provided during onboarding</p>\r\n\r\n              <h6 class=\"section-title\">Basic Institution Details</h6>\r\n              <div class=\"row g-3\">\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Institution Type *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.institutionType\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Institution Name *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.institutionName\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Head of Institution *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.headOfInstitution\" readonly></div>\r\n\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Email *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.email\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Mobile Number *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.mobileNo\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Onboarding Date</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.onboardingDate\" readonly></div>\r\n\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Application Type</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.applicationType\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Educational Pathway</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.educationalPathway\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Institution Level *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.institutionLevel\" readonly></div>\r\n\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Have a Valid Registration Certificate?</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.hasCert\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Institution Certificate Number</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.certNo\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Institution Certificate</label><br><a href=\"#\" class=\"text-info fw-bold\">View Document</a></div>\r\n\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Number of SNE Boys</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.sneBoys\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Number of SNE Girls</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.sneGirls\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Total Number of Learners</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.totalLearners\" readonly></div>\r\n\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Coordinates</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.coordinates\" readonly></div>\r\n              </div>\r\n\r\n              <h6 class=\"section-title mt-4\">Location Information</h6>\r\n              <div class=\"row g-3\">\r\n                <div class=\"col-md-4\"><label class=\"small-label\">County *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.county\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Sub County *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.subCounty\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Constituency</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.constituency\" readonly></div>\r\n                <div class=\"col-md-4\"><label class=\"small-label\">Postal Code *</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.postalCode\" readonly></div>\r\n              </div>\r\n\r\n              <h6 class=\"section-title mt-4\">Additional Information</h6>\r\n              <div class=\"row g-3\">\r\n                <div class=\"col-md-4\"><label class=\"small-label\">School Category</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.schoolCategory\" readonly></div>\r\n                <div class=\"col-md-6\"><label class=\"small-label\">Postal Location</label><input type=\"text\" class=\"form-control\" [value]=\"viewData.postalLocation\" readonly></div>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"activeViewTab === 'reports'\" class=\"tab-content\">\r\n              <ng-container *ngIf=\"inspection; else noInspection\">\r\n                <h6>Inspection officer comment</h6>\r\n                <p class=\"text-break\" style=\"white-space: pre-wrap\">{{ inspection.commentText }}</p>\r\n                <p *ngIf=\"inspection.inspectionDate\">Inspection date {{ inspection.inspectionDate }}</p>\r\n                <button type=\"button\" class=\"btn btn-outline-info\" (click)=\"openInspectionReport()\">View inspection report</button>\r\n              </ng-container>\r\n              <ng-template #noInspection><p>No inspection report is available.</p></ng-template>\r\n              <div *ngIf=\"review\" class=\"mt-3\">\r\n                <h6>Sub-county review</h6>\r\n                <p>{{ review.status }}</p>\r\n                <p *ngIf=\"review.summary\" class=\"text-break\">{{ review.summary }}</p>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"activeViewTab === 'actions'\" class=\"tab-content\">\r\n              <ng-container *ngIf=\"canDecide; else awaitingReview\">\r\n                <label for=\"rejection-reason\" class=\"form-label\">Reason (required when rejecting)</label>\r\n                <textarea id=\"rejection-reason\" class=\"form-control mb-3\" rows=\"3\" [(ngModel)]=\"rejectionReason\"></textarea>\r\n                <div class=\"d-flex flex-wrap gap-2\">\r\n                  <button type=\"button\" class=\"btn btn-success\" [disabled]=\"deciding\" (click)=\"submitDecision(true)\">Approve institution</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" [disabled]=\"deciding\" (click)=\"submitDecision(false)\">Reject institution</button>\r\n                </div>\r\n              </ng-container>\r\n              <ng-template #awaitingReview><p>County decisions are available after the sub-county director approves the inspection.</p></ng-template>\r\n            </div>\r\n            </div>\r\n          <!-- Footer -->\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-danger\" (click)=\"closeModals()\">Close</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </main>\r\n</div>\r\n\r\n", styles: ["/*Sidebar*/\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* The Dropdown Menu (Hidden by default IMPORTANT!) */\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children li a:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px;\r\n}\r\n\r\n.nav-parent.has-children:hover .nav-children {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children:hover > .nav-item {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n/* --- Base --- */\r\n.page-container { padding: 2rem; font-family: system-ui, sans-serif; background: #fff; min-height: 100vh;}\r\n.page-header { border-bottom: 1px solid #e0e0e0; padding-bottom: 1rem; margin-bottom: 2rem; }\r\n.page-header h2 { font-size: 1.5rem; font-weight: 700; color: #00b4d8; margin: 0; }\r\n.fw-bold { font-weight: 600; }\r\n.form-label { color: #333; }\r\n\r\n/* --- Filters --- */\r\n.filter-section { margin-bottom: 2rem; }\r\n.radio-row { display: flex; align-items: center; }\r\n.filter-section .form-select { padding: 0.6rem; border-radius: 6px; border: 1px solid #ccc; }\r\n\r\n/* --- Table --- */\r\n.table-search-row { display: flex; justify-content: flex-end; margin-bottom: 1rem; }\r\n.search-input { width: 300px; border-radius: 6px; border: 1px solid #ccc; padding: 0.5rem 1rem; }\r\n.table-responsive { width: 100%; overflow-x: auto; border: 1px solid #ddd; border-radius: 8px; }\r\n.custom-table { width: 100%; border-collapse: collapse; white-space: nowrap; }\r\n.custom-table thead { background-color: #00b4d8; color: white; }\r\n.custom-table th { padding: 0.8rem 1rem; text-align: left; font-size: 0.85rem; border-right: 1px solid rgba(255,255,255,0.2); }\r\n.custom-table td { padding: 0.8rem 1rem; border-bottom: 1px solid #eee; border-right: 1px solid #eee; font-size: 0.9rem; }\r\n\r\n/* --- Badges & Buttons --- */\r\n.badge-status { padding: 0.4rem 0.8rem; border-radius: 12px; font-weight: 600; font-size: 0.75rem; display: inline-block;}\r\n.bg-warning { background-color: #ffc107 !important; color: #333 !important; }\r\n.bg-info { background-color: #00b4d8 !important; }\r\n\r\n.btn-outline-gray { background: transparent; border: 1px solid #ccc; color: #555; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.85rem; transition: 0.2s; }\r\n.btn-outline-gray:hover:not(:disabled) { background: #f8f9fa; }\r\n.btn-outline-gray:disabled { opacity: 0.5; cursor: not-allowed; }\r\n\r\n.btn-outline-red { background: #fff; border: 1px solid #dc3545; color: #dc3545; padding: 0.4rem 1rem; border-radius: 4px; font-size: 0.85rem; transition: 0.2s; }\r\n.btn-outline-red:hover { background: #dc3545; color: #fff; }\r\n\r\n/* ==========================================\r\n   MODAL BACKDROP & DIALOG\r\n   ========================================== */\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 1050;\r\n}\r\n\r\n.modal-dialog {\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 95vh; /* Prevents it from going off screen */\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.large-modal {\r\n  max-width: 1000px;\r\n}\r\n\r\n/* ==========================================\r\n   HEADER\r\n   ========================================== */\r\n.modal-header {\r\n  padding: 1rem 1.5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.bg-info {\r\n  background-color: var(--kemis-primary, #00b4d8) !important;\r\n}\r\n\r\n.modal-header h5 {\r\n  margin: 0;\r\n  font-size: 1.1rem;\r\n  color: var(--kemis-white, #ffffff);\r\n}\r\n\r\n.modal-header strong {\r\n  font-weight: 700;\r\n}\r\n\r\n/* Approved/Review Badge */\r\n/* Default Badge Style */\r\n.badge-status {\r\n  padding: 0.4rem 0.8rem;\r\n  border-radius: 12px;\r\n  font-weight: 600;\r\n  font-size: 0.75rem;\r\n  display: inline-block;\r\n}\r\n\r\n/* 1. Pending (Yellow/Warning) */\r\n.badge-pending {\r\n  background-color: #ffc107; /* --kemis-warning */\r\n  color: #333;\r\n}\r\n\r\n/* 2. Assigned (Blue/Info) */\r\n.badge-assigned {\r\n  background-color: #3fbeeb; /* --kemis-primary */\r\n  color: #fff;\r\n}\r\n\r\n/* 3. Recommended (Dark Blue) */\r\n.badge-recommended {\r\n  background-color: #1e40af; /* --kemis-blue */\r\n  color: #fff;\r\n}\r\n\r\n/* 4. Rejected (Red/Danger) */\r\n.badge-rejected {\r\n  background-color: #dc143c; /* --kemis-red */\r\n  color: #fff;\r\n}\r\n\r\n/* 5. Under Review (Green) */\r\n.badge-review {\r\n  background-color: #28a745; /* --kemis-success */\r\n  color: #fff;\r\n}\r\n\r\n\r\n.btn-close-white {\r\n  filter: invert(1) grayscale(100%) brightness(200%);\r\n}\r\n\r\n/* ==========================================\r\n   TABS\r\n   ========================================== */\r\n.modal-tabs {\r\n  display: flex;\r\n  border-bottom: 1px solid var(--kemis-border, #dee2e6);\r\n  padding: 0 1.5rem;\r\n  background: #fff;\r\n}\r\n\r\n.tab-btn {\r\n  background: transparent;\r\n  border: none;\r\n  padding: 1rem;\r\n  font-size: 0.95rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  cursor: pointer;\r\n  border-bottom: 3px solid transparent;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.tab-btn:hover {\r\n  color: var(--kemis-primary, #00b4d8);\r\n}\r\n\r\n.tab-btn.active {\r\n  color: var(--kemis-primary, #00b4d8);\r\n  border-bottom: 3px solid var(--kemis-primary, #00b4d8);\r\n  font-weight: 600;\r\n}\r\n\r\n/* ==========================================\r\n   MODAL BODY & SCROLL\r\n   ========================================== */\r\n.modal-body.scrollable-body {\r\n  padding: 2rem;\r\n  overflow-y: auto;\r\n  flex-grow: 1;\r\n}\r\n\r\n/* Section Titles */\r\n.section-title {\r\n  font-size: 1.1rem;\r\n  color: var(--kemis-dark, #343a40);\r\n  border-bottom: 1px solid var(--kemis-border, #dee2e6);\r\n  padding-bottom: 0.5rem;\r\n  margin-top: 1.5rem;\r\n  margin-bottom: 1rem;\r\n  font-weight: 600;\r\n}\r\n\r\n/* Form Labels */\r\n.small-label {\r\n  font-size: 0.8rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  margin-bottom: 0.2rem;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Read-only Inputs (Matching your screenshot) */\r\n.modal-body .form-control[readonly] {\r\n  background-color: var(--kemis-white, #ffffff);\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  color: var(--kemis-dark, #343a40);\r\n  font-size: 0.9rem;\r\n  padding: 0.5rem 0.75rem;\r\n  box-shadow: none;\r\n}\r\n\r\n.modal-body .form-control[readonly]:focus {\r\n  border-color: var(--kemis-border, #dee2e6);\r\n  box-shadow: none;\r\n}\r\n\r\n/* ==========================================\r\n   TAB 2: COMMENTS & REPORTS\r\n   ========================================== */\r\n.comment-box {\r\n  background: #f8f9fa;\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  border-radius: 6px;\r\n  padding: 1rem;\r\n}\r\n\r\n.comment-box h6 {\r\n  color: var(--kemis-primary, #00b4d8);\r\n  margin-bottom: 0.2rem;\r\n  font-size: 0.95rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.comment-box .text-muted {\r\n  font-size: 0.8rem;\r\n  margin-bottom: 0.8rem;\r\n}\r\n\r\n.comment-box textarea {\r\n  background-color: #fff !important;\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  color: var(--kemis-dark, #343a40);\r\n  font-size: 0.9rem;\r\n  resize: none;\r\n}\r\n\r\n/* Report Boxes */\r\n.report-box h6 {\r\n  color: var(--kemis-primary, #00b4d8);\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.report-box .border {\r\n  border-color: var(--kemis-border, #dee2e6) !important;\r\n  background-color: #f8f9fa;\r\n}\r\n\r\n.report-box span {\r\n  font-size: 0.9rem;\r\n  color: var(--kemis-dark, #343a40);\r\n}\r\n\r\n/* ==========================================\r\n   TAB 3: ACTIONS (Approve/Reject)\r\n   ========================================== */\r\n.tab-content.text-center {\r\n  padding: 2rem 0;\r\n}\r\n\r\n.tab-content h4 {\r\n  color: var(--kemis-dark, #343a40);\r\n  font-weight: 700;\r\n}\r\n\r\n.tab-content .btn-lg {\r\n  font-weight: 600;\r\n  padding: 1rem 2.5rem;\r\n  border-radius: 8px;\r\n}\r\n\r\n.btn-success {\r\n  background-color: var(--kemis-success, #28a745);\r\n  border-color: var(--kemis-success, #28a745);\r\n}\r\n\r\n.btn-danger {\r\n  background-color: var(--kemis-danger, #dc3545);\r\n  border-color: var(--kemis-danger, #dc3545);\r\n}\r\n\r\n/* ==========================================\r\n   FOOTER\r\n   ========================================== */\r\n.modal-footer {\r\n  padding: 1rem 1.5rem;\r\n  border-top: 1px solid var(--kemis-border, #dee2e6);\r\n  background-color: #f8f9fa;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.modal-footer .btn-danger {\r\n  background-color: var(--kemis-red, #dc143c);\r\n  border: none;\r\n  padding: 0.5rem 1.5rem;\r\n  font-weight: 600;\r\n  border-radius: 6px;\r\n}\r\n\r\n/* --- Form inside Modal --- */\r\n.scrollable-body { overflow-y: auto; padding: 1.5rem 2rem; }\r\n.small-label { font-size: 0.8rem; color: #555; margin-bottom: 4px; }\r\n.section-title { font-size: 1.05rem; color: #333; border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem; font-weight: 600; }\r\n.form-control[readonly] { background-color: #fff; border: 1px solid #ccc; color: #333; }\r\n\r\n/* --- Comments Section --- */\r\n.comment-box { background: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 6px; padding: 1rem; height: 100%; }\r\n.comment-box h6 { margin-bottom: 2px; }\r\n.report-box h6 { margin-bottom: 2px; }\r\n\r\n/* Action Buttons */\r\n.btn-success { background: #198754; border: none; }\r\n.btn-danger { background: #dc3545; border: none; }\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PendingInstitutionCounty, { className: "PendingInstitutionCounty", filePath: "app/pages/pending-institution-county/pending-institution-county.ts", lineNumber: 16 }); })();
