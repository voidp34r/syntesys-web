import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentRoutingModule } from './component-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material/material.module';
import { ErrorComponent } from './error/error.component';
import { ConsoleComponent } from './console/console.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FireuiService } from '../../service/fireui.service';
import { TerminalComponent } from './terminal/terminal.component';

import { IlegraService } from './console/ilegra/ilegra.service';


@NgModule({
  exports: [
    ToolbarComponent,
    SidenavComponent,
    ErrorComponent,
    ConsoleComponent,
    LoginComponent,
    RegisterComponent,
    TerminalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentRoutingModule
  ],
  providers: [ FireuiService, IlegraService ],
  declarations: [ToolbarComponent, SidenavComponent, ErrorComponent, ConsoleComponent, LoginComponent, RegisterComponent, TerminalComponent]
})
export class ComponentModule { }
