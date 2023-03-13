import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickColorDirective } from 'src/app/Directives/highlight.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  styleUrls: ['./header.component.css'],
  imports:[CommonModule,RouterModule,ClickColorDirective,]
})
export class HeaderComponent {

  // showbutton: boolean = false;
  // tooggle(){
  //   this.showbutton = !this.showbutton;
  // }
}
