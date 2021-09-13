import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { ProductosComponent } from './productos/productos.component';
import { FormCreacionProductosComponent } from './form-creacion-productos/form-creacion-productos.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'registro', component: SignUpComponent },
  { path: 'home', component: LandingComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'addproduct', component: FormCreacionProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

