import { Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class NotificationService {
    constructor() {
        this.state = signal({ type: 'idle', message: '' }, ...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    }
    showLoading(message = 'Processing request...') {
        this.state.set({ type: 'loading', message });
    }
    showSuccess(message, autoDismissMs = 3000) {
        this.state.set({ type: 'success', message });
        this.autoDismiss(autoDismissMs);
    }
    showError(message, autoDismissMs = 4000) {
        this.state.set({ type: 'error', message });
        this.autoDismiss(autoDismissMs);
    }
    clear() {
        this.state.set({ type: 'idle', message: '' });
    }
    autoDismiss(delay) {
        setTimeout(() => this.clear(), delay);
    }
    static { this.ɵfac = function NotificationService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NotificationService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
