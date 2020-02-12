import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { HttpClient } from '@angular/common/http';
import { ProductosResponse, ProductoResponse } from 'src/app/interfaces/responses';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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


  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProducto(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + '/' + id);
  }

  addProducto(producto: Producto) {
    return this.http.post<ProductoResponse>(this.url, producto).pipe(
      map(resp => {
        return resp.producto;
      })
    );
  }

}
