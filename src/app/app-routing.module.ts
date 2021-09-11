import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'home', component: LandingComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

