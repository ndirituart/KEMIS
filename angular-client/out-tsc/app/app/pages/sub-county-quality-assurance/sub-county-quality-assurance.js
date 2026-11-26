import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export class SubCountyQualityAssurance {
    constructor() {
        this.http = inject(HttpClient);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        this.dashboardData = {
            countyName: 'Loading...',
            subCountyName: 'Loading...',
            userRole: 'SCQASO',
            currentLevel: 'Primary School',
            stats: {
                inspectionsDone: 0,
                schedulePending: 0,
                underEvaluation: 0,
                recPending: 0,
                sendBack: 0
            },
            institutionTypes: {
                primary: { count: 0, percentage: 100 }
            }
        };
        this.selectedLevel = 'Primary School';
        this.selectedSubCounty = '';
    }
    ngOnInit() {
        this.loadScqasoData();
    }
    loadScqasoData() {
        // 1. Fetch Profile (to get the Sub-County Name)
        this.http.get('http://localhost:5215/api/sub-county-quality-assurance/profile').subscribe({
            next: (profile) => {
                this.dashboardData.countyName = profile.county;
                this.dashboardData.subCountyName = profile.subCounty;
                this.selectedSubCounty = profile.subCounty;
                this.cdr.markForCheck();
                // 2. Fetch the Stats
                this.http.get('http://localhost:5215/api/sub-county-quality-assurance/dashboard-stats').subscribe({
                    next: (res) => {
                        if (res.stats) {
                            this.dashboardData.stats = res.stats;
                            this.cdr.detectChanges();
                        }
                    },
                    error: (err) => console.error('Failed to load stats', err)
                });
            },
            error: (err) => {
                console.error('Failed to load profile', err);
                this.dashboardData.countyName = 'Unavailable';
                this.dashboardData.subCountyName = 'Unavailable';
                this.cdr.detectChanges();
            }
        });
    }
    navigateTo(route) {
        this.router.navigate([route]);
    }
    logout() {
        localStorage.clear();
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = function SubCountyQualityAssurance_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubCountyQualityAssurance)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubCountyQualityAssurance, selectors: [["app-sub-county-quality-assurance"]], decls: 75, vars: 8, consts: [[1, "content-body"], [1, "page-title"], [1, "stats-grid-5"], [1, "stat-card", "card-blue"], [1, "stat-icon"], [1, "bi", "bi-clipboard-check-fill"], [1, "stat-number"], [1, "stat-label"], [1, "stat-subtext"], [1, "stat-card", "card-orange"], [1, "bi", "bi-calendar-event-fill"], [1, "bi", "bi-hourglass-split"], [1, "bi", "bi-pencil-square"], [1, "stat-card", "card-red"], [1, "bi", "bi-reply-fill"], [1, "lower-grid"], [1, "card"], [1, "card-header"], [1, "bi", "bi-pie-chart-fill", "me-2"], [1, "card-body", "chart-body"], [1, "chart-container"], [1, "donut-chart", 2, "background", "conic-gradient(#00b4d8 0% 100%)"], [1, "donut-inner"], [1, "chart-legend-horizontal"], [1, "legend-item"], [1, "dot", "blue"], [1, "legend-text"], [1, "legend-percentage"], [1, "card", "empty-card"], [1, "bi", "bi-calendar-check-fill", "me-2"], [1, "card-body"]], template: function SubCountyQualityAssurance_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "div", 0)(1, "div", 1)(2, "h1");
            i0.ɵɵtext(3);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(4, "p");
            i0.ɵɵtext(5, "Educational Oversight & Quality Assurance Management Dashboard");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(6, "div", 2)(7, "div", 3)(8, "div", 4);
            i0.ɵɵdomElement(9, "i", 5);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(10, "div", 6);
            i0.ɵɵtext(11);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(12, "div", 7);
            i0.ɵɵtext(13, "INSPECTIONS DONE");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(14, "div", 8);
            i0.ɵɵtext(15, "Completed cycle");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(16, "div", 9)(17, "div", 4);
            i0.ɵɵdomElement(18, "i", 10);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(19, "div", 6);
            i0.ɵɵtext(20);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(21, "div", 7);
            i0.ɵɵtext(22, "SCHEDULE PENDING");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(23, "div", 8);
            i0.ɵɵtext(24, "Awaiting timeline");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(25, "div", 3)(26, "div", 4);
            i0.ɵɵdomElement(27, "i", 11);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(28, "div", 6);
            i0.ɵɵtext(29);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(30, "div", 7);
            i0.ɵɵtext(31, "UNDER EVALUATION");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(32, "div", 8);
            i0.ɵɵtext(33, "Active inspections");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(34, "div", 9)(35, "div", 4);
            i0.ɵɵdomElement(36, "i", 12);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(37, "div", 6);
            i0.ɵɵtext(38);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(39, "div", 7);
            i0.ɵɵtext(40, "REC. PENDING");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(41, "div", 8);
            i0.ɵɵtext(42, "Review required");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(43, "div", 13)(44, "div", 4);
            i0.ɵɵdomElement(45, "i", 14);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(46, "div", 6);
            i0.ɵɵtext(47);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(48, "div", 7);
            i0.ɵɵtext(49, "SENDBACK BY SCDE");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(50, "div", 8);
            i0.ɵɵtext(51, "Requires revision");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(52, "div", 15)(53, "div", 16)(54, "div", 17)(55, "h3");
            i0.ɵɵdomElement(56, "i", 18);
            i0.ɵɵtext(57, " Institution Type Distribution");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(58, "div", 19)(59, "div", 20)(60, "div", 21);
            i0.ɵɵdomElement(61, "div", 22);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(62, "div", 23)(63, "div", 24);
            i0.ɵɵdomElement(64, "span", 25);
            i0.ɵɵdomElementStart(65, "span", 26);
            i0.ɵɵtext(66);
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(67, "div", 27);
            i0.ɵɵtext(68);
            i0.ɵɵdomElementEnd()()()();
            i0.ɵɵdomElementStart(69, "div", 28)(70, "div", 17)(71, "h3");
            i0.ɵɵdomElement(72, "i", 29);
            i0.ɵɵtext(73, " Upcoming Inspections");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElement(74, "div", 30);
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dashboardData.subCountyName);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.inspectionsDone);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.schedulePending);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.underEvaluation);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.recPending);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.dashboardData.stats.sendBack);
            i0.ɵɵadvance(19);
            i0.ɵɵtextInterpolate1("Primary School (", ctx.dashboardData.institutionTypes.primary.count, ")");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.institutionTypes.primary.percentage, "%");
        } }, dependencies: [CommonModule, FormsModule], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 80%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n.top-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.header-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\r\n.back-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text[_ngcontent-%COMP%] { font-size: 1.1rem; font-weight: 500; color: #333; }\r\n\r\n.header-right[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 1rem; }\r\n\r\n\r\n.header-select[_ngcontent-%COMP%] {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.header-select-icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n.user-profile[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; }\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\r\n.user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] { font-size: 0.8rem; color: #888; }\r\n.logout-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n\r\n\r\n.content-body[_ngcontent-%COMP%] {\r\n  padding: 2rem;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 2rem; font-weight: 800; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n\r\n.stats-grid-5[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 1.2rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%] {\r\n  border-radius: 8px;\r\n  padding: 1.5rem 1.2rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute; top: -50%; right: -20%;\r\n  width: 100px; height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n\r\n.card-blue[_ngcontent-%COMP%] { background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%); }\r\n.card-orange[_ngcontent-%COMP%] { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }\r\n.card-red[_ngcontent-%COMP%] { background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); }\r\n\r\n.stat-icon[_ngcontent-%COMP%] { position: absolute; top: 1.2rem; right: 1.2rem; font-size: 1.8rem; opacity: 0.6; }\r\n.stat-number[_ngcontent-%COMP%] { font-size: 2.2rem; font-weight: 700; margin-bottom: 0.8rem; }\r\n.stat-label[_ngcontent-%COMP%] { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.2rem; letter-spacing: 0.5px; }\r\n.stat-subtext[_ngcontent-%COMP%] { font-size: 0.85rem; opacity: 0.9; }\r\n\r\n\r\n.lower-grid[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] { background: #00b4d8; color: white; padding: 1.2rem 1.5rem; }\r\n.card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] { margin: 0; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; }\r\n.card-body[_ngcontent-%COMP%] { padding: 2rem 1.5rem; flex: 1; min-height: 300px; }\r\n\r\n\r\n.chart-body[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.chart-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.donut-chart[_ngcontent-%COMP%] {\r\n  width: 220px;\r\n  height: 220px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\r\n}\r\n\r\n.donut-inner[_ngcontent-%COMP%] {\r\n  width: 140px;\r\n  height: 140px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chart-legend-horizontal[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2rem;\r\n}\r\n\r\n.legend-item[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\r\n.dot[_ngcontent-%COMP%] { width: 14px; height: 14px; border-radius: 2px; display: inline-block; }\r\n.dot.blue[_ngcontent-%COMP%] { background-color: #00b4d8; }\r\n.legend-text[_ngcontent-%COMP%] { font-size: 0.95rem; color: #333; }\r\n.legend-percentage[_ngcontent-%COMP%] { font-size: 0.95rem; font-weight: 700; color: #333; }\r\n\r\n\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubCountyQualityAssurance, [{
        type: Component,
        args: [{ selector: 'app-sub-county-quality-assurance', standalone: true, imports: [CommonModule, FormsModule], template: " <div class=\"content-body\">\n\n      <div class=\"page-title\">\n        <h1>{{ dashboardData.subCountyName}}</h1>\n        <p>Educational Oversight & Quality Assurance Management Dashboard</p>\n      </div>\n\n      <!-- 5 Stat Cards (Mixed Colors) -->\n      <div class=\"stats-grid-5\">\n        <!-- Blue Card -->\n        <div class=\"stat-card card-blue\">\n          <div class=\"stat-icon\"><i class=\"bi bi-clipboard-check-fill\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.inspectionsDone }}</div>\n          <div class=\"stat-label\">INSPECTIONS DONE</div>\n          <div class=\"stat-subtext\">Completed cycle</div>\n        </div>\n\n        <!-- Orange Card -->\n        <div class=\"stat-card card-orange\">\n          <div class=\"stat-icon\"><i class=\"bi bi-calendar-event-fill\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.schedulePending }}</div>\n          <div class=\"stat-label\">SCHEDULE PENDING</div>\n          <div class=\"stat-subtext\">Awaiting timeline</div>\n        </div>\n\n        <!-- Blue Card -->\n        <div class=\"stat-card card-blue\">\n          <div class=\"stat-icon\"><i class=\"bi bi-hourglass-split\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.underEvaluation }}</div>\n          <div class=\"stat-label\">UNDER EVALUATION</div>\n          <div class=\"stat-subtext\">Active inspections</div>\n        </div>\n\n        <!-- Orange Card -->\n        <div class=\"stat-card card-orange\">\n          <div class=\"stat-icon\"><i class=\"bi bi-pencil-square\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.recPending }}</div>\n          <div class=\"stat-label\">REC. PENDING</div>\n          <div class=\"stat-subtext\">Review required</div>\n        </div>\n\n        <!-- Red Card -->\n        <div class=\"stat-card card-red\">\n          <div class=\"stat-icon\"><i class=\"bi bi-reply-fill\"></i></div>\n          <div class=\"stat-number\">{{ dashboardData.stats.sendBack }}</div>\n          <div class=\"stat-label\">SENDBACK BY SCDE</div>\n          <div class=\"stat-subtext\">Requires revision</div>\n        </div>\n      </div>\n\n      <!-- Lower Grid: Type Distribution & Upcoming -->\n      <div class=\"lower-grid\">\n\n        <!-- Institution Type Distribution -->\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <h3><i class=\"bi bi-pie-chart-fill me-2\"></i> Institution Type Distribution</h3>\n          </div>\n          <div class=\"card-body chart-body\">\n\n            <div class=\"chart-container\">\n              <!-- 100% Blue Donut Chart -->\n              <div class=\"donut-chart\" style=\"background: conic-gradient(#00b4d8 0% 100%);\">\n                <!-- Empty inner to make it a donut -->\n                <div class=\"donut-inner\"></div>\n              </div>\n            </div>\n\n            <div class=\"chart-legend-horizontal\">\n              <div class=\"legend-item\">\n                <span class=\"dot blue\"></span>\n                <span class=\"legend-text\">Primary School ({{ dashboardData.institutionTypes.primary.count }})</span>\n              </div>\n              <div class=\"legend-percentage\">{{ dashboardData.institutionTypes.primary.percentage }}%</div>\n            </div>\n\n          </div>\n        </div>\n\n        <!-- Upcoming Inspections -->\n        <div class=\"card empty-card\">\n          <div class=\"card-header\">\n            <h3><i class=\"bi bi-calendar-check-fill me-2\"></i> Upcoming Inspections</h3>\n          </div>\n          <div class=\"card-body\">\n             <!-- Empty for now, will hold table/list later -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n", styles: ["/* BASE LAYOUT & SIDEBAR */\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding-top: 1rem;\r\n  z-index: 10;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 80%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n/* MAIN CONTENT & HEADER */\r\n.main-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\n.top-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n}\r\n\r\n.header-left { display: flex; align-items: center; gap: 10px; }\r\n.back-btn { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text { font-size: 1.1rem; font-weight: 500; color: #333; }\r\n\r\n.header-right { display: flex; align-items: center; gap: 1rem; }\r\n\r\n/* Header Dropdowns */\r\n.header-select {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n.header-select-icon {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n/* User Profile */\r\n.user-profile { display: flex; align-items: center; gap: 12px; }\r\n.avatar {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info { display: flex; flex-direction: column; }\r\n.user-info .name { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info .role { font-size: 0.8rem; color: #888; }\r\n.logout-btn { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n/* PAGE BODY */\r\n\r\n.content-body {\r\n  padding: 2rem;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n\r\n.page-title h1 { font-size: 2rem; font-weight: 800; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title p { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n/* 5 STAT CARDS */\r\n.stats-grid-5 {\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 1.2rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.stat-card {\r\n  border-radius: 8px;\r\n  padding: 1.5rem 1.2rem;\r\n  color: white;\r\n  position: relative;\r\n  overflow: hidden;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.stat-card::before {\r\n  content: '';\r\n  position: absolute; top: -50%; right: -20%;\r\n  width: 100px; height: 200%;\r\n  background: rgba(255, 255, 255, 0.1);\r\n  transform: rotate(30deg);\r\n}\r\n\r\n/* Card Colors based on screenshot */\r\n.card-blue { background: linear-gradient(135deg, #00b4d8 0%, #0096c7 100%); }\r\n.card-orange { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }\r\n.card-red { background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%); }\r\n\r\n.stat-icon { position: absolute; top: 1.2rem; right: 1.2rem; font-size: 1.8rem; opacity: 0.6; }\r\n.stat-number { font-size: 2.2rem; font-weight: 700; margin-bottom: 0.8rem; }\r\n.stat-label { font-size: 0.9rem; font-weight: 700; margin-bottom: 0.2rem; letter-spacing: 0.5px; }\r\n.stat-subtext { font-size: 0.85rem; opacity: 0.9; }\r\n\r\n/* LOWER GRID & CARDS */\r\n.lower-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1.5rem;\r\n}\r\n\r\n.card {\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\r\n  overflow: hidden;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-header { background: #00b4d8; color: white; padding: 1.2rem 1.5rem; }\r\n.card-header h3 { margin: 0; font-size: 1.1rem; font-weight: 600; display: flex; align-items: center; }\r\n.card-body { padding: 2rem 1.5rem; flex: 1; min-height: 300px; }\r\n\r\n/* DONUT CHART */\r\n.chart-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 2rem;\r\n}\r\n\r\n.chart-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.donut-chart {\r\n  width: 220px;\r\n  height: 220px;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.1);\r\n}\r\n\r\n.donut-inner {\r\n  width: 140px;\r\n  height: 140px;\r\n  background-color: white;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chart-legend-horizontal {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 2rem;\r\n}\r\n\r\n.legend-item { display: flex; align-items: center; gap: 10px; }\r\n.dot { width: 14px; height: 14px; border-radius: 2px; display: inline-block; }\r\n.dot.blue { background-color: #00b4d8; }\r\n.legend-text { font-size: 0.95rem; color: #333; }\r\n.legend-percentage { font-size: 0.95rem; font-weight: 700; color: #333; }\r\n\r\n/* RESPONSIVE */\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5 { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid { grid-template-columns: 1fr; }\r\n  .stats-grid-5 { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubCountyQualityAssurance, { className: "SubCountyQualityAssurance", filePath: "app/pages/sub-county-quality-assurance/sub-county-quality-assurance.ts", lineNumber: 16 }); })();
