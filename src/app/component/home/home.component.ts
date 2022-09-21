import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanDetails } from 'src/app/models/LoanDetails';
import { LoanDetailsService } from 'src/app//services/loandetails.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loansList:any;
  public cartItems !: LoanDetails[];
  constructor(private router: Router,private loanService: LoanService, private loanDetailsService: LoanDetailsService) { }

  ngOnInit(): void {
    this.cartItems = [];
    this.loanService.getLoansList().subscribe(res =>{
      this.loansList = res;
      console.log("loan details::::")
    })
  }

//  getAllProducts(){
//   this.loanDetailsService.getAll().subscribe(res =>{
//     this.loansList = res;
//   })

//  }

  

 apply(item: any){
  console.log("Item:::::" +item.id)

  
  this.router.navigate(['/loan'])

 }


}
