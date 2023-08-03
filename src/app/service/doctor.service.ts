import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { DoctorDetails } from '../interfaces/DoctorDetails';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  // doctor list url
  private apiServiceUrl: String = `${environment.apiBaseUrl}/doctors`;
  constructor(private http: HttpClient) { }

  addDoctor(data: DoctorDetails) {
    return this.http.post<any>(`${this.apiServiceUrl}/add`, data);
  }
  getAllDoctor() {
    return this.http.get<any | DoctorDetails>(`${this.apiServiceUrl}/all`);
  }
  getDoctorById(id: number) {
    return this.http.get<any | DoctorDetails>(`${this.apiServiceUrl}/${id}`);
  }
  updateDoctor(doctor: DoctorDetails, id: number) {
    return this.http.put<any>(`${this.apiServiceUrl}/update/${id}`, doctor);
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
