import { Component, OnInit, Output, EventEmitter ,Input } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuImage :string = "assets/icon/menu-image.png";
  @Input() isOpen: boolean;
  @Output() changeIsOpen = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  public closeMenu (){
    this.changeIsOpen.emit(this.isOpen)

  }

}
