import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FooterComponent } from './components/footer/footer.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { FormNegocioComponent } from './components/form-negocio/form-negocio.component';
import { FormCategoriasComponent } from './components/form-categorias/form-categorias.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { LandingComponent } from './components/landing/landing.component';
import { VistaReportComponent } from './components/vista-report/vista-report.component';
import { ProductosComponent } from './components/productos/productos.component';


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
    VistaReportComponent,

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
