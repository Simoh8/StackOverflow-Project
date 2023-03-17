import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { FormBuilder, Validators } from '@angular/forms';
// import{ ToastrService} from 'ngx-toastr'
// import { AuthServiceService } from 'src/app/Authentication/auth-service.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  styleUrls: ['./register.component.css'],
  imports: [CommonModule,RouterModule,ReactiveFormsModule]
})
export class RegisterComponent  implements OnInit {
register() {
throw new Error('Method not implemented.');
}

registrationform:FormGroup

constructor(private formBuilder: FormBuilder) {

  this.registrationform = this.formBuilder.group({
   name: ['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  
  });

}

ngOnInit() {

  this.registrationform= new FormGroup({
    name:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),

  })

}
}
