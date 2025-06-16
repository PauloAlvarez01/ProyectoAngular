import { Component } from '@angular/core';
import { VinoCarritoService } from '../vino-carrito.service';
import { Vino } from '../lista-vinos/Vino';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCarrito$: Observable<Vino[]>;

  constructor(private vinoCarritoService: VinoCarritoService) {
    this.listaCarrito$ = this.vinoCarritoService.listaCarrito;
  }

  calcularTotal(lista: Vino[]): number {
    return lista.reduce((total, vino) => total + (vino.precio * vino.cantidad), 0);
  }

}
