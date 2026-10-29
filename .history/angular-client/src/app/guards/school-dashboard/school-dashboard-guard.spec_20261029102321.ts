import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const schoolDashboardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role'); // The role we saved in Login.ts

  if (role === 'IT Officer' || role === 'Deputy Principal' || role === 'Teacher') {
    return true;
  }
  
  // If not admin, kick them back to login
  router.navigate(['/login']);
  return false;
};