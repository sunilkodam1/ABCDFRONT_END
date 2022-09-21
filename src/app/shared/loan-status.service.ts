import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Loan } from '../models/Loan';
import { LoanModel } from '../models/loanModel';
// import { Loan } from '../loan-application/Loan';
// import { LoanModel } from '../component/loan-application/loanModel';

@Injectable({
  providedIn: 'root'
})
export class LoanStatusService {

  private baseUrl="http://localhost:8088/bank";

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<any>("http://localhost:8088/bank")
    .pipe(map((res:any)=>{
      return res
    }))
  }

  getLoanById(id:number):Observable<Loan>{
    return this.http.get<Loan>("http://localhost:8088/bank/"+id)   
    .pipe(map((res:any)=>{
      return res;
    }))  
  }
 
  updateLoan(id:number, loan: Loan){
    // console.warn("Update"+this.baseUrl +id)
    return this.http.put<any>("http://localhost:8088/bank/update/"+id,loan)
    .pipe(map((res:any)=>{
      return res
    }))
  }

  postUserForm(loanModel: LoanModel): Observable<any>{
    return this.http.post('https://putsreq.com/07tPrmWiACNyJzR5EH0B',loanModel);
     // return of(userSettings);
   }

}
