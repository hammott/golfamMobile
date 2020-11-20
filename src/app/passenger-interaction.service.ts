import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Passenger } from './generalComponent/passenger-select/passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerInteractionService {

  private _passenger = new BehaviorSubject<Passenger>(null)
  constructor() { }



  loadPassenger(passenger:Passenger){
    this._passenger.next(passenger)
  }

  getPassenger(): Observable<Passenger>{
    return this._passenger.asObservable();
  }



}
