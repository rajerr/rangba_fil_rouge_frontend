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
    ProfilesSortieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
