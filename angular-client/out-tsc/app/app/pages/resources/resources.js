import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class Resources {
    static { this.ɵfac = function Resources_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Resources)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Resources, selectors: [["app-resources"]], decls: 2, vars: 0, template: function Resources_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "resources works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Resources, [{
        type: Component,
        args: [{ selector: 'app-resources', imports: [], template: "<p>resources works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Resources, { className: "Resources", filePath: "app/pages/resources/resources.ts", lineNumber: 9 }); })();
