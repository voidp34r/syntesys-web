import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

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
    if ( this.auth.currentUser() != null ) {
        this.isLoged = true;
        console.log(this.router.routerState.snapshot.toString());
        this.router.navigate([next.params]);
    } else {
      this.isLoged = false;
      this.router.navigate(['/login']);
    }
    console.log('testezero');
    return this.isLoged;
  }
}
