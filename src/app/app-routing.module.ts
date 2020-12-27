import { FoundComponent } from './found/found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'page-not-found', component:FoundComponent},
  {path:'**', redirectTo:'/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
