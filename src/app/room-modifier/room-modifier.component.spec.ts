import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomModifierComponent } from './room-modifier.component';

describe('RoomModifierComponent', () => {
  let component: RoomModifierComponent;
  let fixture: ComponentFixture<RoomModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomModifierComponent]
    });
    fixture = TestBed.createComponent(RoomModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
