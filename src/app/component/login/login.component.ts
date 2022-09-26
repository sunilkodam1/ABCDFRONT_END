import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public showLogIn: boolean = false;
  invalidCredentialMsg = '';
  public loginForm !: FormGroup
  public role: String = "";
  admin: string = "admin";
  public loggedInUser: String = "";
  isloggedInAdmin: any;
  isloggedInEmployee: any
  response: any;
  token: any;

  constructor(private formBulider: FormBuilder, private loginService: LoginService, private http: HttpClient, private router: Router) { }


  ngOnInit(): void {

    this.loginForm = this.formBulider.group({
      email: [''],
      password: ['']
    })
  }



  login() {

    this.loginService.login(this.loginForm.value)
      .subscribe(res => {
        alert("login Successfull ");
        this.role = res.data.role;
        this.loginForm.reset();

        if (res) {
          if (this.role == 'admin') {

            this.loggedInUser = res;
            this.router.navigate(['admin']);
          } else {

            this.loggedInUser = res;
            this.router.navigate(['loanstatus']);
          }

        } else {
          this.invalidCredentialMsg='User id or password incorrect';
        }

      }, err => {
        this.invalidCredentialMsg='User id or password incorrect';
  
      })
  }
}

