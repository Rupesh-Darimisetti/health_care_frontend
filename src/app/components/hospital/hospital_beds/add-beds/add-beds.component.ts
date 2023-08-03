import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HospitalBedsService } from 'src/app/service/hospital-beds.service';

@Component({
  selector: 'app-add-beds',
  templateUrl: './add-beds.component.html',
  styleUrls: ['./add-beds.component.css']
})
export class AddBedsComponent implements OnInit {
  hospitalBedsForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private hospitalBedsService: HospitalBedsService) { }

  ngOnInit(): void {
    this.hospitalBedsForm = this.formBuilder.group({
      hRegularBeds: new FormControl('', [Validators.required]),
      hIcuBeds: new FormControl('', [Validators.required]),
      hPediatricBeds: new FormControl('', [Validators.required]),
      hMaternityBeds: new FormControl('', [Validators.required]),
      hBirthingBeds: new FormControl('', [Validators.required]),
      hOrthopedicBeds: new FormControl('', [Validators.required]),
      hHomeCareBeds: new FormControl('', [Validators.required]),
      hEmergencyBeds: new FormControl('', [Validators.required])
    })
  }

  addBeds() {
    if (this.hospitalBedsForm.valid) {
      this.hospitalBedsService.addHospitalBeds(this.hospitalBedsForm.value)
        .subscribe({
          next: (res) => {
            alert("hospitalBeds added successfully")
            this.hospitalBedsForm.reset();
          },
          error: () => {
            alert("Error while adding hospitalBeds")
          }
        });
    }
  }
}
