import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketComponent } from './basicComponent/ticket/ticket.component';
import { HotelComponent } from './basicComponent/hotel/hotel.component';
import { TourComponent } from './basicComponent/tour/tour.component';
import { ContactComponent } from './basicComponent/contact/contact.component';
import { ProfileComponent } from './basicComponent/profile/profile.component';
import { IndexComponent } from './basicComponent/index/index.component';
import { HeaderComponent } from './headerComponent/header/header.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { MenuComponent } from './headerComponent/menu/menu.component'



import { TabsComponent } from './searchboxComponent/tabs/tabs.component';
import { IntFlightComponent } from './searchboxComponent/int-flight/int-flight.component';
import { DomFlightComponent } from './searchboxComponent/dom-flight/dom-flight.component';
import { TourSearchComponent } from './searchboxComponent/tour-search/tour-search.component';
import { HotelSearchComponent } from './searchboxComponent/hotel-search/hotel-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    HotelComponent,
    TourComponent,
    ContactComponent,
    ProfileComponent,
    IndexComponent,
    HeaderComponent,
    MenuComponent,
    TabsComponent,
    IntFlightComponent,
    DomFlightComponent,
    TourSearchComponent,
    HotelSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule { }
