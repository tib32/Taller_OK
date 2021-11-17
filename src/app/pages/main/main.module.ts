import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from '@app/material.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';

@NgModule({
  declarations: [
    MainComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [MainComponent]
})

export class MainModule { }
