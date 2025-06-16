import { Component } from '@angular/core';
import { TarifaEnvio } from './TarifaEnvio';

@Component({
  selector: 'app-envio',
  standalone: false,
  templateUrl: './envio.component.html',
  styleUrl: './envio.component.scss'
})

export class EnvioComponent {

  kms: number = 0;
  mensajeAviso: string = '';
  max : number = 2000;
  
  //atencion! ordenar el arreglo de menor a mayor para no tener problemas con el find()!!!
  //ya que devuelve el primer valor que encuentra 
  tarifas: TarifaEnvio[] = [
    { hastaKm: 20, costo: 0 },
    { hastaKm: 100, costo: 540 },
    { hastaKm: 1000, costo: 1280 },
    { hastaKm: 2000, costo: 2620 }
  ];

  mostrarAviso(mensaje: string) {
    this.mensajeAviso = mensaje;
    setTimeout(() => this.mensajeAviso = '', 2000);
  }

  calcularCostoEnvio(): number {
    const tarifa = this.tarifas.find(t => this.kms <= t.hastaKm);
    return tarifa ? tarifa.costo : 0;
  }
}
