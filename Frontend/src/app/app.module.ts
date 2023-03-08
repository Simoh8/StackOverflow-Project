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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ForTeamsComponent,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
