import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm : FormGroup | any;
  nom: string |any;
  prenom: string |any;
  email: string |any;
  profile: string |any;
  constructor(
    private usersService: UsersService,
    private router : Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      profile: ['', Validators.required],
    })
  }


  onSubmit(){
    if (this.addUserForm.invalid) {
      return this.addUserForm.value;
    }

    this.usersService.addUsers(this.addUserForm.value)
    console.log(this.addUserForm.value)
  }

}
