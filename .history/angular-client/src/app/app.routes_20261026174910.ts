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
import { CountyEducation } from './pages/county-education/county-education';
import { SubCountyEducation } from './pages/sub-county-education/sub-county-education';
import { SuperAdmin } from './pages/super-admin/super-admin';
import { adminGuard } from './admin-guard';

  
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
  { path: 'school-dashboard', component: SchoolDashboard },
  { path: 'head-of-instituion', component: HeadOfInstitution },
  { path: 'county-education', component: CountyEducation },
  { path: 'sub-county-education', component: SubCountyEducation },
   { path: 'super-admin', component: SuperAdmin,  canActivate: [adminGuard],  data: { 
      roleCode: 'admin'
  }  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];
