import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(productos: Producto[], search: string): any {
    if (search !== '') {
      return productos.filter(p => p.nombre.toLocaleLowerCase().includes(
        search.toLocaleLowerCase()
      ));
    }

    return productos;
  }
}
