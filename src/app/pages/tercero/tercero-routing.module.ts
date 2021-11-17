import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerceroComponent } from './tercero.component';

const routes: Routes = [{ path: '', component: TerceroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceroRoutingModule { }
