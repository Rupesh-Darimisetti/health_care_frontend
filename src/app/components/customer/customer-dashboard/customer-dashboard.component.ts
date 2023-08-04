import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
/** TODO: replace interface with available hospitals after modifying service */
import {
  HospitalAccount,
  AvailableHospitals,
} from 'src/app/interfaces/HospitalAccount';
import { HospitalAccountService } from 'src/app/service/hospital-account.service';

const tempdata: AvailableHospitals[] = [
  {
    h_id: 1,
    h_name: 'Apollo',
    h_password: 'trgdfg',
    h_street: '11th street',
    h_zip_code: 510054,
    h_city: 'Bengaluru',
    h_state: 'Karnataka',
    h_contact_number: '9453485386',
    h_email: 'apollo-bng@apollo.com',
    h_website: 'https://www.apollo.com',
    beds_available: 20,
  },
  {
    h_id: 2,
    h_name: '7 hills',
    h_password: 'trgdfg',
    h_street: 'church street',
    h_zip_code: 510234,
    h_city: 'Bengaluru',
    h_state: 'Karnataka',
    h_contact_number: '9453485386',
    h_email: '7hills-bng@7hills.com',
    h_website: 'https://www.7hills.com',
    beds_available: 5,
  },
];

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent implements OnInit {
  HospitalsCount: number = 0;
  displayedColumns: String[] = [
    'h_id',
    'name',
    'location',
    'contact_num',
    'email',
    'website',
    'beds_available',
  ];

  /** TODO: Comment from here while making it dynamic */
  dataSource!: MatTableDataSource<AvailableHospitals>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private hospitalAccountService: HospitalAccountService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getAvailableHospitals();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAvailableHospitals() {
    this.dataSource = new MatTableDataSource(tempdata);
    console.log(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.HospitalsCount = this.dataSource.data.length;
  }

  /**TODO: Make it dynamic */
  // dataSource!: MatTableDataSource<HospitalAccount>;

  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;

  // constructor(
  //   private dialog: MatDialog,
  //   private hospitalAccountService: HospitalAccountService
  // ) {}
  // ngOnInit(): void {
  //   this.getAvailableHospitals();
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // /** TODO: Use filter/map to get hospitals with available beds count > 0 */
  // getAvailableHospitals(): void {
  //   this.hospitalAccountService.getHospitalAccount().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     error: (err) => {
  //       alert('error while getting available beds');
  //     },
  //   });
  // }
  /** TODO: Specify route in module and then link to doctors list component or new component with 2 tabs */
  AvailabityDetails(id: number) {
    this.router.navigate(['/hospital/dashboard/:id']);
  }
}
