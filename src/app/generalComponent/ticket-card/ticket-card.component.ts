import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {
  public flightIMG1 = 'assets/img/logo1.jpg'
  public flightIMG2 = 'assets/img/logo2.jpg'
  public flightIMG3 = 'assets/img/logo3.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
