import { Component } from '@angular/core';

@Component({
  selector: 'app-envio',
  standalone: false,
  templateUrl: './envio.component.html',
  styleUrl: './envio.component.scss'
})
export class EnvioComponent {

  kms: number = 0;
  mensajeAviso: string = '';

  mostrarAviso(mensaje: string) {
    this.mensajeAviso = mensaje;
    setTimeout(() => this.mensajeAviso = '', 3000);
  }

  calcularCostoEnvio(): number {
    if (this.kms <= 20) {
      return 0;
    } else if (this.kms <= 100) {
      return 540; // envío entre 21 y 100 km
    } else if (this.kms <= 1000) {
      return 1185; // entre 101 y 1000 km
    } else {
      return 2680; // más de 1000 km hasta 2000 km
    }
  }
}
