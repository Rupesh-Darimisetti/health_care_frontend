import { Component } from '@angular/core';

@Component({
  selector: 'app-hospital-signup',
  templateUrl: './hospital-signup.component.html',
  styleUrls: ['./hospital-signup.component.css']
})
export class HospitalSignupComponent {
  hide = true;
  displauedColumns: String[] = [
    "id",
    "h_password",
    "h_name",
    "h_street",
    "h_zip_code",
    "h_city",
    "h_state",
    "h_contact_number",
    "h_email",
    "h_website",
    "h_lab_facility",
    "h_insurance_acceptance"];
}
