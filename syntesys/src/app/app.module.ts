import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FirecoreModule } from './syntesys/firecore/firecore.module';

// >> APP
import { AppComponent } from './app.component';
import { SyntesysModule } from './syntesys/syntesys.module';

// >> Services
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { MessageService } from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';
// >> Interceptor Module
// >> import {AuthInterceptor} from './services/auth-interceptor';
import { ApplicationHttpClient, applicationHttpClientCreator } from './client/ApplicationHttpClient';
import { MyInterceptor } from './interceptor/myInterceptor';
import { ServerLocationInterceptor } from './interceptor/serverLocationInterceptor';
import { serverHttpClientCreator } from './client/serverHttpClient';

import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SyntesysModule,
    RouterModule,
    AppRoutingModule,
    FirecoreModule,
  ],
  providers: [
    // AuthService,
    AuthGuard,
    // Provide the Authentication interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    },

    // Provide the extended HttpClient
    {
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient]
    },

    // Provide the extended Server Http Client
    {
      provide: ServerLocationInterceptor,
      useFactory: serverHttpClientCreator,
      deps: [HttpClient]
    },
    // It is not required but it is good practise to have one.
    // TokenService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
