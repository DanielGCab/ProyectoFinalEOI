import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {
  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
