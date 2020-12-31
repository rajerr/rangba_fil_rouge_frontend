import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {

   formateurs: any = [];
  constructor(
    private authService: AuthentificationService,
    private usersService: UsersService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.isLogin()){
      this.usersService.allFormateurs().subscribe((formateurs)=>{
        console.log(formateurs);
        this.formateurs = formateurs;
      })
    }else{
       this.router.navigate(['/home]']);
    }
  }

}
