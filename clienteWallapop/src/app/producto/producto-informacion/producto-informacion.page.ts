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
  iProd: number = this.route.snapshot.params.id;
  constructor(private productosService: ProductosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.productosService.getProducto(id).subscribe(
       resp => {
         this.producto = resp;
       }
     );
  }

  borrar() {
    this.productosService.deleteProducto(this.iProd);
    this.router.navigate(['/ver-productos']);
    console.log(this.iProd);
  }
}
