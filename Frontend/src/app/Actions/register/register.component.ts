import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import{ ToastrService} from 'ngx-toastr'
// import { AuthServiceService } from 'src/app/Authentication/auth-service.service';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
//   constructor(private builder: FormBuilder,  private toastr: ToastrService ,private services:AuthServiceService ,private router:Router){

//   }
//   registerform =this.builder.group({
//     id:this.builder.control('' ,Validators.compose([Validators.required,Validators.minLength(3)])),
//     // displayName:this.builder.control('' ,Validators.required),
//     email:this.builder.control('' ,Validators.compose([Validators.required,  Validators.email])),
//     password:this.builder.control('' ,Validators.compose([Validators.required, Validators.pattern('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/')])),
//     role:this.builder.control(''),
//     isActive:this.builder.control(false)
//   });
//   proceedRegistration(){
//     if(this.registerform.valid){
// this.services.ProceedRegister(this.registerform.value).subscribe(res => {
//   this.toastr.success('Registration  successful')
//   this.router.navigate(['/login']);
// })
//     }
//     else{
//       this.toastr.warning("Please Enter Valid Details ")
      
//     }
//   }


}
