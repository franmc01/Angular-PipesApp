import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../practica/models/heroe.model';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(lista: Heroe[], ordenarTermino: string = 'sin-valor'): Heroe[] {

    switch (ordenarTermino) {
      case 'nombre':
        return lista = lista.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);

      case 'color':
        return lista = lista.sort((a, b) => (a.color > b.color) ? 1 : -1);

      case 'vuela':
        return lista = lista.sort((a, b) => (a.vuela > b.vuela) ? -1 : 1);

      default:
        return lista;
    }

    // if (ordenarTermino === 'sin-valor') {
    //   return lista;
    // } else {
    //   return lista = lista.sort((a, b) => (a.nombre > b.nombre) ? 1 : -1);
    // }
  }

}
