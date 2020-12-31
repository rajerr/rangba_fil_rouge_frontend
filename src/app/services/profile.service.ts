import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }



  addProfile(data: any) {
    return this.http.post(`${environment.url}/admin/profiles`, data);
  }

  allProfiles(): Observable <any> {
    return this.http.get(`${environment.url}/admin/profiles`);
  }

}
