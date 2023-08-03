import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HospitalBeds } from 'src/app/interfaces/HospitalBeds';
import { HospitalBedsService } from 'src/app/service/hospital-beds.service';
@Component({
  selector: 'app-update-beds',
  templateUrl: './update-beds.component.html',
  styleUrls: ['./update-beds.component.css']
})
export class UpdateBedsComponent implements OnInit {
  public hospitalBeds!: HospitalBeds[];
  public id: number = 0;
  constructor(private hospitalBedsService: HospitalBedsService) { }
  ngOnInit(): void {

  }
  public onUpdateHospitalBeds(hospitalBeds: HospitalBeds) {
    this.hospitalBedsService.updateHospitalBeds(hospitalBeds, this.id).subscribe({
      next: (response: HospitalBeds) => {
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
}
