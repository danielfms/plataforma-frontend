import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(credentials){
    console.log(credentials)
    this.http.post("http://localhost:8000/api/authenticate", credentials)
        .map(res => res.json())
        .subscribe(
          data => localStorage.setItem("id_token", data.token),
          error => console.log(error)
        );
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    localStorage.removeItem('id_token');
  }

}
