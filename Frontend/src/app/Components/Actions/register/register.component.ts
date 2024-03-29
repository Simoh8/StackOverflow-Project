import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/app/State/app.state';
import { register } from 'src/app/State/Actions/userActions';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class RegisterComponent implements OnInit {

  registrationform!: FormGroup
  constructor(private formBuilder: FormBuilder,private toast:ToastrService, private authService: AuthenticationService, private router: Router, private store: Store, private auth: AuthenticationService) {


  }

  ngOnInit() {
    this.registrationform = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],


    });

  }
  register() {
    if (this.registrationform.valid) {
      this.store.dispatch(register({user:this.registrationform.value}))
      this.toast.success('User successfully registered')
      this.router.navigate(['/login'])

    }
    else {
    }

  }

}
