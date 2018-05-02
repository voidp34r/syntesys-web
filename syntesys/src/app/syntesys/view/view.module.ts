import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  exports: [
    DashboardComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ],
  declarations: [DashboardComponent, ConfigComponent]
})
export class ViewModule { }
