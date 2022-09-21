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
  getProduct(){
    
      return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res:any)=>{
        return res;
      }))
    

  }
    loanApplication(item:any){

  }
 
}
