import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRoomsComponent } from './item-rooms.component';

describe('ItemRoomsComponent', () => {
  let component: ItemRoomsComponent;
  let fixture: ComponentFixture<ItemRoomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemRoomsComponent]
    });
    fixture = TestBed.createComponent(ItemRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
