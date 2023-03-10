import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { PostQuestionComponent } from '../post-question/post-question.component';
import { AppModule } from 'src/app/app.module';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule,RouterModule]
})
export class HomeComponent {
tags: string[] = [
  'javascript','Html'
];
icon: string="home";
user: string='simon';
timestamp: string='asked 2 minutes ago'
description: string= 'You can think of git pull as Gits version of svn update. Its an easy way to synchronize your local repository with upstream changes. The following diagram explains each step of the pulling process.';
question: string=' what should do after git pull';
views: number= 10;
answers: number= 10;
votes: number= 10;
blog: string='In our fast-paced world, its easy to get caught up in the hustle and bustle of everyday life.';
featured: string='its easy to get caught up in the hustle and bustle of everyday life';
members: string='10k';
communityname: string='In our fast';
pagenumber: number= 10;

}
