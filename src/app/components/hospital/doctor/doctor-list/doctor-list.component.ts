import { Component, OnInit, ViewChild } from '@angular/core';
import { Doctor } from 'src/app/interfaces/Doctor';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DoctorService } from 'src/app/service/doctor.service';
import { UpdateDoctorComponent } from '../update-doctor/update-doctor.component';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  DoctorCount: number = 0;
  displayedColumns: String[] = [
    "id",
    "age",
    "edit",
    "delete",
    "gender",
    "doctor_id",
    "last_name",
    "first_name",
    "email_address",
    "specialization",
    "contact_number",
    "languages_known",
    "years_of_experience",
    "consultation_hours",
    "availability_days",
  ]
  dataSource!: MatTableDataSource<Doctor>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private doctorService: DoctorService) { }
  ngOnInit(): void {
    this.getAllDoctors();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  editDoctor(row: Doctor) {
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
        alert('Doctor deleted Successfuly');
        this.getAllDoctors();
        this.TotalDoctorCount();
      },
      error: () => {
        alert('error while deleting the Doctor ');
      }
    });
  }
  getAllDoctors(): void {
    this.doctorService.getDoctor().subscribe({
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