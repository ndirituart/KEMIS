import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const subCountyQAGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const role = localStorage.getItem('role'); // The role we saved in Login.ts

  if (role === 'Sub-County Quality Assurance and Standards Officer (SCQASO)') {
    return true;
  }
  
  // If not SCQASO, kick them back to login
  router.navigate(['/login']);
  return false;
};