import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AvailabilityDays } from 'src/app/enums/AvailableDays';
import { Gender } from 'src/app/enums/Gender';
import { DoctorDetails } from 'src/app/interfaces/DoctorDetails';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css'],
})
export class UpdateDoctorComponent {
  doctorForm!: FormGroup;
  phoneLength: number = 10;
  days = Object.values(AvailabilityDays);
  genders = Object.values(Gender);
  selectedGender!: Gender;
  currentDoctor!: DoctorDetails;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      first_name: [
        null,
        [
          Validators.pattern(/^[A-Za-z,.'-]+$/),
          Validators.minLength(3),
          Validators.required,
        ],
      ],
      last_name: [
        null,
        [
          Validators.pattern(/^[A-Za-z,.'-]+$/),
          Validators.minLength(3),
          Validators.required,
        ],
      ],
      gender: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      specialization: [null, Validators.required],
      contact_number: [
        null,
        [Validators.required, Validators.pattern('[0-9]*')],
      ],
      email_address: [null, [Validators.required, Validators.email]],
      years_of_experience: [null, [Validators.required, Validators.min(1)]],
      languages_known: [[null], Validators.required],
      consultation_hours: [[null], Validators.required],
      availability_days: [[null], Validators.required],
    });
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.getDoctorDetails();
  }
  onAvailabilityDaysSelected(response: any) {
    // Set the selected value to the availabilityDays form control
    this.availabiltyDays?.setValue(response.target.value);
  }
  changeGender(response: any) {
    this.gender?.setValue(response.target.value, {
      onlySelf: true,
    });
  }
  // acces the form control getter
  get gender() {
    return this.doctorForm.get('gender');
  }
  get availabiltyDays() {
    return this.doctorForm.get('availableDays');
  }

  getDoctorDetails() {
    this.doctorService.getDoctorById(this.id).subscribe({
      next: (res) => {
        this.currentDoctor = res;
      },
      error: (res: HttpErrorResponse) => {
        alert('Error while fetching details');
        console.log(res);
      },
    });
  }

  updateDoctor() {
    if (this.doctorForm.invalid) {
      return;
    }

    const doctor: DoctorDetails = this.doctorForm.value;
    console.log(doctor);
    if (this.doctorForm.valid) {
      this.doctorService
        .updateDoctor(this.doctorForm.value, this.doctorForm.value.id)
        .subscribe({
          next: (res) => {
            alert('Details updated successfully');
            // this.doctorForm.reset();
          },
          error: (res: HttpErrorResponse) => {
            alert('Error while upating details');
            console.log(res);
          },
        });
    }
  }
}
