import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class SubCountyEducation {
    constructor() {
        this.http = inject(HttpClient);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        // Initialize with loading state
        this.dashboardData = {
            subCounty: 'Loading...',
            userRole: 'SCDE',
            stats: {
                totalApplications: 0,
                totalInstitutions: 0,
                schoolsReceived: 0,
                totalLearners: 0,
                subjectCombinations: 0
            },
            submissionStatus: {
                completed: 0,
                inProgress: 0,
                pending: 0
            },
            gender: {
                total: 0,
                male: 0,
                female: 0
            }
        };
        this.selectedLevel = 'Primary School';
        this.selectedSubCounty = '';
    }
    ngOnInit() {
        this.loadScdeProfile();
        this.loadDashboardStats();
    }
    loadScdeProfile() {
        this.http.get('http://localhost:5215/api/sub-county-education/profile').subscribe({
            next: (profile) => {
                this.dashboardData.subCounty = profile.subCounty;
                this.selectedSubCounty = profile.subCounty;
                this.cdr.detectChanges();
            },
            error: (err) => {
                console.error('Failed to load SCDE profile', err);
                this.dashboardData.subCounty = 'Sub-county profile unavailable';
                this.cdr.detectChanges();
            }
        });
    }
    loadDashboardStats() {
        this.http.get('http://localhost:5215/api/sub-county-education/dashboard-stats').subscribe({
            next: (res) => {
                if (res.stats) {
                    // Map the backend stats to the UI
                    this.dashboardData.stats = res.stats;
                    // Calculate Gender Distribution from the totalLearners
                    // (Since the backend doesn't split male/female yet, we can fake it for now
                    // or wait until your colleague adds the gender stats to the endpoint)
                    this.dashboardData.gender.total = res.stats.totalLearners;
                    this.dashboardData.gender.male = Math.floor(res.stats.totalLearners / 2);
                    this.dashboardData.gender.female = Math.ceil(res.stats.totalLearners / 2);
                    this.cdr.detectChanges();
                }
            },
            error: (err) => console.error('Failed to load stats', err)
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = function SubCountyEducation_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubCountyEducation)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubCountyEducation, selectors: [["app-sub-county-education"]], decls: 110, vars: 13, consts: [[1, "page-container"], [1, "page-title"], [1, "stats-grid-5"], [1, "stat-card"], [1, "stat-icon"], [1, "bi", "bi-clipboard-data-fill"], [1, "stat-number"], [1, "stat-label"], [1, "stat-subtext"], [1, "bi", "bi-building-fill"], [1, "bi", "bi-book-fill"], [1, "bi", "bi-people-fill"], [1, "bi", "bi-journal-bookmark-fill"], [1, "lower-grid"], [1, "card"], [1, "card-header"], [1, "bi", "bi-list-check", "me-2"], [1, "card-body"], [1, "progress-row"], [1, "progress-label"], [1, "dot", "blue"], [1, "progress-bar-bg"], [1, "progress-bar-fill", "blue", 2, "width", "0%"], [1, "progress-value"], [1, "dot", "yellow"], [1, "progress-bar-fill", "yellow", 2, "width", "0%"], [1, "dot", "red"], [1, "progress-bar-fill", "red", 2, "width", "0%"], [1, "progress-footer"], [1, "footer-stat"], [1, "value", "blue-text"], [1, "value", "yellow-text"], [1, "value", "red-text"], [1, "bi", "bi-pie-chart-fill", "me-2"], [1, "card-body", "chart-body"], [1, "chart-container"], [1, "donut-chart", 2, "background", "conic-gradient(#00b4d8 0% 50%, #b91c1c 50% 100%)"], [1, "donut-inner"], [1, "total"], [1, "total-label"]], template: function SubCountyEducation_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "h1");
            i0.ɵɵtext(3, "Subcounty Director Dashboard");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "p");
            i0.ɵɵtext(5);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(6, "div", 2)(7, "div", 3)(8, "div", 4);
            i0.ɵɵdomElement(9, "i", 5);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "div", 6);
            i0.ɵɵtext(11);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(12, "div", 7);
            i0.ɵɵtext(13, "Total Applications");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "div", 8);
            i0.ɵɵtext(15, "Awaiting SCDE Review");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(16, "div", 3)(17, "div", 4);
            i0.ɵɵdomElement(18, "i", 9);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(19, "div", 6);
            i0.ɵɵtext(20);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(21, "div", 7);
            i0.ɵɵtext(22, "Total Institutions");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(23, "div", 8);
            i0.ɵɵtext(24, "Recommended In Subcounty");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(25, "div", 3)(26, "div", 4);
            i0.ɵɵdomElement(27, "i", 10);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(28, "div", 6);
            i0.ɵɵtext(29);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(30, "div", 7);
            i0.ɵɵtext(31, "Schools received");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(32, "div", 8);
            i0.ɵɵtext(33, "from CDE Pending Approval");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(34, "div", 3)(35, "div", 4);
            i0.ɵɵdomElement(36, "i", 11);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(37, "div", 6);
            i0.ɵɵtext(38);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(39, "div", 7);
            i0.ɵɵtext(40, "Total Learners");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(41, "div", 8);
            i0.ɵɵtext(42, "Subcounty Enrollment");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(43, "div", 3)(44, "div", 4);
            i0.ɵɵdomElement(45, "i", 12);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(46, "div", 6);
            i0.ɵɵtext(47);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(48, "div", 7);
            i0.ɵɵtext(49, "Subject Combinations");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(50, "div", 8);
            i0.ɵɵtext(51, "Pending Approval");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(52, "div", 13)(53, "div", 14)(54, "div", 15)(55, "h3");
            i0.ɵɵdomElement(56, "i", 16);
            i0.ɵɵtext(57, " Submission Action Status");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(58, "p");
            i0.ɵɵtext(59, "Current status of institution submissions");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(60, "div", 17)(61, "div", 18)(62, "div", 19);
            i0.ɵɵdomElement(63, "span", 20);
            i0.ɵɵtext(64, " Completed");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(65, "div", 21);
            i0.ɵɵdomElement(66, "div", 22);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(67, "div", 23);
            i0.ɵɵtext(68);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(69, "div", 18)(70, "div", 19);
            i0.ɵɵdomElement(71, "span", 24);
            i0.ɵɵtext(72, " In Progress");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(73, "div", 21);
            i0.ɵɵdomElement(74, "div", 25);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(75, "div", 23);
            i0.ɵɵtext(76);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(77, "div", 18)(78, "div", 19);
            i0.ɵɵdomElement(79, "span", 26);
            i0.ɵɵtext(80, " Pending");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(81, "div", 21);
            i0.ɵɵdomElement(82, "div", 27);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(83, "div", 23);
            i0.ɵɵtext(84);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(85, "div", 28)(86, "div", 29)(87, "span", 30);
            i0.ɵɵtext(88);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(89, "div", 29)(90, "span", 31);
            i0.ɵɵtext(91);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(92, "div", 29)(93, "span", 32);
            i0.ɵɵtext(94);
            i0.ɵɵdomElementEnd()()()()();
            i0.ɵɵdomElementStart(95, "div", 14)(96, "div", 15)(97, "h3");
            i0.ɵɵdomElement(98, "i", 33);
            i0.ɵɵtext(99, " Gender Distribution");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(100, "p");
            i0.ɵɵtext(101, "Learner gender distribution in subcounty");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(102, "div", 34)(103, "div", 35)(104, "div", 36)(105, "div", 37)(106, "span", 38);
            i0.ɵɵtext(107);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(108, "span", 39);
            i0.ɵɵtext(109, "Total Learners");
            i0.ɵɵdomElementEnd()()()()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.subCounty, " \u2013 Educational Management");
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.totalApplications);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.totalInstitutions);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.schoolsReceived);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.totalLearners);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.subjectCombinations);
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate(ctx.dashboardData.submissionStatus.completed);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.dashboardData.submissionStatus.inProgress);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.dashboardData.submissionStatus.pending);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.dashboardData.submissionStatus.completed);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dashboardData.submissionStatus.inProgress);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dashboardData.submissionStatus.pending);
            i0.ɵɵadvance(13);
            i0.ɵɵtextInterpolate(ctx.dashboardData.gender.total);
        } }, dependencies: [CommonModule, FormsModule], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%; \r\n  top: 0;   \r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0; \r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px; \r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n.top-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.header-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\r\n.back-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text[_ngcontent-%COMP%] { font-size: 1.2rem; font-weight: 600; color: #333; }\r\n\r\n.header-right[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 1rem; }\r\n\r\n\r\n.header-select[_ngcontent-%COMP%] {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.header-select-icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n.user-profile[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; }\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\r\n.user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] { font-size: 0.8rem; color: #888; }\r\n.logout-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n\r\n\r\n.content-body[_ngcontent-%COMP%] { padding: 1rem 2rem 2rem; max-width: 1500px; }\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n\r\n\r\n.stats-grid-5[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);\r\n  border-radius: 8px;\r\n  padding: 1.2rem 1rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute; top: -50%; right: -20%;\r\n  width: 100px; height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.stat-icon[_ngcontent-%COMP%] { position: absolute; top: 1rem; right: 1rem; font-size: 1.8rem; opacity: 0.4; }\r\n.stat-number[_ngcontent-%COMP%] { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }\r\n.stat-label[_ngcontent-%COMP%] { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.2rem; }\r\n.stat-subtext[_ngcontent-%COMP%] { font-size: 0.75rem; opacity: 0.8; }\r\n\r\n\r\n\r\n.lower-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] { background: #00b4d8; color: white; padding: 1.2rem 1.5rem; }\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0 0 0.2rem 0; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; }\r\n.card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; font-size: 0.85rem; opacity: 0.9; }\r\n.card-body[_ngcontent-%COMP%] { padding: 2rem 1.5rem; flex: 1; }\r\n\r\n\r\n.progress-row[_ngcontent-%COMP%] { display: flex; align-items: center; margin-bottom: 1.5rem; }\r\n.progress-label[_ngcontent-%COMP%] { width: 100px; font-size: 0.9rem; color: #333; display: flex; align-items: center; gap: 8px; }\r\n.dot[_ngcontent-%COMP%] { width: 12px; height: 12px; border-radius: 2px; display: inline-block; }\r\n.dot.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.dot.yellow[_ngcontent-%COMP%] { background-color: #ffc107; }\r\n.dot.red[_ngcontent-%COMP%] { background-color: #dc3545; }\r\n\r\n.progress-bar-bg[_ngcontent-%COMP%] { flex: 1; height: 8px; background-color: #e9ecef; border-radius: 4px; margin: 0 1rem; overflow: hidden; }\r\n.progress-bar-fill[_ngcontent-%COMP%] { height: 100%; border-radius: 4px; }\r\n.progress-bar-fill.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.progress-bar-fill.yellow[_ngcontent-%COMP%] { background-color: #ffc107; }\r\n.progress-bar-fill.red[_ngcontent-%COMP%] { background-color: #dc3545; }\r\n.progress-value[_ngcontent-%COMP%] { width: 30px; text-align: right; font-weight: 700; font-size: 0.95rem; }\r\n\r\n\r\n.progress-footer[_ngcontent-%COMP%] { display: flex; justify-content: space-around; padding-top: 2rem; margin-top: 1rem; border-top: 1px solid #eee; }\r\n.footer-stat[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; }\r\n.footer-stat[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] { font-size: 1.5rem; font-weight: 700; }\r\n.blue-text[_ngcontent-%COMP%] { color: #00b4d8; }\r\n.yellow-text[_ngcontent-%COMP%] { color: #ffc107; }\r\n.red-text[_ngcontent-%COMP%] { color: #dc3545; }\r\n\r\n\r\n.chart-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.chart-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.donut-chart[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n  height: 220px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: #00b4d8; \r\n  line-height: 1;\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  color: #777;\r\n  margin-top: 4px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubCountyEducation, [{
        type: Component,
        args: [{ selector: 'app-sub-county-education', standalone: true, imports: [CommonModule, FormsModule], template: "<div class=\"page-container\">\n\n  <!-- Page Title -->\n  <div class=\"page-title\">\n    <h1>Subcounty Director Dashboard</h1>\n    <p>{{ dashboardData.subCounty }} \u2013 Educational Management</p>\n  </div>\n\n  <!-- 5 Stat Cards -->\n  <div class=\"stats-grid-5\">\n    <!-- Applications -->\n    <div class=\"stat-card\">\n      <div class=\"stat-icon\"><i class=\"bi bi-clipboard-data-fill\"></i></div>\n      <div class=\"stat-number\">{{ dashboardData.stats.totalApplications }}</div>\n      <div class=\"stat-label\">Total Applications</div>\n      <div class=\"stat-subtext\">Awaiting SCDE Review</div>\n    </div>\n\n    <!-- Institutions -->\n    <div class=\"stat-card\">\n      <div class=\"stat-icon\"><i class=\"bi bi-building-fill\"></i></div>\n      <div class=\"stat-number\">{{ dashboardData.stats.totalInstitutions }}</div>\n      <div class=\"stat-label\">Total Institutions</div>\n      <div class=\"stat-subtext\">Recommended In Subcounty</div>\n    </div>\n\n    <!-- Schools Received -->\n    <div class=\"stat-card\">\n      <div class=\"stat-icon\"><i class=\"bi bi-book-fill\"></i></div>\n      <div class=\"stat-number\">{{ dashboardData.stats.schoolsReceived }}</div>\n      <div class=\"stat-label\">Schools received</div>\n      <div class=\"stat-subtext\">from CDE Pending Approval</div>\n    </div>\n\n    <!-- Total Learners -->\n    <div class=\"stat-card\">\n      <div class=\"stat-icon\"><i class=\"bi bi-people-fill\"></i></div>\n      <div class=\"stat-number\">{{ dashboardData.stats.totalLearners }}</div>\n      <div class=\"stat-label\">Total Learners</div>\n      <div class=\"stat-subtext\">Subcounty Enrollment</div>\n    </div>\n\n    <!-- Subject Combinations -->\n    <div class=\"stat-card\">\n      <div class=\"stat-icon\"><i class=\"bi bi-journal-bookmark-fill\"></i></div>\n      <div class=\"stat-number\">{{ dashboardData.stats.subjectCombinations }}</div>\n      <div class=\"stat-label\">Subject Combinations</div>\n      <div class=\"stat-subtext\">Pending Approval</div>\n    </div>\n  </div>\n\n  <!-- Lower Grid -->\n  <div class=\"lower-grid\">\n\n    <!-- Submission Action Status -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3><i class=\"bi bi-list-check me-2\"></i> Submission Action Status</h3>\n        <p>Current status of institution submissions</p>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"progress-row\">\n          <div class=\"progress-label\"><span class=\"dot blue\"></span> Completed</div>\n          <div class=\"progress-bar-bg\"><div class=\"progress-bar-fill blue\" style=\"width: 0%;\"></div></div>\n          <div class=\"progress-value\">{{ dashboardData.submissionStatus.completed }}</div>\n        </div>\n        <div class=\"progress-row\">\n          <div class=\"progress-label\"><span class=\"dot yellow\"></span> In Progress</div>\n          <div class=\"progress-bar-bg\"><div class=\"progress-bar-fill yellow\" style=\"width: 0%;\"></div></div>\n          <div class=\"progress-value\">{{ dashboardData.submissionStatus.inProgress }}</div>\n        </div>\n        <div class=\"progress-row\">\n          <div class=\"progress-label\"><span class=\"dot red\"></span> Pending</div>\n          <div class=\"progress-bar-bg\"><div class=\"progress-bar-fill red\" style=\"width: 0%;\"></div></div>\n          <div class=\"progress-value\">{{ dashboardData.submissionStatus.pending }}</div>\n        </div>\n        <div class=\"progress-footer\">\n          <div class=\"footer-stat\"><span class=\"value blue-text\">{{ dashboardData.submissionStatus.completed }}</span></div>\n          <div class=\"footer-stat\"><span class=\"value yellow-text\">{{ dashboardData.submissionStatus.inProgress }}</span></div>\n          <div class=\"footer-stat\"><span class=\"value red-text\">{{ dashboardData.submissionStatus.pending }}</span></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Gender Distribution -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h3><i class=\"bi bi-pie-chart-fill me-2\"></i> Gender Distribution</h3>\n        <p>Learner gender distribution in subcounty</p>\n      </div>\n      <div class=\"card-body chart-body\">\n        <div class=\"chart-container\">\n          <div class=\"donut-chart\" style=\"background: conic-gradient(#00b4d8 0% 50%, #b91c1c 50% 100%);\">\n            <div class=\"donut-inner\">\n              <span class=\"total\">{{ dashboardData.gender.total }}</span>\n              <span class=\"total-label\">Total Learners</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n", styles: ["/*Sidebar*/\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* The Dropdown Menu (Hidden by default IMPORTANT!) */\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%; \r\n  top: 0;   \r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0; \r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n  \r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children li a:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px; \r\n}\r\n\r\n.nav-parent.has-children:hover .nav-children {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children:hover > .nav-item {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n/* MAIN CONTENT & HEADER\r\n   ============================================ */\r\n.main-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n.top-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.header-left { display: flex; align-items: center; gap: 10px; }\r\n.back-btn { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text { font-size: 1.2rem; font-weight: 600; color: #333; }\r\n\r\n.header-right { display: flex; align-items: center; gap: 1rem; }\r\n\r\n/* Header Dropdowns */\r\n.header-select {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.header-select-icon {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n/* User Profile */\r\n.user-profile { display: flex; align-items: center; gap: 12px; }\r\n.avatar {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info { display: flex; flex-direction: column; }\r\n.user-info .name { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info .role { font-size: 0.8rem; color: #888; }\r\n.logout-btn { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n/* PAGE BODY\r\n   ============================================ */\r\n.content-body { padding: 1rem 2rem 2rem; max-width: 1500px; }\r\n.page-title h1 { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title p { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n/* 5 STAT CARDS\r\n   ============================================ */\r\n.stats-grid-5 {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 1rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card {\r\n  background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%);\r\n  border-radius: 8px;\r\n  padding: 1.2rem 1rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card::before {\r\n  content: '';\r\n  position: absolute; top: -50%; right: -20%;\r\n  width: 100px; height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n.stat-icon { position: absolute; top: 1rem; right: 1rem; font-size: 1.8rem; opacity: 0.4; }\r\n.stat-number { font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; }\r\n.stat-label { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.2rem; }\r\n.stat-subtext { font-size: 0.75rem; opacity: 0.8; }\r\n\r\n/* LOWER GRID & CARDS\r\n   ============================================ */\r\n.lower-grid {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header { background: #00b4d8; color: white; padding: 1.2rem 1.5rem; }\r\n.card-header h3 { margin: 0 0 0.2rem 0; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; }\r\n.card-header p { margin: 0; font-size: 0.85rem; opacity: 0.9; }\r\n.card-body { padding: 2rem 1.5rem; flex: 1; }\r\n\r\n/* PROGRESS BARS (Submission Status) */\r\n.progress-row { display: flex; align-items: center; margin-bottom: 1.5rem; }\r\n.progress-label { width: 100px; font-size: 0.9rem; color: #333; display: flex; align-items: center; gap: 8px; }\r\n.dot { width: 12px; height: 12px; border-radius: 2px; display: inline-block; }\r\n.dot.blue { background-color: #00b4d8; }\r\n.dot.yellow { background-color: #ffc107; }\r\n.dot.red { background-color: #dc3545; }\r\n\r\n.progress-bar-bg { flex: 1; height: 8px; background-color: #e9ecef; border-radius: 4px; margin: 0 1rem; overflow: hidden; }\r\n.progress-bar-fill { height: 100%; border-radius: 4px; }\r\n.progress-bar-fill.blue { background-color: #00b4d8; }\r\n.progress-bar-fill.yellow { background-color: #ffc107; }\r\n.progress-bar-fill.red { background-color: #dc3545; }\r\n.progress-value { width: 30px; text-align: right; font-weight: 700; font-size: 0.95rem; }\r\n\r\n/* Footer summary */\r\n.progress-footer { display: flex; justify-content: space-around; padding-top: 2rem; margin-top: 1rem; border-top: 1px solid #eee; }\r\n.footer-stat { display: flex; flex-direction: column; align-items: center; }\r\n.footer-stat .value { font-size: 1.5rem; font-weight: 700; }\r\n.blue-text { color: #00b4d8; }\r\n.yellow-text { color: #ffc107; }\r\n.red-text { color: #dc3545; }\r\n\r\n/* DONUT CHART (Gender Distribution) */\r\n.chart-body {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.chart-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.donut-chart {\r\n  width: 220px;\r\n  height: 220px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\r\n}\r\n\r\n.donut-inner {\r\n  width: 140px;\r\n  height: 140px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.donut-inner .total {\r\n  font-size: 1.8rem;\r\n  font-weight: 700;\r\n  color: #00b4d8; /* Matching screenshot text color */\r\n  line-height: 1;\r\n}\r\n\r\n.donut-inner .total-label {\r\n  font-size: 0.8rem;\r\n  color: #777;\r\n  margin-top: 4px;\r\n}\r\n\r\n/* RESPONSIVE\r\n   ============================================ */\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5 { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid { grid-template-columns: 1fr; }\r\n  .stats-grid-5 { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubCountyEducation, { className: "SubCountyEducation", filePath: "app/pages/sub-county-education/sub-county-education.ts", lineNumber: 14 }); })();
