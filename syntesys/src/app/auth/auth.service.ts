import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

// import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

export class Perfil {
  uid: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  displayName: string;
  providerId: string;
  providerData: any;
  phoneNumber: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {

  private userCurrent: any;

  constructor(
    private router: Router,
    // private fireApp: FirebaseApp
    ) { }

}
