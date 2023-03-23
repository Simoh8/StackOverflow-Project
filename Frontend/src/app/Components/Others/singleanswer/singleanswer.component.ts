import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import { Question } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-singleanswer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './singleanswer.component.html',
  styleUrls: ['./singleanswer.component.css']
})
export class SingleanswerComponent {
  question:Question[]=[]
  ngOnInit(): void {
   this.store.select('counter').subscribe(state=>{
  console.log(state);
  
    // this.count=state.count
    
   })
  }


  count!:number
  constructor(private questionService: QuestionService ,private store:Store<any>){
  
  }
  upvote(){
this.store.dispatch({type:'voteup'})
  }
    
  downvote(){
  this.store.dispatch({type:'votedown'})
  }
  
   
}
