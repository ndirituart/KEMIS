import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersPerGradeCounty } from './learners-per-grade-county';

describe('LearnersPerGradeCounty', () => {
  let component: LearnersPerGradeCounty;
  let fixture: ComponentFixture<LearnersPerGradeCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersPerGradeCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnersPerGradeCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
