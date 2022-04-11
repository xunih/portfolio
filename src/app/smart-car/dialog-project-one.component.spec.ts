import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProjectOneComponent } from './dialog-project-one.component';

describe('DialogProjectOneComponent', () => {
  let component: DialogProjectOneComponent;
  let fixture: ComponentFixture<DialogProjectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProjectOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProjectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
