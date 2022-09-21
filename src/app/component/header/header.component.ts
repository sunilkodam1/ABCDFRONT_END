import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 public isloggedIn: any;
 public isloggedInRole:any;
 public loggedInUserName:any;
  constructor(private loginService: LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loggedIn(){
    this.isloggedIn=this.loginService.isLogIn();
    return localStorage.getItem('token');
  }

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  loggedInUser(){
    this.isloggedInRole=this.loginService.getloggedInUser();
    return localStorage.getItem('token');
  }
  loggedInUserData(){
   
       return this.loggedInUserName=this.loginService.getloggedInUserData();
  
  }
  
}
