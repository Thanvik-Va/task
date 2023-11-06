import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  username='supergas';
  profile='Incresol'
   
  components:any[] =[
  //   { 
  //     name : 'Home',
  //     baseUrl : '/dashboard'
  // },
  {
      name : 'AboutUs',
      baseUrl : '/aboutus'
  },
  {
      name : 'Contact',
      baseUrl : '/contact'
  },
  {
  //  name : 'Profile'
  }
   
];
  

constructor(private loginService:LoginServiceService){

}
//log out
 logoutUser(){
  this.loginService.logout();
  // location.reload();
  alert("Are you sure you want to logout?")
 }
}
 

