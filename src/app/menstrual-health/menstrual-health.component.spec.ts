import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenstrualHealthComponent } from './menstrual-health.component';

describe('MenstrualHealthComponent', () => {
  let component: MenstrualHealthComponent;
  let fixture: ComponentFixture<MenstrualHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenstrualHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenstrualHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
