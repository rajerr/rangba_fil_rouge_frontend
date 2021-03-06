import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { ListFormateurComponent } from './formateurs/list-formateur/list-formateur.component';
import { ListCmComponent } from './cms/list-cm/list-cm.component';
import { LoginComponent } from './login/login.component';
import { ListApprenantByProfilesSortieComponent } from './profiles-sortie/list-apprenant-by-profiles-sortie/list-apprenant-by-profiles-sortie.component';
import { EditProfilesSortieComponent } from './profiles-sortie/edit-profiles-sortie/edit-profiles-sortie.component';
import { TagsComponent } from './groupe-tags/tags/tags.component';
import { ListApprenantComponent } from './apprenants/list-apprenant/list-apprenant.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { CmsComponent } from './cms/cms.component';
import { AdminsComponent } from './admins/admins.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { EditerUserComponent } from './users/editer-user/editer-user.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ExplorersComponent } from './explorers/explorers.component';
import { HistoriquePromosComponent } from './historique-promos/historique-promos.component';
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
import { AddProfileComponent } from './profiles/add-profile/add-profile.component';
import { AddGroupeCompetenceComponent } from './groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { DetailCompetenceComponent } from './competences/detail-competence/detail-competence.component';
import { AddReferentielComponent } from './referentiels/add-referentiel/add-referentiel.component';
import { AddProfilesSortieComponent } from './profiles-sortie/add-profiles-sortie/add-profiles-sortie.component';
import { ListAdminComponent } from './admins/list-admin/list-admin.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'home', component: HomeComponent,
    children:[
      {path:'users', component:UsersComponent,
      children:[
        {path:'add-user', component:AddUserComponent},
        {path:':id', component:DetailUserComponent},
        {path:':id/editer', component:EditerUserComponent},
      ]
    },
    {path:'profile-user', component:ProfileUserComponent},
    {path:'promos', component:PromosComponent,
      children:
      [
        {path:'apprenants', component:ApprenantsComponent},
      ]
    },
    {path:'rendus', component:RendusComponent},
    {path:'briefs', component:BriefsComponent},
    {path:'forums', component:ForumsComponent},
    {path:'cms', component:CmsComponent},
    {path:'admins', component:AdminsComponent},
    {path:'formateur', component:FormateursComponent},
    {path:'profiles', component:ProfilesComponent,
      children:
      [
        {path:'list-cms', component:ListCmComponent},
        {path:'list-admins', component:ListAdminComponent},
        {path:'list-formateurs', component:ListFormateurComponent},
        {path:'list-apprenants', component:ListApprenantComponent},
        {path:'add-profile', component:AddProfileComponent},
      ]
    },
    {path:'explorers', component:ExplorersComponent},
    {path:'competences', component:CompetencesComponent,
      children:
      [
        {path:'add-competence', component: AddCompetenceComponent},
        {path:':id', component: DetailCompetenceComponent},
      ]
    },
    {path:'groupes-tags', component:GroupeTagsComponent,
      children:
      [
        {path:'tags', component:TagsComponent},
      ]
    },
    {path:'referentiels', component:ReferentielsComponent,
      children:
      [
        {path:'add-referentiel', component:AddReferentielComponent},
      ]
    },
    {path:'notifications', component:NotificationsComponent},
    {path:'profiles-sortie', component:ProfilesSortieComponent,
      children:
      [
        {path:'add-profile-sortie', component:AddProfilesSortieComponent},
        {path:':id/edit', component:EditProfilesSortieComponent},
        {path:'apprenants-by-profile-sortie', component:ListApprenantByProfilesSortieComponent},
      ]
    },
    {path:'history-promos', component:HistoriquePromosComponent},
    {path:'groupes-competences', component:GroupeCompetencesComponent,
      children:
      [
        {path:"add-groupe-competences", component:AddGroupeCompetenceComponent,
          children:
          [
            {path:'add-competence', component: AddCompetenceComponent},
          ]
        },
        {path:'competence_list',component: ListCompetencesComponent},
      ]
    },
  
  
    ]
  },

  {path:'page-not-found', component:FoundComponent},
  {path:'**', redirectTo:'/page-not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
