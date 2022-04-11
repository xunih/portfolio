import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OasisComponent } from './oasis.component';

describe('OasisComponent', () => {
  let component: OasisComponent;
  let fixture: ComponentFixture<OasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
