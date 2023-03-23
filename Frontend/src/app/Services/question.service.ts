import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:4500/question/all';

  constructor(private http: HttpClient) { }

  getQuestions(PageNumber = 1, PageSize = 1): Observable<Question[]> {
    // include query params in the url of page and pageSize
    return this.http.get<Question[]>('http://localhost:4500/questions/all', { params: { PageNumber: PageNumber.toString(), PageSize: PageSize.toString() } });
  }

  addQuestion(question: addQuestion): Observable<Question[]> {
    return this.http.post<Question[]>('http://localhost:4500/question/add', question)
  }

getSingleQuestion():Observable<Question[]>{
  return this.http.get<Question[]>('http://localhost:4500/question')
}

}

interface Question {
id:string
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