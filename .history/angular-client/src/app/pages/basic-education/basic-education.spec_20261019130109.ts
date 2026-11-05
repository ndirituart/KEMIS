import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEducation } from './basic-education';

describe('BasicEducation', () => {
  let component: BasicEducation;
  let fixture: ComponentFixture<BasicEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
