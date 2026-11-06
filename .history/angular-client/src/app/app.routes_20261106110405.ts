import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Aboutus } from './pages/aboutus/aboutus';
import { Systemmodules } from './pages/systemmodules/systemmodules';
import { Resources } from './pages/resources/resources';
import { Support } from './pages/support/support';
import { Faqs } from './pages/faqs/faqs';
import { InstitutionOnboardingComponent } from './pages/institution-onboarding/institution-onboarding';
import { BasicEducation } from './pages/basic-education/basic-education';
import { Tvet } from './pages/tvet/tvet';
import { HigherEducation } from './pages/higher-education/higher-education';
import { SchoolDashboard } from './pages/school-dashboard/school-dashboard';
import { HeadOfInstitution } from './pages/head-of-institution/head-of-institution';
// 2. System User CDE and their child routes
import { CountyEducation } from './pages/county-education/county-education';
import {InstitutionRegisteredCounty} from './pages/institution-registered-county/institution-registered-county';
import { LearnersPerGradeCounty } from './pages/learners-per-grade-county/learners-per-grade-county';
import { LearnersRegisteredCounty } from './pages/learners-registered-county/learners-registered-county';
import { PendingInstitutionCounty } from './pages/pending-institution-county/pending-institution-county';
// 3. System User SCDE and their child routes
import { SubCountyEducation } from './pages/sub-county-education/sub-county-education';
import { SubCountyQualityAssurance } from './pages/sub-county-quality-assurance/sub-county-quality-assurance';
import { SuperAdmin } from './pages/super-admin/super-admin';
//guards for routes
import { adminGuard } from './guards/admin/admin-guard';
import { cDEGuard } from './guards/cde/cde-guard';
import { sCDEGuard } from './guards/scde/s-cde-guard';
import { hOIGuard } from './guards/hoi/hoi-guard';
import { schoolDashboardGuard } from './guards/school-dashboard/school-dashboard-guard';
import { subCountyQAGuard } from './guards/subcounty-qualityassurance/sub-county-qa-guard';


export const routes: Routes = [
  //{ path: '/', component: Layout}, //making this the default
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'aboutus', component: Aboutus },
  { path: 'systemmodules', component: Systemmodules},
  { path: 'resources', component: Resources},
  { path: 'support', component: Support},
  { path: 'faqs', component: Faqs },
  { path: 'institution-onboarding', component: InstitutionOnboardingComponent},
  { path: 'basic-education', component: BasicEducation},
  { path: 'tvet', component: Tvet},
  { path: 'higher-education', component: HigherEducation },
  { path: 'school-dashboard', component: SchoolDashboard, canActivate: [schoolDashboardGuard], data:{ allowedRoles: ['IT Officer', 'Deputy Principal', 'Teacher'] }  },
  { path: 'head-of-institution', component: HeadOfInstitution, canActivate: [hOIGuard], data: { allowedRoles: 'Head of Institution (HOI)'} },
  //CDE children pages
  { path: 'county-education', component: CountyEducation, canActivate:[cDEGuard], data:{ allowedRoles: 'County Director of Education (CDE)'} },
  { path: 'institution-registered-county', component: InstitutionRegisteredCounty,canActivate:[cDEGuard], data:{ allowedRoles: 'County Director of Education (CDE)'} },
  { path: 'learners-per-grade-county', component: LearnersPerGradeCounty, canActivate:[cDEGuard], data:{ allowedRoles: 'County Director of Education (CDE)'} },
  { path: 'learners-registered-county', component: LearnersRegisteredCounty, canActivate:[cDEGuard], data:{ allowedRoles: 'County Director of Education (CDE)'} },
  { path: 'pending-institution-county', component: PendingInstitutionCounty, canActivate:[cDEGuard], data:{ allowedRoles: 'County Director of Education (CDE)'} },
  { path: 'sub-county-education', component: SubCountyEducation, canActivate: [sCDEGuard], data: { allowedRoles: 'Sub-County Director of Education (SCDE)' } },
  { path: 'sub-county-quality-assurance', component: SubCountyQualityAssurance, canActivate: [subCountyQAGuard], data: { allowedRoles: 'Sub-County Quality Assurance and Standards Officer (SCQASO)' } },
  { path: 'super-admin', component: SuperAdmin,  canActivate: [adminGuard],  data: {  allowedRoles: 'Admin' }  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
