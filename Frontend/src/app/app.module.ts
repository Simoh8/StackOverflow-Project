import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClickColorDirective } from './Directives/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Navigation/header/header.component';
import { FooterComponent } from './Components/Navigation/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { TitleCasePipe } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './State/Effects/user';
import { userReducer } from './State/Reducers/userReducers';
import { TokenInterceptorService } from './Services/token-interceptor.service';
import { ToastrModule,ToastrService } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent      
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TitleCasePipe,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
   
  }),
      ReactiveFormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    ClickColorDirective,
    BrowserAnimationsModule,
    LayoutModule,
    HeaderComponent,
    FooterComponent,
    StoreModule.forRoot({user:userReducer}),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
