import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../interfaces/usuario";
import { PerfilService } from "src/app/services/perfil/perfil.service";
import { ActivatedRoute } from "@angular/router";
import { Producto } from "src/app/interfaces/producto";
import { ProductosService } from "src/app/services/productos/productos.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  usuario: Usuario;
  productos: Producto[];
  producto: Producto;
  id = this.route.snapshot.params.id;
  productosUsuario: Producto[];

  constructor(
    private perfilService: PerfilService,
    private productosService: ProductosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.perfilService.getUsuario(id).subscribe(resp => {
      this.usuario = resp;
    });

    this.productosService.getProductos().subscribe(resp => {
      this.productos = resp;

    });


  }
 
}
