import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCountyEducation } from './sub-county-education';

describe('SubCountyEducation', () => {
  let component: SubCountyEducation;
  let fixture: ComponentFixture<SubCountyEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCountyEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(SubCountyEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
