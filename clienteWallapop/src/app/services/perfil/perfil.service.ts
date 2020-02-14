import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  private url = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  login(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }
}
