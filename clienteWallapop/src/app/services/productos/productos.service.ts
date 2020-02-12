import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { HttpClient } from '@angular/common/http';
import { ProductosResponse, ProductoResponse } from 'src/app/interfaces/responses';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  /*productos: Producto[] = [
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
  ];*/

  private url = 'http://192.168.1.55:8080/api/productos';

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<ProductosResponse>(this.url).pipe(
      map(resp => {
        console.log(resp);
        return resp.productos;
      })
    );
  }

  addProducto(producto: Producto) {
    return this.http.post<ProductoResponse>(this.url, producto).pipe(
      map(resp => {
        return resp.producto;
      })
    );
  }

}
