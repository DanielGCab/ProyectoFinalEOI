import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProductosPageRoutingModule } from './ver-productos-routing.module';

import { VerProductosPage } from './ver-productos.page';
import { ProductoDetalleComponent } from '../../compartido/producto-detalle/producto-detalle.component';
import { CompartidoModule } from 'src/app/compartido/compartido.module';

@NgModule({
  declarations: [VerProductosPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProductosPageRoutingModule,
    CompartidoModule
  ],
})
export class VerProductosPageModule {}
