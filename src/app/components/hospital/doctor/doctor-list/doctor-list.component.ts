import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DoctorDetails } from 'src/app/interfaces/DoctorDetails';
import { DoctorService } from 'src/app/service/doctor.service';
import { UpdateDoctorComponent } from '../update-doctor/update-doctor.component';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  DoctorCount: number = 0;
  displayedColumns: string[] = [
    "doctor_id",
    "id",
    "age",
    "gender",
    "last_name",
    "first_name",
    "email_address",
    "specialization",
    "contact_number",
    "languages_known",
    "years_of_experience",
    "consultation_hours",
    "availability_days",
    "edit",
    "delete",
  ]
  dataSource!: MatTableDataSource<DoctorDetails>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private doctorService: DoctorService) { }
  ngOnInit(): void {
    this.getAllDoctors();
    this.TotalDoctorCount();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editDoctor(row: DoctorDetails) {
    this.dialog.open(UpdateDoctorComponent, {
      data: row
    }).afterClosed().subscribe((val) => {
      if (val == 'update') {
        this.getAllDoctors();
        this.TotalDoctorCount();
      }
    })
  }
  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe({
      next: (res) => {
        alert('DoctorDetails deleted Successfuly');
        this.getAllDoctors();
        this.TotalDoctorCount();
      },
      error: () => {
        alert('error while deleting the DoctorDetails ');
      }
    });
  }
  getAllDoctors(): void {
    this.doctorService.getAllDoctor().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('error while getting Doctors')
      }

    });
  }
  TotalDoctorCount() {
    this.doctorService.getDoctorCount().subscribe({
      next: (count: number) => {
        this.DoctorCount = count;
      }
    });
  }
}