import { User } from './../users/user';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  

  addUsers(user: User) {
    return this.http.post(`${environment.url}/admin/users`, user);
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

  addCm(user: User) {
    return this.http.post(`${environment.url}/admin/Cms`, user);
  }

  allFormateurs():Observable <any> {
    return this.http.get(`${environment.url}/admin/formateurs`);
  }

  addFormateur(user: User) {
    return this.http.post(`${environment.url}/admin/formateurs`, user);
  }

  allAdmins():Observable <any> {
    return this.http.get(`${environment.url}/admin/admins`)
  }

  addAdmin(user: User) {
    return this.http.post(`${environment.url}/admin/admins`, user);
  }
}
