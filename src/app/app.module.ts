import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FoundComponent } from './found/found.component';
import { BriefsComponent } from './briefs/briefs.component';
import { RendusComponent } from './rendus/rendus.component';
import { ForumsComponent } from './forums/forums.component';
import { ExplorersComponent } from './explorers/explorers.component';
import { UsersComponent } from './users/users.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PromosComponent } from './promos/promos.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import { CompetencesComponent } from './competences/competences.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { GroupeTagsComponent } from './groupe-tags/groupe-tags.component';
import { ProfilesSortieComponent } from './profiles-sortie/profiles-sortie.component';
import { FormsModule } from '@angular/forms';
import { HistoriquePromosComponent } from './historique-promos/historique-promos.component';
import { DetailUserComponent } from './users/detail-user/detail-user.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { AddProfileComponent } from './profiles/add-profile/add-profile.component';
import { EditerUserComponent } from './users/editer-user/editer-user.component';
import { AddGroupeCompetenceComponent } from './groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { DetailCompetenceComponent } from './competences/detail-competence/detail-competence.component';
import { AddReferentielComponent } from './referentiels/add-referentiel/add-referentiel.component';
import { ApprenantsComponent } from './apprenants/apprenants.component';
import { AdminsComponent } from './admins/admins.component';
import { CmsComponent } from './cms/cms.component';
import { FormateursComponent } from './formateurs/formateurs.component';
import { AddApprenantComponent } from './apprenants/add-apprenant/add-apprenant.component';
import { ListApprenantComponent } from './apprenants/list-apprenant/list-apprenant.component';
import { ListFormateurComponent } from './formateurs/list-formateur/list-formateur.component';
import { ListCmComponent } from './cms/list-cm/list-cm.component';
import { ListAdminComponent } from './admins/list-admin/list-admin.component';
import { TagsComponent } from './groupe-tags/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FoundComponent,
    BriefsComponent,
    RendusComponent,
    ForumsComponent,
    ExplorersComponent,
    UsersComponent,
    ProfilesComponent,
    PromosComponent,
    ReferentielsComponent,
    CompetencesComponent,
    GroupeCompetencesComponent,
    GroupeTagsComponent,
    ProfilesSortieComponent,
    HistoriquePromosComponent,
    DetailUserComponent,
    NotificationsComponent,
    ProfileUserComponent,
    AddUserComponent,
    AddProfileComponent,
    EditerUserComponent,
    AddGroupeCompetenceComponent,
    AddCompetenceComponent,
    DetailCompetenceComponent,
    AddReferentielComponent,
    ApprenantsComponent,
    AdminsComponent,
    CmsComponent,
    FormateursComponent,
    AddApprenantComponent,
    ListApprenantComponent,
    ListFormateurComponent,
    ListCmComponent,
    ListAdminComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
