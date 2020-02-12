import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [
    {
      nombre: 'Lechuga',
      descripcion: 'Una lechuga pocha',
      precio: 20,
      usuarioProd: 1,
      imagen: 'assets/cara1.jpg'
    },
    {
      nombre: 'Silla',
      descripcion: 'Silla de madera',
      precio: 10,
      usuarioProd: 2,
      imagen: 'assets/wallapof.png'
    },
  ];

  constructor() { }

  getProductos() {
    return this.productos;
  }

  addProducto(producto: Producto) {
    this.productos.push(producto);
  }

}
