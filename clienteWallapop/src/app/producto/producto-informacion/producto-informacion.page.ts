import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-informacion',
  templateUrl: './producto-informacion.page.html',
  styleUrls: ['./producto-informacion.page.scss'],
})
export class ProductoInformacionPage implements OnInit {
  producto: Producto;
  constructor(private productosService: ProductosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.producto = this.route.snapshot.data.producto;
    /*const id = this.route.snapshot.params.id;
     this.productosService.getProducto(id).subscribe(
       resp => {
         this.producto = resp;
       }
     );*/
  }
}
