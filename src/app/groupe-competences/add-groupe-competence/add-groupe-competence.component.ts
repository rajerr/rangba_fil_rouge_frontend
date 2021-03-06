import { Router } from '@angular/router';
import { GroupeCompetencesService } from './../../services/groupe-competences.service';
import { CompetencesService } from './../../services/competences.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

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
  cptences: any = [];
  groupeCompetences: any = [];
  
  constructor(
    private competenceService: CompetencesService,
    private groupeCompetenceService: GroupeCompetencesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cptences = this.competenceService.allCompetences().subscribe((cptences)=>{
      console.log(cptences);
      this.cptences = cptences;
    })

    this.addGrouprCompetenceForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      descriptif: ['', Validators.required],
      competences: [[''], Validators.required],
      statut: [true, Validators.required],
    });
  }

  onSubmit(){
    console.log(this.addGrouprCompetenceForm);

    if (this.addGrouprCompetenceForm.invalid) {
      return
    }
    this.groupeCompetenceService.addGroupeCompetences(this.addGrouprCompetenceForm.value).subscribe((groupeCompetences)=>{
      console.log(this.addGrouprCompetenceForm);
      this.groupeCompetences = groupeCompetences;
      this.router.navigateByUrl('/home/groupes-competences');
    })
  }
}
