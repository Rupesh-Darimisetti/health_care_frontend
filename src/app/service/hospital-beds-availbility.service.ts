import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HospitalBedsAvailibility } from '../interfaces/HospitalBedsAvailibility';

@Injectable({
  providedIn: 'root'
})
export class HospitalBedsAvailbilityService {

  private apiServiceUrl = `${environment.apiBaseUrl}/beds-availability`
  constructor(private http: HttpClient) { }

  public getAllHospitalBedsAvailable() {
    return this.http.get<any | HospitalBedsAvailibility>(`${this.apiServiceUrl}/all`);
  }

  public geHospitalBedsAvailableById(hospitalBedsAvailableId: number) {
    return this.http.get<any | HospitalBedsAvailibility>(`${this.apiServiceUrl}/${hospitalBedsAvailableId}`);
  }

  public addHospitalBedsAvailable(data: HospitalBedsAvailibility) {
    return this.http.post<any>(`${this.apiServiceUrl}/add`, data);
  }

  public updateHospitalBedsAvailable(hospitalBedsAvailable: HospitalBedsAvailibility, hospitalBedsAvailableId: number) {
    return this.http.put<any>(`${this.apiServiceUrl}/update/${hospitalBedsAvailableId}`, hospitalBedsAvailable);
  }

  public deleteHospitalBedsAvailable(hospitalBedsAvailableId: number) {
    return this.http.delete<any>(`${this.apiServiceUrl}/delete/${hospitalBedsAvailableId}`);
  }


}
