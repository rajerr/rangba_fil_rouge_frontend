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
    AddUserComponent
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
