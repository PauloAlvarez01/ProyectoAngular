import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVinosComponent } from './lista-vinos/lista-vinos.component';
import { FormsModule } from '@angular/forms';
import { VinotecaAboutComponent } from './vinoteca-about/vinoteca-about.component';
import { VinotecaVinosComponent } from './vinoteca-vinos/vinoteca-vinos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { InputCantidadComponent } from './input-cantidad/input-cantidad.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVinosComponent,
    VinotecaAboutComponent,
    VinotecaVinosComponent,
    CarritoComponent,
    InputCantidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
