import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  perfil = {
    nombre: 'Pepe',
    apellidos: 'Albert',
    nick: 'pep',
    imagen: 'assets/cara1.jpg',
    email: 'pep@hotmail.com',
    telefono: '658965325'
  };

  constructor() { }

  getPerfil() {
    return this.perfil;
  }
}
