import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Credentails } from 'src/app/credentails';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email: string='';
password: string='';
errorMessage: String='';

 

constructor(private loginService:LoginServiceService){

}

//login form 
loginForm =  new FormGroup({
  email : new FormControl('',[Validators.required,this.customEmailValidator()]),
  password : new FormControl('',[Validators.required,this.customPasswordValidator()])
});

customEmailValidator() {
  return (control:any) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }

    return null;
  };
}

customPasswordValidator() {
  return (control : any) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (control.value && !passwordRegex.test(control.value)) {
      return { invalidPassword: true };
    }

    return null;
  };
}



credentails: Credentails = new Credentails();



onSubmit(){
  //console.log('forms is submitted..');

  if((this.credentails.email !='' && this.credentails.password !='' )&&(this.credentails.email !=null && this.credentails.password !=null )){
    console.log("we to submit the form to server...");
    //token generate
   this.loginService.generateToken(this.credentails).subscribe(
    (response:any)=>{
      //success
         console.log(response.token);
        this.loginService.loginUser(response.token)
        window.location.href="/dashboard"
        this.errorMessage ='';

    }
    ,
    error=>{
      //error
     console.error('Error',error);
    this.errorMessage= "Invalid credentials. Please try again";
    }
   );


  }
  else{
  this.errorMessage = "Please try again";    
  }

// .......................

 
  
}
 
 

}
