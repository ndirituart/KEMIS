import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { InstitutionsRegisteredSubCounty } from './institutions-registered-sub-county';

describe('InstitutionsRegisteredSubCounty', () => {
  let component: InstitutionsRegisteredSubCounty;
  let fixture: ComponentFixture<InstitutionsRegisteredSubCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstitutionsRegisteredSubCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutionsRegisteredSubCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
