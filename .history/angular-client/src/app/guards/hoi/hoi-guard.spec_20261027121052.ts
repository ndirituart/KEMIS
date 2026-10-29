import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { beforeEach, describe, expect, it } from '@jest/globals';
import { hOIGuard } from './hoi-guard';

describe('hOIGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => hOIGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
