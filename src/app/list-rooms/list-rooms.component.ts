import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/room.model';
import { NgForm } from '@angular/forms';
import { RoomDBService } from '../RoomDBService/room-db.service';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit{

  rooms: Room[] = [];

  constructor(private roomDBService: RoomDBService) {
  }
  
  ngOnInit(): void {
    this.roomDBService.getAllRooms().subscribe(data => { this.rooms = data; }); //returns observable, must sub
    console.log(this.rooms);
  }

  addRoom(f:NgForm, number: HTMLInputElement, price: HTMLInputElement, minibar: HTMLInputElement, spa: HTMLInputElement) {
    if(f.valid){
      let calculatedPrice : number = (Number(price.value));


      console.log(`Adding room with name: ${number.value} and price: ${calculatedPrice}`);
      let newRoom = new Room(number.value, Number(price.value), minibar.checked, spa.checked);
      this.roomDBService.addRoom(newRoom);
      number.value = '';
      price.value = '';
    }
    else {
      console.log("Form not validated!");
    }

  }
}
