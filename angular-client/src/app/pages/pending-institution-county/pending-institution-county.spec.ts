import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { PendingInstitutionCounty } from './pending-institution-county';

describe('PendingInstitutionCounty', () => {
  let component: PendingInstitutionCounty;
  let fixture: ComponentFixture<PendingInstitutionCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingInstitutionCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(PendingInstitutionCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
