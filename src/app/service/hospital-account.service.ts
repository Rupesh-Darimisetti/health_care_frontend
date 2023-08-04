import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HospitalAccount } from '../interfaces/HospitalAccount';

@Injectable({
  providedIn: 'root'
})
export class HospitalAccountService {
  // hospital account list url
  private apiServiceUrl: String = `${environment.apiBaseUrl}/hospitals`;
  constructor(private http: HttpClient) { }


  public getHospitalAccount(): Observable<HospitalAccount[]> {
    return this.http.get<any>(`${this.apiServiceUrl}/all`);
  }
  public getHospitalAccountById(hospitalAccountById: number): Observable<void> {
    return this.http.get<any>(`${this.apiServiceUrl}/${hospitalAccountById}`);
  }
  public addHospitalAccount(hospitalData: HospitalAccount): Observable<HospitalAccount> {
    return this.http.post<any>(`${this.apiServiceUrl}/add`, hospitalData);
  }
  public updateHospitalAccount(hospitalAccount: HospitalAccount, hospitalAccountById: number): Observable<HospitalAccount> {
    return this.http.put<any>(`${this.apiServiceUrl}/update/${hospitalAccountById}`, hospitalAccount);
  }
  public deleteHospitalAccount(hospitalAccountById: number): Observable<void> {
    return this.http.delete<any>(`${this.apiServiceUrl}/delete/${hospitalAccountById}`);
  }
  public getHospitalAccountCount() {
    return this.http
      .get<any>(`${this.apiServiceUrl}`)
      .pipe(map((HospitalAccountList: any[]) => HospitalAccountList.length));
  }
}
