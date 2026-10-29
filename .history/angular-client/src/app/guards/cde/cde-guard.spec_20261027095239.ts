import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { cDEGuard } from './cde-guard';

describe('cDEGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => cDEGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
