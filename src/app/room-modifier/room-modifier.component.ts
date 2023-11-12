import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Room } from 'src/app/room.model';
import { ActivatedRoute } from '@angular/router'
import { RoomDBService } from '../RoomDBService/room-db.service';

@Component({
  selector: 'app-room-modifier',
  templateUrl: './room-modifier.component.html',
  styleUrls: ['./room-modifier.component.css']
})
export class RoomModifierComponent {

  id : number = -1;
  roomToUpdate : Room = new Room("",0,true,true);

  constructor(private http: HttpClient, private route: ActivatedRoute, private roomDBService : RoomDBService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.roomDBService.getRoom(this.id).subscribe(room => {
      this.roomToUpdate = room;
    })
  }

  modifyRoom() {
    this.roomDBService.modifyRoom(this.id, this.roomToUpdate).subscribe(()=> {
      console.log("updated!")
      console.log(this.roomToUpdate);
    });
  }
}
