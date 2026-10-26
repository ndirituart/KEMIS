import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountyQualityAssurance } from './county-quality-assurance';

describe('CountyQualityAssurance', () => {
  let component: CountyQualityAssurance;
  let fixture: ComponentFixture<CountyQualityAssurance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountyQualityAssurance],
    }).compileComponents();

    fixture = TestBed.createComponent(CountyQualityAssurance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
