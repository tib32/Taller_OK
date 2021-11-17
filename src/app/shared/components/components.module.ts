import { NgModule } from '@angular/core';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../../material.module';

const misModulosComponents = [
  ComponentsRoutingModule,
  MaterialModule,
  ];

@NgModule({
  declarations: [],
  imports: [...misModulosComponents],
  exports: [...misModulosComponents]
})
export class ComponentsModule { }
