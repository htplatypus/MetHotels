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
    new Room('0552',75),
    new Room('4998',155),
    new Room('186',50)
  ];


  constructor() {
  }

  addRoom(f:NgForm, number: HTMLInputElement, price: HTMLInputElement, minibar: HTMLInputElement, spa: HTMLInputElement) {
    if(f.valid){
      let calculatedPrice : number = (Number(price.value));

      if(minibar.checked){
        calculatedPrice = calculatedPrice + 10;
      }
      if (spa.checked) {
        calculatedPrice = calculatedPrice + 27;
      }

      console.log(`Adding room with name: ${number.value} and price: ${calculatedPrice}`);
      this.rooms.push(new Room(number.value, calculatedPrice));
      number.value = '';
      price.value = '';
    }
    else {
      console.log("Form not validated!");
    }

  }
}
