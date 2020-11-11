import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public headerblue : boolean = true;
  public backgroundIMG : string = 'assets/img/home-back.jpg ';
  public num:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  public getNum(number :number){
    this.num = number;
    this.changeForms(number)
  }

  private changeForms(number:number){
    number = number - 1
    const elm = <HTMLElement>document.querySelector('.mo-search-box-content');
    let newNumber = number * 25;
    elm.style.transform = `translateX(${newNumber}%)`;
    elm.style.webkitTransform = `translateX(${newNumber}%)`;
  
  }

  
  
}
