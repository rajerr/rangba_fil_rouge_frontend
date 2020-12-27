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
import { AddPromoComponent } from './promos/add-promo/add-promo.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'users', component:UsersComponent,
    children:[
      {path:'add-user', component:AddUserComponent},
      {path:':id', component:DetailUserComponent},
      {path:'profile-user', component:DetailUserComponent},
    ]
  },
  {path:'promos', component:PromosComponent,
    children:
    [
      {path:'add-promo', component:AddPromoComponent}
    ]
  },
  {path:'rendus', component:RendusComponent},
  {path:'briefs', component:BriefsComponent},
  {path:'forums', component:ForumsComponent},
  {path:'profiles', component:ProfilesComponent,
    children:
    [
      {path:'add-profile', component:AddProfileComponent},
    ]
  },
  {path:'explorers', component:ExplorersComponent},
  {path:'competences', component:CompetencesComponent},
  {path:'groupes-tags', component:GroupeTagsComponent},
  {path:'referentiels', component:ReferentielsComponent},
  {path:'notifications', component:NotificationsComponent},
  {path:'profiles-sortie', component:ProfilesSortieComponent},
  {path:'history-promos', component:HistoriquePromosComponent},
  {path:'goupes-competences', component:GroupeCompetencesComponent},


  {path:'page-not-found', component:FoundComponent},
  {path:'**', redirectTo:'/page-not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
