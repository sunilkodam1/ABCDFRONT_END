import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate() {
    let Role =localStorage.getItem('token');
    if(Role == "admin"){
      return true;
    }else{
      alert("you are don't have admin rights you not able to access this link")
      this.router.navigate(['home']);
      return false;

    }
   
  }
  
}
