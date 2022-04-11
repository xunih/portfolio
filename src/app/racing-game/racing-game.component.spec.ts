import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacingGameComponent } from './racing-game.component';

describe('RacingGameComponent', () => {
  let component: RacingGameComponent;
  let fixture: ComponentFixture<RacingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
