import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from 'src/app/models/loan copy';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {

  id!: number;
  loan: Loan = new Loan();

  constructor(private loanService: LoanService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {//retrieve id from the rout -- used activatedroute
    console.log("inside update loan component ngoninit");
    this.id = this.route.snapshot.params['id'];
    this.loanService.getLoanById(this.id).subscribe(data => {
      this.loan = data;
    }, error => console.error(error));

  }

  onSubmit() {
    console.log("insie onsubmit of updating loan");
    this.loanService.updateLoan(this.id, this.loan).subscribe(data => {
      this.goToLoansList()
    }, error => console.log(error));

  }
  goToLoansList() {
    this.router.navigate(['/loans']);
  }

}
