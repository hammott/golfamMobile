import { Component, OnInit } from '@angular/core';
import { ConfigModel } from './datepicker/config.model';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public headerblue : boolean = true;
  public backgroundIMG : string = 'assets/img/home-back.jpg ';
  public num:number = 1;
  public isDatepicker=true;
  public datePickerID;
  public passengerID;
  public isOpenModal = false;


  config: ConfigModel = {
    date: {
      value: new Date().valueOf(),
      onSelect: (shamsiDate: string, gregorianDate: string, timestamp: number) => {
        console.log(shamsiDate, gregorianDate, timestamp);
        this.isDatepicker=true;
        (<HTMLInputElement>document.getElementById(this.datePickerID)).value = shamsiDate;

      }
    },
    ui: {
      theme: 'blue',
      isVisible: true,
      hideAfterSelectDate: false,
      hideOnOutsideClick: false,
      yearView: true,
      monthView: true
    },
    time: {
      enable: false,
      showSecond: false,
      meridian: false
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

  public getNum(number :number){
    this.num = number;
    this.changeForms(number)
  }

  public datePickerRun (b){
    this.isDatepicker = b.isDatepicker;
    this.datePickerID = b.datePickerID;

  }
  public openModalPassenger(data){
    this.isOpenModal = data

  }

  public closeModalPassenger(e){
    this.isOpenModal = e;
    
  }
  private changeForms(number:number){
    number = number - 1
    const elm = <HTMLElement>document.querySelector('.mo-search-box-content');
    let newNumber = number * 25;
    elm.style.transform = `translateX(${newNumber}%)`;
    elm.style.webkitTransform = `translateX(${newNumber}%)`;
  }

  public acceptPasengerInfo(data){
    this.isOpenModal = data.isOpenModal;
  }
  public closeDatePicker(){
    console.log('change')
  }

  
  
}
