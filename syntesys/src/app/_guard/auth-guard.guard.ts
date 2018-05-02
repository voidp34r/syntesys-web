import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  private user: Observable<firebase.User>;
  private perfil: Observable<firebase.UserInfo>;
  public _firebaseAuth: AngularFireAuth;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
   ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(state, next, this.perfil);
    return true;
  }
}
