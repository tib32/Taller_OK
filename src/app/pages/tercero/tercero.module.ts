import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceroRoutingModule } from './tercero-routing.module';
import { TerceroComponent } from './tercero.component';


@NgModule({
  declarations: [
    TerceroComponent
  ],
  imports: [
    CommonModule,
    TerceroRoutingModule
  ]
})
export class TerceroModule { }
