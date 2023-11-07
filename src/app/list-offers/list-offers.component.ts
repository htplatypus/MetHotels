import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class OffersComponent {
  offers: string[] = ["Example Offer 1", "Example Offer 2", "Example Offer 3"];
}
