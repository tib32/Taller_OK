import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VentaComponent } from './venta.component';


@NgModule({
  declarations: [
    VentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule
  ]
})
export class VentaModule { }
