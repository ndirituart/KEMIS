import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { sCDEGuard } from './s-cde-guard';

describe('sCDEGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => sCDEGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
