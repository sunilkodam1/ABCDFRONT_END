import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanStatusService } from 'src/app/shared/loan-status.service';
import { ActivatedRoute } from '@angular/router';
import { Loan } from '../Loan';

@Component({
  selector: 'app-loan-view',
  templateUrl: './loan-view.component.html',
  styleUrls: ['./loan-view.component.css']
})
export class LoanViewComponent implements OnInit {

  id!: number;
  loan: Loan = new Loan();
  loanData : any;

  loadObject : Loan = new Loan();
  formValue !: FormGroup;

  constructor(private router: Router,private aroute: ActivatedRoute, 
    private loanService: LoanStatusService) { }

  ngOnInit(): void {
  this.getLoanId();
}

getLoanId(){
  this.id = this.aroute.snapshot.params['id'];
  this.loanService.getLoanById(this.id).subscribe(data => {
    this.loan=data;
  },error => console.error(error));
}

onSubmit(){
  console.log("inside onsubmit of updating loan");
  this.loanService.updateLoan(this.id, this.loan).subscribe( data=> {
    this.goToLoansList()
  },error=>console.log(error));
}


goToLoansList(){
  this.router.navigate(['/loanStatus']);
}


  onRejected(){
    alert('Rejected');
    this.router.navigate(['/loanStatus'])
  }

}


