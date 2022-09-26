import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Loan } from 'src/app/models/loan copy'; 
import { LoanService } from 'src/app/services/loan.service'; 

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

loan: Loan = new Loan;
  loans!: Loan[];
  constructor(private loanService: LoanService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLoans();
  }

  private getLoans(){
    this.loanService.getLoansList()
    .subscribe(data => {
      this.loans=data;
    });

  }

  updateLoan(id: any){
    this.router.navigate(['update-loan',id]);
  }
  deleteLoan(id:number){
    console.log("in deleteLoan method");
    this.loanService.deleteLoan(id).subscribe( data => {
      this.getLoans();
      console.log("inside deleteLoan "+data);
    },error => console.log(error));
    this.getLoans();
  }
}