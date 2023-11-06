import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Credentails } from 'src/app/credentails';
import { LoginServiceService } from 'src/app/services/login-service.service';




@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {


  forgotPasswordForm: FormGroup;
credentails: any;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, this.customEmailValidator()]]
    });
  }

  submitForm() {
    if (this.forgotPasswordForm.valid) {
      // const email  = this.forgotPasswordForm.get('email').value;
      // Handle the submission logic here (e.g., send request to reset password)

     }
  }

  message(){
    alert("A password verification message has been sent to your email...")


  }
  customEmailValidator() {
    return (control:any) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (control.value && !emailRegex.test(control.value)) {
        return { invalidEmail: true };
      }
  
      return null;
    };
  }
    
  }
   
  
  
  
  
   

