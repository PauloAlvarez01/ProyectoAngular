import { Component } from '@angular/core';
import { Vino } from './Vino';

@Component({
  selector: 'app-lista-vinos',
  standalone: false,
  templateUrl: './lista-vinos.component.html',
  styleUrl: './lista-vinos.component.scss'
})
export class ListaVinosComponent {

  mensajeMostrado: string | null = null;

  maximoAlcanzado(m: string): void {
  this.mensajeMostrado = m;
  setTimeout(() => this.mensajeMostrado = null, 2000);
  }

  vinos: Vino[] = [
    {
      nombre: 'Don Valentin',
      cepa: 'Malbec',
      bodega: 'Norton',
      precio: 5000,
      stock: 0,
      imagen: 'assets/img/vino1.jpeg',
      liquidacion: false,
      cantidad: 0,
    },
    {
      nombre: 'Septima',
      cepa: 'Syrah',
      bodega: 'Rutini',
      precio: 8500,
      stock: 20,
      imagen: 'assets/img/vino2.jpeg',
      liquidacion: false,
      cantidad: 0,
    },
    {
      nombre: 'Dolores',
      cepa: 'Merlot',
      bodega: 'Bodegas Lopez',
      precio: 7600,
      stock: 8,
      imagen: 'assets/img/vino3.jpeg',
      liquidacion: true,
      cantidad: 0,
    },
    {
      nombre: 'Traful',
      cepa: 'Malbec',
      bodega: 'Navarro Correas',
      precio: 6800,
      stock: 2009,
      imagen: 'assets/img/vino4.jpeg',
      liquidacion: true,
      cantidad: 0,
    }
  ]

}
