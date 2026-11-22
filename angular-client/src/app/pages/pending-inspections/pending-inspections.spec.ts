import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingInspections } from './pending-inspections';

describe('PendingInspections', () => {
  let component: PendingInspections;
  let fixture: ComponentFixture<PendingInspections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingInspections],
    }).compileComponents();

    fixture = TestBed.createComponent(PendingInspections);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
