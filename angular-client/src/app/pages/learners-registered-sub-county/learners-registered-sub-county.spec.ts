import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { LearnersRegisteredSubCounty } from './learners-registered-sub-county';

describe('LearnersRegisteredSubCounty', () => {
  let component: LearnersRegisteredSubCounty;
  let fixture: ComponentFixture<LearnersRegisteredSubCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersRegisteredSubCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnersRegisteredSubCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
