import { Component, OnInit } from '@angular/core';
import {AuthService } from './../../services/auth.service';

// login and  secure-stuff component, auth-guard and auth service from
// http://angularjs.blogspot.com.co/2016/11/easy-angular-authentication-with-json.html

interface Credentials{
  username: string,
  password: string
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials;
  constructor(private auth: AuthService) { }

  onLogin(credentials){
    this.auth.login(credentials);
  }
  ngOnInit() {
  }

}
