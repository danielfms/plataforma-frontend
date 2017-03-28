import { Component, OnInit } from '@angular/core';
import {AuthHttp, tokenNotExpired} from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'secure-stuff',
  templateUrl: './secure-stuff.component.html',
  styleUrls: ['./secure-stuff.component.css']
})
export class SecureStuffComponent implements OnInit {
  stuff = [];
  constructor(private authHttp: AuthHttp) { }

  getSecureStuff(){
    this.authHttp.get("http://localhost/api/secure-stuff")
        .map(res => res.json())
        .subscribe(
          data => this.stuff = data.stuff,
          error => console.log(error)
        );
  }

  ngOnInit() {
  }

}
