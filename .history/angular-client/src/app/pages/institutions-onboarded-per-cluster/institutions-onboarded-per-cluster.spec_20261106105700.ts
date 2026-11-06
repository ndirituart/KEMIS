import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { InstitutionsOnboardedPerCluster } from './institutions-onboarded-per-cluster';

describe('InstitutionsOnboardedPerCluster', () => {
  let component: InstitutionsOnboardedPerCluster;
  let fixture: ComponentFixture<InstitutionsOnboardedPerCluster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionsOnboardedPerCluster],
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutionsOnboardedPerCluster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
