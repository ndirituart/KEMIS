import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { Aboutus } from './pages/aboutus/aboutus';
import { Systemmodules } from './pages/systemmodules/systemmodules';
import { Resources } from './pages/resources/resources';
import { Support } from './pages/support/support';
import { Faqs } from './pages/faqs/faqs';


export const routes: Routes = [
  { path: '/' component: Layout}, //making this the default
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard }, 
  { path: 'aboutus', component: Aboutus },
  { path: 'systemmodules', component: Systemmodules},
  { path: 'resources', component: Resources},
  { path: 'support', component: Support},
  { path: 'faqs', component: Faqs},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
