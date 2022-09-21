import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}  from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoanStatusComponent } from './component/loan-status/loan-status.component';
import { LoanViewComponent } from './component/loan-view/loan-view.component';
import { LoanTrackComponent } from './component/loan-track/loan-track.component';
import { HomeComponent } from './component/home/home.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MatSliderModule } from '@angular/material/slider';
import { CreateLoanComponent } from './component/create-loan/create-loan.component';
import { LoanListComponent } from './component/loan-list/loan-list.component';
import { UpdateLoanComponent } from './component/update-loan/update-loan.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    LoanStatusComponent,
    LoanTrackComponent,
    LoanViewComponent,
    HomeComponent,
    CustomerFormComponent,
    LoanListComponent,
    CreateLoanComponent,
    UpdateLoanComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
