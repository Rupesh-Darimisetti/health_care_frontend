import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  doctorForm!: FormGroup;
  phoneLength: number = 10;

  constructor(
    private formBuilder: FormBuilder,
    private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      first_name: new FormControl('', [
        Validators.pattern(/^[A-Za-z,.'-]+$/),
        Validators.minLength(3),
        Validators.required,
      ]),
      last_name: new FormControl('', [
        Validators.pattern(/^[A-Za-z,.'-]+$/),
        Validators.minLength(3),
        Validators.required,]),
      gender: new FormControl('', []),
      age: new FormControl('', []),
      specialization: new FormControl('', []),
      contact_number: new FormControl('', []),
      email_address: new FormControl('', [Validators.email, Validators.required]),
      years_of_experience: new FormControl('', [Validators.pattern(/^[0-9]$/), Validators.maxLength(3), Validators.required]),
      languages_known: new FormControl('', []),
      consultation_hours: new FormControl('', [Validators.pattern(/^[0-9]{2}$/), Validators.required]),
      availability_days: new FormControl('', []),
    })
  };

  addDoctor() {
    if (this.doctorForm.valid) {
      this.doctorService.postDoctor(this.doctorForm.value)
        .subscribe({
          next: (res) => {
            alert("Employee added successfully")
            this.doctorForm.reset();
          },
          error: () => {
            alert("Error while adding employee")
          }
        });
    }
  }
}