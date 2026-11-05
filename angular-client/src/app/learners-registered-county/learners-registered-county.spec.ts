import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersRegisteredCounty } from './learners-registered-county';

describe('LearnersRegisteredCounty', () => {
  let component: LearnersRegisteredCounty;
  let fixture: ComponentFixture<LearnersRegisteredCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersRegisteredCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnersRegisteredCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
