import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  

  addUsers(data: any) {
    return this.http.post(`${environment.url}/admin/users`, data);
  }

  allUsers(): Observable <any> {
    return this.http.get(`${environment.url}/admin/users`);
  }

  allApprenants(): Observable <any> {
    return this.http.get(`${environment.url}/admin/apprenants`);
  }

  allCms():Observable <any> {
    return this.http.get(`${environment.url}/admin/cms`);
  }

  addCm(data: any) {
    return this.http.post(`${environment.url}/admin/Cms`, data);
  }

  allFormateurs():Observable <any> {
    return this.http.get(`${environment.url}/admin/formateurs`);
  }

  addFormateur(data: any) {
    return this.http.post(`${environment.url}/admin/formateurs`, data);
  }

  allAdmins():Observable <any> {
    return this.http.get(`${environment.url}/admin/admins`)
  }

  addAdmin(data: any) {
    return this.http.post(`${environment.url}/admin/admins`, data);
  }
}
