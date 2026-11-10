import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { OrphanLearnersSubCounty } from './orphan-learners-sub-county';

describe('OrphanLearnersSubCounty', () => {
  let component: OrphanLearnersSubCounty;
  let fixture: ComponentFixture<OrphanLearnersSubCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrphanLearnersSubCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(OrphanLearnersSubCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
