import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Systemmodules } from './systemmodules';

describe('Systemmodules', () => {
  let component: Systemmodules;
  let fixture: ComponentFixture<Systemmodules>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Systemmodules],
    }).compileComponents();

    fixture = TestBed.createComponent(Systemmodules);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
