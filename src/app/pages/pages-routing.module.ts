import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tercero', loadChildren: () => import('./tercero/tercero.module').then(m => m.TerceroModule) },
  { path: 'venta', loadChildren: () => import('./venta/venta.module').then(m => m.VentaModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
