import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const cDEGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role'); // fetched from Login.ts

  if (role === 'County Director of Education (CDE)') {
    return true;
  }
  
  // If not a CDE, kick them back to login
  router.navigate(['/login']);
  return false;
};