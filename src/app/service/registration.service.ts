import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

private baseUrl="http://localhost:8182";
  constructor(private http:HttpClient) { }

  regitration(signupForm:any){
    return this.http.post<any>(`${this.baseUrl}`+"/employee/addemployee", signupForm)
    .pipe(map((res:any)=>{
     
        return res;    
    },(err:any)=>{
        return "something wen wrong";
    }))
  }
}
