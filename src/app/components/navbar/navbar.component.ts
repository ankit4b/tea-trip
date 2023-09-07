import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  SmNavMenus:boolean = false;

  toogleMenu(value:boolean){
    this.SmNavMenus = value;
  }


}
