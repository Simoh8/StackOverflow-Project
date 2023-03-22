import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl = 'http://localhost:4500/questions/all';

  constructor(private http: HttpClient) { }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);

  }
  addQuestion(question: Question): Observable<Question[]> {
    return this.http.post<Question[]>('http://localhost:4500/questions/all', question)
  }

}

interface Question {

  title: string;
  content: string;
  tags: string[];
  createdAt: Date
  author: string;
  // other properties...
}

interface addQuestion{
  title: string;
  content: string;
  tags: string[];
}