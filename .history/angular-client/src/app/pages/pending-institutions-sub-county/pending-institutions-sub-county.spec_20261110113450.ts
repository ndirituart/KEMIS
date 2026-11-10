import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInstitutionsSubCounty } from './pending-institutions-sub-county';

describe('PendingInstitutionsSubCounty', () => {
  let component: PendingInstitutionsSubCounty;
  let fixture: ComponentFixture<PendingInstitutionsSubCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingInstitutionsSubCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(PendingInstitutionsSubCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
