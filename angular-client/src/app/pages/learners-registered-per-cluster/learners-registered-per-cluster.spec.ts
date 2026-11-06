import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersRegisteredPerCluster } from './learners-registered-per-cluster';

describe('LearnersRegisteredPerCluster', () => {
  let component: LearnersRegisteredPerCluster;
  let fixture: ComponentFixture<LearnersRegisteredPerCluster>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnersRegisteredPerCluster],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnersRegisteredPerCluster);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
