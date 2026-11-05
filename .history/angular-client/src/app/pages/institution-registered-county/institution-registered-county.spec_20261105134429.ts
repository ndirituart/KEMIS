import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRegisteredCounty } from './institution-registered-county';

describe('InstitutionRegisteredCounty', () => {
  let component: InstitutionRegisteredCounty;
  let fixture: ComponentFixture<InstitutionRegisteredCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionRegisteredCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutionRegisteredCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
