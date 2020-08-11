import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  menuActive: boolean;
  constructor(){
    this.menuActive = false;
  }
  onClickMenuIcon(){
    this.menuActive = !this.menuActive;
  }
}
