import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-offers',
  templateUrl: './item-offers.component.html',
  styleUrls: ['./item-offers.component.css']
})
export class ItemOffersComponent {
  @Input() offerDescription: string;

  constructor() {
    this.offerDescription = "test offer";
  }
}
