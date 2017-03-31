import { Component, OnInit } from '@angular/core';
import {AuthService } from './../../services/auth.service';

// login and  secure-stuff component, auth-guard and auth service from
// http://angularjs.blogspot.com.co/2016/11/easy-angular-authentication-with-json.html

interface Credentials{
  email: string,
  password: string
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private auth: AuthService) { }

  onLogin(email, password){
    this.auth.login({email:email, password:password});
  }
  ngOnInit() {
  }

}
