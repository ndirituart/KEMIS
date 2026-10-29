import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { subCountyQAGuard } from './sub-county-qa-guard';

describe('subCountyQAGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => subCountyQAGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
