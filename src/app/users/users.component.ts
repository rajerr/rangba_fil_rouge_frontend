import { Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   users: any = [];
  constructor(
    private usersService: UsersService,
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    if (this.authService.isLogin())
    {
      this.usersService.allUsers().subscribe((users) =>{
      console.log(users);
      this.users = users;
      });
    }else{
      this.router.navigate(['/']);
    }
    
  }


  @HostListener('scroll', ['$event'])
onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
}


}
