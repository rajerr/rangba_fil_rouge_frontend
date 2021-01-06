import { Router } from '@angular/router';
import { GroupeCompetencesService } from './../../services/groupe-competences.service';
import { CompetencesService } from './../../services/competences.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  competences: any = [];
  competence: any = [];
  
  constructor(
    private competenceService: CompetencesService,
    private groupeCompetences: GroupeCompetencesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.competences = this.competenceService.allCompetences().subscribe((competences)=>{
      console.log(competences);
      this.competences = competences;
    })

    this.addGrouprCompetenceForm = new FormGroup({
      libelle: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      descriptif: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      competence: new FormControl({ value: '' }, Validators.compose([Validators.required])),
    });
  }

  onSubmit(){
    console.log(this.addGrouprCompetenceForm.value);
    console.log("ok");
  }
}
