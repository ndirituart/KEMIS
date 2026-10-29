import { CanActivateFn } from '@angular/router';

export const hOIGuard: CanActivateFn = (route, state) => {
  return true;
};
