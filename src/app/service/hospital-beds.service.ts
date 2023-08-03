import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HospitalBeds } from '../interfaces/HospitalBeds';

@Injectable({
  providedIn: 'root'
})
export class HospitalBedsService {
  // hospital beds list url
  private apiServiceUrl: String = `${environment.apiBaseUrl}/beds`;
  constructor(private http: HttpClient) { }


  public getAllHospitalBeds() {
    return this.http.get<any | HospitalBeds>(`${this.apiServiceUrl}/all`);
  }

  public getAllHospitalBedsById(hospitalBedsId: number) {
    return this.http.get<any | HospitalBeds>(`${this.apiServiceUrl}/${hospitalBedsId}`);
  }

  public addHospitalBeds(hospitalBedsData: HospitalBeds) {
    return this.http.post<any>(`${this.apiServiceUrl}/add`, hospitalBedsData);
  }

  public updateHospitalBeds(HospitalBeds: HospitalBeds, hospitalBedsId: number) {
    return this.http.put<any>(`${this.apiServiceUrl}/update/${hospitalBedsId}`, HospitalBeds);
  }

  public deleteHospitalBeds(HospitalBedsId: number) {
    return this.http.delete<any>(`${this.apiServiceUrl}/delete/${HospitalBedsId}`);
  }
}
