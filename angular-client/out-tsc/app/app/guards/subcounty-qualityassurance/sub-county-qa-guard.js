import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const subCountyQAGuard = (route) => {
    const role = route.parent?.data['allowedRoles'];
    if (localStorage.getItem('token') && localStorage.getItem('userRole')?.trim() === role) {
        return true;
    }
    return inject(Router).createUrlTree(['/login']);
};
