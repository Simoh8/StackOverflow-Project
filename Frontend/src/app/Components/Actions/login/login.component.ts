import { CommonModule } from '@angular/common';
import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ErrorComponent } from 'src/app/Error/error/error.component';
import { AppState } from 'src/app/State/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/Services/auth.service';
import { login } from 'src/app/State/Actions/userActions';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/Services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule ]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  error = null
  constructor(private formBuilder: FormBuilder,private toast:ToastrService, private router: Router,private authentication: AuthenticationService,private auth: AuthService, private store: Store<AppState>) {
    this.myForm = this.formBuilder.group({
  password: new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email])
    });

  }

  ngOnInit(): void {
   this.store.dispatch(login({user:this.myForm.value}))
   this.router.navigate(['/login'])
   this.toast.success('Login success')
   
  }
  login() { 
 
  }

  Close(){
    this.error=null
}
}

