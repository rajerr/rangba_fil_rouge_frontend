import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users: any
  constructor(
    private usersService: UsersService,
    private authService: AuthentificationService
  ) { }

  ngOnInit(): void {
    
    this.users = this.usersService.allUsers();
    console.log(this.users);
    
  }

}
