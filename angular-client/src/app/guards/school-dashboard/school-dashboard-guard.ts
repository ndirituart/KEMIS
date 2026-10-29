import { CanActivateFn } from '@angular/router';

export const schoolDashboardGuard: CanActivateFn = (route, state) => {
  return true;
};
