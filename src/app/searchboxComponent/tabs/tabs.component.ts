import { Component, OnInit, Output, EventEmitter, Input, } from '@angular/core';

@Component({
  selector: 'searchbox-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  @Input() num;
  @Output() setTabNum = new EventEmitter<number>()
  constructor() { }
  
  ngOnInit(): void {
  }

  public tabsClick(e:Event){
    var elems = document.querySelectorAll(".activeTabs");
      [].forEach.call(elems, function(el) {
        el.classList.remove("activeTabs");
      });
    (e.target as Element).classList.add('activeTabs');
    var tabsNum = parseInt((e.target as Element).getAttribute('tabsNum'));
    this.num = tabsNum;
    this.setNum();
    
  }
  public setNum (){
    this.setTabNum.emit(this.num);
  }
  
}

