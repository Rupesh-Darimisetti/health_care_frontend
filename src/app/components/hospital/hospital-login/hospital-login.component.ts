import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HospitalAccountService } from 'src/app/service/hospital-account.service';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent implements OnInit {

  hospitalLogin!: FormGroup;
  hide: boolean = true;
  minLength: number = 6;
  email!: EmailValidator;

  constructor(private router: Router, private hospitalAccountService: HospitalAccountService) {
    this.hospitalLogin = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(this.minLength)])
    })
  }
  ngOnInit(): void {

  }

  submit() {
    this.router.navigate(['/hospital/dashboard']);

    this.hospitalAccountService.getHospitalAccount().subscribe({
      next: (response: any) => {
        // if (response) {
        // this.globals.email = this.hospitalLogin.controls['email'].value)
        this.router.navigate(['/hospital/dashboard']);
        // }
      }
    })
    console.log(this.hospitalLogin.controls['email'].value);
    console.log(this.hospitalLogin.controls['password'].value);
  }
}
