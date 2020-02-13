import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { PerfilService } from 'src/app/services/perfil/perfil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario: Usuario;

  constructor(private perfilService: PerfilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;;
     this.perfilService.getUsuario(id).subscribe(
       resp => {
         this.usuario = resp;
       }
     );
  }

}
