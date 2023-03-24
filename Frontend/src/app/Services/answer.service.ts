import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { addAnswer, Message, Question } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor( private http:HttpClient) { }
 

  addAnswer(answer:addAnswer):Observable<Message>{
    return this.http.post<Message>('http://localhost:4500/answer/addanswer',answer)
  }
  
 
}
