import { Component } from '@angular/core';
import { Room } from 'src/app/room.model';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent {

  rooms: Room[] = [      
    new Room('0552',75),
    new Room('4998',155),
    new Room('186',50)
  ];


  constructor() {
  }

  addRoom(number: HTMLInputElement, price: HTMLInputElement): boolean {
    console.log(`Adding room with name: ${number.value} and price: ${price.value}`);
    this.rooms.push(new Room(number.value, Number(price.value)));
    number.value = '';
    price.value = '';
    return false;
}
}
