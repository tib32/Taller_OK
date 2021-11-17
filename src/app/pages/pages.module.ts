import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

import { AdminModule } from './admin/admin.module';
import { LoginModule } from './auth/login/login.module';
import { HomeModule } from './home/home.module';
import { MainModule } from './main/main.module';
import { NotFoundModule } from './not-found/not-found.module';
import { MaterialModule } from '@app/material.module';

const misModulosPage = [
  MaterialModule,
  PagesRoutingModule,
  AdminModule,
  LoginModule,
  HomeModule,
  MainModule,
  NotFoundModule,
];

@NgModule({
  declarations: [],
  imports: [...misModulosPage],
  exports: [...misModulosPage],
})
export class PagesModule { }
