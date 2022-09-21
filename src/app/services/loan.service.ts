import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Loan } from '../models/loan copy'; 

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private baseUrl="http://localhost:8081/api/admin";

  constructor(private httpClient: HttpClient) { }
  
  getLoansList(): Observable<Loan[]>{
    console.log("inside getLoansList of serviceclass ")
    return this.httpClient.get<Loan[]>(`${this.baseUrl}`+"/getLoans");
}
   
  createLoan(loan: Loan): Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`+"/addLoan" , loan);
  }

  getLoanById(id:number):Observable<Loan>{
    return this.httpClient.get<Loan>(`${this.baseUrl}/getLoan/${id}`);
  }

  updateLoan(id:number, loan: Loan): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/updateLoan/${id}`, loan);
  }

  deleteLoan(id:number): Observable<Object>{
   return this.httpClient.delete(`${this.baseUrl}/deleteLoan/${id}`);
  }
}
