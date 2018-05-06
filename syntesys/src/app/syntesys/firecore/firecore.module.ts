import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
import { FireComponent } from './fire/fire.component';

const config = {
  apiKey: 'AIzaSyDB9ViN2lsfZy0X1R9mUA534N9z_q6_KFU',
  authDomain: 'syntesys-web.firebaseapp.com',
  databaseURL: 'https://syntesys-web.firebaseio.com',
  projectId: 'syntesys-web',
  storageBucket: 'syntesys-web.appspot.com',
  messagingSenderId: '681863317191'
};
// firebase.initializeApp(environment.config);
firebase.initializeApp(config);

    // Initialize the default app

    // console.log(firebase.app.name); // '[DEFAULT]'

    // You can retrieve services via the defaultApp variable...
    // const Appname = firebase.app().name;
    // let defaultStorage = firebase.storage();
    // let defaultDatabase = firebase.database();

    // ... or you can use the equivalent shorthand notation
    // const currentUser = firebase.auth().currentUser;
    // const authStateChanged = firebase.auth().onAuthStateChanged(
    //   auth => {
    //     console.log(auth);

    // }, err => {
    //   console.log(console.error());
    // });
    // const idTokenChanged = firebase.auth().onIdTokenChanged(
    //   auth => {
    //     console.log(auth);

    // }, err => {
    //   console.log(console.error());
    // });
    // const languageCode = firebase.auth().languageCode;


    // firebase.auth().useDeviceLanguage();
    // // firebase.auth().setPersistence()
    // defaultStorage = firebase.storage();
    // defaultDatabase = firebase.database();

    // console.log( 'Appname: ', Appname );
    // console.log( 'currentUser :', currentUser );
    // console.log( 'defaultDatabase:' , defaultDatabase);
    // console.log( 'defaultStorage: ', defaultStorage);


@NgModule({
  exports: [
    FireComponent
  ],
  imports: [
    CommonModule
  ],
  declarations: [ FireComponent ]
})
export class FirecoreModule { }
