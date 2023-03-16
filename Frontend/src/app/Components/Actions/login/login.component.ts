import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports:  [CommonModule,RouterModule,ReactiveFormsModule]
})
export class LoginComponent  implements OnInit{
login() {
throw new Error('Method not implemented.');
}
  myForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    
    });

  }
  
  ngOnInit(): void {
this.myForm=new FormGroup({ 
  password: new FormControl(null,Validators.required),
  email:new FormControl(null,[Validators.required,Validators.email])
 })

}}
