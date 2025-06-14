import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-cantidad',
  standalone: false,
  templateUrl: './input-cantidad.component.html',
  styleUrl: './input-cantidad.component.scss'
})
export class InputCantidadComponent {

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter <number>();

  @Output()
  maximoAlcanzado: EventEmitter<string> = new EventEmitter <string>();

  aumentarCantidad(): void {
    if (this.cantidad < this.max && this.max != 0){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else{
      this.maximoAlcanzado.emit("Alcanzó el límite máximo");
    } 
  }

  disminuirCantidad(): void {
    if (this.cantidad != 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  validarCantidad(event: Event): void {
    const input = event.target as HTMLInputElement;
    let valor = Number(input.value);

    if (isNaN(valor) || valor < 0) {
      this.cantidad = 0;
      this.cantidadChange.emit(this.cantidad);
    } else if (valor > this.max) {
      this.cantidad = this.max;
      this.cantidadChange.emit(this.cantidad);
    } else {
      this.cantidad = valor;
      this.cantidadChange.emit(this.cantidad);
    }
    input.value = this.cantidad.toString();
    this.cantidadChange.emit(this.cantidad);
  }

}
