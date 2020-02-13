import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  usuarios: Usuario[];
  nick: string;
  contrasenya: string;
  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) {}

  ngOnInit() {
    this.perfilService.getUsuarios().subscribe(respuesta => {
      this.usuarios = respuesta;
    });
  }

  login(form) {}

  logear() {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.usuarios.length; index++) {

    if (this.usuarios[index].nick === this.nick && this.usuarios[index].contrasenya === this.contrasenya) {
      this.router.navigate(['/profile/' + this.usuarios[index].id]);
    }
    }
  }
}
