import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer/customer-dashboard/customer-dashboard.component';
import { CustomerLoginComponent } from './components/customer/customer-login/customer-login.component';
import { CustomerSignupComponent } from './components/customer/customer-signup/customer-signup.component';
import { AddDoctorComponent } from './components/hospital/doctor/add-doctor/add-doctor.component';
import { DoctorListComponent } from './components/hospital/doctor/doctor-list/doctor-list.component';
import { HospitalDashboardComponent } from './components/hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalLoginComponent } from './components/hospital/hospital-login/hospital-login.component';
import { HospitalSignupComponent } from './components/hospital/hospital-signup/hospital-signup.component';
import { AddBedsComponent } from './components/hospital/hospital_beds/add-beds/add-beds.component';
import { BedsListComponent } from './components/hospital/hospital_beds/beds-list/beds-list.component';
import { UpdateBedsComponent } from './components/hospital/hospital_beds/update-beds/update-beds.component';

const routes: Routes = [
  // { path: '', component: NavbarComponent },
  //  hospital routes
  { path: 'hospital/login', component: HospitalLoginComponent },
  { path: 'hospital/signup', component: HospitalSignupComponent },
  { path: 'hospital/dashboard', component: HospitalDashboardComponent },
  // docotor
  { path: 'hospital/doctor', component: DoctorListComponent },
  { path: 'hospital/doctor/add_doctor', component: AddDoctorComponent },
  { path: 'hospital/doctor/doctorlist', component: DoctorListComponent },
  // beds
  { path: 'hospital/hospital_beds', component: BedsListComponent },
  { path: 'hospital/hospital_beds/add_beds', component: AddBedsComponent },
  { path: 'hospital/hospital_beds/update_beds', component: UpdateBedsComponent },
  // customer part
  { path: 'customer/login', component: CustomerLoginComponent },
  { path: 'customer/signup', component: CustomerSignupComponent },
  { path: 'customer/dashboard', component: CustomerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
