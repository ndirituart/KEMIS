import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Aboutus {
    static { this.ɵfac = function Aboutus_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Aboutus)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Aboutus, selectors: [["app-aboutus"]], decls: 2, vars: 0, template: function Aboutus_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "aboutus works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Aboutus, [{
        type: Component,
        args: [{ selector: 'app-aboutus', imports: [], template: "<p>aboutus works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Aboutus, { className: "Aboutus", filePath: "app/pages/aboutus/aboutus.ts", lineNumber: 9 }); })();
