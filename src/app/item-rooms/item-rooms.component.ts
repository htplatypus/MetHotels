import { Component, Input } from '@angular/core';
import { Room } from 'src/app/room.model';

@Component({
  selector: 'app-item-rooms',
  templateUrl: './item-rooms.component.html',
  styleUrls: ['./item-rooms.component.css']
})
export class ItemRoomsComponent {
  @Input() room: Room;

  constructor() {
    this.room = new Room('0451', 123);
  }
}
