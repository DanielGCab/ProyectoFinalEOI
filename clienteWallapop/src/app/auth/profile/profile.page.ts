import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { PerfilService } from 'src/app/services/perfil/perfil.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario: Usuario;

  constructor(private perfilService: PerfilService) { }

  ngOnInit() {
    this.usuario = this.perfilService.getPerfil();
  }

}
