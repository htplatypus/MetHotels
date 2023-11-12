import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/room.model';
import { RoomServiceService } from '../RoomService/room-service.service';
import { RoomDBService } from '../RoomDBService/room-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-rooms',
  templateUrl: './item-rooms.component.html',
  styleUrls: ['./item-rooms.component.css']
})
export class ItemRoomsComponent implements OnInit{
  @Input() room: Room;
  totalPrice : number = 0;
  selectedNights: number = 1;

  constructor(private RoomServiceService: RoomServiceService, private roomDBService : RoomDBService, private router: Router) { //dependency injection
    this.room = new Room('0451', 123, true, true);
  }

  calculatePrice(){
    this.totalPrice = this.RoomServiceService.getPrice(this.room, this.selectedNights);
    console.log(this.totalPrice);
  }

  ngOnInit(): void {
    this.calculatePrice();
  }

  deleteRoom(){
    this.roomDBService.deleteRoom(Number(this.room.id));
    console.log("Deleted room");
  }
}
