import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.css']
})
export class ListApprenantComponent implements OnInit {

   apprenants: any = [];
  constructor(
    private authService: AuthentificationService,
    private usersService:UsersService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isLogin()){
      this.usersService.allApprenants().subscribe((apprenants)=>{
        console.log(apprenants);
        this.apprenants = apprenants;
      });
    }else{
      this.router.navigate(['/home']);
    }
  }

}
