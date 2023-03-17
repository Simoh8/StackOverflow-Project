import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { Question, Message } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    getQuestionById(questionId: any) {
        throw new Error('Method not implemented.');
    }


  constructor( private http:HttpClient) { }
  booking$=new Subject<Question[]>()

  addQuestion(question:AddQuestion):Observable<Message>{
    return this.http.post<Message>('http://localhost:4200/',question)
  }
  
  getUserQuestion():Observable<Question[]>{
    return this.http.get<Question[]>('http://localhost:4002/questions/emails');
  }

  getOneBooking(title:string):Observable<Question>{
   return  this.http.get<Question>(`http://localhost:4002/flights/${Title}`)
  }

  deleteQuestion(id:string):Observable<Message>{
    return  this.http.delete<Message>(`http://localhost:4002/flights/${id}`)
   }

   updateBooking(id:string,updatedBooking:AddBooking):Observable<Booking>{
    return  this.http.put<Booking>(`http://localhost:4002/flights/${id}`, updatedBooking)
   }
 }
