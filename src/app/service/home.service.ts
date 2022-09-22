import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }

    loanApplication(item:any){

  }
 
}
