import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileSortieService {

  constructor(private http:HttpClient) { }

  addProfileSortie(data: any) {
    return this.http.post(`${environment.url}/admin/profileSorties`, data);
  }

  allProfilesSortie(): Observable <any> {
    return this.http.get(`${environment.url}/admin/profileSorties`);
  }
}
