import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyntesysRoutingModule } from './syntesys-routing.module';

import { MaterialModule } from './material/material/material.module';
import { ComponentModule } from './component/component.module';

@NgModule({
  imports: [CommonModule, SyntesysRoutingModule, MaterialModule, ComponentModule],
  exports: [
    ComponentModule,
    MaterialModule,

  ],
  declarations: []
})
export class SyntesysModule {}
