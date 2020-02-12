import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-producto-informacion',
  templateUrl: './producto-informacion.page.html',
  styleUrls: ['./producto-informacion.page.scss'],
})
export class ProductoInformacionPage implements OnInit {
  producto: Producto[];
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.producto = this.productosService.getProductos();
  }

  getProducto() {
    this.producto = this.productosService.getProductos();
  }

}
