import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {
  af: Observable<any>;
  isLoged: boolean;
  constructor ( private auth: AuthService, private router: Router) {
  // this.af = auth._firebaseAuth.authState;

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;
    // this.isLoged = false;
    this.isLoged = true;
    console.log('testezero');
    return this.isLoged;
  }
}
