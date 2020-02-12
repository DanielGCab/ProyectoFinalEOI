import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductoInformacionPage } from './producto-informacion.page';

const routes: Routes = [
  {
    path: '',
    component: ProductoInformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoInformacionPageRoutingModule {}
