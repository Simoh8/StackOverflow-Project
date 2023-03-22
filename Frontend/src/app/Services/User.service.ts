import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Interfaces'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://api.stackoverflow.com/users';

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<User> {
    const url = `${this.baseUrl}/${user.id}`;
    return this.http.put<User>(url, user);
  }

  // login(username: string, password: string): Observable<boolean> {
  //   // Handle login logic and return an Observable with the result
  // }

  logout(): void {
    // Handle logout logic
  }
}
