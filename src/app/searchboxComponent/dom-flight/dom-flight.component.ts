import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TicketService } from '../../ticket.service'
import { Passenger } from '../../generalComponent/passenger-select/passenger';
import {PassengerInteractionService} from '../../passenger-interaction.service'
const tickets= {
  'passenger':'1-0-0-1',
  'dep_date':'1399/08/27',
  'class':'economy',
  't/thr-kih/?passenger':'1-0-0-1',
  'custom_webservice':'8',
  'is_domestic':'1',
  'adult':'1',
  'infant':'0',
  'child':'0',
  'trip':'oneway',
  'ret_date':'',
  'domestice_departure_code':'THR',
  'domestice_destination_code':'KIH',
  'domestice_departure_code_ret':'',
  'domestice_destination_code_ret':'',
  'departure_code_ret_fieldvalue':'',
  'destination_code_ret_fieldvalue':'',
  'time':'1605361108',
  'is_mobile':'false',
  'view_mode':'ticket_only',
  'way_mode':'go'
};

var ticketData = new FormData();
ticketData.append('passenger','1-0-0-1');
ticketData.append('dep_date','1399/08/27');
ticketData.append('class','economy');
ticketData.append('t/thr-kih/?passenger','1-0-0-1');
ticketData.append('custom_webservice','8');
ticketData.append('is_domestic','1');
ticketData.append('infant','0');
ticketData.append('child','0');
ticketData.append('trip','oneway');
ticketData.append('ret_date','');
ticketData.append('domestice_departure_code','THR');
ticketData.append('domestice_destination_code','KIH');
ticketData.append('domestice_departure_code_ret','');
ticketData.append('domestice_destination_code_ret','');
ticketData.append('departure_code_ret_fieldvalue','');
ticketData.append('destination_code_ret_fieldvalue','');
ticketData.append('time','1605361108');
ticketData.append('is_mobile','false');
ticketData.append('way_mode','go');
console.log(ticketData)
@Component({
  selector: 'dom-flight-search',
  templateUrl: './dom-flight.component.html',
  styleUrls: ['./dom-flight.component.css']
})

export class DomFlightComponent implements OnInit , OnChanges {
  
  @Input() isDatepicker ;
  @Input() isOpenModal;
  @Output() runDatePicker = new EventEmitter<any>();

  @Output() openPassengerModal = new EventEmitter<any>();

  public isDisabledInput:boolean = true;
  datePickerID:string;
  passengerID:string;
  public passengerInfo = new Passenger ('economy' , 'اکونوکی' , 1,0,0,1 , '1 مسافر , اکونومی');

  public passengerInfoFlightDomHTML = `${this.passengerInfo.adult + this.passengerInfo.child + this.passengerInfo.infant} مسافر`;
  constructor(private _ticketService : TicketService,
              private _passengerservice:PassengerInteractionService) { }
  

  ngOnInit(): void {
  }

  ngOnChanges (changes: SimpleChanges){
    changes.passengerDomFlightInfo;
  }

  onSubmit(data){
    console.log(ticketData);
    this._ticketService.ticketDomPost("passenger=1-0-0-1&dep_date=1399%2F08%2F27&class=economy&t%2Fthr-kih%2F%3Fpassenger=1-0-0-1&custom_webservice=11&is_domestic=1&adult=1&infant=0&child=0&trip=oneway&ret_date=&domestice_departure_code=THR&domestice_destination_code=KIH&domestice_departure_code_ret=&domestice_destination_code_ret=&departure_code_ret_fieldvalue=&destination_code_ret_fieldvalue=&time=1605364182&is_mobile=false&view_mode=full&way_mode=go").subscribe(
      response => console.log('Success' , response),
      error => console.log('Error', error)
    )
  };

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
