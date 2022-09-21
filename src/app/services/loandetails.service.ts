import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanDetails } from '../models/LoanDetails';

@Injectable({
  providedIn: 'root'
})
export class LoanDetailsService {
  constructor(private http: HttpClient) { }

  // getAll() {
  //   return this.http.get<LoanDetails[]>('http://localhost:8888/api/getAllTypeLoans');
  // }
}
