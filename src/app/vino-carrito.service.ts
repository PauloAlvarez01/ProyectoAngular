import { Injectable } from '@angular/core';
import { Vino } from './lista-vinos/Vino';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinoCarritoService {
  
  private _listaCarrito: Vino[] = [];
  private _listaCarritoSubject: BehaviorSubject <Vino[]> = new BehaviorSubject(this._listaCarrito);
  public listaCarrito: Observable<Vino[]> = this._listaCarritoSubject.asObservable();
  
  constructor() { }

  agregarAlCarrito(vino: Vino) {
    let item = this._listaCarrito.find((v1) => v1.nombre == vino.nombre);
    if(!item) {
      this._listaCarrito.push({ ... vino});
    } else {
      item.cantidad += vino.cantidad;
    }
    console.log(this._listaCarrito);
    this._listaCarritoSubject.next(this._listaCarrito);
    }
}
