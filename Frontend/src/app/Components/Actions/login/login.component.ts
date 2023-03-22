import { CommonModule } from '@angular/common';
import { Component, inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ErrorComponent } from 'src/app/Error/error/error.component';
import { AppState } from 'src/app/State/app.state';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/Services/auth.service';
import { login } from 'src/app/State/Actions/userActions';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  error = null
  constructor(private formBuilder: FormBuilder, private toast:ToastrService, private router: Router, private authentication: AuthenticationService, private auth: AuthService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
      this.myForm = this.formBuilder.group({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
    });

  }
  login() {
    this.store.dispatch(login({ user: this.myForm.value }))
    this.toast.success('Login success')
    this.router.navigate([''])
  }

  Close() {
    this.error = null
  }
}

