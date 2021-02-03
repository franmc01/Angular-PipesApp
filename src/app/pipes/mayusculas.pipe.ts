import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(texto:string, enMayusculas:boolean=true): string {
    // if(enMayusculas){
    //   return texto.toLocaleUpperCase();
    // }else{
    //   return texto;
    // }
    return (enMayusculas) ? texto.toLocaleUpperCase(): texto.toLocaleLowerCase()
  }

}
