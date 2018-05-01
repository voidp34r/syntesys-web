import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material/material.module';
import { ErrorComponent } from './error/error.component';
import { ConsoleComponent } from './console/console.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentRoutingModule
  ],
  declarations: [ToolbarComponent, SidenavComponent, ErrorComponent, ConsoleComponent, LoginComponent, RegisterComponent]
})
export class ComponentModule { }
