import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singlequizanswer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singlequizanswer.component.html',
  styleUrls: ['./singlequizanswer.component.css']
})
export class SinglequizanswerComponent {
icon: any;
user: any;
timestamp: any;
description: any;
question: any;
votes: any;
answers: any;
views: any;
tags: string[]=[ 'hello', 'world' ];

}
