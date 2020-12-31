import { Router } from '@angular/router';
import { ProfileService } from './../services/profile.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: any = [];
  constructor(
    private profilesService: ProfileService,
    private authService: AuthentificationService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isLogin()) {
      this.profilesService.allProfiles().subscribe((profiles)=>{
        console.log(profiles);
        this.profiles = profiles;
      });
    } else {
      this.router.navigate(['/home'])
    }
  }

}
