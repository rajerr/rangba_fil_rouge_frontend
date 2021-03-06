import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetencesService {

  constructor(
    private http: HttpClient
  ) { }
  

  addGroupeCompetences(data: any) {
    return this.http.post(`${environment.url}/admin/groupecompetences`, data);
  }

  allGroupeCompetences(): Observable <any> {
    return this.http.get(`${environment.url}/admin/groupecompetences`);
  }

}
