import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HospitalBeds } from 'src/app/interfaces/HospitalBeds';
import { HospitalBedsService } from 'src/app/service/hospital-beds.service';
import { UpdateBedsComponent } from '../update-beds/update-beds.component';

@Component({
  selector: 'app-beds-list',
  templateUrl: './beds-list.component.html',
  styleUrls: ['./beds-list.component.css']
})
export class BedsListComponent {
  hospitalBedCount = 0
  public hospitalBeds!: HospitalBeds[];
  public editHospitalBed!: HospitalBeds | null;
  public deleteHospitalBed!: HospitalBeds | null;

  displayedColumns: String[] = [
    "id",
    "hRegularBeds",
    "hIcuBeds",
    "hPediatricBeds",
    "hMaternityBeds",
    "hBirthingBeds",
    "hOrthopedicBeds",
    "hHomeCareBeds",
    "hEmergencyBeds",
    "edit",
  ]
  dataSource!: MatTableDataSource<HospitalBeds>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private hospitalBedService: HospitalBedsService) { }
  ngOnInit(): void {
    this.getAllHospitalBeds();
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public getHospitalBeds() {
    this.hospitalBedService.getAllHospitalBeds().subscribe({
      next: (response: HospitalBeds[]) => {
        this.hospitalBeds = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
  editHospitalBeds(row: HospitalBeds) {
    this.dialog.open(UpdateBedsComponent, {
      data: row
    }).afterClosed().subscribe((val) => {
      if (val == 'update') {
        this.getAllHospitalBeds();
        // this.TotalHospitalBedsCount();
      }
    })
  }
  deleteHospitalBeds(id: number) {
    this.hospitalBedService.deleteHospitalBeds(id).subscribe({
      next: (res) => {
        alert('HospitalBeds deleted Successfuly');
        this.getAllHospitalBeds();
        // this.TotalHospitalBedsCount();
      },
      error: () => {
        alert('error while deleting the Hospital Beds ');
      }
    });
  }
  getAllHospitalBeds(): void {
    this.hospitalBedService.getAllHospitalBeds().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('error while getting Hospital Beds')
      }

    });
  }
  // TotalHospitalBedsCount() {
  //   this.hospitalBedService.getHospitalBedsCount().subscribe({
  //     next: (count: number) => {
  //       this.hospitalBedCount = count;
  //     }
  //   });
  // }
}
