import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickColorDirective } from './Directives/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Navigation/header/header.component';
import { FooterComponent } from './Components/Navigation/footer/footer.component';
import { LoginComponent } from './Components/Actions/login/login.component';
import { RegisterComponent } from './Components/Actions/register/register.component';
import { HomeComponent } from './Components/Others/home/home.component';
import { AboutComponent } from './Components/Others/about/about.component';
import { ForTeamsComponent } from './Components/Others/for-teams/for-teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './Components/Others/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { TalentloginComponent } from './Components/Actions/talentlogin/talentlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ForgotPasswordComponent } from './Components/Others/forgot-password/forgot-password.component';
import { UserProfileComponent } from './Components/Others/user-profile/user-profile.component';
import { PostQuestionComponent } from './Components/Others/post-question/post-question.component';
import { AdminComponent } from './Components/Others/admin/admin.component';
import { SinglequizanswerComponent } from './Components/Others/singlequizanswer/singlequizanswer.component';
import { SingleanswerComponent } from './Components/Others/singleanswer/singleanswer.component';
import { TitleCasePipe } from '@angular/common';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registertalent', component: TalentloginComponent},
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
  declarations: [
    AppComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleCasePipe,
    ReactiveFormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ClickColorDirective,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ForTeamsComponent,
    TalentloginComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    PostQuestionComponent,
    AdminComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
