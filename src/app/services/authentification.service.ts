import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  helper = new JwtHelperService();
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${environment.url}/login_check`, data);
  }

  allUsers(): Observable<any> {
    return this.http.get(`${environment.url}/admin/users`);
  }


  // tslint:disable-next-line: typedef
  isLogin() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  // tslint:disable-next-line: typedef
  getAuthorizationToken() {
    // tslint:disable-next-line: no-non-null-assertion
    const currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    // console.log(currentUser);
    return currentUser.token;
  }

  isLoggedIn(): boolean {
    // tslint:disable-next-line: no-non-null-assertion
    const token = localStorage.getItem('token')!;
    return !this.helper.isTokenExpired(token);
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
  }
}
