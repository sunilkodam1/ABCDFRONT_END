import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuard } from './authentication/auth.guard';
import { RoleGuard } from './authentication/role.guard';
import { LoanStatusComponent } from './component/loan-status/loan-status.component';
import { LoanViewComponent } from './component/loan-view/loan-view.component';
import { LoanTrackComponent } from './component/loan-track/loan-track.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { UpdateLoanComponent } from './component/update-loan/update-loan.component';
import { CreateLoanComponent } from './component/create-loan/create-loan.component';
import { LoanListComponent } from './component/loan-list/loan-list.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path: 'loan', component: CustomerFormComponent},
  {path:'loantrack',component:LoanTrackComponent},
  {path:'signup', component:RegistrationComponent},
  {path:'login', component: LoginComponent},
       
  {path: "ladview", component:LoanViewComponent,
        canActivate:[AuthGuard]
  }, 
  
  {
    path:"ladstatus",component:LoanStatusComponent, canActivate:[AuthGuard]
  },
  {
    path: 'admin',component:AdminComponent,canActivate:[RoleGuard]
  },
  {path: 'loans', component:LoanListComponent,canActivate:[RoleGuard]},
  {path: 'create-loan', component:CreateLoanComponent,canActivate:[RoleGuard]},
  {path: 'update-loan/:id', component:UpdateLoanComponent,canActivate:[RoleGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
