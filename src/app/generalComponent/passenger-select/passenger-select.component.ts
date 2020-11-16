import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Passenger} from './passenger'
@Component({
  selector: 'passenger-modal',
  templateUrl: './passenger-select.component.html',
  styleUrls: ['./passenger-select.component.css']
})
export class PassengerSelectComponent implements OnInit {

  public adultValue = 1; 
  public childValue = 0;
  public infantValue = 0;
  


  @Input() isOpenModal;
  @Input() passengerFlightInfo;
  @Output() closePassengerModal = new EventEmitter<boolean>();
  @Output() acceptPassenger = new EventEmitter ();

  // public passengerModel= new Passenger (this.passengerFlightInfo.classPassenger ,
  //                                       this.passengerFlightInfo.adultPassenger ,
  //                                       this.passengerFlightInfo.childPassenger ,
  //                                       this.passengerFlightInfo.infantPassenger ,
  //                                       )
  public  passengerModel= new Passenger('economy','1','0','0');
  constructor() { }

  ngOnInit(): void {
    this.minusPlusButton();
  }

  closeModal(){
    this.isOpenModal = false;
    this.closePassengerModal.emit(this.isOpenModal)
  }
  

  minusPlusButton(){
    document.querySelectorAll('.changeButtonPassenger a').forEach((button)=>{
      button.addEventListener('click',()=>{
        const forInput = button.getAttribute('for');
        const dataType = button.getAttribute('data-type');
        const maxVal = button.parentNode.querySelector('input').getAttribute('max');
        const minVal = button.parentNode.querySelector('input').getAttribute('min');
        let value : number = parseInt( button.parentNode.querySelector('input').value) ;
        if( dataType == "plus" ){
          if(forInput == 'adult'){
            this.adultValue ++;
          }
          if(forInput == 'child'){
            this.childValue ++
          }
          if(forInput == 'infant'){
            this.infantValue ++
          }
          
        }else{
          value --
        }
      })
    })
  };
  onSubmit(){
    this.passengerModel = new Passenger (this.passengerModel.flightClass , this.adultValue.toString() , this.childValue.toString() , this.infantValue.toString());
    this.isOpenModal = false;
    this.acceptPassenger.emit({isOpenModal:this.isOpenModal,passengerModel: this.passengerModel})
  }

}
