import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class SuperAdmin {
    static { this.ɵfac = function SuperAdmin_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SuperAdmin)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SuperAdmin, selectors: [["app-super-admin"]], decls: 2, vars: 0, template: function SuperAdmin_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "p");
            i0.ɵɵtext(1, "super-admin works!");
            i0.ɵɵdomElementEnd();
        } }, encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SuperAdmin, [{
        type: Component,
        args: [{ selector: 'app-super-admin', imports: [], template: "<p>super-admin works!</p>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SuperAdmin, { className: "SuperAdmin", filePath: "app/pages/super-admin/super-admin.ts", lineNumber: 9 }); })();
