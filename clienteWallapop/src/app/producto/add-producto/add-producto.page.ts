import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Producto } from 'src/app/interfaces/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
})
export class AddProductoPage implements OnInit {
  id = this.route.snapshot.params.id;
  usuario: Usuario ={
    nombre: this.route.snapshot.params.nombre,
    apellidos: this.route.snapshot.params.apellidos,
    email: this.route.snapshot.params.email,
    nick: this.route.snapshot.params.nick,
    telefono: this.route.snapshot.params.tetefono,
    contrasenya: this.route.snapshot.params.contrasenya
  };
  

  constructor(private productoService: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
console.log(this.usuario);

  }

  addProducto(producto: Producto) {
    this.productoService.addProducto(producto);
  }
  add(){
 
    
  }

}
