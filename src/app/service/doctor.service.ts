import { Injectable } from '@angular/core';
import { Doctor } from '../interfaces/Doctor';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  // doctor list url
  private apiServiceUrl: String = `${environment.apiBaseUrl}/hospital/doctor`;
  constructor(private http: HttpClient) { }

  postDoctor(data: Doctor) {
    return this.http.post<any>(`${this.apiServiceUrl}/add`, data);
  }
  getDoctor() {
    return this.http.get<any | Doctor>(`${this.apiServiceUrl}/all`);
  }
  putDoctor(doctor: Doctor, id: number) {
    return this.http.put<any>(`${this.apiServiceUrl}/update`, doctor);
  }
  deleteDoctor(doctorId: number) {
    return this.http.delete<any>(`${this.apiServiceUrl}/delete/${doctorId}`);
  }

  getDoctorCount() {
    return this.http
      .get<any>(`${this.apiServiceUrl}/hospital/docotor`)
      .pipe(map((DoctorList: any[]) => DoctorList.length));
  }

}
