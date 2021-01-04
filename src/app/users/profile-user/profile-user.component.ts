import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

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

  user :any = [];
  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.user = localStorage.getItem('currentUser')
      console.log(this.user);
    //   this.authService.allUsers().subscribe((user)=>{
    //     console.log(user);
    //     this.users = user;
    //   });
    // } else {
    //   this.router.navigate(['/home'])
    }
    }
  }
