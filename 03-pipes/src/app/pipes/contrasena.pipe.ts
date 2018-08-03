import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean = true): string {

    // if(activar === true){
    //   return value;
    // }else{
    //   return '***';
    // }

    let contrasenasegura = '******';
    if(activar === false){
      value = value.replace(value, contrasenasegura);
    }

    return value;

  }

}
