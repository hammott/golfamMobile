import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { PassengerInteractionService } from '../../passenger-interaction.service';
import { Passenger } from '../../generalComponent/passenger-select/passenger';

@Component({
  selector: 'int-flight-search',
  templateUrl: './int-flight.component.html',
  styleUrls: ['./int-flight.component.css']
})
export class IntFlightComponent implements OnInit {
  @Input() isDatepicker ;
  @Input() isOpenModal;
  @Output() runDatePicker = new EventEmitter<any>();

  @Output() openPassengerModal = new EventEmitter<any>();

  public isDisabledInput:boolean = true;
  datePickerID:string;
  public passengerID:string;
  public passengerInfo = new Passenger ('economy' , 'اکونوکی' , 1,0,0,1 , '1 مسافر , اکونومی');

  constructor(private _passengerservice:PassengerInteractionService) { }

  ngOnInit(): void {
  }
  public datpicker(e){
    var target = e.target || e.srcElement || e.currentTarget;
    this.datePickerID = target.getAttribute('id')
    this.isDatepicker = false;
    this.runDatePicker.emit({isDatepicker: this.isDatepicker , 
                              datePickerID:this.datePickerID,
                            });

  }
  public checkRoundTrip (){
    if (this.isDisabledInput == true){
      this.isDisabledInput=false;
    }else{
      this.isDisabledInput=true;
    }
  }

  public choosePassenger (e) {
    var target = e.target || e.srcElement || e.currentTarget;
    this.passengerID = target.getAttribute('id');
    this.isOpenModal = true;
    this.openPassengerModal.emit(this.isOpenModal);
    this._passengerservice.loadPassenger(this.passengerInfo)
  }
}
