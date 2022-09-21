import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LaServiceService } from 'src/app//services/la-service.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
   
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  error: string='';



  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private laService: LaServiceService
     
  ) {
    
  }

  ngOnInit() {
    if(!this.submitted){
      this.registerForm = this.formBuilder.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', Validators.required,Validators.email],
          mobileNumber: ['', Validators.required,Validators.minLength(10),Validators.maxLength(10)],
          address: ['', Validators.required,Validators.maxLength(80)],
          salary: ['', Validators.required],
          adharNumber: ['', Validators.required,Validators.minLength(12),Validators.maxLength(12)]
          
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        //alert("Form is Invalid")
        return;
    }

    this.loading = true;
    this.laService.saveLA(this.registerForm.value)
        .pipe()
        .subscribe(
            data => {
                this.loading = false;
                alert("Sccessfully registered with application ID: "+ data.loanId);
                this.router.navigate(['/loanapplication']);
            },
            error => {
                alert("Failure");
            });
            this.loading = false;
            this.registerForm.reset;
  }

  onCancel(){
    this.registerForm.reset(this);
    this.registerForm.clearValidators;
  }
}

