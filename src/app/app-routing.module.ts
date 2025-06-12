import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinotecaVinosComponent } from './vinoteca-vinos/vinoteca-vinos.component';
import { VinotecaAboutComponent } from './vinoteca-about/vinoteca-about.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
