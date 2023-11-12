import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from 'src/app/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomDBService {

  constructor(private http : HttpClient) { }

  getAllRooms(): Observable<Room[]> {
    const url : string = "http://localhost:3000/rooms";
    return this.http.get<Room[]>(url);
  }

  getRoom(id : number) : Observable<Room> {
    const url : string = "http://localhost:3000/rooms/" + id;
    return this.http.get<Room>(url);
  }

  addRoom(room: Room): Observable<Room> {
    const url : string = "http://localhost:3000/rooms";
    return this.http.post<Room>(url, room);
  }

  deleteRoom(roomId: number): Observable<any> {
    const url : string = "http://localhost:3000/rooms/" + roomId;
    return this.http.delete(url);
  }  

  modifyRoom(roomId: number, updatedRoom: Room): Observable<Room> {
    const url : string = "http://localhost:3000/rooms/" + roomId;
    return this.http.put<Room>(url, updatedRoom);
  }
}
