import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoInformacionPageRoutingModule } from './producto-informacion-routing.module';

import { ProductoInformacionPage } from './producto-informacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoInformacionPageRoutingModule
  ],
  declarations: [ProductoInformacionPage]
})
export class ProductoInformacionPageModule {}
