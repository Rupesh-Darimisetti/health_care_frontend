import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, map } from 'rxjs/operators';
/** TODO: replace interface with available hospitals after modifying service */
import { HospitalAccount } from 'src/app/interfaces/HospitalAccount';
import { HospitalAccountService } from 'src/app/service/hospital-account.service';

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
    '',
  ];
  dataSource!: MatTableDataSource<HospitalAccount>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private hospitalAccountService: HospitalAccountService
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

  /** TODO: Use filter/map to get hospitals with available beds count > 0 */
  getAvailableHospitals(): void {
    this.hospitalAccountService.getHospitalAccount().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('error while getting available beds');
      },
    });
  }
}
