import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singleanswer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleanswer.component.html',
  styleUrls: ['./singleanswer.component.css']
})
export class SingleanswerComponent {
[x: string]: any;
votes: number=2;
solution: any;
description: any;
question:string='hello';
comments:string='hello';

}
