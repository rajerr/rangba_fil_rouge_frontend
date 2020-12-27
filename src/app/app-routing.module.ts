import { UsersComponent } from './users/users.component';
import { RendusComponent } from './rendus/rendus.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { PromosComponent } from './promos/promos.component';
import { ProfilesSortieComponent } from './profiles-sortie/profiles-sortie.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { GroupeTagsComponent } from './groupe-tags/groupe-tags.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { ForumsComponent } from './forums/forums.component';
import { CompetencesComponent } from './competences/competences.component';
import { BriefsComponent } from './briefs/briefs.component';
import { FoundComponent } from './found/found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'users', component:UsersComponent},
  {path:'promos', component:PromosComponent},
  {path:'rendus', component:RendusComponent},
  {path:'briefs', component:BriefsComponent},
  {path:'forums', component:ForumsComponent},
  {path:'profiles', component:ProfilesComponent},
  {path:'competences', component:CompetencesComponent},
  {path:'groupes-tags', component:GroupeTagsComponent},
  {path:'referentiels', component:ReferentielsComponent},
  {path:'profiles-sortie', component:ProfilesSortieComponent},
  {path:'goupes-competences', component:GroupeCompetencesComponent},


  {path:'page-not-found', component:FoundComponent},
  {path:'**', redirectTo:'/page-not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
