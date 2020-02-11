import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.page.html',
  styleUrls: ['./ver-productos.page.scss'],
})
export class VerProductosPage implements OnInit {
  productos: Producto[] = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    console.log(this.productos);
  }

  ordenarPrecio() {
    this.productos.sort((p1, p2) => p1.precio - p2.precio);
    this.productos = [...this.productos];
  }

  ordenarNombre() {
    this.productos.sort((p1, p2) => p1.nombre.localeCompare(p2.nombre));
    this.productos = [...this.productos];
  }

}
