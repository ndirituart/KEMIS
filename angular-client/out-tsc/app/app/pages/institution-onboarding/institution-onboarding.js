import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function InstitutionOnboardingComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 10)(1, "input", 11);
    i0.ɵɵtwoWayListener("ngModelChange", function InstitutionOnboardingComponent_label_8_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedType, $event) || (ctx_r1.selectedType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵelement(3, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14)(5, "h3", 15);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 16);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 17);
    i0.ɵɵelement(10, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", ctx_r1.selectedType === option_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", option_r3.value);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedType);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", option_r3.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(option_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r3.description);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("checked", ctx_r1.selectedType === option_r3.value);
} }
export class InstitutionOnboardingComponent {
    constructor(router) {
        this.router = router;
        this.selectedType = null;
        this.institutionTypes = [
            {
                value: 'basic-education',
                label: 'Basic Education',
                description: 'Primary and Secondary Schools',
                icon: 'bi-mortarboard-fill',
                route: '/basic-education'
            },
            {
                value: 'tvet',
                label: 'TVET',
                description: 'Technical and Vocational Education',
                icon: 'bi-scissors',
                route: '/tvet'
            },
            {
                value: 'higher-education',
                label: 'Higher Education',
                description: 'Universities and Colleges',
                icon: 'bi-bank',
                route: '/higher-education'
            }
        ];
    }
    proceed() {
        const selected = this.institutionTypes.find(t => t.value === this.selectedType);
        if (selected) {
            this.router.navigate([selected.route]);
        }
    }
    static { this.ɵfac = function InstitutionOnboardingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || InstitutionOnboardingComponent)(i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InstitutionOnboardingComponent, selectors: [["app-institution-onboarding"]], decls: 13, vars: 2, consts: [[1, "onboarding-container"], [1, "onboarding-header"], [1, "onboarding-title"], [1, "onboarding-subtitle"], [1, "onboarding-divider"], [1, "onboarding-options"], ["class", "onboarding-card", 3, "selected", 4, "ngFor", "ngForOf"], [1, "onboarding-actions"], [1, "onboarding-proceed-btn", 3, "click", "disabled"], [1, "bi", "bi-chevron-right"], [1, "onboarding-card"], ["type", "radio", "name", "institutionType", 1, "onboarding-radio-input", 3, "ngModelChange", "value", "ngModel"], [1, "onboarding-card-icon"], [1, "bi", 3, "ngClass"], [1, "onboarding-card-text"], [1, "onboarding-card-title"], [1, "onboarding-card-desc"], [1, "onboarding-card-radio"], [1, "radio-circle"]], template: function InstitutionOnboardingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "Institution Onboarding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 3);
            i0.ɵɵtext(5, " Select your institution type to begin the Onboarding process ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(6, "div", 4);
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtemplate(8, InstitutionOnboardingComponent_label_8_Template, 11, 9, "label", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 7)(10, "button", 8);
            i0.ɵɵlistener("click", function InstitutionOnboardingComponent_Template_button_click_10_listener() { return ctx.proceed(); });
            i0.ɵɵtext(11, " Proceed to Institution Onboarding ");
            i0.ɵɵelement(12, "i", 9);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngForOf", ctx.institutionTypes);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.selectedType);
        } }, dependencies: [CommonModule, i2.NgClass, i2.NgForOf, FormsModule, i3.DefaultValueAccessor, i3.RadioControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["\r\n.onboarding-container[_ngcontent-%COMP%] {\r\n  max-width: 720px;\r\n  margin: 2rem auto;\r\n  padding: 2rem 1.5rem;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: var(--border-radius, 8px);\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n  color: var(--kemis-black, #1a1a1a);\r\n}\r\n\r\n\r\n.onboarding-header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.onboarding-title[_ngcontent-%COMP%] {\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-black, #1a1a1a);\r\n  margin: 0 0 0.5rem 0;\r\n}\r\n\r\n.onboarding-subtitle[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  margin: 0;\r\n}\r\n\r\n.onboarding-divider[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  background-color: var(--kemis-border, #dee2e6);\r\n  margin: 1.5rem -1.5rem;\r\n}\r\n\r\n\r\n.onboarding-options[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.onboarding-card[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.25rem;\r\n  background: var(--kemis-white, #ffffff);\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  border-radius: var(--border-radius, 8px);\r\n  cursor: pointer;\r\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\r\n}\r\n\r\n.onboarding-card[_ngcontent-%COMP%]:hover {\r\n  border-color: var(--kemis-primary, #3fbeeb);\r\n  box-shadow: var(--kemis-shadow, 0 .125rem .25rem rgba(0,0,0,.075));\r\n}\r\n\r\n.onboarding-card.selected[_ngcontent-%COMP%] {\r\n  border-color: var(--kemis-primary, #3fbeeb);\r\n  background-color: var(--kemis-primary-light, #e6f7ff);\r\n  box-shadow: var(--kemis-shadow, 0 .125rem .25rem rgba(0,0,0,.075));\r\n}\r\n\r\n\r\n.onboarding-radio-input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n\r\n.onboarding-card-icon[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n  width: 48px;\r\n  height: 48px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--kemis-light, #f8f9fa);\r\n  border-radius: var(--border-radius, 8px);\r\n  font-size: 1.4rem;\r\n  color: var(--kemis-black, #1a1a1a);\r\n}\r\n\r\n\r\n.onboarding-card-text[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.onboarding-card-title[_ngcontent-%COMP%] {\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-black, #1a1a1a);\r\n  margin: 0 0 0.15rem 0;\r\n}\r\n\r\n.onboarding-card-desc[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  margin: 0;\r\n}\r\n\r\n\r\n.onboarding-card-radio[_ngcontent-%COMP%] {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.radio-circle[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 2px solid var(--kemis-border, #dee2e6);\r\n  border-radius: 50%;\r\n  transition: border-color 0.2s ease, background-color 0.2s ease;\r\n  position: relative;\r\n}\r\n\r\n.radio-circle.checked[_ngcontent-%COMP%] {\r\n  border-color: var(--kemis-primary, #3fbeeb);\r\n  background-color: var(--kemis-primary, #3fbeeb);\r\n}\r\n\r\n.radio-circle.checked[_ngcontent-%COMP%]::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n.onboarding-actions[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.onboarding-proceed-btn[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.6rem;\r\n  padding: 0.85rem 2rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: var(--kemis-white, #ffffff);\r\n  background-color: var(--kemis-light-blue, #3b82f6);\r\n  border: none;\r\n  border-radius: var(--border-radius, 8px);\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;\r\n  box-shadow: var(--kemis-shadow, 0 .125rem .25rem rgba(0,0,0,.075));\r\n}\r\n\r\n.onboarding-proceed-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\r\n  background-color: var(--kemis-dark-blue, #1e3a8a);\r\n  box-shadow: var(--kemis-shadow-lg, 0 .5rem 1rem rgba(0,0,0,.15));\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.onboarding-proceed-btn[_ngcontent-%COMP%]:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.onboarding-proceed-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n\r\n@media (max-width: 575.98px) {\r\n  .onboarding-container[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    padding: 1.5rem 1rem;\r\n  }\r\n\r\n  .onboarding-title[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .onboarding-card[_ngcontent-%COMP%] {\r\n    padding: 0.85rem 1rem;\r\n    gap: 0.75rem;\r\n  }\r\n\r\n  .onboarding-card-icon[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .onboarding-proceed-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 0.85rem 1rem;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InstitutionOnboardingComponent, [{
        type: Component,
        args: [{ selector: 'app-institution-onboarding', standalone: true, imports: [CommonModule, FormsModule], template: "<section class=\"onboarding-container\">\n  <!-- Header -->\n  <header class=\"onboarding-header\">\n    <h1 class=\"onboarding-title\">Institution Onboarding</h1>\n    <p class=\"onboarding-subtitle\">\n      Select your institution type to begin the Onboarding process\n    </p>\n  </header>\n\n  <div class=\"onboarding-divider\"></div>\n\n  <!-- Options -->\n  <div class=\"onboarding-options\">\n    <label\n      class=\"onboarding-card\"\n      *ngFor=\"let option of institutionTypes\"\n      [class.selected]=\"selectedType === option.value\"\n    >\n      <input\n        type=\"radio\"\n        name=\"institutionType\"\n        class=\"onboarding-radio-input\"\n        [value]=\"option.value\"\n        [(ngModel)]=\"selectedType\"\n      />\n\n      <div class=\"onboarding-card-icon\">\n        <i class=\"bi\" [ngClass]=\"option.icon\"></i>\n      </div>\n\n      <div class=\"onboarding-card-text\">\n        <h3 class=\"onboarding-card-title\">{{ option.label }}</h3>\n        <p class=\"onboarding-card-desc\">{{ option.description }}</p>\n      </div>\n\n      <div class=\"onboarding-card-radio\">\n        <span class=\"radio-circle\" [class.checked]=\"selectedType === option.value\"></span>\n      </div>\n    </label>\n  </div>\n\n  <!-- Proceed Button -->\n  <div class=\"onboarding-actions\">\n    <button\n      class=\"onboarding-proceed-btn\"\n      [disabled]=\"!selectedType\"\n      (click)=\"proceed()\"\n    >\n      Proceed to Institution Onboarding\n      <i class=\"bi bi-chevron-right\"></i>\n    </button>\n  </div>\n</section>\n", styles: ["/* ===== Container ===== */\r\n.onboarding-container {\r\n  max-width: 720px;\r\n  margin: 2rem auto;\r\n  padding: 2rem 1.5rem;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: var(--border-radius, 8px);\r\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n  color: var(--kemis-black, #1a1a1a);\r\n}\r\n\r\n/* ===== Header ===== */\r\n.onboarding-header {\r\n  text-align: center;\r\n}\r\n\r\n.onboarding-title {\r\n  font-size: 1.75rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-black, #1a1a1a);\r\n  margin: 0 0 0.5rem 0;\r\n}\r\n\r\n.onboarding-subtitle {\r\n  font-size: 1rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  margin: 0;\r\n}\r\n\r\n.onboarding-divider {\r\n  height: 1px;\r\n  background-color: var(--kemis-border, #dee2e6);\r\n  margin: 1.5rem -1.5rem;\r\n}\r\n\r\n/* ===== Options ===== */\r\n.onboarding-options {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.onboarding-card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n  padding: 1rem 1.25rem;\r\n  background: var(--kemis-white, #ffffff);\r\n  border: 1px solid var(--kemis-border, #dee2e6);\r\n  border-radius: var(--border-radius, 8px);\r\n  cursor: pointer;\r\n  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;\r\n}\r\n\r\n.onboarding-card:hover {\r\n  border-color: var(--kemis-primary, #3fbeeb);\r\n  box-shadow: var(--kemis-shadow, 0 .125rem .25rem rgba(0,0,0,.075));\r\n}\r\n\r\n.onboarding-card.selected {\r\n  border-color: var(--kemis-primary, #3fbeeb);\r\n  background-color: var(--kemis-primary-light, #e6f7ff);\r\n  box-shadow: var(--kemis-shadow, 0 .125rem .25rem rgba(0,0,0,.075));\r\n}\r\n\r\n/* Hide native radio */\r\n.onboarding-radio-input {\r\n  position: absolute;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Icon block */\r\n.onboarding-card-icon {\r\n  flex-shrink: 0;\r\n  width: 48px;\r\n  height: 48px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--kemis-light, #f8f9fa);\r\n  border-radius: var(--border-radius, 8px);\r\n  font-size: 1.4rem;\r\n  color: var(--kemis-black, #1a1a1a);\r\n}\r\n\r\n/* Text block */\r\n.onboarding-card-text {\r\n  flex: 1;\r\n  min-width: 0;\r\n}\r\n\r\n.onboarding-card-title {\r\n  font-size: 1.05rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-black, #1a1a1a);\r\n  margin: 0 0 0.15rem 0;\r\n}\r\n\r\n.onboarding-card-desc {\r\n  font-size: 0.9rem;\r\n  color: var(--kemis-secondary, #6c757d);\r\n  margin: 0;\r\n}\r\n\r\n/* Custom radio circle */\r\n.onboarding-card-radio {\r\n  flex-shrink: 0;\r\n}\r\n\r\n.radio-circle {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 2px solid var(--kemis-border, #dee2e6);\r\n  border-radius: 50%;\r\n  transition: border-color 0.2s ease, background-color 0.2s ease;\r\n  position: relative;\r\n}\r\n\r\n.radio-circle.checked {\r\n  border-color: var(--kemis-primary, #3fbeeb);\r\n  background-color: var(--kemis-primary, #3fbeeb);\r\n}\r\n\r\n.radio-circle.checked::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 8px;\r\n  height: 8px;\r\n  background: var(--kemis-white, #ffffff);\r\n  border-radius: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/* ===== Actions ===== */\r\n.onboarding-actions {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 2rem;\r\n}\r\n\r\n.onboarding-proceed-btn {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 0.6rem;\r\n  padding: 0.85rem 2rem;\r\n  font-size: 1rem;\r\n  font-weight: 600;\r\n  color: var(--kemis-white, #ffffff);\r\n  background-color: var(--kemis-light-blue, #3b82f6);\r\n  border: none;\r\n  border-radius: var(--border-radius, 8px);\r\n  cursor: pointer;\r\n  transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;\r\n  box-shadow: var(--kemis-shadow, 0 .125rem .25rem rgba(0,0,0,.075));\r\n}\r\n\r\n.onboarding-proceed-btn:hover:not(:disabled) {\r\n  background-color: var(--kemis-dark-blue, #1e3a8a);\r\n  box-shadow: var(--kemis-shadow-lg, 0 .5rem 1rem rgba(0,0,0,.15));\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.onboarding-proceed-btn:disabled {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.onboarding-proceed-btn i {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n/* ===== Responsive ===== */\r\n@media (max-width: 575.98px) {\r\n  .onboarding-container {\r\n    margin: 1rem;\r\n    padding: 1.5rem 1rem;\r\n  }\r\n\r\n  .onboarding-title {\r\n    font-size: 1.4rem;\r\n  }\r\n\r\n  .onboarding-card {\r\n    padding: 0.85rem 1rem;\r\n    gap: 0.75rem;\r\n  }\r\n\r\n  .onboarding-card-icon {\r\n    width: 40px;\r\n    height: 40px;\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .onboarding-proceed-btn {\r\n    width: 100%;\r\n    padding: 0.85rem 1rem;\r\n  }\r\n}\r\n"] }]
    }], () => [{ type: i1.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(InstitutionOnboardingComponent, { className: "InstitutionOnboardingComponent", filePath: "app/pages/institution-onboarding/institution-onboarding.ts", lineNumber: 21 }); })();
