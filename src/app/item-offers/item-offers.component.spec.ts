import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOffersComponent } from './item-offers.component';

describe('ItemOffersComponent', () => {
  let component: ItemOffersComponent;
  let fixture: ComponentFixture<ItemOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemOffersComponent]
    });
    fixture = TestBed.createComponent(ItemOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
