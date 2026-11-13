import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { LearnersInstitution } from './learners-institution';

describe('LearnersInstitution', () => {
  let component: LearnersInstitution;
  let fixture: ComponentFixture<LearnersInstitution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersInstitution],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnersInstitution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
