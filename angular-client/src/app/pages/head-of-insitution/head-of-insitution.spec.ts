import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfInsitution } from './head-of-insitution';

describe('HeadOfInsitution', () => {
  let component: HeadOfInsitution;
  let fixture: ComponentFixture<HeadOfInsitution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadOfInsitution],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadOfInsitution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
