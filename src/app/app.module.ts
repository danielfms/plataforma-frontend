import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SecureStuffComponent } from './secure-stuff/secure-stuff.component';
import {AuthService} from './../services/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecureStuffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
