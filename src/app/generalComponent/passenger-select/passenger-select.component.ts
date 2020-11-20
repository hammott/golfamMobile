import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Passenger} from './passenger'
import { PassengerInteractionService } from '../../passenger-interaction.service';
@Component({
  selector: 'passenger-modal',
  templateUrl: './passenger-select.component.html',
  styleUrls: ['./passenger-select.component.css']
})
export class PassengerSelectComponent implements OnInit {

  @Input() isOpenModal;
  @Output() closePassengerModal = new EventEmitter<boolean>();
  @Output() acceptPassenger = new EventEmitter ();

  public passengerModel;
  public passengerDefault
  constructor( private _passengerservice:PassengerInteractionService) { }
  
  ngOnInit(){
    this.minusPlusButton();
    this._passengerservice.getPassenger().subscribe(passenger =>{
      this.passengerModel = passenger;
     
    });
    
  }
  deleted(){
    // this.isOpenModal = false;
    // this.closePassengerModal.emit(this.isOpenModal);
    this.passengerModel.flightClass='economy' ;
    this.passengerModel.flightClassFA= 'اکونوکی';
    this.passengerModel.adult= 1;
    this.passengerModel.child=0;
    this.passengerModel.infant=0;
    this.passengerModel.passenger=1;
    this.passengerModel.text='1 مسافر , اکونومی';

  }
  

  minusPlusButton(){
    document.querySelectorAll('.changeButtonPassenger a').forEach((button)=>{
      button.addEventListener('click',()=>{
        const forInput = button.getAttribute('for');
        const dataType = button.getAttribute('data-type');
        const maxVal = button.parentNode.querySelector('input').getAttribute('max');
        const minVal = button.parentNode.querySelector('input').getAttribute('min');
        
        if( dataType == "plus" ){
          if(forInput == 'adult'){
            this.passengerModel.adult ++;
          }
          if(forInput == 'child'){
            this.passengerModel.child ++
          }
          if(forInput == 'infant'){
            this.passengerModel.infant ++
          }
          
        }else{
          if(forInput == 'adult'){
            this.passengerModel.adult --
          }
          if(forInput == 'child'){
            this.passengerModel.child --
          }
          if(forInput == 'infant'){
            this.passengerModel.infant --
          }
        }
      })
    })
  };
  onSubmit(){
    this.isOpenModal = false;
    this.closePassengerModal.emit(this.isOpenModal);
    if(this.passengerModel.flightClass == 'economy'){this.passengerModel.flightClassFA = 'اکونومی'}
    if(this.passengerModel.flightClass == 'business'){this.passengerModel.flightClassFA = 'بیزینس'}
    if(this.passengerModel.flightClass == 'first'){this.passengerModel.flightClassFA = 'فرست'}
    this.passengerModel.passenger = this.passengerModel.adult + this.passengerModel.child + this.passengerModel.infant
    this.passengerModel.text = `${this.passengerModel.passenger} مسافر , ${this.passengerModel.flightClassFA}` ;
    console.log(this.passengerModel)
  }

}
