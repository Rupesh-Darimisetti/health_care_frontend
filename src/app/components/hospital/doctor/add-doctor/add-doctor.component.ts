import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvailabilityDays } from 'src/app/enums/AvailableDays';
import { Gender } from 'src/app/enums/Gender';
import { DoctorDetails } from 'src/app/interfaces/DoctorDetails';
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
  selectedGender!: Gender;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      firstName: [null, [
        Validators.pattern(/^[A-Za-z,.'-]+$/),
        Validators.minLength(3),
        Validators.required,
      ]],
      lastName: [null, [
        Validators.pattern(/^[A-Za-z,.'-]+$/),
        Validators.minLength(3),
        Validators.required,]],
      gender: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(1)]],
      specialization: [null, Validators.required],
      contactNumber: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      emailAddress: [null, [Validators.required, Validators.email]],
      yearsOfExperience: [null, [Validators.required, Validators.min(1)]],
      languagesKnown: [null, Validators.required],
      consultationHours: [[null], Validators.required],
      availabilityDays: [[null], Validators.required],
      selectedTime: []
    })
  };
  onAvailabilityDaysSelected(response: any) {
    // Set the selected value to the availabilityDays form control
    this.availabiltyDays?.setValue(response.target.value);
  }
  changeGender(response: any) {
    this.gender?.setValue(response.target.value, {
      onlySelf: true
    })
  }
  // acces the form control getter
  get gender() {
    return this.doctorForm.get('gender');
  }
  get availabiltyDays() {
    return this.doctorForm.get('availableDays');
  }
  addDoctor() {
    if (this.doctorForm.invalid) {
      return;
    }

    const doctor: DoctorDetails = this.doctorForm.value;
    console.log(doctor)
    if (this.doctorForm.valid) {
      this.doctorService.addDoctor(this.doctorForm.value)
        .subscribe({
          next: (res) => {
            alert("Doctor added successfully")
            this.doctorForm.reset();
          },
          error: () => {
            alert("Error while adding Doctor")
          }
        });
    }
  }
}