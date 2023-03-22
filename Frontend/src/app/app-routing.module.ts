import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Actions/login/login.component';
import { RegisterComponent } from './Components/Actions/register/register.component';
import { TalentloginComponent } from './Components/Actions/talentlogin/talentlogin.component';
import { AboutComponent } from './Components/Others/about/about.component';
import { AdminComponent } from './Components/Others/admin/admin.component';
import { ForTeamsComponent } from './Components/Others/for-teams/for-teams.component';
import { ForgotPasswordComponent } from './Components/Others/forgot-password/forgot-password.component';
import { HomeComponent } from './Components/Others/home/home.component';
import { PageNotFoundComponent } from './Components/Others/page-not-found/page-not-found.component'
import { PostQuestionComponent } from './Components/Others/post-question/post-question.component';
import { SingleanswerComponent } from './Components/Others/singleanswer/singleanswer.component';
import { SinglequizanswerComponent } from './Components/Others/singlequizanswer/singlequizanswer.component';
import { UserProfileComponent } from './Components/Others/user-profile/user-profile.component';

// const routes: Routes = [
//   {path: 'user', loadChildren:()=>import('./app/app.modules').then(modules => modules.AppModule)}
// ]

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'registertalent', component: TalentloginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'userprofile', component: UserProfileComponent},
  {path: 'postquestion', component: PostQuestionComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'single',component: SinglequizanswerComponent},
  {path: 'answer', component: SingleanswerComponent},
  {path: 'forteams', component: ForTeamsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
