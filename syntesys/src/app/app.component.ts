import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
// import { auth } from 'firebase';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(
    auth: AuthService
  ) {
    // const temp = auth.login();
     const ref = auth.firedb('temp');
    // console.log(temp);
  }

  ngOnInit(): void {
    console.log('voidp34r init');

  }

}
