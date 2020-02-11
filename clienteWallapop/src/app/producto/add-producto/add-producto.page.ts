import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
})
export class AddProductoPage implements OnInit {

  constructor(private productoService: ProductosService) { }

  ngOnInit() {
  }

  addProducto(producto: Producto) {
    this.productoService.addProducto(producto);
  }

}
