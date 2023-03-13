import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { PostQuestionComponent } from '../post-question/post-question.component';
import { AppModule } from 'src/app/app.module';
import { TruncatePipe } from 'src/app/Pipes/Truncatepipe';
import { Route, Router, RouterModule } from '@angular/router';
// import { TitleCasePipe } from '@angular/common';
import { ClickColorDirective, } from 'src/app/Directives/highlight.directive';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ButtonAnimationDirective } from 'src/app/Directives/button-animation.directive';
import {   TitleCasePipe } from "../../../Pipes/Titlepipe";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    styleUrls: ['./home.component.css'],
    animations: [
        trigger('buttonAnimation', [
            state('normal', style({
                transform: 'scale(1)'
            })),
            state('clicked', style({
                transform: 'scale(1.2)'
            })),
            transition('normal <=> clicked', animate('300ms ease-in'))
        ])
    ],
    imports: [CommonModule, RouterModule, ClickColorDirective, ButtonAnimationDirective, TruncatePipe, TitleCasePipe]
})

export class HomeComponent {
  animationState = 'normal';

  animateButton() {
    this.animationState = this.animationState === 'normal' ? 'clicked' : 'normal';
  }
tags: string[] = [
  'javascript','Html'
];
icon: string="Z";
user: string='simon';
timestamp: string='asked 2 minutes ago'
description: string= ' The following diagram explains each step of the pulling process.he following diagram explains each step of the pulling process.he following diagram explains each step of the pulling process.';
question: string=' what should do after git pull';
views: number= 10;
answers: number= 10;
votes: number= 10;
blog: string='In our fast-paced world.';
featured: string='its easy to get caught up ';
members: string='10k';
communityname: string='In our fast';
pagenumber: number= 10;

}
