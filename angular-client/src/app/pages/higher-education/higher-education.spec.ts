import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherEducation } from './higher-education';

describe('HigherEducation', () => {
  let component: HigherEducation;
  let fixture: ComponentFixture<HigherEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HigherEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(HigherEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
