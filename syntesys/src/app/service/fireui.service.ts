import { Injectable, DoCheck } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { environment } from '../../environments/environment';

@Injectable()
export class FireuiService implements DoCheck {
  auth = firebase.app().auth();
  currentUser = firebase.app().auth().currentUser;
  deviceLanguage = firebase.app().auth().useDeviceLanguage();
  setPersistence = firebase.app().auth().setPersistence('session');
  onCallback = (data => {
    console.log('environment: ', environment.production );
    if ( !environment.production ) {
      // console.log('this.onCallback <=> onIdTokenChanged', data);
      console.log('Bem Vindo: ', data.displayName, '  :) ');
      console.log('TokenId: ', data.G);
    }
  });
  onAuthStateChanged = firebase.app().auth().onAuthStateChanged(this.onCallback);
  onIdTokenChanged = firebase.app().auth().onIdTokenChanged(this.onCallback);
  // c = firebase.app().auth().;
  // d = firebase.app().auth().;
  // f = firebase.app().auth().;
  // g = firebase.app().auth().;
  // j = firebase.app().auth().;
  // h = firebase.app().auth().;

  ui = new firebaseui.auth.AuthUI(firebase.auth());
  uiConfig = {
    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  constructor( ) {

    this.ui.start('#firebaseui-auth-container', this.uiConfig);
  }

  ngDoCheck() {
    if ( !environment.production ) {
    // Initialize the FirebaseUI Widget using Firebase.
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    console.log(this.uiConfig, this.ui);
    console.log(firebase);
    // The start method will wait until the DOM is loaded.
    // ui.start('#firebaseui-auth-container', this.uiConfig);
    }

    return 0;
  }

  teste() {
    console.log('teste');
    return 0;
  }
}
