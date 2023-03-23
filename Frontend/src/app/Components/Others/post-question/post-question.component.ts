import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  standalone: true,
  styleUrls: ['./post-question.component.css'],
  imports: [CommonModule, FormsModule,ReactiveFormsModule]
})
export class PostQuestionComponent implements OnInit{
  questionform!: FormGroup;
constructor(public questionService: QuestionService , private formbuilder: FormBuilder ,private route: Router) {

 }

 public tagOptions: { id: string, name: string }[] = [];

ngOnInit(): void {

  
  this.questionform=this.formbuilder.group({
    title:['', Validators.required],
    content:['', Validators.required],
    tags:['', Validators.required],
  });
}
postquestion(){
  this.questionService.addQuestion(this.questionform.value).subscribe((res)=>{
    console.log(res);
    console.log('hello');
    
    
  })
  this.route.navigate(['/'])
}

}
