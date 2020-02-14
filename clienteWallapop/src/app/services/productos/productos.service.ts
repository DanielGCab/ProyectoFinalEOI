import { Injectable } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://192.168.1.55:8080/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProducto(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + '/' + id);
  }

  addProducto(producto: Producto) {
    return this.http.post<Producto>(this.url, producto);
  }

  deleteProducto(id: number) {
    this.http.delete(this.url + '/' + id).subscribe();
  }

}
