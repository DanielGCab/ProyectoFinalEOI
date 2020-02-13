import { Usuario } from './usuario';

export interface Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    usuario?: Usuario;

}
