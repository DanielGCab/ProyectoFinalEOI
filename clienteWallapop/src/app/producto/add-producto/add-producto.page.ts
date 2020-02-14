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
  usuario: Usuario = {
    id: this.route.snapshot.params.id,
    nombre: this.route.snapshot.params.nombre,
    apellidos: this.route.snapshot.params.apellidos,
    email: this.route.snapshot.params.email,
    nick: this.route.snapshot.params.nick,
    telefono: this.route.snapshot.params.telefono,
    contrasenya: this.route.snapshot.params.contrasenya
  };

newProducto: Producto;
anyadido = false;

constructor(private productoService: ProductosService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.inicializarform();
  this.newProducto.usuario = this.usuario;
  console.log(this.newProducto);
}

addProducto(form) {
  this.productoService.addProducto(this.newProducto).subscribe(
    resp => {
      this.anyadido = true;
      this.router.navigate(['/ver-productos']);
    });
}

private inicializarform() {
  this.newProducto = {
    nombre: '',
    descripcion: '',
    precio: 0.0,
    imagen: '',
    usuario: this.usuario
  };
}

async changeImage(event: any) {
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (data: any) => {
    this.newProducto.imagen = reader.result.toString();
  }
  };
}
