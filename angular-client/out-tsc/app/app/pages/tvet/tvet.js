import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class Tvet {
    constructor() {
        //basic information to be changed to fit this form
        this.formData = {
            // Section 1
            fullName: '',
            gender: '',
            isActive: true,
            // Section 2
            emailId: '',
            county: '',
            receiveSms: false,
            // Section 3
            username: '',
            role: '',
            isSuperAdmin: false
        };
    }
    onSubmit() {
        console.log(this.formData);
    }
    static { this.ɵfac = function Tvet_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || Tvet)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Tvet, selectors: [["app-tvet"]], decls: 83, vars: 0, consts: [["myForm", "ngForm"], [1, "kemis-form-wrapper"], [1, "kemis-form", 3, "ngSubmit"], [1, "text-center", "mb-4"], [1, "mb-4", "p-3", "border", "rounded"], [1, "float-none", "w-auto", "px-2", "fs-5", "fw-bold", "text-primary"], [1, "row", "g-3"], [1, "col-md-6"], ["for", "fullName", 1, "form-label", "fw-semibold"], ["type", "text", "id", "fullName", "name", "fullName", "placeholder", "e.g. John Doe", "required", "", 1, "form-control"], ["for", "gender", 1, "form-label", "fw-semibold"], ["id", "gender", "name", "gender", "required", "", 1, "form-select"], ["value", "", "disabled", "", "selected", ""], ["value", "Male"], ["value", "Female"], ["value", "Other"], [1, "col-12", "mt-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "role", "switch", "id", "isActive", "name", "isActive", "checked", "", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label", "fw-semibold"], ["for", "emailId", 1, "form-label", "fw-semibold"], ["type", "emailId", "id", "emailId", "name", "emailId", "placeholder", "name@example.com", "required", "", 1, "form-control"], ["for", "county", 1, "form-label", "fw-semibold"], ["id", "county", "name", "county", "required", "", 1, "form-select"], ["value", "Nairobi"], ["value", "Mombasa"], ["value", "Kisumu"], ["type", "checkbox", "role", "switch", "id", "receiveSms", "name", "receiveSms", 1, "form-check-input"], ["for", "receiveSms", 1, "form-check-label", "fw-semibold"], ["for", "username", 1, "form-label", "fw-semibold"], ["type", "text", "id", "username", "name", "username", "placeholder", "Enter username", "required", "", 1, "form-control"], ["for", "role", 1, "form-label", "fw-semibold"], ["id", "role", "name", "role", "required", "", 1, "form-select"], ["value", "Admin"], ["value", "IT Officer"], ["value", "Head of Institution (HOI)"], ["type", "checkbox", "role", "switch", "id", "isSuperAdmin", "name", "isSuperAdmin", 1, "form-check-input"], ["for", "isSuperAdmin", 1, "form-check-label", "fw-semibold"], [1, "d-grid", "gap-2", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg"]], template: function Tvet_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "form", 2, 0);
            i0.ɵɵlistener("ngSubmit", function Tvet_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
            i0.ɵɵelementStart(3, "h1", 3);
            i0.ɵɵtext(4, "TVET Institution Onboarding Form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "fieldset", 4)(6, "legend", 5);
            i0.ɵɵtext(7, "Section 1: Institution Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 6)(9, "div", 7)(10, "label", 8);
            i0.ɵɵtext(11, "Institution Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 7)(14, "label", 10);
            i0.ɵɵtext(15, "Gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "select", 11)(17, "option", 12);
            i0.ɵɵtext(18, "Select gender");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option", 13);
            i0.ɵɵtext(20, "Male");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "option", 14);
            i0.ɵɵtext(22, "Female");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "option", 15);
            i0.ɵɵtext(24, "Other");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 16)(26, "div", 17);
            i0.ɵɵelement(27, "input", 18);
            i0.ɵɵelementStart(28, "label", 19);
            i0.ɵɵtext(29, "Account is Active");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(30, "fieldset", 4)(31, "legend", 5);
            i0.ɵɵtext(32, "Section 2: Contact Information");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 6)(34, "div", 7)(35, "label", 20);
            i0.ɵɵtext(36, "Email Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(37, "input", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 7)(39, "label", 22);
            i0.ɵɵtext(40, "County");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "select", 23)(42, "option", 12);
            i0.ɵɵtext(43, "Select county");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "option", 24);
            i0.ɵɵtext(45, "Nairobi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "option", 25);
            i0.ɵɵtext(47, "Mombasa");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "option", 26);
            i0.ɵɵtext(49, "Kisumu");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(50, "div", 16)(51, "div", 17);
            i0.ɵɵelement(52, "input", 27);
            i0.ɵɵelementStart(53, "label", 28);
            i0.ɵɵtext(54, "Receive SMS Notifications");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(55, "fieldset", 4)(56, "legend", 5);
            i0.ɵɵtext(57, "Section 3: Other Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 6)(59, "div", 7)(60, "label", 29);
            i0.ɵɵtext(61, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(62, "input", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "div", 7)(64, "label", 31);
            i0.ɵɵtext(65, "Role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "select", 32)(67, "option", 12);
            i0.ɵɵtext(68, "Select role");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "option", 33);
            i0.ɵɵtext(70, "Admin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "option", 34);
            i0.ɵɵtext(72, "IT Officer");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "option", 35);
            i0.ɵɵtext(74, "Head of Institution (HOI)");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(75, "div", 16)(76, "div", 17);
            i0.ɵɵelement(77, "input", 36);
            i0.ɵɵelementStart(78, "label", 37);
            i0.ɵɵtext(79, "Grant Super Admin Privileges");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(80, "div", 38)(81, "button", 39);
            i0.ɵɵtext(82, "Save Record");
            i0.ɵɵelementEnd()()()();
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.NgControlStatusGroup, i1.NgForm], styles: ["\r\n\r\n\r\n\r\n\r\n.kemis-form-wrapper[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: 2rem auto;\r\n  padding: 2.5rem;\r\n  background: var(--kemis-white);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  border-top: 4px solid var(--kemis-primary);\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\r\n  background: var(--kemis-section-bg);\r\n  border: 1px solid var(--kemis-border) !important;\r\n  border-radius: var(--border-radius);\r\n  padding: 1.5rem !important;\r\n  margin-bottom: 2rem !important;\r\n  transition: box-shadow 0.3s ease;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]:hover {\r\n  box-shadow: var(--kemis-shadow);\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n  font-size: 1.15rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-dark-blue);\r\n  background: var(--kemis-white);\r\n  padding: 0.25rem 1rem;\r\n  border-radius: 50px;\r\n  border: 1px solid var(--kemis-border);\r\n  box-shadow: var(--kemis-shadow);\r\n  margin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\r\n  color: var(--kemis-dark);\r\n  font-size: 0.95rem;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%], \r\n.kemis-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%] {\r\n  border: 1px solid var(--kemis-border);\r\n  border-radius: var(--border-radius);\r\n  padding: 0.6rem 0.85rem;\r\n  font-size: 0.95rem;\r\n  color: var(--kemis-black);\r\n  background-color: var(--kemis-white);\r\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, \r\n.kemis-form[_ngcontent-%COMP%]   .form-select[_ngcontent-%COMP%]:focus {\r\n  border-color: var(--kemis-primary);\r\n  box-shadow: 0 0 0 0.25rem rgba(63, 190, 235, 0.25); \r\n  outline: none;\r\n}\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder {\r\n  color: var(--kemis-secondary);\r\n  opacity: 0.7;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  border-color: var(--kemis-secondary);\r\n  width: 2.5em;\r\n  height: 1.25em;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\r\n  background-color: var(--kemis-primary);\r\n  border-color: var(--kemis-primary);\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\r\n  border-color: var(--kemis-primary);\r\n  box-shadow: 0 0 0 0.25rem rgba(63, 190, 235, 0.25);\r\n  outline: none;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  color: var(--kemis-dark);\r\n  margin-top: 0.15rem;\r\n}\r\n\r\n\r\n\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\r\n  background: linear-gradient(135deg, var(--kemis-primary) 0%, var(--kemis-blue) 100%);\r\n  border: none;\r\n  border-radius: var(--border-radius);\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\r\n  padding: 0.8rem 2rem;\r\n  color: var(--kemis-white);\r\n  box-shadow: var(--kemis-shadow);\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(135deg, var(--kemis-primary-dark) 0%, var(--kemis-dark-blue) 100%);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.kemis-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:active {\r\n  transform: translateY(0);\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 767.98px) {\r\n  .kemis-form-wrapper[_ngcontent-%COMP%] {\r\n    margin: 1rem;\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .kemis-form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\r\n    padding: 1rem !important;\r\n  }\r\n\r\n  .kemis-form[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Tvet, [{
        type: Component,
        args: [{ selector: 'app-tvet', imports: [
                    FormsModule
                ], template: "<div class=\"kemis-form-wrapper\">\n<form class=\"kemis-form\" (ngSubmit)=\"onSubmit()\" #myForm=\"ngForm\">\n  <h1 class=\"text-center mb-4\">TVET Institution Onboarding Form</h1>\n  <!-- ========================================== -->\n  <!-- Section 1: Institution Details                -->\n  <!-- ========================================== -->\n  <fieldset class=\"mb-4 p-3 border rounded\">\n    <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 1: Institution Details</legend>\n    \n    <div class=\"row g-3\">\n      <!-- Text Input -->\n      <div class=\"col-md-6\">\n        <label for=\"fullName\" class=\"form-label fw-semibold\">Institution Name</label>\n        <input type=\"text\" class=\"form-control\" id=\"fullName\" name=\"fullName\" placeholder=\"e.g. John Doe\" required>\n      </div>\n\n      <!-- Dropdown -->\n      <div class=\"col-md-6\">\n        <label for=\"gender\" class=\"form-label fw-semibold\">Gender</label>\n        <select class=\"form-select\" id=\"gender\" name=\"gender\" required>\n          <option value=\"\" disabled selected>Select gender</option>\n          <option value=\"Male\">Male</option>\n          <option value=\"Female\">Female</option>\n          <option value=\"Other\">Other</option>\n        </select>\n      </div>\n\n      <!-- Boolean Toggle (Switch) -->\n      <div class=\"col-12 mt-3\">\n        <div class=\"form-check form-switch\">\n          <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"isActive\" name=\"isActive\" checked>\n          <label class=\"form-check-label fw-semibold\" for=\"isActive\">Account is Active</label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <!-- ========================================== -->\n  <!-- SECTION 2: Coordinates            -->\n  <!-- ========================================== -->\n  <fieldset class=\"mb-4 p-3 border rounded\">\n    <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 2: Contact Information</legend>\n    \n    <div class=\"row g-3\">\n      <!-- Text Input -->\n      <div class=\"col-md-6\">\n        <label for=\"emailId\" class=\"form-label fw-semibold\">Email Address</label>\n        <input type=\"emailId\" class=\"form-control\" id=\"emailId\" name=\"emailId\" placeholder=\"name@example.com\" required>\n      </div>\n\n      <!-- Dropdown -->\n      <div class=\"col-md-6\">\n        <label for=\"county\" class=\"form-label fw-semibold\">County</label>\n        <select class=\"form-select\" id=\"county\" name=\"county\" required>\n          <option value=\"\" disabled selected>Select county</option>\n          <option value=\"Nairobi\">Nairobi</option>\n          <option value=\"Mombasa\">Mombasa</option>\n          <option value=\"Kisumu\">Kisumu</option>\n        </select>\n      </div>\n\n      <!-- Boolean Toggle -->\n      <div class=\"col-12 mt-3\">\n        <div class=\"form-check form-switch\">\n          <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"receiveSms\" name=\"receiveSms\">\n          <label class=\"form-check-label fw-semibold\" for=\"receiveSms\">Receive SMS Notifications</label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <!-- ========================================== -->\n  <!-- SECTION 3: Other Details                -->\n  <!-- ========================================== -->\n  <fieldset class=\"mb-4 p-3 border rounded\">\n    <legend class=\"float-none w-auto px-2 fs-5 fw-bold text-primary\">Section 3: Other Details</legend>\n    \n    <div class=\"row g-3\">\n      <!-- Text Input -->\n      <div class=\"col-md-6\">\n        <label for=\"username\" class=\"form-label fw-semibold\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" placeholder=\"Enter username\" required>\n      </div>\n\n      <!-- Dropdown -->\n      <div class=\"col-md-6\">\n        <label for=\"role\" class=\"form-label fw-semibold\">Role</label>\n        <select class=\"form-select\" id=\"role\" name=\"role\" required>\n          <option value=\"\" disabled selected>Select role</option>\n          <option value=\"Admin\">Admin</option>\n          <option value=\"IT Officer\">IT Officer</option>\n          <option value=\"Head of Institution (HOI)\">Head of Institution (HOI)</option>\n        </select>\n      </div>\n\n      <!-- Boolean Toggle -->\n      <div class=\"col-12 mt-3\">\n        <div class=\"form-check form-switch\">\n          <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\" id=\"isSuperAdmin\" name=\"isSuperAdmin\">\n          <label class=\"form-check-label fw-semibold\" for=\"isSuperAdmin\">Grant Super Admin Privileges</label>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n\n  <!-- Submit Button -->\n  <div class=\"d-grid gap-2 mt-4\">\n    <button type=\"submit\" class=\"btn btn-primary btn-lg\">Save Record</button>\n  </div>\n\n</form>\n</div>", styles: ["/* ============================================\r\n   KEMIS FORM STYLING\r\n   ============================================ */\r\n\r\n/* Form wrapper to give it breathing room on the page */\r\n.kemis-form-wrapper {\r\n  max-width: 900px;\r\n  margin: 2rem auto;\r\n  padding: 2.5rem;\r\n  background: var(--kemis-white);\r\n  border-radius: var(--border-radius);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  border-top: 4px solid var(--kemis-primary);\r\n}\r\n\r\n/* ============================================\r\n   FIELDSETS (Sections)\r\n   ============================================ */\r\n.kemis-form fieldset {\r\n  background: var(--kemis-section-bg);\r\n  border: 1px solid var(--kemis-border) !important;\r\n  border-radius: var(--border-radius);\r\n  padding: 1.5rem !important;\r\n  margin-bottom: 2rem !important;\r\n  transition: box-shadow 0.3s ease;\r\n}\r\n\r\n.kemis-form fieldset:hover {\r\n  box-shadow: var(--kemis-shadow);\r\n}\r\n\r\n/* The Section Title (Legend) */\r\n.kemis-form legend {\r\n  font-size: 1.15rem;\r\n  font-weight: 700;\r\n  color: var(--kemis-dark-blue);\r\n  background: var(--kemis-white);\r\n  padding: 0.25rem 1rem;\r\n  border-radius: 50px;\r\n  border: 1px solid var(--kemis-border);\r\n  box-shadow: var(--kemis-shadow);\r\n  margin-bottom: 0;\r\n}\r\n\r\n/* ============================================\r\n   LABELS & INPUTS\r\n   ============================================ */\r\n.kemis-form .form-label {\r\n  color: var(--kemis-dark);\r\n  font-size: 0.95rem;\r\n  margin-bottom: 0.4rem;\r\n}\r\n\r\n.kemis-form .form-control,\r\n.kemis-form .form-select {\r\n  border: 1px solid var(--kemis-border);\r\n  border-radius: var(--border-radius);\r\n  padding: 0.6rem 0.85rem;\r\n  font-size: 0.95rem;\r\n  color: var(--kemis-black);\r\n  background-color: var(--kemis-white);\r\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n/* Focus State */\r\n.kemis-form .form-control:focus,\r\n.kemis-form .form-select:focus {\r\n  border-color: var(--kemis-primary);\r\n  box-shadow: 0 0 0 0.25rem rgba(63, 190, 235, 0.25); /* --kemis-primary with opacity */\r\n  outline: none;\r\n}\r\n\r\n/* Placeholder text */\r\n.kemis-form .form-control::placeholder {\r\n  color: var(--kemis-secondary);\r\n  opacity: 0.7;\r\n}\r\n\r\n/* ============================================\r\n   BOOLEAN TOGGLES (Switches)\r\n   ============================================ */\r\n.kemis-form .form-check-input {\r\n  cursor: pointer;\r\n  border-color: var(--kemis-secondary);\r\n  width: 2.5em;\r\n  height: 1.25em;\r\n}\r\n\r\n.kemis-form .form-check-input:checked {\r\n  background-color: var(--kemis-primary);\r\n  border-color: var(--kemis-primary);\r\n}\r\n\r\n.kemis-form .form-check-input:focus {\r\n  border-color: var(--kemis-primary);\r\n  box-shadow: 0 0 0 0.25rem rgba(63, 190, 235, 0.25);\r\n  outline: none;\r\n}\r\n\r\n.kemis-form .form-check-label {\r\n  cursor: pointer;\r\n  color: var(--kemis-dark);\r\n  margin-top: 0.15rem;\r\n}\r\n\r\n/* ============================================\r\n   SUBMIT BUTTON\r\n   ============================================ */\r\n.kemis-form .btn-primary {\r\n  background: linear-gradient(135deg, var(--kemis-primary) 0%, var(--kemis-blue) 100%);\r\n  border: none;\r\n  border-radius: var(--border-radius);\r\n  font-weight: 600;\r\n  letter-spacing: 0.5px;\r\n  padding: 0.8rem 2rem;\r\n  color: var(--kemis-white);\r\n  box-shadow: var(--kemis-shadow);\r\n  transition: all 0.25s ease;\r\n}\r\n\r\n.kemis-form .btn-primary:hover {\r\n  background: linear-gradient(135deg, var(--kemis-primary-dark) 0%, var(--kemis-dark-blue) 100%);\r\n  box-shadow: var(--kemis-shadow-lg);\r\n  transform: translateY(-2px);\r\n}\r\n\r\n.kemis-form .btn-primary:active {\r\n  transform: translateY(0);\r\n}\r\n\r\n/* ============================================\r\n   RESPONSIVE ADJUSTMENTS\r\n   ============================================ */\r\n@media (max-width: 767.98px) {\r\n  .kemis-form-wrapper {\r\n    margin: 1rem;\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  .kemis-form fieldset {\r\n    padding: 1rem !important;\r\n  }\r\n\r\n  .kemis-form legend {\r\n    font-size: 1rem;\r\n  }\r\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(Tvet, { className: "Tvet", filePath: "app/pages/tvet/tvet.ts", lineNumber: 12 }); })();
