import { Router } from '@angular/router';
import { ProfileSortieService } from './../services/profile-sortie.service';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-profiles-sortie',
  templateUrl: './profiles-sortie.component.html',
  styleUrls: ['./profiles-sortie.component.css']
})
export class ProfilesSortieComponent implements OnInit {

  profilesSortie:any = [];
  constructor(
    private authService: AuthentificationService,
    private profileSortieService: ProfileSortieService, 
    private router: Router
  ) { }

  ngOnInit(): void {

    if(this.authService.isLogin()){
      this.profileSortieService.allProfilesSortie().subscribe((profiles)=>{
        console.log(profiles);
        this.profileSortieService = this.profilesSortie;
      })
    }else{
      this.router.navigate(['/home']);
    }
  }

}
