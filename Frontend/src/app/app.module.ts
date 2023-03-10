import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Navigation/header/header.component';
import { FooterComponent } from './Navigation/footer/footer.component';
import { LoginComponent } from './Actions/login/login.component';
import { RegisterComponent } from './Actions/register/register.component';
import { HomeComponent } from './Others/home/home.component';
import { ProductsComponent } from './Others/products/products.component';
import { AboutComponent } from './Others/about/about.component';
import { ForTeamsComponent } from './Others/for-teams/for-teams.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './Others/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { TalentloginComponent } from './Actions/talentlogin/talentlogin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ForgotPasswordComponent } from './Others/forgot-password/forgot-password.component';
import { UserProfileComponent } from './Others/user-profile/user-profile.component';
import { SingleQuestionComponent } from './Others/single-question/single-question.component';
import { PostQuestionComponent } from './Others/post-question/post-question.component';
import { AdminComponent } from './Others/admin/admin.component';
import { UsersComponent } from './Others/users/users.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registertalent', component: TalentloginComponent},
  {path: 'register', component: RegisterComponent}, 
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'userprofile', component: UserProfileComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'forteams', component: ForTeamsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    // HomeComponent,
    ProductsComponent,
    AboutComponent,
    ForTeamsComponent,
    PageNotFoundComponent,
    TalentloginComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    SingleQuestionComponent,
    PostQuestionComponent,
    AdminComponent,
    UsersComponent,

        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
