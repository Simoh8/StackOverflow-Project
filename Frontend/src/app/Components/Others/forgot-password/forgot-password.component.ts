import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  standalone: true,
  styleUrls: ['./forgot-password.component.css'],
  imports:[CommonModule,RouterModule,FormsModule]
})
export class ForgotPasswordComponent {

onSubmit(form: NgForm) {
console.log('');

}



  // forgotPassword:FormGroup

  // constructor(private formBuilder: FormBuilder){
  //   this.forgotPassword = this.formBuilder.group({
  //     email:['', Validators.required],
  //   });
  // // }

  // ngOnInit(form:NgForm): void {
  //   this.forgotPassword= new FormGroup({

  //   })
  // }


}
