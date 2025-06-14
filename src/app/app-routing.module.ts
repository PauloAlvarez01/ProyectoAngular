import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinotecaVinosComponent } from './vinoteca-vinos/vinoteca-vinos.component';
import { VinotecaAboutComponent } from './vinoteca-about/vinoteca-about.component';
import { EnvioComponent } from './envio/envio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vinos',
    pathMatch: 'full'
  },
  {
    path: 'vinos',
    component: VinotecaVinosComponent
  },
  {
    path: 'about',
    component: VinotecaAboutComponent
  },
  {
    path: 'envio',
    component: EnvioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
