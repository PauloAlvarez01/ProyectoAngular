import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinotecaVinosComponent } from './vinoteca-vinos/vinoteca-vinos.component';
import { VinotecaAboutComponent } from './vinoteca-about/vinoteca-about.component';
import { EnvioComponent } from './envio/envio.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './auth/admin.guard';

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
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
