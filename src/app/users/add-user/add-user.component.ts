import { ProfileService } from './../../services/profile.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profiles/profile';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  profiles :any = [];
  registerForm : FormGroup | any;
  username: string |any;
  nom: string |any;
  prenom: string |any;
  email: string |any;
  profile: Profile |any;
  avatar: string |any
  telephone: string |any
  user: any =[];
  
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
      username: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      nom: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      prenom: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      email: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      avatar: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      telephone: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      profile: new FormControl({ value: '' }, Validators.compose([Validators.required]))
    });
  }

  select(event: any){
   this.avatar = event.target.files[0];
  //  console.log(event.target.files[0]);
  }
  onSubmit(){

    if (this.registerForm.invalid) {
      return ;
    }
 
    const formData = new FormData;
    formData.append('username', this.registerForm.value.username);
    formData.append('nom', this.registerForm.value.nom);
    formData.append('prenom', this.registerForm.value.prenom);
    formData.append('email', this.registerForm.value.email);
    formData.append('avatar', this.registerForm.value.avatar);
    formData.append('avatar', this.registerForm.value.avatar);
    formData.append('telephone', this.registerForm.value.telephone);
    // console.log(this.registerForm.value)
    
        if (this.registerForm.value.profile == "/api/admin/profiles/1") {
            console.log(this.registerForm.value)
            this.usersService.addAdmin(formData).subscribe((admin)=>{
            console.log(admin);
            return this.user = admin;
          });
        }
        if (this.registerForm.value.profile == "/api/admin/profiles/2") {
        this.usersService.addFormateur(formData).subscribe((formateur)=>{
        console.log(formateur);
        return this.user = formateur;
          });
        }
        if (this.registerForm.value.profile == "/api/admin/profiles/3") {
           this.usersService.addCm(formData).subscribe((cm)=>{
           console.log(cm);
           return this.user == cm;
          });
        }
      this.registerForm.reset();
      this.router.navigateByUrl('/home/users');
    }
}
