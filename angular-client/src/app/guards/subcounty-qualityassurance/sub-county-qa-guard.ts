import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const subCountyQAGuard: CanActivateChildFn = (route) => {
  const role = route.parent?.data['allowedRoles'];
  if (localStorage.getItem('token') && localStorage.getItem('userRole')?.trim() === role) {
    return true;
  }

  return inject(Router).createUrlTree(['/login']);
};
