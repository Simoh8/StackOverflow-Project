import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';
import { Question } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-singleanswer',
  standalone: true,
  imports: [CommonModule,RouterModule ,ReactiveFormsModule],
  templateUrl: './singleanswer.component.html',
  styleUrls: ['./singleanswer.component.css']
})
export class SingleanswerComponent {
  constructor(private questionService: QuestionService ,private store:Store<any> ,formbuilder:FormBuilder ){
    } 
  question:Question[]=[]
  postanswer!:FormBuilder
  ngOnInit(): void {

// this.formbuilder.group({});

content:['',Validators.required]

   this.store.select('counter').subscribe(state=>{
  console.log(state);
  
    this.count=state.count
    
   })
  }
  post(){}
  count!:number
  upvote(){
this.store.dispatch({type:'voteup'})
  }
    
  downvote(){
  this.store.dispatch({type:'votedown'})
  }
  
   
}
