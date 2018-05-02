
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { SyntesysRoutingModule } from './syntesys-routing.module';

// >> Modules
import { MaterialModule } from './material/material/material.module';
import { ComponentModule } from './component/component.module';
import { ViewModule } from './view/view.module';

// >> Services
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
// >> Interceptor Module
// import {AuthInterceptor} from './services/auth-interceptor';
import { ApplicationHttpClient, applicationHttpClientCreator } from '../client/ApplicationHttpClient';
import { MyInterceptor } from '../interceptor/myInterceptor';
import { ServerLocationInterceptor } from '../interceptor/serverLocationInterceptor';
import { serverHttpClientCreator } from '../client/serverHttpClient';
// >> Components

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SyntesysRoutingModule,
    MaterialModule,
    ComponentModule,
    ViewModule
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    ComponentModule,
    ViewModule
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
  declarations: []
})
export class SyntesysModule {}
