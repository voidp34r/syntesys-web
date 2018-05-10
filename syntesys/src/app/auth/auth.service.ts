import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import * as admin from 'firebase-admin';
import * as SynApp from 'firebase/app';
const synfire = firebase;

// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { database } from 'firebase-admin';

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
export class AuthService implements OnInit {


  private userCurrent: any;

  constructor(
    private router: Router,
    // public synapp: SynApp.app.App
    ) {  }

    ngOnInit(): void {
      this.firedb('users');
    }
    currentUser() {
      const user = firebase.auth().currentUser;
      console.log(user);
      if (user != null ) {
        console.log('user :', user);
      }
      // .then(res => {
      //   console.log(res);
      // }, error => {
      //   console.log(error);
      // })
      // .catch(err => {
      //   console.log( err );
      // });
      return user;
    }

    login(email: string, password: string) {
      console.log('this.login');
      firebase.auth()
      .signInWithEmailAndPassword(
        email,
        password
      )
      .then(res => {
        console.log(res);
      }, error => {
        console.log(error);
      })
      .catch(err => {
        console.log( err );
      });
      return 0;
    }

    register(email: string, password: string) {
      console.log('this.register');
      firebase.auth()

      .createUserAndRetrieveDataWithEmailAndPassword(
        email,
        password
      )
      .then(res => {
        console.log(res);
      }, error => {
        console.log(error);
      })
      .catch(err => {
        console.log( err );
      });
      return 0;
    }

    logout() {
      console.log('this.logout');
      firebase.auth().signOut()
      .then(res => {
        console.log(res);
      }, error => {
        console.log(error);
      })
      .catch(err => {
        console.log( err );
      });
      return 0;
    }

    firedb(path) {
      console.log('this.firedb');
      const db = firebase.database().ref(path);
      console.log(db.ref.toString());
      return 0;
    }

}
