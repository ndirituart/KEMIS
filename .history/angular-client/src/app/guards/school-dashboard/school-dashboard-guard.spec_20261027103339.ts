import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { schoolDashboardGuard } from './school-dashboard-guard';
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('schoolDashboardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => schoolDashboardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
