import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = [
    {
      id: 1,
      nombre: 'Lechuga',
      descripcion: 'Una lechuga pocha advgfahdouvhdasiovhadoihvuodahviaudhvoiudavho',
      precio: 1.20,
      usuarioProd: 'Pepe',
      imagen: 'assets/cara1.jpg'
    },
    {
      id: 2,
      nombre: 'Silla',
      descripcion: 'Silla de madera',
      precio: 10,
      usuarioProd: 'Ramon',
      imagen: 'assets/cara1.jpg'
    },
  ];

  constructor() { }

  getProductos() {
    return this.productos;
  }

}
