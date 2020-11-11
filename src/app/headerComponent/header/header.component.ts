import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public LogoBlue:string = 'assets/icon/golfam-logo.png';
  public LogoWhite:string = 'assets/icon/golfam-logo-white.png';
  public getPath = window.location.pathname;
  public isOpen = false;
  constructor() {}

  ngOnInit(): void {
  }
  
  openMenu(){
    if(this.isOpen == false){
      this.isOpen = true
    }else{
      this.isOpen = false
    }
  }
  closeMenu(isOpen:boolean){
    if(this.isOpen == true){
      this.isOpen = false
    }
  }
}
