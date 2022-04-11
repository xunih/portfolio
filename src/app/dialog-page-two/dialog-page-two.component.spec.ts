import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPageTwoComponent } from './dialog-page-two.component';

describe('DialogPageTwoComponent', () => {
  let component: DialogPageTwoComponent;
  let fixture: ComponentFixture<DialogPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
