import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  /*perfil = {
    nombre: 'Pepe',
    apellidos: 'Albert',
    nick: 'pep',
    imagen: 'assets/cara1.jpg',
    email: 'pep@hotmail.com',
    telefono: '658965325'
  };*/

  private url = 'http://192.168.1.55:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  login(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }
}
