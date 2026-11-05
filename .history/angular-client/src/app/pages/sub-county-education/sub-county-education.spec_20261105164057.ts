import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { ScdeReport } from './sub-county-education';

describe('ScdeReport', () => {
  let component: ScdeReport;
  let fixture: ComponentFixture<ScdeReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScdeReport],
    }).compileComponents();

    fixture = TestBed.createComponent(ScdeReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
