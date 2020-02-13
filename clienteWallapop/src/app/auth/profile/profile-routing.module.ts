import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { ProductoInformacionPage } from 'src/app/producto/producto-informacion/producto-informacion.page';
import { ProductoInformacionPageModule } from 'src/app/producto/producto-informacion/producto-informacion.module';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
