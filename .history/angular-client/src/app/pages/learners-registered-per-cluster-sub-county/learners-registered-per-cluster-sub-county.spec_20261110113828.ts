import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersRegisteredPerClusterSubCounty } from './learners-registered-per-cluster-sub-county';

describe('LearnersRegisteredPerClusterSubCounty', () => {
  let component: LearnersRegisteredPerClusterSubCounty;
  let fixture: ComponentFixture<LearnersRegisteredPerClusterSubCounty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersRegisteredPerClusterSubCounty],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnersRegisteredPerClusterSubCounty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
