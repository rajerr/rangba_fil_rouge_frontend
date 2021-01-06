import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  constructor(
    private http: HttpClient
  ) { }

  addCompetences(data: any) {
    return this.http.post(`${environment.url}/competences`, data);
  }

  allCompetences(): Observable <any> {
    return this.http.get(`${environment.url}/competences`);
  }

}
