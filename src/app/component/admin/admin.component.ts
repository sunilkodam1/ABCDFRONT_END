import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
public loggedInUserName:any;
  constructor(private loginService:LoginService) { }

  title:string ="Hello Admin"

  ngOnInit(): void {
  }
  loggedInUserData(){
   
    return this.loggedInUserName=this.loginService.getloggedInUserData();

}

}
