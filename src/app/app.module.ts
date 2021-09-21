import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FooterComponent } from './components/footer/footer.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FormProductComponent } from './form-product/form-product.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { FormNegocioComponent } from './components/form-negocio/form-negocio.component';
import { FormCategoriasComponent } from './components/form-categorias/form-categorias.component';
import { CardsCategoriasComponent } from './components/cards-categorias/cards-categorias.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    LandingComponent,
    ProductosComponent,
    UsuariosComponent,
    FormProductComponent,
    CabeceraComponent,
    FooterComponent,
    VistaUsuarioComponent,
    FormNegocioComponent,
    FormCategoriasComponent,
    CardsCategoriasComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
