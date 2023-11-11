import { Component } from '@angular/core';
import { Room } from 'src/app/room.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent {

  rooms: Room[] = [      
    new Room('0552',75, true, true),
    new Room('4998',155, true, false),
    new Room('186',50, false, false)
  ];


  constructor() {
  }

  addRoom(f:NgForm, number: HTMLInputElement, price: HTMLInputElement, minibar: HTMLInputElement, spa: HTMLInputElement) {
    if(f.valid){
      let calculatedPrice : number = (Number(price.value));


      console.log(`Adding room with name: ${number.value} and price: ${calculatedPrice}`);
      this.rooms.push(new Room(number.value, Number(price.value), minibar.checked, spa.checked));
      number.value = '';
      price.value = '';
    }
    else {
      console.log("Form not validated!");
    }

  }
}
