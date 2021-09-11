import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { ProductosComponent } from './productos/productos.component';
import { Usuarios } from './models/usuario.model';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: SignInComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'home', component: LandingComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosComponent },
  { path: 'listaUsuario', component: Usuarios },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

