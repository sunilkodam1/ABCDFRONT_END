import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class LaServiceService {
  constructor(private http: HttpClient){}
    
  getStatus(){
      return this.http.get<Customer[]>('http://localhost:8888/api/{id}');
  }
  saveLA(customer:Customer){
      return this.http.post<Customer>('http://localhost:8888/api/applyLoan', customer);
  }

}
