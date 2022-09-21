import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  regitration(signupForm:any){
    return this.http.post<any>("http://localhost:8080/employee/addemployee", signupForm)
    .pipe(map((res:any)=>{
     
        return res;    
    },(err:any)=>{
        return "something wen wrong";
    }))
  }
}
