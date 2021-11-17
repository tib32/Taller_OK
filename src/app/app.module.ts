import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@app/material.module';

import { AppComponent } from './app.component';

import { CategoriasService } from './services/categoria.service';
import { MarcasService } from './services/marca.service';
import { UsersService } from './services/users.service'
import { UMService } from './services/um.service';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './shared/components/components.module';
const misModulosApp = [
  CommonModule,
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  HttpClientModule,
  ComponentsModule,
  PagesModule,
];
@NgModule({
  declarations: [AppComponent,],
  imports: [...misModulosApp],
  exports: [...misModulosApp],
  providers: [UsersService, CategoriasService, MarcasService, UMService],
  bootstrap: [AppComponent],
})
export class AppModule { }
