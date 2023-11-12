import { Injectable } from '@angular/core';
import { Room } from 'src/app/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  constructor() { }

  getPrice(room : Room, nights : number) : number {
    
    let price = room.price * nights;
    
    if(room.minibar){
      price = price + 10;
      
    }
    if (room.spa) {
      price = price + 27;
    }

    return price;
  }
}
