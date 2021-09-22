import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { FormNegocioComponent } from './components/form-negocio/form-negocio.component';
import { FormCategoriasComponent } from './components/form-categorias/form-categorias.component';
import { LoginGuard } from './login.guard';
/* import { Usuarios } from './models/usuario.model'; */

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: SignInComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'home', component: LandingComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [LoginGuard] },
  { path: 'productos/:id', component: ProductosComponent, canActivate: [LoginGuard] },
  /*  { path: 'listaUsuario', component: Usuarios }, */
  {
    path: 'report', component: VistaUsuarioComponent, canActivate: [LoginGuard], children: [
      { path: 'negocio/create', component: FormNegocioComponent },
      { path: 'negocio/:idNegocio', component: ProductosComponent },
      { path: 'negocio/:idNegocio/:filtro', component: ProductosComponent },
      { path: 'categorias/create', component: FormCategoriasComponent },

    ]
  },

  //ruta ** mantener en última posicion
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

