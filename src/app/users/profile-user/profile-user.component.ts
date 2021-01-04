import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(
    private authService: AuthentificationService,
    private router: Router
        ){ }

 
  ngOnInit(): void {
    if (this.authService.isLogin()) {
      const  currentUser = localStorage.getItem('currentUser');
      console.log(currentUser);
    } 
  }
 }
