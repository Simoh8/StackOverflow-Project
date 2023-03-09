import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Actions/login/login.component';
import { RegisterComponent } from './Actions/register/register.component';
import { AboutComponent } from './Others/about/about.component';
import { ForTeamsComponent } from './Others/for-teams/for-teams.component';
import { HomeComponent } from './Others/home/home.component';
import { PageNotFoundComponent } from './Others/page-not-found/page-not-found.component';
import { ProductsComponent } from './Others/products/products.component';



@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
