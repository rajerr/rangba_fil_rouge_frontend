import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
})
export class AddGroupeCompetenceComponent implements OnInit {

  addGrouprCompetenceForm : FormGroup |any;
  libelle: string|any;
  descriptif: string|any;
  competence: any = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addGrouprCompetenceForm.value);
    console.log("ok");
  }
}
