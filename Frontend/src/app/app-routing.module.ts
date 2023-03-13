import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Actions/login/login.component';
import { RegisterComponent } from './Components/Actions/register/register.component';
import { AboutComponent } from './Components/Others/about/about.component';
import { ForTeamsComponent } from './Components/Others/for-teams/for-teams.component';
import { HomeComponent } from './Components/Others/home/home.component';
import { PageNotFoundComponent } from './Components/Others/page-not-found/page-not-found.component'

// const routes: Routes = [
//   {path: 'user', loadChildren:()=>import('./app/app.modules').then(modules => modules.AppModule)}
// ]

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
