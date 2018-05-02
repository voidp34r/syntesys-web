import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  af: Observable<any>;
  isLoged: boolean;
  constructor ( private auth: AuthService, private router: Router) {
  this.af = auth._firebaseAuth.authState;

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.af
      .map( (res) => {
        if (res) {
          return res.providerData;
        } else {
          return null;
        }
      })
      .subscribe( value => {
        if (value) {
          this.isLoged = true;
          this.router.navigate([next.params]);
        } else {
          this.isLoged = false;
          this.router.navigate(['login']);       }
      });
    return this.isLoged;
  }
}
