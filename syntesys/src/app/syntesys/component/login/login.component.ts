import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { FireuiService } from '../../../service/fireui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(7),
    Validators.maxLength(8)
  ]);
  user: any;
  hide = true;

  constructor(
    private auth: AuthService,
    router: Router,
    fireui: FireuiService
  ) {
    fireui.ngDoCheck();
    fireui.teste();
   }

  ngOnInit() {
    // this.auth._firebaseAuth.authState
    // .subscribe( (user) => {
    //   if (user) {
    //     this.user = user.providerData;
    //     console.log(this.user);
    //   } else {
    //     this.user = null;
    //   }
    // });

  }

  ngOnSubmit(email, password) {
    // console.log(email, password);
    this.auth.login(email, password);
  }

  ngClear() {
    this.email.clearAsyncValidators();
    this.password.clearAsyncValidators();
  }
  getEmailErrorMessage() {
    return this.email.hasError('required')
      ? 'Você deve digitar o email antes'
      : this.email.hasError('email')
        ? 'Não é um email'
        : '';
  }
  getPasswordErrorMessage() {
    return this.password.hasError('required')
      ? 'Você deve digitar a senha antes'
      : this.password.hasError('minlength')
        ? 'Senha deve ter pelo meno 7 caracteres'
        : this.password.hasError('maxlength')
          ? 'Senha não deve ter mais que 8 caracteres'
          : '';
  }
}
