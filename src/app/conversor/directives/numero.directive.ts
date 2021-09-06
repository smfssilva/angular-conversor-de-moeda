import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[Numero]'
})
export class NumeroDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais)+ '.' +
      valor.substr(posDecimais);
    }

    $event.target.value = valor;
  }
}
