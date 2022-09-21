import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/models/loan copy';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {

  loan: Loan = new Loan();

  constructor(private loanService: LoanService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveLoan(){
    this.loanService.createLoan(this.loan)
    .subscribe(data => {console.log(data);
      this.goToLoansList();
  },
  error => console.log(error));
  }

  goToLoansList(){
    this.router.navigate(['/loans']);
  }

  onSubmit():any{
    this.saveLoan();
    console.log(this.loan);
  }
}
