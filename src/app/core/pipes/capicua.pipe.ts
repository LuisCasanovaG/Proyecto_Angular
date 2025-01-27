import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capicua'
})
export class CapicuaPipe implements PipeTransform {

  
    transform(value: string): string{
      const textoProcesado= value.toLowerCase().replace(/\s/g,'');
      const textoInvertido=textoProcesado.split('').reverse().join('');

      return textoProcesado===textoInvertido ? "Si" : "No"
    }
    

}
