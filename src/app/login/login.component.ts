import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  helper = new JwtHelperService();
  LoginForm: FormGroup | any;
  username: string | any;
  password: string | any;
  role: string | any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.LoginForm.invalid){
      return ;
    }
    this.authService.login(this.LoginForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          const helper = new JwtHelperService();
          const decodeToken = helper.decodeToken(Object.values(res)[0]);
          console.log(decodeToken.roles[0]);

          // tslint:disable-next-line: triple-equals
          if (decodeToken.roles[0] == 'ROLE_ADMIN'){
            this.router.navigateByUrl('/home');
          }
          // tslint:disable-next-line: triple-equals
          if (decodeToken.roles[0] == 'ROLE_FORMATEUR'){
            this.router.navigateByUrl('/home/formateurs');
          }
          // tslint:disable-next-line: triple-equals
          if (decodeToken.roles[0] == 'ROLE_CM') {
            this.router.navigateByUrl('/home/cms');
          }
          // tslint:disable-next-line: triple-equals
          if (decodeToken.roles[0] == 'ROLE_APPRENANT') {
            this.router.navigateByUrl('/home/apprenants');
          }
        },
        (err) => {
          console.log(err);
          this.router.navigateByUrl('/');
      }
    );
  }

}
