import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvailabilityDays } from 'src/app/enums/AvailableDays';
import { Gender } from 'src/app/enums/Gender';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doctorForm!: FormGroup;
  phoneLength: number = 10;
  days = Object.values(AvailabilityDays);
  genders = Object.values(Gender);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      first_name: [null, [
        Validators.pattern(/^[A-Za-z,.'-]+$/),
        Validators.minLength(3),
        Validators.required,
      ]],
      last_name: [null, [
        Validators.pattern(/^[A-Za-z,.'-]+$/),
        Validators.minLength(3),
        Validators.required,]],
      gender: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      specialization: [null, Validators.required],
      contact_number: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      email_address: [null, [Validators.required, Validators.email]],
      years_of_experience: [null, [Validators.required, Validators.min(1)]],
      languages_known: [[null], Validators.required],
      consultation_hours: [[null], Validators.required],
      availability_days: [[null], Validators.required],
    })
  };

  addDoctor() {
    if (this.doctorForm.invalid) {
      return;
    }

    if (this.doctorForm.valid) {
      this.doctorService.addDoctor(this.doctorForm.value)
        .subscribe({
          next: (res) => {
            alert("Doctor added successfully")
            this.doctorForm.reset();
            this.router.navigate(['/hospital/dashboard'])
          },
          error: (res: HttpErrorResponse) => {
            alert("Error while adding Doctor");
            console.log(res);
          }
        });
    }
  }
}