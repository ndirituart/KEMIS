import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectedSchools } from './inspected-schools';

describe('InspectedSchools', () => {
  let component: InspectedSchools;
  let fixture: ComponentFixture<InspectedSchools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspectedSchools],
    }).compileComponents();

    fixture = TestBed.createComponent(InspectedSchools);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
