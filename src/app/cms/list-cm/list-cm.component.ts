import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-list-cm',
  templateUrl: './list-cm.component.html',
  styleUrls: ['./list-cm.component.css']
})
export class ListCmComponent implements OnInit {

   cms:any = [];

  constructor(
    private authService: AuthentificationService, 
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {

    if(this.authService.isLogin()){
      this.usersService.allCms().subscribe((cms)=>{
        console.log(cms);
        this.cms = cms;
      });
    }else{
      this.router.navigate(['/home']);
    }
  }

}
