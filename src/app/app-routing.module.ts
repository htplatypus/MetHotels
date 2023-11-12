import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { OffersComponent } from './list-offers/list-offers.component';
import { AboutComponent } from './about/about.component';
import { RoomModifierComponent } from './room-modifier/room-modifier.component';

const routes: Routes = [
  { path: 'rooms', component: ListRoomsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'modify/:id', component: RoomModifierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
