import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  opened=true;

  // data:any=[
  //   {
  //     name:'Basava',
  //     age :26,
  //     email:"basava@gmail.com",
  //     address:"@raichur",
  //     mobile_number:7483513024
  //   },
  //   {
  //     name :'Kiran',
  //     age : 25,
  //     email:"kiran@gmail.com",
  //     address:"@hyd",
  //     mobile_number:9483513067
  //   },
  //   {
  //     name : 'suresh',
  //     age : 27,
  //     email:"suresh@gmail.com",
  //     address:"@bengalore",
  //     mobile_number:9483513056
  //   }
  //  ];

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login or perform desired action
    }
   }

}
