import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Faqs {
    static { this.ɵfac = function Faqs_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Faqs)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Faqs, selectors: [["app-faqs"]], decls: 2, vars: 0, template: function Faqs_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "faqs works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Faqs, [{
        type: Component,
        args: [{ selector: 'app-faqs', imports: [], template: "<p>faqs works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Faqs, { className: "Faqs", filePath: "app/pages/faqs/faqs.ts", lineNumber: 9 }); })();
