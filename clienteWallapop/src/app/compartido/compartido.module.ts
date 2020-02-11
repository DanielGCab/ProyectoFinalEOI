import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductoDetalleComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [ProductoDetalleComponent]
})
export class CompartidoModule { }
