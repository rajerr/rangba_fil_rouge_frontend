import { ProfileService } from './../../services/profile.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  profiles :any = [];
  registerForm : FormGroup | any;
  nom: string |any;
  prenom: string |any;
  email: string |any;
  profile: string |any;
  avatar: string |any
  constructor(
    private usersService: UsersService,
    private router : Router,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
  ) { }

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   nom: ['', Validators.required],
    //   prenom: ['', Validators.required],
    //   email: ['', Validators.required],
    //   profile: ['', Validators.required],
    // })

    this.profiles = this.profileService.allProfiles().subscribe((profiles)=>{
      console.log(profiles);
      this.profiles = profiles;
    })

    this.registerForm = new FormGroup({
      nom: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      prenom: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      email: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      profile: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }


  onSubmit(){

    if (this.registerForm.invalid) {
      return this.registerForm.value;
    }

    console.log(this.registerForm.value)
    this.usersService.addAdmin(this.registerForm.value).subscribe((user)=>{
      this.registerForm.reset();
      this.router.navigateByUrl('/home/users');
    })
  }

}
