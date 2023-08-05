import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  // id!: number;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editDoctor: DoctorDetails,
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) { }

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
    // this.route.paramMap.subscribe((params) => {
    //   this.id = Number(params.get('id'));
    // });
    // fetch the data dynamically from the webpage / user
    if (this.editDoctor) {
      this.doctorForm.controls['first_name'].setValue(this.editDoctor.first_name);
      this.doctorForm.controls['last_name'].setValue(this.editDoctor.last_name);
      this.doctorForm.controls['gender'].setValue(this.editDoctor.gender);
      this.doctorForm.controls['age'].setValue(this.editDoctor.age);
      this.doctorForm.controls['specialization'].setValue(this.editDoctor.specialization);
      this.doctorForm.controls['contact_number'].setValue(this.editDoctor.contact_number);
      this.doctorForm.controls['email_address'].setValue(this.editDoctor.email_address);
      this.doctorForm.controls['years_of_experience'].setValue(this.editDoctor.years_of_experience);
      this.doctorForm.controls['languages_known'].setValue(this.editDoctor.languages_known);
      this.doctorForm.controls['consultation_hours'].setValue(this.editDoctor.consultation_hours);
      this.doctorForm.controls['availability_days'].setValue(this.editDoctor.availability_days);
    }
  }

  updateDoctor() {
    if (this.doctorForm.invalid) {
      return;
    }

    const doctor: DoctorDetails = this.doctorForm.value;
    console.log(doctor);
    if (this.doctorForm.valid) {
      this.doctorService
        .updateDoctor(this.doctorForm.value, this.editDoctor.doctor_id)
        .subscribe({
          next: (res) => {
            alert('Details updated successfully');
            this.doctorForm.reset();
          },
          error: (res: HttpErrorResponse) => {
            alert('Error while upating details');
            console.log(res);
          },
        });
    }
  }
}
