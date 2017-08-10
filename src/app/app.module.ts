import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {LoginServiceService} from './login-service.service';
import {enableProdMode} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',component: LoginPageComponent,pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'**', redirectTo: ''}
];
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
