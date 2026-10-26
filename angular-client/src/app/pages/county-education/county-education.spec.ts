import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyEducation } from './county-education';

describe('CountyEducation', () => {
  let component: CountyEducation;
  let fixture: ComponentFixture<CountyEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountyEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(CountyEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
