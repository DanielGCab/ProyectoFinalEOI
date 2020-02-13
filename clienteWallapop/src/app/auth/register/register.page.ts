import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  newUsuario: Usuario;
  anyadido = false;

  constructor(private perfilService: PerfilService, private router: Router) { }

  ngOnInit() {
    this.inicializarlogin();
  }

  register(form) {
    this.perfilService.login(this.newUsuario).subscribe(
      resp => {
        this.anyadido = true;
        this.router.navigate(['/home']);
      });
  }

  private inicializarlogin() {
    this.newUsuario = {
      nombre: '',
      apellidos: '',
      nick: '',
      email: '',
      telefono: ''
    };
  }

}
