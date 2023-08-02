import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  customerLogin!: FormGroup;
  hide: boolean = true;
  minLength: number = 6;

  constructor(private router: Router) {
    this.customerLogin = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(this.minLength)])

    })
  }
  ngOnInit(): void { }

  submit() {
    this.router.navigate(['/customer/dashboard'])
  }
}
