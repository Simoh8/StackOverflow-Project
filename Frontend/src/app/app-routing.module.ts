import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Actions/login/login.component';
import { RegisterComponent } from './Actions/register/register.component';
import { AboutComponent } from './Others/about/about.component';
import { HomeComponent } from './Others/home/home.component';
import { ProductsComponent } from './Others/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'forteams', component: ProductsComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
