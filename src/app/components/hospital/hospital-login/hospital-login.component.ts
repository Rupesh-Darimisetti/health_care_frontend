import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  hospitalLogin!: FormGroup;
  hide: boolean = true;
  minLength: number = 6;

  constructor(private router: Router) {
    this.hospitalLogin = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(this.minLength)])
    })
  }
  ngOnInit(): void {

  }

  submit() {
    console.log(this.hospitalLogin.controls['email'].value);
    console.log(this.hospitalLogin.controls['password'].value);
    this.router.navigate(['/hospital/dashboard']);
  }
}
