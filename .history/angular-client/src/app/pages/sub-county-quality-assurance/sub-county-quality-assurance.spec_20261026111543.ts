import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCountyQualityAssurance } from './sub-county-quality-assurance';

describe('SubCountyQualityAssurance', () => {
  let component: SubCountyQualityAssurance;
  let fixture: ComponentFixture<SubCountyQualityAssurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCountyQualityAssurance],
    }).compileComponents();

    fixture = TestBed.createComponent(SubCountyQualityAssurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
