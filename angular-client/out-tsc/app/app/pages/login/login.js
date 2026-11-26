import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../services/notifications.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function Login_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "button", 15);
    i0.ɵɵlistener("click", function Login_div_16_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.switchTab("login")); });
    i0.ɵɵtext(2, " Login ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function Login_div_16_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.switchTab("register")); });
    i0.ɵɵtext(4, " Register ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r1.activeTab === "login");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.activeTab === "register");
} }
function Login_form_17_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, "Login");
    i0.ɵɵelementEnd();
} }
function Login_form_17_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementEnd();
} }
function Login_form_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 16);
    i0.ɵɵlistener("ngSubmit", function Login_form_17_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onLogin()); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Welcome Back!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17)(4, "label", 18);
    i0.ɵɵtext(5, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_17_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.loginModel.emailId, $event) || (ctx_r1.loginModel.emailId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 20)(8, "label", 21);
    i0.ɵɵtext(9, "Password:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 22)(11, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_17_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.loginModel.password, $event) || (ctx_r1.loginModel.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 24);
    i0.ɵɵlistener("click", function Login_form_17_Template_span_click_12_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleLoginPasswordVisibility()); });
    i0.ɵɵelement(13, "i", 25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "div", 26)(15, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_17_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.loginModel.rememberMe, $event) || (ctx_r1.loginModel.rememberMe = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "label", 28);
    i0.ɵɵtext(17, "Remember me");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 29);
    i0.ɵɵtemplate(19, Login_form_17_span_19_Template, 2, 0, "span", 30)(20, Login_form_17_span_20_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "a", 32);
    i0.ɵɵtext(22, "Forgot Password?");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.loginModel.emailId);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("type", ctx_r1.showLoginPasswordText ? "text" : "password");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.loginModel.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.showLoginPasswordText ? "fa-eye-slash" : "fa-eye");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.loginModel.rememberMe);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.isLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading);
} }
function Login_form_18_span_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, "Register");
    i0.ɵɵelementEnd();
} }
function Login_form_18_span_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementEnd();
} }
function Login_form_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 16);
    i0.ɵɵlistener("ngSubmit", function Login_form_18_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onRegister()); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Create Account");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 17)(4, "label", 36);
    i0.ɵɵtext(5, "Full Name:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.fullName, $event) || (ctx_r1.registerModel.fullName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 17)(8, "label", 38);
    i0.ɵɵtext(9, "Email:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.emailId, $event) || (ctx_r1.registerModel.emailId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 17)(12, "label", 40);
    i0.ɵɵtext(13, "Mobile Number:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.mobileNo, $event) || (ctx_r1.registerModel.mobileNo = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 17)(16, "label", 42);
    i0.ɵɵtext(17, "Role:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 43);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.role, $event) || (ctx_r1.registerModel.role = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(19, "option", 44);
    i0.ɵɵtext(20, "Select a role");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "option", 45);
    i0.ɵɵtext(22, "Admin");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "option", 46);
    i0.ɵɵtext(24, "Head of Institution (HOI)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 47);
    i0.ɵɵtext(26, "County Director of Education (CDE)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 48);
    i0.ɵɵtext(28, "Sub-County Director of Education (SCDE)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 49);
    i0.ɵɵtext(30, "County Quality Assurance and Standards Officer (CQASO)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 50);
    i0.ɵɵtext(32, "Sub-County Quality Assurance and Standards Officer (SCQASO)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 51);
    i0.ɵɵtext(34, "IT Officer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 52);
    i0.ɵɵtext(36, "Deputy Principal");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 53);
    i0.ɵɵtext(38, "Teacher/Facilitator");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 17)(40, "label", 54);
    i0.ɵɵtext(41, "National ID:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "input", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.nationalId, $event) || (ctx_r1.registerModel.nationalId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div", 17)(44, "label", 56);
    i0.ɵɵtext(45, "County of Work:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "input", 57);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.county, $event) || (ctx_r1.registerModel.county = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 17)(48, "label", 58);
    i0.ɵɵtext(49, "Sub-County of Work:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.subCounty, $event) || (ctx_r1.registerModel.subCounty = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 17)(52, "label", 60);
    i0.ɵɵtext(53, "Constituency of Work:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_54_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.constituency, $event) || (ctx_r1.registerModel.constituency = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div", 20)(56, "label", 62);
    i0.ɵɵtext(57, "Password:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "div", 22)(59, "input", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.password, $event) || (ctx_r1.registerModel.password = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function Login_form_18_Template_input_input_59_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePasswordStrength()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "span", 64);
    i0.ɵɵlistener("click", function Login_form_18_Template_span_click_60_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleRegisterPasswordVisibility()); });
    i0.ɵɵelement(61, "i", 25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "p", 65);
    i0.ɵɵtext(63);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div", 20)(65, "label", 66);
    i0.ɵɵtext(66, "Confirm Password:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "div", 22)(68, "input", 67);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_18_Template_input_ngModelChange_68_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.registerModel.confirmPassword, $event) || (ctx_r1.registerModel.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "span", 68);
    i0.ɵɵlistener("click", function Login_form_18_Template_span_click_69_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleRegisterConfirmPasswordVisibility()); });
    i0.ɵɵelement(70, "i", 25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(71, "button", 29);
    i0.ɵɵtemplate(72, Login_form_18_span_72_Template, 2, 0, "span", 30)(73, Login_form_18_span_73_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.fullName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.emailId);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.mobileNo);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.role);
    i0.ɵɵadvance(24);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.nationalId);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.county);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.subCounty);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.constituency);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("type", ctx_r1.showRegisterPasswordText ? "text" : "password");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.password);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.showRegisterPasswordText ? "fa-eye-slash" : "fa-eye");
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("color", ctx_r1.passwordStrengthColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.passwordStrengthText);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("type", ctx_r1.showRegisterConfirmPasswordText ? "text" : "password");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.registerModel.confirmPassword);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r1.showRegisterConfirmPasswordText ? "fa-eye-slash" : "fa-eye");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading);
} }
function Login_form_19_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 33);
    i0.ɵɵtext(1, "Verify Code");
    i0.ɵɵelementEnd();
} }
function Login_form_19_span_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 34);
    i0.ɵɵelement(1, "i", 35);
    i0.ɵɵelementEnd();
} }
function Login_form_19_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 16);
    i0.ɵɵlistener("ngSubmit", function Login_form_19_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onVerify2FA()); });
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Two-Factor Authentication");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 69);
    i0.ɵɵtext(4, "A verification code has been sent to your registered device/emailId.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 17)(6, "label", 70);
    i0.ɵɵtext(7, "Verification Code:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function Login_form_19_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.twoFaModel.code, $event) || (ctx_r1.twoFaModel.code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 29);
    i0.ɵɵtemplate(10, Login_form_19_span_10_Template, 2, 0, "span", 30)(11, Login_form_19_span_11_Template, 2, 0, "span", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 72);
    i0.ɵɵtext(13, "Resend Code");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.twoFaModel.code);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading);
} }
export class Login {
    constructor() {
        // Password Visibility State
        this.showLoginPasswordText = false;
        this.showRegisterPasswordText = false;
        this.showRegisterConfirmPasswordText = false;
        this.notification = inject(NotificationService);
        this.router = inject(Router);
        this.http = inject(HttpClient); // http = inject(HttpClient);
        // --- API Endpoint Base URL ---
        this.apiUrl = 'http://localhost:5215/api/User';
        // --- Form View State ---
        this.activeTab = 'login';
        this.show2FA = false;
        this.isLoading = false;
        // --- Form Models ---
        this.loginModel = {
            emailId: '',
            password: '',
            rememberMe: false,
        };
        this.registerModel = {
            fullName: '',
            emailId: '',
            password: '',
            confirmPassword: '',
            mobileNo: '',
            role: '',
            nationalId: '',
            county: '',
            subCounty: '',
            constituency: '',
        };
        this.twoFaModel = {
            code: '',
        };
        this.userPending2FA = null;
        this.passwordStrengthText = '';
        this.passwordStrengthColor = '';
    }
    toggleLoginPasswordVisibility() {
        this.showLoginPasswordText = !this.showLoginPasswordText;
    }
    toggleRegisterPasswordVisibility() {
        this.showRegisterPasswordText = !this.showRegisterPasswordText;
    }
    toggleRegisterConfirmPasswordVisibility() {
        this.showRegisterConfirmPasswordText = !this.showRegisterConfirmPasswordText;
    }
    // --- Login Handler ---
    //Had to be redone to allow Role-Based System
    onLogin() {
        const error = this.validateLogin();
        if (error) {
            this.notification.showError(error);
            return;
        }
        this.isLoading = true;
        this.notification.showLoading('Logging in...');
        const payload = {
            emailId: this.loginModel.emailId,
            password: this.loginModel.password,
        };
        this.http.post(`${this.apiUrl}/Login`, payload).subscribe({
            next: (res) => {
                this.isLoading = false;
                localStorage.setItem('token', res.token);
                localStorage.setItem('userRole', res.role);
                localStorage.setItem('userId', res.userId);
                // Save institutionId safely
                if (res.institutionId !== null && res.institutionId !== undefined) {
                    localStorage.setItem('institutionId', res.institutionId.toString());
                    console.log("Saved institutionId:", res.institutionId);
                }
                else {
                    localStorage.removeItem('institutionId');
                    console.log("No institutionId found in response.");
                }
                this.notification.showSuccess('Login successful!');
                // ROLE ROUTING
                const role = res.role?.trim();
                console.log("Routing based on role:", role);
                if (role === 'Admin') {
                    this.router.navigate(['/super-admin']);
                }
                else if (role === 'Head of Institution (HOI)') {
                    if (res.institutionId) {
                        console.log("HOI detected with school. Going to dashboard.");
                        this.router.navigate(['/head-of-institution']);
                    }
                    else {
                        console.log("HOI detected WITHOUT school. Going to onboarding.");
                        this.router.navigate(['/institution-onboarding']);
                    }
                }
                else if (role === 'County Director of Education (CDE)') {
                    this.router.navigate(['/county-education']);
                }
                else if (role === 'Sub-County Director of Education (SCDE)') {
                    this.router.navigate(['/scde']);
                }
                else if (role === 'Sub-County Quality Assurance and Standards Officer (SCQASO)') {
                    this.router.navigate(['/scqaso']);
                }
                else if (role === 'IT Officer' || role === 'Teacher' || role === 'Deputy Principal') {
                    this.router.navigate(['/school-dashboard']);
                }
                else {
                    this.notification.showError('Unknown role: ' + role);
                }
            },
            error: (err) => {
                this.isLoading = false;
                console.error('Login Error:', err);
                this.notification.showError(err.error?.message || 'Login failed.');
            },
        });
    }
    // --- Sign-Up / Register Handler ---
    onRegister() {
        const error = this.validateRegister();
        if (error) {
            this.notification.showError(error);
            return;
        }
        this.isLoading = true;
        this.notification.showLoading('Creating your account...');
        //this is the object that registers the user(s)
        const payload = {
            userId: 0,
            fullName: this.registerModel.fullName,
            emailId: this.registerModel.emailId,
            password: this.registerModel.password,
            mobileNo: this.registerModel.mobileNo,
            role: this.registerModel.role || 'User',
            nationalId: this.registerModel.nationalId,
            county: this.registerModel.county,
            subCounty: this.registerModel.subCounty,
            constituency: this.registerModel.constituency,
            createdDate: new Date().toISOString(),
        };
        //injecting the HTTP client to make a POST request to the API endpoint for user registration
        this.http.post(`${this.apiUrl}/CreateNewUser`, payload).subscribe({
            next: (res) => {
                this.isLoading = false;
                this.notification.showSuccess('Registration successful! Logging you in...');
                this.completeLogin(res);
            },
            error: (err) => {
                this.isLoading = false;
                if (err.status === 500) {
                    this.notification.showError(err.error || 'Email ID already exists.');
                }
                else {
                    this.notification.showError('Registration failed. Please check your details.');
                }
            },
        });
    }
    // --- 2FA Verification Handler ---
    onVerify2FA() {
        if (!/^\d{6}$/.test(this.twoFaModel.code)) {
            this.notification.showError('Code must be exactly 6 digits.');
            return;
        }
        this.isLoading = true;
        this.notification.showLoading('Verifying 2FA Code...');
        const payload = {
            emailId: this.userPending2FA,
            code: this.twoFaModel.code,
        };
        //injecting the HTTP client to make a POST request to the API endpoint for 2FA verification
        this.http.post(`${this.apiUrl}/verify-2fa`, payload).subscribe({
            next: (res) => {
                this.isLoading = false;
                this.completeLogin(res);
            },
            error: () => {
                this.isLoading = false;
                this.notification.showError('Invalid 2FA verification code.');
            },
        });
    }
    // --- Session Completion Helper ---
    completeLogin(userData) {
        const storage = this.loginModel.rememberMe ? localStorage : sessionStorage;
        storage.setItem('user_session', JSON.stringify(userData));
        this.isLoading = false;
        this.notification.showSuccess(`Welcome! Redirecting...`);
        //navigate to the page for institution onboarding after successful login or registration
        this.router.navigate(['institution-onboarding']);
    }
    switchTab(tab) {
        this.activeTab = tab;
        this.show2FA = false;
    }
    validateLogin() {
        if (!this.loginModel.emailId)
            return 'Email is required.';
        if (!this.loginModel.password)
            return 'Password is required.';
        return null;
    }
    // --- Enforce Strict Registration Validation ---
    validateRegister() {
        if (!this.registerModel.fullName || this.registerModel.fullName.length < 3) {
            return 'Institution Name must be at least 3 characters.';
        }
        if (!/\S+@\S+\.\S+/.test(this.registerModel.emailId)) {
            return 'Please enter a valid emailId address.';
        }
        if (!this.registerModel.mobileNo) {
            return 'Mobile Number is required.';
        }
        if (!this.registerModel.role) {
            return 'Please select a role.';
        }
        // Password Enforcement: Minimum 8 chars, letters, numbers, special character
        const pwd = this.registerModel.password;
        if (pwd.length < 8) {
            return 'Password must be at least 8 characters long.';
        }
        if (!/[a-zA-Z]/.test(pwd)) {
            return 'Password must contain at least one letter.';
        }
        if (!/[0-9]/.test(pwd)) {
            return 'Password must contain at least one number.';
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) {
            return 'Password must contain at least one special character.';
        }
        if (this.registerModel.password !== this.registerModel.confirmPassword) {
            return 'Passwords do not match.';
        }
        return null;
    }
    updatePasswordStrength() {
        const pwd = this.registerModel.password;
        let strength = 0;
        if (pwd.length >= 8)
            strength++;
        if (/[a-zA-Z]/.test(pwd))
            strength++;
        if (/[0-9]/.test(pwd))
            strength++;
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd))
            strength++;
        switch (strength) {
            case 1:
            case 2:
                this.passwordStrengthText = 'Weak (Requires letters, numbers & special characters)';
                this.passwordStrengthColor = '#ef4444';
                break;
            case 3:
                this.passwordStrengthText = 'Medium (Add a special character or digit)';
                this.passwordStrengthColor = '#f59e0b';
                break;
            case 4:
                this.passwordStrengthText = 'Strong Password';
                this.passwordStrengthColor = '#10b981';
                break;
            default:
                this.passwordStrengthText = '';
                this.passwordStrengthColor = '';
        }
    }
    static { this.ɵfac = function Login_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Login)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Login, selectors: [["app-login"]], decls: 23, vars: 4, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["name", "description", "content", "A secure and modern authentication portal demonstrating best practices for login, registration, and 2FA."], ["name", "keywords", "content", "authentication, login, signup, register, 2FA, security"], ["name", "author", "content", "Karthik"], ["rel", "stylesheet", "href", i0.ɵɵtrustConstantResourceUrl `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`], ["rel", "icon", "href", i0.ɵɵtrustConstantResourceUrl `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%25' y='50%25' font-size='90' text-anchor='middle' dominant-baseline='central'%3E🔐%3C/text%3E%3C/svg%3E`], [1, "auth-wrapper"], [1, "portal-title"], ["id", "auth-card", 1, "auth-card"], ["class", "auth-header", 4, "ngIf"], ["class", "auth-form active", 3, "ngSubmit", 4, "ngIf"], [1, "app-footer"], [1, "auth-header"], ["type", "button", 1, "auth-tab", 3, "click"], [1, "auth-form", "active", 3, "ngSubmit"], [1, "form-group"], ["for", "login-emailId"], ["type", "emailId", "id", "login-emailId", "name", "emailId", "required", "", "autocomplete", "emailId", 3, "ngModelChange", "ngModel"], [1, "form-group", "password-group"], ["for", "login-password"], [1, "input-wrapper"], ["id", "login-password", "name", "password", "required", "", "autocomplete", "current-password", 3, "ngModelChange", "type", "ngModel"], ["role", "button", "aria-label", "Show password", 1, "password-toggle", 3, "click"], [1, "far", 3, "ngClass"], [1, "form-group", "checkbox-group"], ["type", "checkbox", "id", "remember-me", "name", "remember-me", 3, "ngModelChange", "ngModel"], ["for", "remember-me"], ["type", "submit", 1, "submit-btn"], ["class", "btn-text", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], ["routerLink", "#", "id", "forgot-password", 1, "auth-link"], [1, "btn-text"], [1, "spinner"], [1, "fas", "fa-spinner", "fa-spin"], ["for", "register-fullName"], ["type", "text", "id", "register-fullName", "name", "fullName", "required", "", "autocomplete", "name", "placeholder", "John Doe", 3, "ngModelChange", "ngModel"], ["for", "register-emailId"], ["type", "emailId", "id", "register-emailId", "name", "emailId", "required", "", "autocomplete", "emailId", "placeholder", "example@domain.com", 3, "ngModelChange", "ngModel"], ["for", "register-mobile"], ["type", "tel", "id", "register-mobile", "name", "mobileNo", "placeholder", "e.g. 0712345678", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-role"], ["id", "register-role", "name", "role", "required", "", 1, "styled-select", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["value", "Admin"], ["value", "Head of Institution (HOI)"], ["value", "County Director of Education (CDE)"], ["value", "Sub-County Director of Education (SCDE)"], ["value", "County Quality Assurance and Standards Officer (CQASO)"], ["value", "Sub-County Quality Assurance and Standards Officer (SCQASO)"], ["value", "IT Officer"], ["value", "Deputy Principal"], ["value", "Teacher"], ["for", "register-nationalId"], ["type", "tel", "id", "register-nationalId", "name", "nationalId", "placeholder", "e.g. 12345678", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-county"], ["type", "tel", "id", "register-county", "name", "county", "placeholder", "e.g. Nairobi, Nakuru", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-subCounty"], ["type", "tel", "id", "register-subCounty", "name", "subCounty", "placeholder", "e.g. Embakasi, Kangemi", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-constituency"], ["type", "tel", "id", "register-constituency", "name", "constituency", "placeholder", "e.g. South C", "required", "", 3, "ngModelChange", "ngModel"], ["for", "register-password"], ["id", "register-password", "name", "password", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "input", "type", "ngModel"], ["role", "button", "aria-label", "Toggle password visibility", 1, "password-toggle", 3, "click"], [1, "strength-text"], ["for", "register-confirm-password"], ["id", "register-confirm-password", "name", "confirmPassword", "required", "", "autocomplete", "new-password", 3, "ngModelChange", "type", "ngModel"], ["role", "button", "aria-label", "Toggle confirm password visibility", 1, "password-toggle", 3, "click"], [1, "twofa-info"], ["for", "twofa-code"], ["type", "text", "id", "twofa-code", "name", "twofaCode", "required", "", "inputmode", "numeric", "pattern", "[0-9]{6}", "maxlength", "6", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "resend-code-btn"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "html", 0)(1, "head");
            i0.ɵɵelement(2, "meta", 1)(3, "meta", 2);
            i0.ɵɵelementStart(4, "title");
            i0.ɵɵtext(5, "Admin Portal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "meta", 3)(7, "meta", 4)(8, "meta", 5)(9, "link", 6)(10, "link", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "body")(12, "div", 8)(13, "h1", 9);
            i0.ɵɵtext(14, "Secure Auth Portal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 10);
            i0.ɵɵtemplate(16, Login_div_16_Template, 5, 4, "div", 11)(17, Login_form_17_Template, 23, 7, "form", 12)(18, Login_form_18_Template, 74, 19, "form", 12)(19, Login_form_19_Template, 14, 3, "form", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "footer", 13)(21, "p");
            i0.ɵɵtext(22, "\u00A9 2026 KEMIS. All rights reserved.");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("ngIf", !ctx.show2FA);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeTab === "login" && !ctx.show2FA);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.activeTab === "register" && !ctx.show2FA);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.show2FA);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.NgModel, i2.NgForm], styles: ["\n[_ngcontent-%COMP%]:root {\n    --kemis-blue: #1e40af;  \n    --kemis-dark-blue: #1e3a8a; \n   --kemis-sky-blue: #0ea5e9; \n    --kemis-light: #f8f9fa;\n    --kemis-primary-light: #e6f7ff; \n    --kemis-dark-green: #004d2a; \n    --kemis-green: #4f6e52;      \n    --kemis-border: #dee2e6;\n    --kemis-danger: #dc3545;\n    --kemis-success: #28a745;         \n    --kemis-warning: #ffc107;\n   --kemis-info: #17a2b8;\n\n    --bs-font-family: system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\n   \n   --kemis-shadow-lg: 0 .5rem 1rem rgba(0, 0, 0, .15);\n    --border-radius: 8px;\n}\n\n.auth-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 450px;\n    padding: 20px;\n    box-sizing: border-box;\n    text-align: center;\n    margin: 40px auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.portal-title[_ngcontent-%COMP%] {\n    color: var(--primary-color);\n    font-weight: 700;\n    font-size: 2.2em;\n    margin-bottom: 25px;\n    text-align: center;\n}\n\n.auth-card[_ngcontent-%COMP%] {\n    background-color: var(--card-background);\n    border-radius: var(--border-radius);\n    box-shadow: var(--shadow);\n    padding: 35px 30px;\n    text-align: left;\n    transition: all 0.3s ease-in-out;\n    border: 1px solid #e2e9e2;\n}\n\n\n.auth-header[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 25px;\n    border-bottom: 2px solid var(--border-color);\n    background-color: white;\n}\n\n.auth-tab[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 12px 15px;\n    border: none;\n    background-color: transparent;\n    font-size: 1.1em;\n    font-weight: 600;\n    color: var(--text-color-light); \n    cursor: pointer;\n    border-bottom: 3px solid transparent;\n    transition: all 0.3s ease;\n    outline: none;\n}\n\n.auth-tab[_ngcontent-%COMP%]:hover:not(.active) {\n    color: var(--primary-color);\n}\n\n.auth-tab.active[_ngcontent-%COMP%] {\n    color: var(--primary-color); \n    border-bottom-color: var(--primary-color);\n}\n\n.auth-form[_ngcontent-%COMP%] {\n    display: none;\n    animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n\n.auth-form.active[_ngcontent-%COMP%] {\n    display: block;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from { opacity: 0; transform: translateY(10px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n.auth-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n    margin-top: 0;\n    margin-bottom: 25px;\n    color: #29742f;\n    text-align: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    margin-bottom: 8px;\n    font-weight: 600;\n    color: var(--text-color-dark);\n    font-size: 0.95em;\n}\n\n.form-group[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=\"emailId\"][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=\"tel\"][_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    font-size: 1em;\n    box-sizing: border-box;\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: var(--primary-color);\n    box-shadow: 0 0 0 3px rgba(41, 116, 47, 0.2);\n}\n\n\n.password-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\n.password-group[_ngcontent-%COMP%]   .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-right: 40px;\n}\n\n.password-toggle[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 12px;\n    cursor: pointer;\n    --kemis-secondary: #6c757d;\n    z-index: 2;\n}\n\n.password-toggle[_ngcontent-%COMP%]:hover {\n    color: var(--primary-color);\n}\n\n.styled-select[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    background-color: #fff;\n    font-size: 0.95em;\n    outline: none;\n    transition: border-color 0.2s ease;\n}\n\n.styled-select[_ngcontent-%COMP%]:focus {\n    border-color: var(--primary-color);\n}\n\n.strength-text[_ngcontent-%COMP%] {\n    font-size: 0.85em;\n    margin-top: 5px;\n    min-height: 1.2em;\n    font-weight: 600;\n}\n\n.checkbox-group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    margin-bottom: 25px;\n}\n\n.checkbox-group[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n    width: 16px;\n    height: 16px;\n    margin-right: 10px;\n    accent-color: var(--primary-color);\n}\n\n.checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n    font-weight: 400;\n    color: var(--text-color-dark);\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 14px;\n    background-color: #29742f;\n    color: white;\n    border: none;\n    border-radius: var(--border-radius);\n    font-size: 1.1em;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: var(--primary-dark);\n    transform: translateY(-1px);\n}\n\n.submit-btn[_ngcontent-%COMP%]:disabled {\n    background-color: var(--border-color);\n    cursor: not-allowed;\n}\n\n.auth-link[_ngcontent-%COMP%] {\n    display: block;\n    text-align: center;\n    margin-top: 15px;\n    color: var(--secondary-color);\n    text-decoration: none;\n    font-size: 0.9em;\n    font-weight: 600;\n}\n\n.twofa-info[_ngcontent-%COMP%] {\n    font-size: 0.95em;\n    color: var(--text-color-light);\n    margin-bottom: 25px;\n    line-height: 1.5;\n}\n\n#twofa-code[_ngcontent-%COMP%] {\n    letter-spacing: 5px;\n    text-align: center;\n}\n\n.resend-code-btn[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    color: var(--secondary-color);\n    font-size: 0.9em;\n    cursor: pointer;\n    margin-top: 15px;\n}\n\n.app-footer[_ngcontent-%COMP%] {\n    margin-top: 40px;\n    padding-top: 25px;\n    border-top: 1px dashed var(--border-color);\n    font-size: 0.85em;\n    color: var(--text-color-light);\n    text-align: center;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Login, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [CommonModule, FormsModule], template: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Admin Portal</title>\n\n    <meta name=\"description\" content=\"A secure and modern authentication portal demonstrating best practices for login, registration, and 2FA.\">\n    <meta name=\"keywords\" content=\"authentication, login, signup, register, 2FA, security\">\n    <meta name=\"author\" content=\"Karthik\">\n\n    <!-- FontAwesome CDN for Eye Icons -->\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\">\n    <link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext x='50%25' y='50%25' font-size='90' text-anchor='middle' dominant-baseline='central'%3E\uD83D\uDD10%3C/text%3E%3C/svg%3E\">\n</head>\n<body>\n<div class=\"auth-wrapper\">\n  <h1 class=\"portal-title\">Secure Auth Portal</h1>\n\n  <div class=\"auth-card\" id=\"auth-card\">\n    <!-- Header Tabs -->\n    <div class=\"auth-header\" *ngIf=\"!show2FA\">\n      <button\n        type=\"button\"\n        class=\"auth-tab\"\n        [class.active]=\"activeTab === 'login'\"\n        (click)=\"switchTab('login')\">\n        Login\n      </button>\n\n      <button\n        type=\"button\"\n        class=\"auth-tab\"\n        [class.active]=\"activeTab === 'register'\"\n        (click)=\"switchTab('register')\">\n        Register\n      </button>\n    </div>\n\n    <!-- Login Form -->\n    <form *ngIf=\"activeTab === 'login' && !show2FA\" class=\"auth-form active\" (ngSubmit)=\"onLogin()\">\n      <h2>Welcome Back!</h2>\n      <div class=\"form-group\">\n        <label for=\"login-emailId\">Email:</label>\n        <input type=\"emailId\" id=\"login-emailId\" name=\"emailId\" [(ngModel)]=\"loginModel.emailId\" required autocomplete=\"emailId\" />\n      </div>\n\n      <div class=\"form-group password-group\">\n        <label for=\"login-password\">Password:</label>\n        <div class=\"input-wrapper\">\n          <input [type]=\"showLoginPasswordText ? 'text' : 'password'\" id=\"login-password\" name=\"password\" [(ngModel)]=\"loginModel.password\" required autocomplete=\"current-password\" />\n          <span class=\"password-toggle\" (click)=\"toggleLoginPasswordVisibility()\" role=\"button\" aria-label=\"Show password\">\n            <i class=\"far\" [ngClass]=\"showLoginPasswordText ? 'fa-eye-slash' : 'fa-eye'\"></i>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group checkbox-group\">\n        <input type=\"checkbox\" id=\"remember-me\" name=\"remember-me\" [(ngModel)]=\"loginModel.rememberMe\" />\n        <label for=\"remember-me\">Remember me</label>\n      </div>\n\n      <!-- Right: this calls the function when the button is clicked -->\n      <!-- Remove the [disabled]=\"isLoading\"-->\n      <button type=\"submit\" class=\"submit-btn\">\n        <span class=\"btn-text\" *ngIf=\"!isLoading\">Login</span>\n        <span class=\"spinner\" *ngIf=\"isLoading\"><i class=\"fas fa-spinner fa-spin\"></i></span>\n      </button>\n      <a routerLink=\"#\" id=\"forgot-password\" class=\"auth-link\">Forgot Password?</a>\n    </form>\n\n    <!-- Register Form -->\n    <form *ngIf=\"activeTab === 'register' && !show2FA\" class=\"auth-form active\" (ngSubmit)=\"onRegister()\">\n      <h2>Create Account</h2>\n\n      <!-- Full Name -->\n      <div class=\"form-group\">\n        <label for=\"register-fullName\">Full Name:</label>\n        <input type=\"text\" id=\"register-fullName\" name=\"fullName\" [(ngModel)]=\"registerModel.fullName\" required autocomplete=\"name\" placeholder=\"John Doe\" />\n      </div>\n\n      <!-- Email -->\n      <div class=\"form-group\">\n        <label for=\"register-emailId\">Email:</label>\n        <input type=\"emailId\" id=\"register-emailId\" name=\"emailId\" [(ngModel)]=\"registerModel.emailId\" required autocomplete=\"emailId\" placeholder=\"example@domain.com\" />\n      </div>\n\n      <!-- Mobile Number -->\n      <div class=\"form-group\">\n        <label for=\"register-mobile\">Mobile Number:</label>\n        <input type=\"tel\" id=\"register-mobile\" name=\"mobileNo\" [(ngModel)]=\"registerModel.mobileNo\" placeholder=\"e.g. 0712345678\" required />\n      </div>\n\n      <!-- Role Selection -->\n      <div class=\"form-group\">\n        <label for=\"register-role\">Role:</label>\n        <select id=\"register-role\" name=\"role\" [(ngModel)]=\"registerModel.role\" class=\"styled-select\" required>\n          <option value=\"\" disabled selected>Select a role</option>\n          <option value=\"Admin\">Admin</option>\n          <option value=\"Head of Institution (HOI)\">Head of Institution (HOI)</option>\n          <option value=\"County Director of Education (CDE)\">County Director of Education (CDE)</option>\n          <option value=\"Sub-County Director of Education (SCDE)\">Sub-County Director of Education (SCDE)</option>\n          <option value=\"County Quality Assurance and Standards Officer (CQASO)\">County Quality Assurance and Standards Officer (CQASO)</option>\n          <option value=\"Sub-County Quality Assurance and Standards Officer (SCQASO)\">Sub-County Quality Assurance and Standards Officer (SCQASO)</option>\n          <option value=\"IT Officer\">IT Officer</option>\n          <option value=\"Deputy Principal\">Deputy Principal</option>\n            <option value=\"Teacher\">Teacher/Facilitator</option>\n        </select>\n      </div>\n\n      <!--ID Number-->\n      <div class=\"form-group\">\n        <label for=\"register-nationalId\">National ID:</label>\n        <input type=\"tel\" id=\"register-nationalId\" name=\"nationalId\" [(ngModel)]=\"registerModel.nationalId\" placeholder=\"e.g. 12345678\" required />\n      </div>\n\n      <!--County-->\n      <div class=\"form-group\">\n        <label for=\"register-county\">County of Work:</label>\n        <input type=\"tel\" id=\"register-county\" name=\"county\" [(ngModel)]=\"registerModel.county\" placeholder=\"e.g. Nairobi, Nakuru\" required />\n      </div>\n\n       <!--Sub-County-->\n      <div class=\"form-group\">\n        <label for=\"register-subCounty\">Sub-County of Work:</label>\n        <input type=\"tel\" id=\"register-subCounty\" name=\"subCounty\" [(ngModel)]=\"registerModel.subCounty\" placeholder=\"e.g. Embakasi, Kangemi\" required />\n      </div>\n\n       <!--Constituency-->\n      <div class=\"form-group\">\n        <label for=\"register-constituency\">Constituency of Work:</label>\n        <input type=\"tel\" id=\"register-constituency\" name=\"constituency\" [(ngModel)]=\"registerModel.constituency\" placeholder=\"e.g. South C\" required />\n      </div>\n\n\n      <!-- Password -->\n      <div class=\"form-group password-group\">\n        <label for=\"register-password\">Password:</label>\n        <div class=\"input-wrapper\">\n          <input [type]=\"showRegisterPasswordText ? 'text' : 'password'\" id=\"register-password\" name=\"password\" [(ngModel)]=\"registerModel.password\" (input)=\"updatePasswordStrength()\" required autocomplete=\"new-password\" />\n          <span class=\"password-toggle\" (click)=\"toggleRegisterPasswordVisibility()\" role=\"button\" aria-label=\"Toggle password visibility\">\n            <i class=\"far\" [ngClass]=\"showRegisterPasswordText ? 'fa-eye-slash' : 'fa-eye'\"></i>\n          </span>\n        </div>\n        <p class=\"strength-text\" [style.color]=\"passwordStrengthColor\">{{ passwordStrengthText }}</p>\n      </div>\n\n      <!-- Confirm Password -->\n      <div class=\"form-group password-group\">\n        <label for=\"register-confirm-password\">Confirm Password:</label>\n        <div class=\"input-wrapper\">\n          <input [type]=\"showRegisterConfirmPasswordText ? 'text' : 'password'\" id=\"register-confirm-password\" name=\"confirmPassword\" [(ngModel)]=\"registerModel.confirmPassword\" required autocomplete=\"new-password\" />\n          <span class=\"password-toggle\" (click)=\"toggleRegisterConfirmPasswordVisibility()\" role=\"button\" aria-label=\"Toggle confirm password visibility\">\n            <i class=\"far\" [ngClass]=\"showRegisterConfirmPasswordText ? 'fa-eye-slash' : 'fa-eye'\"></i>\n          </span>\n        </div>\n      </div>\n\n      <button type=\"submit\" class=\"submit-btn\">\n        <span class=\"btn-text\" *ngIf=\"!isLoading\">Register</span>\n        <span class=\"spinner\" *ngIf=\"isLoading\"><i class=\"fas fa-spinner fa-spin\"></i></span>\n      </button>\n    </form>\n\n    <!-- 2FA Form -->\n    <form *ngIf=\"show2FA\" class=\"auth-form active\" (ngSubmit)=\"onVerify2FA()\">\n      <h2>Two-Factor Authentication</h2>\n      <p class=\"twofa-info\">A verification code has been sent to your registered device/emailId.</p>\n      <div class=\"form-group\">\n        <label for=\"twofa-code\">Verification Code:</label>\n        <input type=\"text\" id=\"twofa-code\" name=\"twofaCode\" [(ngModel)]=\"twoFaModel.code\" required inputmode=\"numeric\" pattern=\"[0-9]{6}\" maxlength=\"6\" />\n      </div>\n      <button type=\"submit\" class=\"submit-btn\">\n        <span class=\"btn-text\" *ngIf=\"!isLoading\">Verify Code</span>\n        <span class=\"spinner\" *ngIf=\"isLoading\"><i class=\"fas fa-spinner fa-spin\"></i></span>\n      </button>\n      <button type=\"button\" class=\"resend-code-btn\">Resend Code</button>\n    </form>\n  </div>\n\n  <footer class=\"app-footer\">\n    <p>&copy; 2026 KEMIS. All rights reserved.</p>\n  </footer>\n</div>\n</body>\n</html>\n\n<!-- <script> \ndocument.getElementById('loginForm').addEventListener('submit', async function(e) {\n    e.preventDefault(); // Stop page reload\n\n    const email = document.getElementById('emailId').value;\n    const password = document.getElementById('password').value;\n\n    try {\n        // 1. Send data to .NET backend\n        const response = await fetch('http://localhost:5000/api/User/Login', {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({ emailId: email, password: password })\n        });\n\n        const data = await response.json();\n\n        // 2. Check if login was successful\n        if (!response.ok) {\n            alert(data.message || \"Login failed\");\n            return;\n        }\n\n        // 3. Save the JWT Token and User info to Local Storage\n        localStorage.setItem('jwtToken', data.token);\n        localStorage.setItem('userRole', data.role);\n        localStorage.setItem('userId', data.userId);\n\n        alert(\"Login successful!\");\n\n        // 4. Redirect based on Role\n        if (data.role === \"Admin\") {\n            window.location.href = \"/super-admin\";\n        } else if (data.role === \"Head of Institution (HOI)\") {\n            window.location.href = \"/head-of-instituion\";\n        }else if (data.role === \"County Director of Education (CDE)\") {\n            window.location.href = \"/county-education\";\n        }\n        else if (data.role === \"Sub-County Director of Education (SCDE)\") {\n            window.location.href = \"/sub-county-education\";\n        }\n        else if (data.role === \"Sub-County Quality Assurance and Standards Officer (SCQASO)\") {\n            window.location.href = \"/sub-county-quality-assurance\";\n          }\n         else {\n            window.location.href = \"/school-dashboard\"; // Default for Teachers, Deputy Principals and IT Officers in sintitutions\n        }\n\n    } catch (error) {\n        console.error('Error:', error);\n        alert(\"Could not connect to the server.\");\n    }\n});\n</script> -->\n", styles: ["/* General Styling & Theme Variables */\n:root {\n    --kemis-blue: #1e40af;  /*Main KEMIS blue*/\n    --kemis-dark-blue: #1e3a8a; /*Darker version of blue*/\n   --kemis-sky-blue: #0ea5e9; /*Links color*/\n    --kemis-light: #f8f9fa;\n    --kemis-primary-light: #e6f7ff; /*Card background */\n    --kemis-dark-green: #004d2a; /* Text in dark green*/\n    --kemis-green: #4f6e52;      /* Soft Green-Gray Text */\n    --kemis-border: #dee2e6;\n    --kemis-danger: #dc3545;\n    --kemis-success: #28a745;         /* Success Green */\n    --kemis-warning: #ffc107;\n   --kemis-info: #17a2b8;\n\n    --bs-font-family: system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n    --bs-font-monospace: SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;\n   \n   --kemis-shadow-lg: 0 .5rem 1rem rgba(0, 0, 0, .15);\n    --border-radius: 8px;\n}\n\n.auth-wrapper {\n    width: 100%;\n    max-width: 450px;\n    padding: 20px;\n    box-sizing: border-box;\n    text-align: center;\n    margin: 40px auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.portal-title {\n    color: var(--primary-color);\n    font-weight: 700;\n    font-size: 2.2em;\n    margin-bottom: 25px;\n    text-align: center;\n}\n\n.auth-card {\n    background-color: var(--card-background);\n    border-radius: var(--border-radius);\n    box-shadow: var(--shadow);\n    padding: 35px 30px;\n    text-align: left;\n    transition: all 0.3s ease-in-out;\n    border: 1px solid #e2e9e2;\n}\n\n/* Fixed Header Tabs */\n.auth-header {\n    display: flex;\n    margin-bottom: 25px;\n    border-bottom: 2px solid var(--border-color);\n    background-color: white;\n}\n\n.auth-tab {\n    flex: 1;\n    padding: 12px 15px;\n    border: none;\n    background-color: transparent;\n    font-size: 1.1em;\n    font-weight: 600;\n    color: var(--text-color-light); /* Fixed tab contrast */\n    cursor: pointer;\n    border-bottom: 3px solid transparent;\n    transition: all 0.3s ease;\n    outline: none;\n}\n\n.auth-tab:hover:not(.active) {\n    color: var(--primary-color);\n}\n\n.auth-tab.active {\n    color: var(--primary-color); /* Fixed active tab text color */\n    border-bottom-color: var(--primary-color);\n}\n\n.auth-form {\n    display: none;\n    animation: fadeIn 0.5s ease-out;\n}\n\n.auth-form.active {\n    display: block;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; transform: translateY(10px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n.auth-form h2 {\n    font-size: 1.8em;\n    margin-top: 0;\n    margin-bottom: 25px;\n    color: #29742f;\n    text-align: center;\n}\n\n.form-group {\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.form-group label {\n    display: block;\n    margin-bottom: 8px;\n    font-weight: 600;\n    color: var(--text-color-dark);\n    font-size: 0.95em;\n}\n\n.form-group input[type=\"text\"],\n.form-group input[type=\"emailId\"],\n.form-group input[type=\"tel\"],\n.form-group input[type=\"password\"] {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    font-size: 1em;\n    box-sizing: border-box;\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n\n.form-group input:focus {\n    outline: none;\n    border-color: var(--primary-color);\n    box-shadow: 0 0 0 3px rgba(41, 116, 47, 0.2);\n}\n\n/* Password toggle eye icon positioning */\n.password-group .input-wrapper {\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\n.password-group .input-wrapper input {\n    width: 100%;\n    padding-right: 40px;\n}\n\n.password-toggle {\n    position: absolute;\n    right: 12px;\n    cursor: pointer;\n    --kemis-secondary: #6c757d;\n    z-index: 2;\n}\n\n.password-toggle:hover {\n    color: var(--primary-color);\n}\n\n.styled-select {\n    width: 100%;\n    padding: 12px;\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius);\n    background-color: #fff;\n    font-size: 0.95em;\n    outline: none;\n    transition: border-color 0.2s ease;\n}\n\n.styled-select:focus {\n    border-color: var(--primary-color);\n}\n\n.strength-text {\n    font-size: 0.85em;\n    margin-top: 5px;\n    min-height: 1.2em;\n    font-weight: 600;\n}\n\n.checkbox-group {\n    display: flex;\n    align-items: center;\n    margin-top: -10px;\n    margin-bottom: 25px;\n}\n\n.checkbox-group input[type=\"checkbox\"] {\n    width: 16px;\n    height: 16px;\n    margin-right: 10px;\n    accent-color: var(--primary-color);\n}\n\n.checkbox-group label {\n    margin-bottom: 0;\n    font-weight: 400;\n    color: var(--text-color-dark);\n}\n\n.submit-btn {\n    width: 100%;\n    padding: 14px;\n    background-color: #29742f;\n    color: white;\n    border: none;\n    border-radius: var(--border-radius);\n    font-size: 1.1em;\n    font-weight: 600;\n    cursor: pointer;\n    margin-top: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n}\n\n.submit-btn:hover:not(:disabled) {\n    background-color: var(--primary-dark);\n    transform: translateY(-1px);\n}\n\n.submit-btn:disabled {\n    background-color: var(--border-color);\n    cursor: not-allowed;\n}\n\n.auth-link {\n    display: block;\n    text-align: center;\n    margin-top: 15px;\n    color: var(--secondary-color);\n    text-decoration: none;\n    font-size: 0.9em;\n    font-weight: 600;\n}\n\n.twofa-info {\n    font-size: 0.95em;\n    color: var(--text-color-light);\n    margin-bottom: 25px;\n    line-height: 1.5;\n}\n\n#twofa-code {\n    letter-spacing: 5px;\n    text-align: center;\n}\n\n.resend-code-btn {\n    background: none;\n    border: none;\n    color: var(--secondary-color);\n    font-size: 0.9em;\n    cursor: pointer;\n    margin-top: 15px;\n}\n\n.app-footer {\n    margin-top: 40px;\n    padding-top: 25px;\n    border-top: 1px dashed var(--border-color);\n    font-size: 0.85em;\n    color: var(--text-color-light);\n    text-align: center;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Login, { className: "Login", filePath: "app/pages/login/login.ts", lineNumber: 15 }); })();
