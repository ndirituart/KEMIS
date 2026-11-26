import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Support {
    static { this.ɵfac = function Support_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Support)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Support, selectors: [["app-support"]], decls: 2, vars: 0, template: function Support_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "support works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Support, [{
        type: Component,
        args: [{ selector: 'app-support', imports: [], template: "<p>support works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Support, { className: "Support", filePath: "app/pages/support/support.ts", lineNumber: 9 }); })();
