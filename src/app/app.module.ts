import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './components/customer/customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './components/customer/customer-login/customer-login.component';
import { CustomerSignupComponent } from './components/customer/customer-signup/customer-signup.component';
import { AddDoctorComponent } from './components/hospital/doctor/add-doctor/add-doctor.component';
import { DoctorListComponent } from './components/hospital/doctor/doctor-list/doctor-list.component';
import { UpdateDoctorComponent } from './components/hospital/doctor/update-doctor/update-doctor.component';
import { HospitalDashboardComponent } from './components/hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalLoginComponent } from './components/hospital/hospital-login/hospital-login.component';
import { HospitalSignupComponent } from './components/hospital/hospital-signup/hospital-signup.component';
import { AddBedsComponent } from './components/hospital/hospital_beds/add-beds/add-beds.component';
import { BedsListComponent } from './components/hospital/hospital_beds/beds-list/beds-list.component';
import { UpdateBedsComponent } from './components/hospital/hospital_beds/update-beds/update-beds.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HospitalLoginComponent,
    HospitalSignupComponent,
    CustomerSignupComponent,
    CustomerLoginComponent,
    NavbarComponent,
    HospitalDashboardComponent,
    CustomerDashboardComponent,
    // doctor
    UpdateDoctorComponent,
    AddDoctorComponent,
    DoctorListComponent,
    // beds
    AddBedsComponent,
    UpdateBedsComponent,
    BedsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
