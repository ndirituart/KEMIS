import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1, a2) => ({ "bi-hourglass-split": a0, "bi-check-circle-fill": a1, "bi-x-circle-fill": a2 });
function HeadOfInstitution_span_86_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Your school is awaiting review from the Ministry.");
    i0.ɵɵelementEnd();
} }
function HeadOfInstitution_span_87_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Your school is fully onboarded!");
    i0.ɵɵelementEnd();
} }
function HeadOfInstitution_ng_template_179_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵelement(1, "div", 73);
    i0.ɵɵelementEnd();
} }
export class HeadOfInstitution {
    constructor() {
        this.http = inject(HttpClient);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        this.isLoading = true;
        this.schoolData = {
            institutionName: 'Loading...',
            headOfInstitution: 'Loading...',
            role: 'HOI',
            status: 'pending',
            activeLearners: 0,
            inactiveLearners: 0,
            newAdmissions: 0,
            totalTransfers: 0,
            transfers: { released: 0, pending: 0, appeals: 0 },
            gender: { male: 0, female: 0 }
        };
    }
    ngOnInit() {
        const instId = localStorage.getItem('institutionId');
        if (instId) {
            this.http.get(`http://localhost:5215/api/BasicEducation/GetSchool/${instId}`).subscribe({
                next: (res) => {
                    console.log('School Data from API:', res);
                    // 1. Update the data
                    this.schoolData.institutionName = res.institutionName || 'Unknown School';
                    this.schoolData.headOfInstitution = res.headOfInstitution || 'HOI Name';
                    this.schoolData.status = res.status || 'pending';
                    this.schoolData.activeLearners = res.totalLearners || 0;
                    // 2. Turn off loading
                    this.isLoading = false;
                    // 3. ERROR RESOLVED: Force Angular to re-render the HTML immediately
                    this.cdr.detectChanges();
                },
                error: (err) => {
                    console.error('Failed to fetch school data:', err);
                    this.isLoading = false;
                    this.cdr.detectChanges(); // error message clearly
                }
            });
        }
        else {
            console.warn('No institutionId found in LocalStorage.');
            this.isLoading = false;
        }
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = function HeadOfInstitution_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HeadOfInstitution)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeadOfInstitution, selectors: [["app-head-of-institution"]], decls: 181, vars: 28, consts: [["loadingTpl", ""], [1, "dashboard-wrapper"], [1, "sidebar"], [1, "sidebar-logo"], ["src", "../../../assets/school-logo.jpg", "alt", "School Dashboard"], [1, "sidebar-nav"], [1, "nav-item", "active"], [1, "bi", "bi-grid-fill"], [1, "nav-item"], [1, "bi", "bi-search"], [1, "nav-parent", "has-children"], [1, "bi", "bi-clipboard-check"], [1, "nav-children"], ["href", "../learners-institution"], ["href", "#"], [1, "bi", "bi-pencil-square"], [1, "nav-item", "text-danger", "mt-4"], [1, "bi", "bi-book"], [1, "main-content"], [1, "top-header"], [1, "header-left"], [1, "back-btn"], [1, "bi", "bi-chevron-left"], [1, "header-right"], [1, "user-profile"], [1, "avatar"], [1, "bi", "bi-person-fill"], [1, "user-info"], [1, "name"], [1, "role"], [1, "logout-btn", 3, "click"], [1, "bi", "bi-power"], [1, "content-body"], [1, "page-title"], [1, "status-banner", 3, "ngClass"], [1, "bi", 3, "ngClass"], [1, "status-text"], [4, "ngIf"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], [1, "bi", "bi-people-fill"], [1, "stat-number"], [1, "stat-label"], [1, "stat-subtext"], [1, "bi", "bi-person-x-fill"], [1, "bi", "bi-person-plus-fill"], [1, "bi", "bi-arrow-left-right"], [1, "lower-grid"], [1, "card", "transfers-card"], [1, "card-header"], [1, "bi", "bi-arrow-left-right", "me-2"], [1, "card-body"], [1, "progress-row"], [1, "progress-label"], [1, "dot", "blue"], [1, "progress-bar-bg"], [1, "progress-bar-fill", "blue", 2, "width", "100%"], [1, "progress-value"], [1, "dot", "yellow"], [1, "progress-bar-fill", "yellow", 2, "width", "0%"], [1, "dot", "red"], [1, "progress-bar-fill", "red", 2, "width", "0%"], [1, "card", "gender-card"], [1, "bi", "bi-gender-ambiguous", "me-2"], [1, "card-body", "chart-body"], [1, "donut-chart"], [1, "donut-inner"], [1, "total"], [1, "total-label"], [1, "chart-legend"], [1, "legend-item"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "height", "100vh"], ["role", "status", 1, "spinner-border", "text-primary"]], template: function HeadOfInstitution_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3);
            i0.ɵɵelement(3, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nav", 5)(5, "a", 6);
            i0.ɵɵelement(6, "i", 7);
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "a", 8);
            i0.ɵɵelement(10, "i", 9);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Menu Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 10)(14, "a", 8);
            i0.ɵɵelement(15, "i", 11);
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "KEMIS Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "ul", 12)(19, "li")(20, "a", 13);
            i0.ɵɵtext(21, "Learner list in the Institution");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "li")(23, "a", 14);
            i0.ɵɵtext(24, "Learners Per Grade Institution");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "li")(26, "a", 14);
            i0.ɵɵtext(27, "Number of Orphan Learners");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "li")(29, "a", 14);
            i0.ɵɵtext(30, "SNE learners In an Institution");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "li")(32, "a", 14);
            i0.ɵɵtext(33, "In Active Learners List");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(34, "div", 10)(35, "a", 8);
            i0.ɵɵelement(36, "i", 15);
            i0.ɵɵelementStart(37, "span");
            i0.ɵɵtext(38, "Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "ul", 12)(40, "li")(41, "a", 14);
            i0.ɵɵtext(42, "Learner Transfer approval");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "li")(44, "a", 14);
            i0.ɵɵtext(45, "Learner Admissions");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "li")(47, "a", 14);
            i0.ɵɵtext(48, "Institution Update Request");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "li")(50, "a", 14);
            i0.ɵɵtext(51, "User Registration");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(52, "a", 16);
            i0.ɵɵelement(53, "i", 17);
            i0.ɵɵelementStart(54, "span");
            i0.ɵɵtext(55, "User Manual");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(56, "main", 18)(57, "header", 19)(58, "div", 20)(59, "button", 21);
            i0.ɵɵelement(60, "i", 22);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(61, "div", 23)(62, "div", 24)(63, "div", 25);
            i0.ɵɵelement(64, "i", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 27)(66, "span", 28);
            i0.ɵɵtext(67);
            i0.ɵɵpipe(68, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "span", 29);
            i0.ɵɵtext(70);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(71, "button", 30);
            i0.ɵɵlistener("click", function HeadOfInstitution_Template_button_click_71_listener() { return ctx.logout(); });
            i0.ɵɵelement(72, "i", 31);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(73, "div", 32)(74, "div", 33)(75, "h1");
            i0.ɵɵtext(76, "Institution Dashboard");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(77, "span", 28);
            i0.ɵɵtext(78);
            i0.ɵɵpipe(79, "uppercase");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "div", 34);
            i0.ɵɵelement(81, "i", 35);
            i0.ɵɵelementStart(82, "div", 36)(83, "strong");
            i0.ɵɵtext(84);
            i0.ɵɵpipe(85, "uppercase");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(86, HeadOfInstitution_span_86_Template, 2, 0, "span", 37)(87, HeadOfInstitution_span_87_Template, 2, 0, "span", 37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(88, "div", 38)(89, "div", 39)(90, "div", 40);
            i0.ɵɵelement(91, "i", 41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "div", 42);
            i0.ɵɵtext(93);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "div", 43);
            i0.ɵɵtext(95, "Total Active Learners");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "div", 44);
            i0.ɵɵtext(97, "Currently Enrolled");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(98, "div", 39)(99, "div", 40);
            i0.ɵɵelement(100, "i", 45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(101, "div", 42);
            i0.ɵɵtext(102);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "div", 43);
            i0.ɵɵtext(104, "Total InActive Learners");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "div", 44);
            i0.ɵɵtext(106, "Currently InActive Learners");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(107, "div", 39)(108, "div", 40);
            i0.ɵɵelement(109, "i", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(110, "div", 42);
            i0.ɵɵtext(111);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "div", 43);
            i0.ɵɵtext(113, "New Admissions");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "div", 44);
            i0.ɵɵtext(115, "Current Academic Year");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(116, "div", 39)(117, "div", 40);
            i0.ɵɵelement(118, "i", 47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "div", 42);
            i0.ɵɵtext(120);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "div", 43);
            i0.ɵɵtext(122, "Total Transfer Requests");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "div", 44);
            i0.ɵɵtext(124, "Received");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(125, "div", 48)(126, "div", 49)(127, "div", 50)(128, "h3");
            i0.ɵɵelement(129, "i", 51);
            i0.ɵɵtext(130, " Transfer Requests by Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "p");
            i0.ɵɵtext(132, "Current status of transfer requests");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(133, "div", 52)(134, "div", 53)(135, "div", 54);
            i0.ɵɵelement(136, "span", 55);
            i0.ɵɵtext(137, " Released");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(138, "div", 56);
            i0.ɵɵelement(139, "div", 57);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(140, "div", 58);
            i0.ɵɵtext(141);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(142, "div", 53)(143, "div", 54);
            i0.ɵɵelement(144, "span", 59);
            i0.ɵɵtext(145, " Pending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(146, "div", 56);
            i0.ɵɵelement(147, "div", 60);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(148, "div", 58);
            i0.ɵɵtext(149);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(150, "div", 53)(151, "div", 54);
            i0.ɵɵelement(152, "span", 61);
            i0.ɵɵtext(153, " Appeals");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(154, "div", 56);
            i0.ɵɵelement(155, "div", 62);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(156, "div", 58);
            i0.ɵɵtext(157);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(158, "div", 63)(159, "div", 50)(160, "h3");
            i0.ɵɵelement(161, "i", 64);
            i0.ɵɵtext(162, " Gender Distribution");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(163, "p");
            i0.ɵɵtext(164, "Learner population by gender");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(165, "div", 65)(166, "div", 66)(167, "div", 67)(168, "span", 68);
            i0.ɵɵtext(169);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(170, "span", 69);
            i0.ɵɵtext(171, "Total Learners");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(172, "div", 70)(173, "div", 71);
            i0.ɵɵelement(174, "span", 55);
            i0.ɵɵtext(175);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(176, "div", 71);
            i0.ɵɵelement(177, "span", 61);
            i0.ɵɵtext(178);
            i0.ɵɵelementEnd()()()()()()();
            i0.ɵɵtemplate(179, HeadOfInstitution_ng_template_179_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(67);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.headOfInstitution) ? i0.ɵɵpipeBind1(68, 18, ctx.schoolData.headOfInstitution) : "LOADING...");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.schoolData == null ? null : ctx.schoolData.role);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", (ctx.schoolData == null ? null : ctx.schoolData.institutionName) ? i0.ɵɵpipeBind1(79, 20, ctx.schoolData.institutionName) : "LOADING...", "\u2013 Academic Overview");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", "status-" + ((ctx.schoolData == null ? null : ctx.schoolData.status) || "pending"));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction3(24, _c0, (ctx.schoolData == null ? null : ctx.schoolData.status) === "pending", (ctx.schoolData == null ? null : ctx.schoolData.status) === "approved", (ctx.schoolData == null ? null : ctx.schoolData.status) === "denied"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Application Status: ", i0.ɵɵpipeBind1(85, 22, (ctx.schoolData == null ? null : ctx.schoolData.status) || "pending"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", (ctx.schoolData == null ? null : ctx.schoolData.status) === "pending");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.schoolData == null ? null : ctx.schoolData.status) === "approved");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.activeLearners) || 0);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.inactiveLearners) || 0);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.newAdmissions) || 0);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.totalTransfers) || 0);
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.transfers == null ? null : ctx.schoolData.transfers.released) || 0);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.transfers == null ? null : ctx.schoolData.transfers.pending) || 0);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate((ctx.schoolData == null ? null : ctx.schoolData.transfers == null ? null : ctx.schoolData.transfers.appeals) || 0);
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(((ctx.schoolData == null ? null : ctx.schoolData.gender == null ? null : ctx.schoolData.gender.male) || 0) + ((ctx.schoolData == null ? null : ctx.schoolData.gender == null ? null : ctx.schoolData.gender.female) || 0));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" Male: ", (ctx.schoolData == null ? null : ctx.schoolData.gender == null ? null : ctx.schoolData.gender.male) || 0, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Female: ", (ctx.schoolData == null ? null : ctx.schoolData.gender == null ? null : ctx.schoolData.gender.female) || 0, " ");
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, i1.UpperCasePipe], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%; \r\n  top: 0;   \r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0; \r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px; \r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n.top-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.back-btn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  color: var(--kemis-red, #dc143c);\r\n  cursor: pointer;\r\n}\r\n\r\n.header-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.user-profile[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 45px;\r\n  height: 45px;\r\n  background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a);\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.user-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #888;\r\n}\r\n\r\n.logout-btn[_ngcontent-%COMP%] {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.content-body[_ngcontent-%COMP%] {\r\n  padding: 1rem 2rem 2rem;\r\n  max-width: 1400px;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  margin: 0 0 0.2rem 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  margin: 0 0 1.5rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.status-banner[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n  padding: 1rem 1.5rem;\r\n  border-radius: 8px;\r\n  margin-bottom: 2rem;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.status-banner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.8rem; }\r\n.status-text[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\r\n.status-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 1rem; }\r\n.status-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.85rem; opacity: 0.8; }\r\n\r\n\r\n.status-pending[_ngcontent-%COMP%] {\r\n  background-color: #fff3cd;\r\n  border: 1px solid #ffc107;\r\n  color: #856404;\r\n}\r\n\r\n.status-approved[_ngcontent-%COMP%] {\r\n  background-color: #d4edda;\r\n  border: 1px solid #28a745;\r\n  color: #155724;\r\n}\r\n\r\n.status-denied[_ngcontent-%COMP%] {\r\n  background-color: #f8d7da;\r\n  border: 1px solid #dc3545;\r\n  color: #721c24;\r\n}\r\n\r\n\r\n\r\n\r\n.stats-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);\r\n  border-radius: 8px;\r\n  padding: 1.5rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -50%;\r\n  right: -20%;\r\n  width: 100px;\r\n  height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.stat-icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1.5rem;\r\n  right: 1.5rem;\r\n  font-size: 1.8rem;\r\n  opacity: 0.4;\r\n}\r\n\r\n.stat-number[_ngcontent-%COMP%] {\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.stat-label[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  margin-bottom: 0.2rem;\r\n}\r\n\r\n.stat-subtext[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\n.lower-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  background: #00b4d8;\r\n  color: white;\r\n  padding: 1.2rem 1.5rem;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  margin: 0 0 0.2rem 0;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  font-size: 0.85rem;\r\n  opacity: 0.9;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n}\r\n\r\n\r\n.progress-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.progress-label[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.dot[_ngcontent-%COMP%] {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n}\r\n\r\n.dot.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.dot.yellow[_ngcontent-%COMP%] { background-color: #ffc107; }\r\n.dot.red[_ngcontent-%COMP%] { background-color: #dc3545; }\r\n\r\n.progress-bar-bg[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  height: 8px;\r\n  background-color: #e9ecef;\r\n  border-radius: 4px;\r\n  margin: 0 1rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.progress-bar-fill[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  border-radius: 4px;\r\n}\r\n\r\n.progress-bar-fill.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.progress-bar-fill.yellow[_ngcontent-%COMP%] { background-color: #ffc107; }\r\n.progress-bar-fill.red[_ngcontent-%COMP%] { background-color: #dc3545; }\r\n\r\n.progress-value[_ngcontent-%COMP%] {\r\n  width: 30px;\r\n  text-align: right;\r\n  font-weight: 600;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n\r\n.progress-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding-top: 1.5rem;\r\n  margin-top: 1rem;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.footer-stat[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.footer-stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.blue-text[_ngcontent-%COMP%] { color: #00b4d8; }\r\n.yellow-text[_ngcontent-%COMP%] { color: #ffc107; }\r\n.red-text[_ngcontent-%COMP%] { color: #dc3545; }\r\n\r\n.footer-stat[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\r\n  font-size: 0.85rem;\r\n  color: #555;\r\n  margin-top: 4px;\r\n}\r\n\r\n\r\n.chart-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem 1.5rem;\r\n}\r\n\r\n.donut-chart[_ngcontent-%COMP%] {\r\n  width: 180px;\r\n  height: 180px;\r\n  border-radius: 50%;\r\n  background: conic-gradient(#00b4d8 0% 100%, #dc3545 100% 100%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%] {\r\n  width: 120px;\r\n  height: 120px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: #333;\r\n  line-height: 1;\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\r\n  font-size: 0.75rem;\r\n  color: #777;\r\n  margin-top: 4px;\r\n}\r\n\r\n.chart-legend[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.legend-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n@media (max-width: 1024px) {\r\n  .stats-grid[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n  .lower-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeadOfInstitution, [{
        type: Component,
        args: [{ selector: 'app-head-of-institution', standalone: true, imports: [CommonModule], template: "<div class=\"dashboard-wrapper\">\n\n  <!-- SIDEBAR -->\n  <aside class=\"sidebar\">\n    <div class=\"sidebar-logo\">\n      <img src=\"../../../assets/school-logo.jpg\" alt=\"School Dashboard\" />\n    </div>\n        <nav class=\"sidebar-nav\">\n      <!-- 1. Dashboard (Default) -->\n      <a class=\"nav-item active\">\n        <i class=\"bi bi-grid-fill\"></i>\n        <span>Dashboard</span>\n      </a>\n\n      <!-- 2. Menu Search (Will just do a search tab instead) -->\n      <a class=\"nav-item\">\n        <i class=\"bi bi-search\"></i>\n        <span>Menu Search</span>\n      </a>\n\n      <!-- 3. KEMIS Reports-->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-clipboard-check\"></i>\n          <span>KEMIS Reports</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"../learners-institution\">Learner list in the Institution</a></li>\n          <li><a href=\"#\">Learners Per Grade Institution</a></li>\n          <li><a href=\"#\">Number of Orphan Learners</a></li>\n          <li><a href=\"#\">SNE learners In an Institution</a></li>\n          <li><a href=\"#\">In Active Learners List</a></li>\n        </ul>\n      </div>\n\n      <!-- 4. Registration -->\n      <div class=\"nav-parent has-children\">\n        <a class=\"nav-item\">\n          <i class=\"bi bi-pencil-square\"></i>\n          <span>Registration</span>\n        </a>\n        <ul class=\"nav-children\">\n          <li><a href=\"#\">Learner Transfer approval</a></li>\n          <li><a href=\"#\">Learner Admissions</a></li>\n          <li><a href=\"#\">Institution Update Request</a></li>\n          <li><a href=\"#\">User Registration</a></li>\n        </ul>\n      </div>\n\n      <!--5.  User Manual Hapa si nikucopy paste tu the Manual in a page -->\n      <a class=\"nav-item text-danger mt-4\">\n        <i class=\"bi bi-book\"></i>\n        <span>User Manual</span>\n      </a>\n    </nav>\n  </aside>\n\n\n\n   <main class=\"main-content\">\n\n  <!-- Top Header for School and User -->\n  <header class=\"top-header\">\n    <div class=\"header-left\">\n      <button class=\"back-btn\"><i class=\"bi bi-chevron-left\"></i></button>\n    </div>\n\n        <div class=\"header-right\">\n      <div class=\"user-profile\">\n        <div class=\"avatar\">\n          <i class=\"bi bi-person-fill\"></i>\n        </div>\n        <div class=\"user-info\">\n          <!-- Separating having two items called \"name\", this is for the School Name -->\n           <!--Spent the night looking for an error kumbe it is lack of fallback <span class=\"name\">{{ schoolData?.headOfInstitution | uppercase }}</span>-->\n          <span class=\"name\">{{ schoolData?.headOfInstitution ? (schoolData.headOfInstitution | uppercase) : 'LOADING...' }}</span>\n          <span class=\"role\">{{ schoolData?.role }}</span>\n        </div>\n      </div>\n      <button class=\"logout-btn\" (click)=\"logout()\">\n        <i class=\"bi bi-power\"></i>\n      </button>\n    </div>\n  </header>\n\n  <!-- Page Content -->\n  <div class=\"content-body\">\n\n    <div class=\"page-title\">\n      <h1>Institution Dashboard</h1>\n      <span class=\"name\">{{ schoolData?.institutionName ? (schoolData.institutionName  | uppercase) : 'LOADING...' }}\u2013 Academic Overview</span>\n    </div>\n\n    <!-- Registration Status Banner (Visible immediately) -->\n    <div class=\"status-banner\" [ngClass]=\"'status-' + (schoolData?.status || 'pending')\">\n      <i class=\"bi\" [ngClass]=\"{\n        'bi-hourglass-split': schoolData?.status === 'pending',\n        'bi-check-circle-fill': schoolData?.status === 'approved',\n        'bi-x-circle-fill': schoolData?.status === 'denied'\n      }\"></i>\n      <div class=\"status-text\">\n        <strong>Application Status: {{ (schoolData?.status || 'pending') | uppercase }}</strong>\n        <span *ngIf=\"schoolData?.status === 'pending'\">Your school is awaiting review from the Ministry.</span>\n        <span *ngIf=\"schoolData?.status === 'approved'\">Your school is fully onboarded!</span>\n      </div>\n    </div>\n\n    <!-- 4 Stat Cards -->\n    <div class=\"stats-grid\">\n      <div class=\"stat-card\">\n        <div class=\"stat-icon\"><i class=\"bi bi-people-fill\"></i></div>\n        <div class=\"stat-number\">{{ schoolData?.activeLearners || 0 }}</div>\n        <div class=\"stat-label\">Total Active Learners</div>\n        <div class=\"stat-subtext\">Currently Enrolled</div>\n      </div>\n\n      <div class=\"stat-card\">\n        <div class=\"stat-icon\"><i class=\"bi bi-person-x-fill\"></i></div>\n        <div class=\"stat-number\">{{ schoolData?.inactiveLearners || 0 }}</div>\n        <div class=\"stat-label\">Total InActive Learners</div>\n        <div class=\"stat-subtext\">Currently InActive Learners</div>\n      </div>\n\n      <div class=\"stat-card\">\n        <div class=\"stat-icon\"><i class=\"bi bi-person-plus-fill\"></i></div>\n        <div class=\"stat-number\">{{ schoolData?.newAdmissions || 0 }}</div>\n        <div class=\"stat-label\">New Admissions</div>\n        <div class=\"stat-subtext\">Current Academic Year</div>\n      </div>\n\n      <div class=\"stat-card\">\n        <div class=\"stat-icon\"><i class=\"bi bi-arrow-left-right\"></i></div>\n        <div class=\"stat-number\">{{ schoolData?.totalTransfers || 0 }}</div>\n        <div class=\"stat-label\">Total Transfer Requests</div>\n        <div class=\"stat-subtext\">Received</div>\n      </div>\n    </div>\n\n    <!-- Lower Grid -->\n    <div class=\"lower-grid\">\n      <!-- Transfers Card -->\n      <div class=\"card transfers-card\">\n        <div class=\"card-header\">\n          <h3><i class=\"bi bi-arrow-left-right me-2\"></i> Transfer Requests by Status</h3>\n          <p>Current status of transfer requests</p>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"progress-row\">\n            <div class=\"progress-label\"><span class=\"dot blue\"></span> Released</div>\n            <div class=\"progress-bar-bg\"><div class=\"progress-bar-fill blue\" style=\"width: 100%;\"></div></div>\n            <div class=\"progress-value\">{{ schoolData?.transfers?.released || 0 }}</div>\n          </div>\n          <div class=\"progress-row\">\n            <div class=\"progress-label\"><span class=\"dot yellow\"></span> Pending</div>\n            <div class=\"progress-bar-bg\"><div class=\"progress-bar-fill yellow\" style=\"width: 0%;\"></div></div>\n            <div class=\"progress-value\">{{ schoolData?.transfers?.pending || 0 }}</div>\n          </div>\n          <div class=\"progress-row\">\n            <div class=\"progress-label\"><span class=\"dot red\"></span> Appeals</div>\n            <div class=\"progress-bar-bg\"><div class=\"progress-bar-fill red\" style=\"width: 0%;\"></div></div>\n            <div class=\"progress-value\">{{ schoolData?.transfers?.appeals || 0 }}</div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Gender Card -->\n      <div class=\"card gender-card\">\n        <div class=\"card-header\">\n          <h3><i class=\"bi bi-gender-ambiguous me-2\"></i> Gender Distribution</h3>\n          <p>Learner population by gender</p>\n        </div>\n        <div class=\"card-body chart-body\">\n          <div class=\"donut-chart\">\n            <div class=\"donut-inner\">\n              <span class=\"total\">{{ (schoolData?.gender?.male || 0) + (schoolData?.gender?.female || 0) }}</span>\n              <span class=\"total-label\">Total Learners</span>\n            </div>\n          </div>\n\n          <div class=\"chart-legend\">\n            <div class=\"legend-item\">\n              <span class=\"dot blue\"></span>\n              Male: {{ schoolData?.gender?.male || 0 }}\n            </div>\n            <div class=\"legend-item\">\n              <span class=\"dot red\"></span>\n              Female: {{ schoolData?.gender?.female || 0 }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</main>\n\n<!-- Loading Template -->\n<ng-template #loadingTpl>\n  <div class=\"d-flex justify-content-center align-items-center\" style=\"height: 100vh;\">\n    <div class=\"spinner-border text-primary\" role=\"status\"></div>\n  </div>\n</ng-template>\n\n</div>\n", styles: ["/*Sidebar*/\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* The Dropdown Menu (Hidden by default IMPORTANT!) */\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%; \r\n  top: 0;   \r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0; \r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children li a:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px; \r\n}\r\n\r\n.nav-parent.has-children:hover .nav-children {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children:hover > .nav-item {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n/*Main page*/\r\n.main-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* Top Header */\r\n.top-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.back-btn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.5rem;\r\n  color: var(--kemis-red, #dc143c);\r\n  cursor: pointer;\r\n}\r\n\r\n.header-right {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.user-profile {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.avatar {\r\n  width: 45px;\r\n  height: 45px;\r\n  background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a);\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.user-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.user-info .name {\r\n  font-weight: 700;\r\n  color: #00b4d8;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.user-info .role {\r\n  font-size: 0.8rem;\r\n  color: #888;\r\n}\r\n\r\n.logout-btn {\r\n  background: none;\r\n  border: none;\r\n  font-size: 1.2rem;\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Page Body */\r\n.content-body {\r\n  padding: 1rem 2rem 2rem;\r\n  max-width: 1400px;\r\n}\r\n\r\n.page-title h1 {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  margin: 0 0 0.2rem 0;\r\n  color: #1a1a1a;\r\n}\r\n\r\n.page-title p {\r\n  color: #555;\r\n  margin: 0 0 1.5rem 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.status-banner {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 15px;\r\n  padding: 1rem 1.5rem;\r\n  border-radius: 8px;\r\n  margin-bottom: 2rem;\r\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\r\n}\r\n\r\n.status-banner i { font-size: 1.8rem; }\r\n.status-text { display: flex; flex-direction: column; }\r\n.status-text strong { font-size: 1rem; }\r\n.status-text span { font-size: 0.85rem; opacity: 0.8; }\r\n\r\n/* Colors */\r\n.status-pending {\r\n  background-color: #fff3cd;\r\n  border: 1px solid #ffc107;\r\n  color: #856404;\r\n}\r\n\r\n.status-approved {\r\n  background-color: #d4edda;\r\n  border: 1px solid #28a745;\r\n  color: #155724;\r\n}\r\n\r\n.status-denied {\r\n  background-color: #f8d7da;\r\n  border: 1px solid #dc3545;\r\n  color: #721c24;\r\n}\r\n\r\n/* ============================================\r\n   STAT CARDS\r\n   ============================================ */\r\n.stats-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 1.5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card {\r\n  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);\r\n  border-radius: 8px;\r\n  padding: 1.5rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: -50%;\r\n  right: -20%;\r\n  width: 100px;\r\n  height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.stat-icon {\r\n  position: absolute;\r\n  top: 1.5rem;\r\n  right: 1.5rem;\r\n  font-size: 1.8rem;\r\n  opacity: 0.4;\r\n}\r\n\r\n.stat-number {\r\n  font-size: 2.2rem;\r\n  font-weight: 700;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.stat-label {\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  margin-bottom: 0.2rem;\r\n}\r\n\r\n.stat-subtext {\r\n  font-size: 0.8rem;\r\n  opacity: 0.8;\r\n}\r\n\r\n/*Gender cards*/\r\n.lower-grid {\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header {\r\n  background: #00b4d8;\r\n  color: white;\r\n  padding: 1.2rem 1.5rem;\r\n}\r\n\r\n.card-header h3 {\r\n  margin: 0 0 0.2rem 0;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.card-header p {\r\n  margin: 0;\r\n  font-size: 0.85rem;\r\n  opacity: 0.9;\r\n}\r\n\r\n.card-body {\r\n  padding: 1.5rem;\r\n}\r\n\r\n/*Transfer bars*/\r\n.progress-row {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 1.2rem;\r\n}\r\n\r\n.progress-label {\r\n  width: 120px;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.dot {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n}\r\n\r\n.dot.blue { background-color: #00b4d8; }\r\n.dot.yellow { background-color: #ffc107; }\r\n.dot.red { background-color: #dc3545; }\r\n\r\n.progress-bar-bg {\r\n  flex: 1;\r\n  height: 8px;\r\n  background-color: #e9ecef;\r\n  border-radius: 4px;\r\n  margin: 0 1rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.progress-bar-fill {\r\n  height: 100%;\r\n  border-radius: 4px;\r\n}\r\n\r\n.progress-bar-fill.blue { background-color: #00b4d8; }\r\n.progress-bar-fill.yellow { background-color: #ffc107; }\r\n.progress-bar-fill.red { background-color: #dc3545; }\r\n\r\n.progress-value {\r\n  width: 30px;\r\n  text-align: right;\r\n  font-weight: 600;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n/* Footer summary */\r\n.progress-footer {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  padding-top: 1.5rem;\r\n  margin-top: 1rem;\r\n  border-top: 1px solid #eee;\r\n}\r\n\r\n.footer-stat {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.footer-stat .value {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.blue-text { color: #00b4d8; }\r\n.yellow-text { color: #ffc107; }\r\n.red-text { color: #dc3545; }\r\n\r\n.footer-stat .label {\r\n  font-size: 0.85rem;\r\n  color: #555;\r\n  margin-top: 4px;\r\n}\r\n\r\n/*Gender section */\r\n.chart-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem 1.5rem;\r\n}\r\n\r\n.donut-chart {\r\n  width: 180px;\r\n  height: 180px;\r\n  border-radius: 50%;\r\n  background: conic-gradient(#00b4d8 0% 100%, #dc3545 100% 100%);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.donut-inner {\r\n  width: 120px;\r\n  height: 120px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-inner .total {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: #333;\r\n  line-height: 1;\r\n}\r\n\r\n.donut-inner .total-label {\r\n  font-size: 0.75rem;\r\n  color: #777;\r\n  margin-top: 4px;\r\n}\r\n\r\n.chart-legend {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.legend-item {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n/* Responsive */\r\n@media (max-width: 1024px) {\r\n  .stats-grid { grid-template-columns: repeat(2, 1fr); }\r\n  .lower-grid { grid-template-columns: 1fr; }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HeadOfInstitution, { className: "HeadOfInstitution", filePath: "app/pages/head-of-institution/head-of-institution.ts", lineNumber: 13 }); })();
