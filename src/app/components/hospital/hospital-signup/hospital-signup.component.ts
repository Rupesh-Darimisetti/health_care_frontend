import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalAccountService } from 'src/app/service/hospital-account.service';

@Component({
  selector: 'app-hospital-signup',
  templateUrl: './hospital-signup.component.html',
  styleUrls: ['./hospital-signup.component.css']
})
export class HospitalSignupComponent implements OnInit {

  hospitalSignup!: FormGroup;
  hide: boolean = true;
  submitted: boolean = false;
  minLength: number = 6;
  idLength: number = 5;
  phoneLength: number = 10;

  // input fields
  // email: String = "";

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private hospitalAccountService: HospitalAccountService) { }

  // convinience getter for easy access to form fields
  get form() { return this.hospitalSignup.controls; }
  ngOnInit(): void {

    this.hospitalSignup = new FormGroup({
      h_id: new FormControl('', [Validators.pattern(/\d{5}/), Validators.required, Validators.maxLength(this.idLength)]),
      h_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.pattern(/\d{10}/), Validators.required]),
      street: new FormControl('', [Validators.required]),
      h_city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', [Validators.pattern(/\d{6}/), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(this.minLength)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(this.minLength)])
    })
  }

  submit() {
    if (this.form['password'].value === this.form['confirm_password'].value) {

      this.hospitalAccountService.addHospitalAccount(this.hospitalSignup.value).subscribe({
        next: (response) => {
          console.log(response);
          alert("Hospital Account created")
          if (response) {
            this.router.navigate(['/hospital/login'])
          }
        }
      });
    }
  }
}
