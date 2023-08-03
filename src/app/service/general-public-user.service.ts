import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { GeneralPublicUser } from '../interfaces/GeneralPublicUser';

@Injectable({
  providedIn: 'root'
})
export class GeneralPublicUserService {

  private apiServiceUrl: String = `${environment.apiBaseUrl}/users`;
  constructor(private http: HttpClient) { }

  public getAllGeneralPublicUser() {
    return this.http.get<any | GeneralPublicUser>(`${this.apiServiceUrl}/all`);
  }

  public geGeneralPublicUserById(generalPublicUserId: number) {
    return this.http.get<any | GeneralPublicUser>(`${this.apiServiceUrl}/${generalPublicUserId}`);
  }

  public addGeneralPublicUser(data: GeneralPublicUser) {
    return this.http.post<any>(`${this.apiServiceUrl}/add`, data);
  }

  public updateGeneralPublicUser(generalPublicUser: GeneralPublicUser, generalPublicUserId: number) {
    return this.http.put<any>(`${this.apiServiceUrl}/update/${generalPublicUserId}`, generalPublicUser);
  }

  public deleteGeneralPublicUser(generalPublicUserId: number) {
    return this.http.delete<any>(`${this.apiServiceUrl}/delete/${generalPublicUserId}`);
  }

  getGeneralPublicUserCount() {
    return this.http
      .get<any>(`${this.apiServiceUrl}/users/all`)
      .pipe(map((generalPublicUserList: any[]) => generalPublicUserList.length));
  }
}
