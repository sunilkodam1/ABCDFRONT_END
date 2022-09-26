import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanStatusService } from 'src/app/shared/loan-status.service';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.css']
})
export class LoanStatusComponent implements OnInit {

  loanData: any;
  formValue: any = FormGroup;
  formData: any = FormGroup;

  constructor(private api: LoanStatusService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.api.getData().subscribe(res => {
      this.loanData = res;
    })
  }

  viewLoanApllication(id: any){
    this.router.navigate(['loanView',id]);
  }

}
