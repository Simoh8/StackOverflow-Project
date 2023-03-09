import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showbutton: boolean = false;
  tooggle(){
    this.showbutton = !this.showbutton;
  }
}
