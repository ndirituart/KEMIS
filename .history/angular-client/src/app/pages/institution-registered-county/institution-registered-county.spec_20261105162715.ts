import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { InstitutionsRegisteredCounty } from './institution-registered-county';

describe('InstitutionRegisteredCounty', () => {
  let component: InstitutionsRegisteredCounty;
  let fixture: ComponentFixture<InstitutionsRegisteredCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionsRegisteredCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutionsRegisteredCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
