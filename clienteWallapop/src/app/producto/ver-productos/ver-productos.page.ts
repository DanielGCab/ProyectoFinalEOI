import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.page.html',
  styleUrls: ['./ver-productos.page.scss'],
})
export class VerProductosPage implements OnInit {
  productos = [];
  constructor(private productoService: ProductosService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
    console.log(this.productos);
    
  }

}
