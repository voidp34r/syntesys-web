
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { SyntesysRoutingModule } from './syntesys-routing.module';

// >> Modules
import { MaterialModule } from './material/material/material.module';
import { ComponentModule } from './component/component.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularfireModule } from '../angularfire/angularfire.module';

// >> Services

// >> Components

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SyntesysRoutingModule,
    MaterialModule,
    ComponentModule,
    InfiniteScrollModule,
    AngularfireModule
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    ComponentModule,
    InfiniteScrollModule,
    AngularfireModule
  ],
  providers: [ ],
  declarations: []
})
export class SyntesysModule {}
