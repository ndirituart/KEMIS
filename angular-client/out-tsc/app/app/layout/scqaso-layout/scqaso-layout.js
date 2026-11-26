import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class ScqasoLayout {
    constructor() {
        this.http = inject(HttpClient);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        this.dashboardData = {
            subCountyName: '',
            userRole: 'SCQASO'
        };
        this.selectedLevel = 'Primary School';
        this.selectedSubCounty = '';
    }
    ngOnInit() {
        this.http.get('http://localhost:5215/api/sub-county-quality-assurance/profile').subscribe({
            next: (profile) => {
                this.dashboardData.subCountyName = profile.subCounty;
                this.cdr.markForCheck();
            },
            error: (err) => console.error(err)
        });
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    static { this.ɵfac = function ScqasoLayout_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScqasoLayout)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScqasoLayout, selectors: [["app-scqaso-layout"]], decls: 59, vars: 3, consts: [[1, "dashboard-wrapper"], [1, "sidebar"], [1, "sidebar-logo"], ["src", "../../../assets/kemis-logo-big.png", "alt", "Kemis Logo", 1, "logo-img"], [1, "sidebar-nav"], ["routerLink", "/scqaso/sub-county-quality-assurance", "routerLinkActive", "active", 1, "nav-item"], [1, "bi", "bi-grid-fill"], [1, "nav-item"], [1, "bi", "bi-search"], [1, "nav-parent", "has-children"], [1, "bi", "bi-clipboard-check"], [1, "nav-children"], ["routerLink", "inspected-schools", "routerLinkActive", "active"], [1, "bi", "bi-pencil-square"], ["routerLink", "pending-inspections", "routerLinkActive", "active"], [1, "nav-item", "text-danger", "mt-4"], [1, "bi", "bi-book"], [1, "main-content"], [1, "top-header"], [1, "header-right"], [1, "form-select", "header-select", 3, "value"], ["value", "Primary School"], ["value", "Junior School"], [1, "user-profile", "ms-3"], [1, "avatar"], [1, "bi", "bi-person-fill"], [1, "user-info"], [1, "name", 2, "text-transform", "uppercase"], [1, "role"], [1, "logout-btn", 3, "click"], [1, "bi", "bi-power"], [1, "page-content-wrapper"]], template: function ScqasoLayout_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nav", 4)(5, "a", 5);
            i0.ɵɵelement(6, "i", 6);
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Dashboard");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "a", 7);
            i0.ɵɵelement(10, "i", 8);
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Menu Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 9)(14, "a", 7);
            i0.ɵɵelement(15, "i", 10);
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "KEMIS Reports");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "ul", 11)(19, "li")(20, "a", 12);
            i0.ɵɵtext(21, "Inspected Schools");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(22, "div", 9)(23, "a", 7);
            i0.ɵɵelement(24, "i", 13);
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26, "Institution Registration");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "ul", 11)(28, "li")(29, "a", 14);
            i0.ɵɵtext(30, "Pending Inspections");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(31, "a", 15);
            i0.ɵɵelement(32, "i", 16);
            i0.ɵɵelementStart(33, "span");
            i0.ɵɵtext(34, "Escalations");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "a", 15);
            i0.ɵɵelement(36, "i", 16);
            i0.ɵɵelementStart(37, "span");
            i0.ɵɵtext(38, "User Manual");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(39, "main", 17)(40, "header", 18)(41, "div", 19)(42, "select", 20)(43, "option", 21);
            i0.ɵɵtext(44, "Primary School");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "option", 22);
            i0.ɵɵtext(46, "Junior School");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "div", 23)(48, "div", 24);
            i0.ɵɵelement(49, "i", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 26)(51, "span", 27);
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "span", 28);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "button", 29);
            i0.ɵɵlistener("click", function ScqasoLayout_Template_button_click_55_listener() { return ctx.logout(); });
            i0.ɵɵelement(56, "i", 30);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(57, "div", 31);
            i0.ɵɵelement(58, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(42);
            i0.ɵɵproperty("value", ctx.selectedLevel);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate1("", ctx.dashboardData.subCountyName, " SCQASO");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.dashboardData.userRole);
        } }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption], styles: ["\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] { background-color: #f0f8ff; }\r\n.nav-item.text-danger[_ngcontent-%COMP%] { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n\r\n.nav-children[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px;\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover   .nav-children[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children[_ngcontent-%COMP%]:hover    > .nav-item[_ngcontent-%COMP%] {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\ntop-header[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n  border-bottom: 1px solid var(--kemis-border, #dee2e6); \r\n}\r\n\r\n.header-left[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 10px; }\r\n.back-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text[_ngcontent-%COMP%] { font-size: 1.2rem; font-weight: 600; color: #333; }\r\n\r\n.header-right[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 1rem; }\r\n\r\n\r\n.header-select[_ngcontent-%COMP%] {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n\r\n.header-select-icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n\r\n.user-profile[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 12px; }\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info[_ngcontent-%COMP%] { display: flex; flex-direction: column; }\r\n.user-info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] { font-size: 0.8rem; color: #888; }\r\n.logout-btn[_ngcontent-%COMP%] { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n\r\n\r\n.content-body[_ngcontent-%COMP%] { padding: 1rem 2rem 2rem; max-width: 1500px; }\r\n.page-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n\r\n\r\n\r\n[_nghost-%COMP%] {\r\n  display: block;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.dashboard-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.sidebar[_ngcontent-%COMP%] {\r\n  width: 260px;\r\n  flex-shrink: 0; \r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 10;\r\n}\r\n\r\n.main-content[_ngcontent-%COMP%] {\r\n  flex-grow: 1; \r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  overflow: hidden; \r\n}\r\n\r\n.page-content-wrapper[_ngcontent-%COMP%] {\r\n  flex-grow: 1;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\r\n  .stats-grid-5[_ngcontent-%COMP%] { grid-template-columns: repeat(2, 1fr); }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScqasoLayout, [{
        type: Component,
        args: [{ selector: 'app-scqaso-layout', standalone: true, imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule], template: "<div class=\"dashboard-wrapper\">\r\n\r\n  <!-- ========================================== -->\r\n  <!-- SIDEBAR                                    -->\r\n  <!-- ========================================== -->\r\n  <aside class=\"sidebar\">\r\n    <div class=\"sidebar-logo\">\r\n      <img src=\"../../../assets/kemis-logo-big.png\" alt=\"Kemis Logo\" class=\"logo-img\">\r\n    </div>\r\n\r\n    <nav class=\"sidebar-nav\">\r\n      <a class=\"nav-item\" routerLink=\"/scqaso/sub-county-quality-assurance\" routerLinkActive=\"active\">\r\n        <i class=\"bi bi-grid-fill\"></i>\r\n        <span>Dashboard</span>\r\n      </a>\r\n\r\n      <a class=\"nav-item\">\r\n        <i class=\"bi bi-search\"></i>\r\n        <span>Menu Search</span>\r\n      </a>\r\n\r\n      <div class=\"nav-parent has-children\">\r\n        <a class=\"nav-item\">\r\n          <i class=\"bi bi-clipboard-check\"></i>\r\n          <span>KEMIS Reports</span>\r\n        </a>\r\n        <ul class=\"nav-children\">\r\n         <li><a routerLink=\"inspected-schools\" routerLinkActive=\"active\">Inspected Schools</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div class=\"nav-parent has-children\">\r\n        <a class=\"nav-item\">\r\n          <i class=\"bi bi-pencil-square\"></i>\r\n          <span>Institution Registration</span>\r\n        </a>\r\n        <ul class=\"nav-children\">\r\n          <li><a routerLink=\"pending-inspections\" routerLinkActive=\"active\">Pending Inspections</a></li>\r\n        </ul>\r\n      </div>\r\n\r\n      <a class=\"nav-item text-danger mt-4\">\r\n        <i class=\"bi bi-book\"></i>\r\n        <span>Escalations</span>\r\n      </a>\r\n\r\n      <a class=\"nav-item text-danger mt-4\">\r\n        <i class=\"bi bi-book\"></i>\r\n        <span>User Manual</span>\r\n      </a>\r\n    </nav>\r\n  </aside>\r\n\r\n  <!-- ========================================== -->\r\n  <!-- MAIN CONTENT AREA                          -->\r\n  <!-- ========================================== -->\r\n  <main class=\"main-content\">\r\n\r\n    <!-- Top Header -->\r\n    <header class=\"top-header\">\r\n      <div class=\"header-right\">\r\n        <select class=\"form-select header-select\" [value]=\"selectedLevel\">\r\n          <option value=\"Primary School\">Primary School</option>\r\n          <option value=\"Junior School\">Junior School</option>\r\n        </select>\r\n\r\n        <div class=\"user-profile ms-3\">\r\n          <div class=\"avatar\">\r\n            <i class=\"bi bi-person-fill\"></i>\r\n          </div>\r\n          <div class=\"user-info\">\r\n            <span class=\"name\" style=\"text-transform: uppercase\">{{ dashboardData.subCountyName }} SCQASO</span>\r\n            <span class=\"role\">{{ dashboardData.userRole }}</span>\r\n          </div>\r\n        </div>\r\n        <button class=\"logout-btn\" (click)=\"logout()\">\r\n          <i class=\"bi bi-power\"></i>\r\n        </button>\r\n      </div>\r\n    </header>\r\n\r\n    <!-- PAGE CONTENT (This is where the dashboard loads) -->\r\n    <div class=\"page-content-wrapper\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </main>\r\n</div>\r\n", styles: ["/*Sidebar*/\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  background-color: #f4f7f9;\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Arial, sans-serif;\r\n  overflow: hidden;\r\n}\r\n\r\n.sidebar-logo img {\r\n  height: 60px;\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.sidebar-nav {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 0.5rem;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  padding: 0.8rem;\r\n  width: 85%;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background 0.2s;\r\n}\r\n\r\n.nav-item i { font-size: 1.5rem; margin-bottom: 4px; }\r\n.nav-item span { font-size: 0.8rem; font-weight: 600; text-align: center; }\r\n.nav-item:hover, .nav-item.active { background-color: #f0f8ff; }\r\n.nav-item.text-danger { color: var(--kemis-red, #dc143c) !important; }\r\n\r\n.nav-parent {\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/* The Dropdown Menu (Hidden by default IMPORTANT!) */\r\n.nav-children {\r\n  position: absolute;\r\n  left: 100%;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  min-width: 250px;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-radius: 0 8px 8px 0;\r\n  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);\r\n  border: 1px solid #e0e0e0;\r\n  border-left: none;\r\n\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  transform: translateX(-10px);\r\n  transition: all 0.2s ease-in-out;\r\n  z-index: 1000;\r\n}\r\n\r\n.nav-children li a {\r\n  display: block;\r\n  padding: 12px 20px;\r\n  color: #00b4d8;\r\n  text-decoration: none;\r\n  font-size: 0.85rem;\r\n  font-weight: 500;\r\n  border-bottom: 1px solid #f0f0f0;\r\n  transition: background 0.2s, color 0.2s;\r\n  text-align: left;\r\n}\r\n\r\n.nav-children li:last-child a {\r\n  border-bottom: none;\r\n}\r\n\r\n.nav-children li a:hover {\r\n  background-color: #f4f7f9;\r\n  color: var(--kemis-blue, #1e40af);\r\n  padding-left: 25px;\r\n}\r\n\r\n.nav-parent.has-children:hover .nav-children {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transform: translateX(0);\r\n}\r\n\r\n.nav-parent.has-children:hover > .nav-item {\r\n  background-color: #f0f8ff;\r\n}\r\n\r\n/* MAIN CONTENT & HEADER\r\n   ============================================ */\r\n.main-content {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow-y: auto;\r\n}\r\n\r\ntop-header {\r\n  height: 80px;\r\n  flex-shrink: 0;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  background: var(--kemis-white, #ffffff);\r\n  padding: 1rem 2rem;\r\n  height: 80px;\r\n  border-bottom: 1px solid var(--kemis-border, #dee2e6); /* Optional: adds a nice line */\r\n}\r\n\r\n.header-left { display: flex; align-items: center; gap: 10px; }\r\n.back-btn { background: none; border: none; font-size: 1.5rem; color: var(--kemis-red, #dc143c); cursor: pointer; }\r\n.header-text { font-size: 1.2rem; font-weight: 600; color: #333; }\r\n\r\n.header-right { display: flex; align-items: center; gap: 1rem; }\r\n\r\n/* Header Dropdowns */\r\n.header-select {\r\n  width: 160px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n  background-color: #fff;\r\n}\r\n\r\n.header-select-icon {\r\n  width: 50px;\r\n  border-radius: 6px;\r\n  border: 1px solid #ccc;\r\n  padding: 0.4rem;\r\n  font-size: 0.9rem;\r\n  color: #333;\r\n}\r\n\r\n/* User Profile */\r\n.user-profile { display: flex; align-items: center; gap: 12px; }\r\n.avatar {\r\n  width: 45px; height: 45px; background-color: #e6f7ff;\r\n  color: var(--kemis-dark-blue, #1e3a8a); border-radius: 50%;\r\n  display: flex; align-items: center; justify-content: center; font-size: 1.5rem;\r\n}\r\n.user-info { display: flex; flex-direction: column; }\r\n.user-info .name { font-weight: 700; color: #00b4d8; font-size: 0.95rem; }\r\n.user-info .role { font-size: 0.8rem; color: #888; }\r\n.logout-btn { background: none; border: none; font-size: 1.2rem; color: #333; cursor: pointer; margin-left: 10px; }\r\n\r\n/* PAGE BODY\r\n   ============================================ */\r\n.content-body { padding: 1rem 2rem 2rem; max-width: 1500px; }\r\n.page-title h1 { font-size: 1.8rem; font-weight: 700; margin: 0 0 0.2rem 0; color: #1a1a1a; }\r\n.page-title p { color: #555; margin: 0 0 1.5rem 0; font-size: 1rem; }\r\n\r\n\r\n/*Universality*/\r\n\r\n:host {\r\n  display: block;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.dashboard-wrapper {\r\n  display: flex;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n\r\n.sidebar {\r\n  width: 260px;\r\n  flex-shrink: 0; \r\n  background: var(--kemis-white, #ffffff);\r\n  border-right: 1px solid #e0e0e0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  z-index: 10;\r\n}\r\n\r\n.main-content {\r\n  flex-grow: 1; \r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  overflow: hidden; \r\n}\r\n\r\n.page-content-wrapper {\r\n  flex-grow: 1;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n}\r\n\r\n/* RESPONSIVE\r\n   ============================================ */\r\n@media (max-width: 1400px) {\r\n  .stats-grid-5 { grid-template-columns: repeat(3, 1fr); }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .lower-grid { grid-template-columns: 1fr; }\r\n  .stats-grid-5 { grid-template-columns: repeat(2, 1fr); }\r\n}\r\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScqasoLayout, { className: "ScqasoLayout", filePath: "app/layout/scqaso-layout/scqaso-layout.ts", lineNumber: 14 }); })();
