import { Router } from '@angular/router';
import { CompetencesService } from './../services/competences.service';
import { GroupeCompetencesService } from './../services/groupe-competences.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupe-competences',
  templateUrl: './groupe-competences.component.html',
  styleUrls: ['./groupe-competences.component.css']
})
export class GroupeCompetencesComponent implements OnInit {

  groupeCompetences : any = [];
  constructor(
    private groupeCompetenceService: GroupeCompetencesService,
    private competencesService: CompetencesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.groupeCompetences = this.groupeCompetenceService.allGroupeCompetences().subscribe((groupeCompetences)=>{
      console.log(groupeCompetences) ;
      this.groupeCompetences = groupeCompetences;
    })
  }

}
