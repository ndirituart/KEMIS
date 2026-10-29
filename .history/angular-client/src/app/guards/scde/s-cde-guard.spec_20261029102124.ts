import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const sCDEGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role'); // fetched from Login.ts

  if (role === 'Head of Institution (HOI)') {
    return true;
  }
  
  // If not HOI, kick them back to login
  router.navigate(['/login']);
  return false;
};