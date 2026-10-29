import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminGuard } from './admin-guard';
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('adminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => adminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

//admin roles
export class YourRoleNameGuard implements CanActivate {
  canActivate() {
    const role = localStorage.getItem("role");
    if (role == "YourRoleName") {
      return true;
    }
    return false;
  }