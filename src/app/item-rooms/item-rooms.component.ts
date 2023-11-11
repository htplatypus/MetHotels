import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/room.model';
import { RoomServiceService } from '../room-service.service';

@Component({
  selector: 'app-item-rooms',
  templateUrl: './item-rooms.component.html',
  styleUrls: ['./item-rooms.component.css']
})
export class ItemRoomsComponent implements OnInit{
  @Input() room: Room;
  totalPrice : number = 0;
  selectedNights: number = 1;

  constructor(private RoomServiceService: RoomServiceService) { //dependency injection
    this.room = new Room('0451', 123, true, true);
  }

  calculatePrice(){
    this.totalPrice = this.RoomServiceService.getPrice(this.room, this.selectedNights);
    console.log(this.totalPrice);
  }

  ngOnInit(): void {
      this.calculatePrice();
  }
}
