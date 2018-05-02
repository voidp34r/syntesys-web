import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';


import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AuthService } from './_services/auth.service';
import { AuthGuard } from './_guard/auth.guard';

import { MyInterceptor } from './syntesys/interceptor/myInterceptor';
import { ApplicationHttpClient, applicationHttpClientCreator } from './_client/applicationHttpClient';
import { ServerLocationInterceptor } from './syntesys/interceptor/serverLocationInterceptor';
import { serverHttpClientCreator } from './_client/serverHttpClient';

import {AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SyntesysModule } from './syntesys/syntesys.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SyntesysModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
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
