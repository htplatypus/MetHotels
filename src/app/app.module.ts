import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './list-offers/list-offers.component';
import { AboutComponent } from './about/about.component';
import { ItemRoomsComponent } from './item-rooms/item-rooms.component';
import { ItemOffersComponent } from './item-offers/item-offers.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListRoomsComponent,
    NavbarComponent,
    OffersComponent,
    AboutComponent,
    ItemRoomsComponent,
    ItemOffersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
