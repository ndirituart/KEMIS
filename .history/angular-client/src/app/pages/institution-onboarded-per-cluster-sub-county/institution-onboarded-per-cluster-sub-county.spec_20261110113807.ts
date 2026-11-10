import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionOnboardedPerClusterSubCounty } from './institution-onboarded-per-cluster-sub-county';

describe('InstitutionOnboardedPerClusterSubCounty', () => {
  let component: InstitutionOnboardedPerClusterSubCounty;
  let fixture: ComponentFixture<InstitutionOnboardedPerClusterSubCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionOnboardedPerClusterSubCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutionOnboardedPerClusterSubCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
