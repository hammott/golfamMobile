import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './basicComponent/index/index.component';
import { TicketComponent } from './basicComponent/ticket/ticket.component';
import { HotelComponent } from './basicComponent/hotel/hotel.component';
import { TourComponent } from './basicComponent/tour/tour.component';
import { ContactComponent } from './basicComponent/contact/contact.component';
import { ProfileComponent } from './basicComponent/profile/profile.component';
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'hotel',
    component: HotelComponent
  },
  {
    path: 'tour',
    component: TourComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
