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
  usuario: Usuario = {
    id: this.route.snapshot.params.id,
    nombre: this.route.snapshot.params.nombre,
    apellidos: this.route.snapshot.params.apellidos,
    email: this.route.snapshot.params.email,
    nick: this.route.snapshot.params.nick,
    telefono: this.route.snapshot.params.tetefono,
    contrasenya: this.route.snapshot.params.contrasenya
  };

newProducto: Producto;
anyadido = false;

constructor(private productoService: ProductosService, private route: ActivatedRoute, private router: Router) { }

ngOnInit() {
  this.inicializarform();
  this.newProducto.usuario = this.usuario;
}

addProducto(form) {
  this.productoService.addProducto(this.newProducto).subscribe(
    resp => {
      this.anyadido = true;
      this.router.navigate(['/home']);
    });
}

private inicializarform() {
  this.newProducto = {
    nombre: '',
    descripcion: '',
    precio: 0.0,
    imagen: ''
  };
}

changeImage(fileInput: HTMLInputElement) {
  if (!fileInput.files || fileInput.files.length === 0) { return; }
  const reader: FileReader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);
  reader.addEventListener('loadend', e => {
    this.newProducto.imagen = reader.result as string;
  });
}
}
