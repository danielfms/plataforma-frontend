import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {CanActivate} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(){
    if(this.auth.loggedIn()){
      return true;
    }else{
      this.router.navigateByUrl('/unauthorized');
      return false;
    }
  }

  /* FALTA INJECTAR ESTE SERVICIO EN LAS RUTAS
  import {AuthGuard} from '/.auth-guard.service';

  export const routes: RouterConfig = [
  {path: 'admin', component: AdminComponen, CanActivate: [AuthGuard] },
  {path: 'unauthorized', component: UnauthorizedComponent}
];

  */

}
