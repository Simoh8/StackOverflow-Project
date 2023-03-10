import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports:[CommonModule,RouterModule]
})
export class HeaderComponent {

  // showbutton: boolean = false;
  // tooggle(){
  //   this.showbutton = !this.showbutton;
  // }
}
