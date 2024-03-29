import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  
  isLoggedIn=false
  private role=''
  private username=''

  getName(){
  return this.username
  }

getRole(){
    return this.role
    }

    setRole(role:string){
      this.role=role
    }
    setName(username:string){
      this.username=username
    }


  getAuthStatus():Promise<boolean>{
    const promise = new Promise<boolean>((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.isLoggedIn)
    },10)
    })
    return promise;
  }

  login(){
    this.isLoggedIn=true
  }

  logout(){
    this.isLoggedIn=false;
  }
}