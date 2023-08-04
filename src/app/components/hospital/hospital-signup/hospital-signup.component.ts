import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalAccount } from 'src/app/interfaces/HospitalAccount';
import { HospitalAccountService } from 'src/app/service/hospital-account.service';

@Component({
  selector: 'app-hospital-signup',
  templateUrl: './hospital-signup.component.html',
  styleUrls: ['./hospital-signup.component.css']
})
export class HospitalSignupComponent implements OnInit {

  hospitalSignup!: FormGroup;
  hidePass: boolean = true;
  hideConfirmPass: boolean = true;
  submitted: boolean = false;
  minLength: number = 6;
  idLength: number = 5;
  h_contact_numberLength: number = 10;
  h_zip_code_Length: number = 6;

  public hospitalAccounts!: HospitalAccount[];

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private hospitalAccountService: HospitalAccountService) { }

  // convinience getter for easy access to form fields
  get form() { return this.hospitalSignup.controls; }

  ngOnInit(): void {

    this.hospitalSignup = this.formBuilder.group({
      h_id: ['', [Validators.pattern(/\d{5}/), Validators.required, Validators.maxLength(this.idLength)]],
      h_name: ['', [Validators.required]],
      h_email: ['', [Validators.email, Validators.required]],
      h_contact_number: ['', [Validators.pattern(/\d{10}/), Validators.maxLength(this.h_contact_numberLength), Validators.required]],
      h_street: ['', [Validators.required]],
      h_city: ['', [Validators.required]],
      h_state: ['', [Validators.required]],
      h_zip_code: ['', [Validators.pattern(/\d{6}/), Validators.minLength(this.h_zip_code_Length), Validators.required]],
      h_password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      confirm_password: ['', [Validators.required, Validators.minLength(this.minLength)]],
    });
  }

  // search for value in the all fields
  public searchHospitalAccounts(key: string) {
    const results: HospitalAccount[] = [];
    for (const hospital of this.hospitalAccounts) {
      if (hospital.h_id.toString().indexOf(key.toString()) !== -1 ||
        hospital.h_name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        hospital.h_password.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        hospital.h_street.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        hospital.h_zip_code.toString().indexOf(key.toString()) !== -1 ||
        hospital.h_city.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        hospital.h_state.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        hospital.h_contact_number.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        hospital.h_email.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(hospital);
      }
    }
    this.hospitalAccounts = results;
    if (results.length === 0 || !key) {
      this.getHospitalAccounts();
    }
  }
  // submit event
  submit() {
    if (this.form['h_password'].value !== this.form['confirm_password'].value) {
      alert("password and confirm password has to be same");
    }
    if (this.hospitalSignup.valid && this.form['h_password'].value === this.form['confirm_password'].value) {
      this.createHospitalAccount(this.hospitalSignup.value);
    }
  }
  // to get all the hospitals
  public getHospitalAccounts() {
    this.hospitalAccountService.getHospitalAccount().subscribe(
      {
        next: (response: HospitalAccount[]) => {
          this.hospitalAccounts = response;
          console.log(this.hospitalAccounts);
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message)
        }
      })
  }
  // to create a new hospital
  public createHospitalAccount(dataForm: HospitalAccount) {
    this.hospitalAccountService.addHospitalAccount(dataForm).subscribe({
      next: (response) => {
        console.log(response);
        alert("Hospital Account created")
        this.router.navigate(['/hospital/login'])
      },
      error: (response: HttpErrorResponse) => {
        alert(response.message);
      }
    });
  }
}

