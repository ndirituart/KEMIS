import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tvet } from './tvet';

describe('Tvet', () => {
  let component: Tvet;
  let fixture: ComponentFixture<Tvet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tvet],
    }).compileComponents();

    fixture = TestBed.createComponent(Tvet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
