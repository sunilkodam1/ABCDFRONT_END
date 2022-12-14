import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public role:string="";
  admin:string="admin";
  public islogin:string="";
  private redirectUrl: string = '/';
	private isloggedIn: boolean = false;
  public loggedInUserData:any;
  public loggedInUser:any;
  private baseUrl="http://localhost:8182";
  constructor(private http:HttpClient) { }

  login(loginForm:any){

    return this.http.post<any>(`${this.baseUrl}`+"/employee/login" , loginForm)
    .pipe(map((res:any)=>{
     this.role=res.data.role;
   
     if (res) {
      localStorage.setItem('user',res.data.ename);
     
      if(this.role == this.admin){
        localStorage.setItem('token',this.role);
        this.isloggedIn = true;
            }else{
              localStorage.setItem('token',this.role);
              this.isloggedIn = true;
              this.loggedInUser = res.data.ename;
              
            }
           
          } 
          else {
                 this.isloggedIn = false;
            }
      return res;
    
    }))
  }

  isLogIn() {
		return localStorage.getItem('token')!=null;
	}

 
	logoutUser(): void {
		this.isloggedIn = false;
	}
  getloggedInUser(){
    return this.loggedInUserData = localStorage.getItem('token');
  }

  getloggedInUserData(){
    return this.loggedInUserData = localStorage.getItem('user');
  }

}
