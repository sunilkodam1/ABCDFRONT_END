import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, AbstractControl, RequiredValidator, MaxValidator, Validators,ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';


@Component({
  selector: 'app-signup',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 signupForm! : FormGroup;
 

  constructor(private formBuilder: FormBuilder,private regitrationService: RegistrationService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {

      this.signupForm = this.formBuilder.group({
  
        email:[''],
        ename:[''],
        mobile: ['', Validators.required,Validators.minLength(10),Validators.maxLength(12)],
        password:[''],
        role:[''],
        dept:[''],
        salary:['']
       
      })

  }


  signUp(){
   
    this.regitrationService.regitration(this.signupForm.value)
    .subscribe(res=>{
      alert("Signup Successfull ");
      this.signupForm.reset();
      this.router.navigate(['login']);

    }, err=>{
      alert("user alredy exsists");
    })
}
}