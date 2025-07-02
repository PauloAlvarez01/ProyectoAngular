import { Component, OnInit } from '@angular/core';
import { Vino } from '../lista-vinos/Vino';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VinoDataService } from '../vino-data.service';

interface VinoConId extends Vino {
  id: string;
}

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  vinos: VinoConId[] = [];
  modoEdicion: boolean = false;
  vinoEditandoId: string | null = null;

  formVino = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    cepa: new FormControl('', [Validators.required]),
    bodega: new FormControl('', [Validators.required]),
    precio: new FormControl(0, [Validators.required, Validators.min(1)]),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    // coloco una imagen válida por defecto para cuando creo un vino 
    // asi no tengo que buscar una nueva, solo para etapa de desarrollo
    imagen: new FormControl('https://www.clarin.com/img/2024/06/21/W0lhpAYFU_720x0__1.jpg', 
                            [Validators.required]),
    liquidacion: new FormControl(false)
  });

  constructor(private vinoService: VinoDataService) { }

  ngOnInit() {
    this.cargarVinos();
  }

  cargarVinos() {
    this.vinoService.obtenerVinos().subscribe(vs => this.vinos = vs as VinoConId[]);
  }


  onSubmit() {
    if (this.formVino.invalid) return;

    const vinoFormValue = this.formVino.value as Vino;

    if (this.modoEdicion && this.vinoEditandoId) {
      // Actualizo solo los campos que existen en MockAPI (sin cantidad)
      this.vinoService.actualizarVino(this.vinoEditandoId, vinoFormValue).subscribe(() => {
        this.resetFormulario();
        this.cargarVinos();
      });
    } else {
      // Creo con cantidad en 0 para uso del carrito
      this.vinoService.crearVino({ ...vinoFormValue, cantidad: 0 }).subscribe(() => {
        this.resetFormulario();
        this.cargarVinos();
      });
    }
  }

  editarVino(vino: VinoConId) {
    this.formVino.setValue({
      nombre: vino.nombre,
      cepa: vino.cepa,
      bodega: vino.bodega,
      precio: vino.precio,
      stock: vino.stock,
      imagen: vino.imagen,
      liquidacion: vino.liquidacion
    });
    this.vinoEditandoId = vino.id;
    this.modoEdicion = true;
    // para que me lleve al comienzo del formulario cuando selecciono editar
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }

  eliminarVino(id: string) {
    this.vinoService.eliminarVino(id).subscribe(() => this.cargarVinos());
  }

  resetFormulario() {
    this.formVino.reset();
    this.modoEdicion = false;
    this.vinoEditandoId = null;
  }
}
