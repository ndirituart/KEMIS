import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfInstitution } from './head-of-institution';

describe('HeadOfInstitution', () => {
  let component: HeadOfInstitution;
  let fixture: ComponentFixture<HeadOfInstitution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadOfInstitution],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadOfInstitution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
