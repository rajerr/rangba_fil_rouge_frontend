import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

   admins: any = [];
  constructor(
    private usersService: UsersService,
    private authService: AuthentificationService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.usersService.allAdmins().subscribe((admins)=>{
        console.log(admins);
        this.admins = admins
      })
    } else {
      this.router.navigate(['/home'])
    }
  }
}
