import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';

// import { LoggerService } from '../services/service/logger.service';

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
  private user: Observable<firebase.User>;
  private perfil: Observable<firebase.UserInfo>;

  private userDetails: firebase.User;
  private userPerfil: firebase.UserInfo;

  private userCurrent: any;

  constructor(
    private firestore: AngularFirestore,
    public _firebaseAuth: AngularFireAuth,
    private router: Router,
    private fbApp: FirebaseApp
    // private logger: LoggerService

  ) {

    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    firebase.auth().languageCode = 'pt';

    // evento da mudança do tokem
    // this._firebaseAuth.auth.onIdTokenChanged((authtoken) => {
    //   this.logger.log('Tokem renovado: ' + authtoken, 'X', 3000);
    // });
    // evento da mudança da autenticacao
    this._firebaseAuth.auth.onAuthStateChanged((auth) => {
      if (auth) {
        this.firestore
          .collection('users')
          .doc(`${auth.uid}`)
          .set({ json: auth.toJSON(), hora: new Date() })
          .then(data => {
          }).catch(error => error);
        // this.logger.log('Olá: ' + auth.displayName + ', divirta-se :)', 'X', 3000);
      }
    });

    // rentando persistencia
    this._firebaseAuth.auth.setPersistence('session');

    // this.user = this.afAuth.authState
    //   .switchMap (user => {
    //     if ( user ) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //     }
    //   })
  }

  //////// métodos do serviço  ?????????

  getAuth(): Observable<firebase.User> {
    return this._firebaseAuth.authState;
  }

  getUser(): Observable<firebase.UserInfo> {
    return this._firebaseAuth.authState;
  }

  getPerfil(array?: boolean): any {
    const perfil = new Perfil();
    const perfilarray = [];
    this._firebaseAuth.authState.forEach( value => {
      console.log(value);
    });
      // .map(data => data)
      // .subscribe(auth => {
      //   perfil.uid = auth.uid;
      //   perfil.email = auth.email;
      //   perfil.emailVerified = auth.emailVerified;
      //   perfil.photoURL = auth.photoURL;
      //   perfil.displayName = auth.displayName;
      //   perfil.providerId = auth.providerId;
      //   perfil.providerData = auth.providerData;
      //   perfil.phoneNumber = auth.phoneNumber;
      //   perfil.refreshToken = auth.refreshToken;
      //   // perfil = auth ;
      //   if (array) {
      //     perfilarray.push(auth.uid);
      //     perfilarray.push(auth.email);
      //     perfilarray.push(auth.emailVerified);
      //     perfilarray.push(auth.photoURL);
      //     perfilarray.push(auth.displayName);
      //     perfilarray.push(auth.providerId);
      //     perfilarray.push(auth.providerData);
      //     perfilarray.push(auth.phoneNumber);
      //     perfilarray.push(auth.refreshToken);
      //     console.log(perfilarray);
      //     return perfilarray;
      //   } else {
      //     console.log(perfil.providerId);
      //     return perfil.providerId;
      //   }
      // }, err => console.log(err));

    if (array) {
      return perfilarray;
    } else {
      return perfil;
    }
  }

  signInWithEmail(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        this.router.navigate(['/home']);
      })
      .catch((res) => {
        console.log('error: ', res);
      });
  }

  signInSocial(provider: string) {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    githubProvider.addScope('repo');

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    facebookProvider.addScope('public_profile');
    facebookProvider.addScope('email');

    const twitterProvider = new firebase.auth.TwitterAuthProvider();

    switch (provider) {
      case 'facebook': {
        console.log(provider);
        return this.loginSocial(facebookProvider);
      }
      // break;
      case 'google': {
        console.log(provider);
        return this.loginSocial(googleProvider);
      }
      // break;
      case 'github': {
        console.log(provider);
        return this.loginSocial(githubProvider);
      }
      // break;
      case 'twitter': {
        console.log(provider);
        return this.loginSocial(twitterProvider);
      }
      // break;
      default: {
        console.log('error');
      }
        break;
    }
  }
  loginSocial(prov) {
    return this._firebaseAuth.auth.signInWithPopup(prov).then(result => {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user, token);
    }).catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      console.log(errorCode, errorMessage, email, error);
    });
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential(email, password);
    // console.log(credential);
    return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log('error: ', res);
      });
  }

  signInWithGithub() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    ).then((res) => {
      console.log(res);
    })
      .catch((res) => {
        console.log('error: ', res);
      });
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    ).then((res) => {
      console.log(res);
    }).catch((res) => {
      console.log('error: ', res);
    });
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then((res) => {
      console.log(res);
    }).catch((res) => {
      console.log('error: ', res);
    });
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then((res) => {
      console.log(res);
    }).catch((res) => {
      console.log('error: ', res);
    });
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => {
        console.log(res);
        this.router.navigate(['/login']);
      })
      .catch((res) => {
        console.log('error');
      });
  }

}
