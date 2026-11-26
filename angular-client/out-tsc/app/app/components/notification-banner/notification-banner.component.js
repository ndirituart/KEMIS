import { Component, inject } from '@angular/core';
import { NotificationService } from '../../services/notifications.service';
import * as i0 from "@angular/core";
function NotificationBannerComponent_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "div", 0);
    i0.ɵɵdomElement(1, "i", 3);
    i0.ɵɵdomElementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.notification.state().message);
} }
function NotificationBannerComponent_Case_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 1);
    i0.ɵɵdomElement(1, "i", 4);
    i0.ɵɵdomElementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "button", 5);
    i0.ɵɵdomListener("click", function NotificationBannerComponent_Case_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.notification.clear()); });
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.notification.state().message);
} }
function NotificationBannerComponent_Case_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "div", 2);
    i0.ɵɵdomElement(1, "i", 6);
    i0.ɵɵdomElementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(4, "button", 5);
    i0.ɵɵdomListener("click", function NotificationBannerComponent_Case_2_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.notification.clear()); });
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.notification.state().message);
} }
export class NotificationBannerComponent {
    constructor() {
        this.notification = inject(NotificationService);
    }
    static { this.ɵfac = function NotificationBannerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotificationBannerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotificationBannerComponent, selectors: [["app-notification-banner"]], decls: 3, vars: 1, consts: [[1, "banner", "blue"], [1, "banner", "green"], [1, "banner", "red"], [1, "bi", "bi-arrow-repeat", "spin"], [1, "bi", "bi-check-circle-fill"], [1, "close-btn", 3, "click"], [1, "bi", "bi-exclamation-triangle-fill"]], template: function NotificationBannerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, NotificationBannerComponent_Case_0_Template, 4, 1, "div", 0)(1, NotificationBannerComponent_Case_1_Template, 6, 1, "div", 1)(2, NotificationBannerComponent_Case_2_Template, 6, 1, "div", 2);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional((tmp_0_0 = ctx.notification.state().type) === "loading" ? 0 : tmp_0_0 === "success" ? 1 : tmp_0_0 === "error" ? 2 : -1);
        } }, styles: [".banner[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      z-index: 9999;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 14px 20px;\n      border-radius: 8px;\n     --kemis-primary-light: #e6f7ff;\n      font-weight: 500;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n      animation: _ngcontent-%COMP%_slideIn 0.3s ease;\n    }\n    .blue[_ngcontent-%COMP%] { background-color: #0288d1; }  \n    .green[_ngcontent-%COMP%] { background---kemis-dark-blue: #1e3a8a;  } \n    .red[_ngcontent-%COMP%] { background-color: #d32f2f; }   \n\n    .close-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      color: white;\n      font-size: 1.2rem;\n      cursor: pointer;\n      margin-left: 10px;\n    }\n    .spin[_ngcontent-%COMP%] { animation: _ngcontent-%COMP%_spin 1s linear infinite; }\n    @keyframes _ngcontent-%COMP%_spin { 100% { transform: rotate(360deg); } }\n    @keyframes _ngcontent-%COMP%_slideIn { from { transform: translateY(-20px); opacity: 0; } }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationBannerComponent, [{
        type: Component,
        args: [{ selector: 'app-notification-banner', standalone: true, template: `
    @switch (notification.state().type) {
      @case ('loading') {
        <div class="banner blue">
          <i class="bi bi-arrow-repeat spin"></i>
          <span>{{ notification.state().message }}</span>
        </div>
      }
      @case ('success') {
        <div class="banner green">
          <i class="bi bi-check-circle-fill"></i>
          <span>{{ notification.state().message }}</span>
          <button class="close-btn" (click)="notification.clear()">×</button>
        </div>
      }
      @case ('error') {
        <div class="banner red">
          <i class="bi bi-exclamation-triangle-fill"></i>
          <span>{{ notification.state().message }}</span>
          <button class="close-btn" (click)="notification.clear()">×</button>
        </div>
      }
    }
  `, styles: ["\n    .banner {\n      position: fixed;\n      top: 20px;\n      right: 20px;\n      z-index: 9999;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      padding: 14px 20px;\n      border-radius: 8px;\n     --kemis-primary-light: #e6f7ff;\n      font-weight: 500;\n      box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n      animation: slideIn 0.3s ease;\n    }\n    .blue { background-color: #0288d1; }  /* Loading is Blue */\n    .green { background---kemis-dark-blue: #1e3a8a; /*Darker version of blue*/ } /* Success is Green */\n    .red { background-color: #d32f2f; }   /* Error is Red */\n\n    .close-btn {\n      background: none;\n      border: none;\n      color: white;\n      font-size: 1.2rem;\n      cursor: pointer;\n      margin-left: 10px;\n    }\n    .spin { animation: spin 1s linear infinite; }\n    @keyframes spin { 100% { transform: rotate(360deg); } }\n    @keyframes slideIn { from { transform: translateY(-20px); opacity: 0; } }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotificationBannerComponent, { className: "NotificationBannerComponent", filePath: "app/components/notification-banner/notification-banner.component.ts", lineNumber: 64 }); })();
