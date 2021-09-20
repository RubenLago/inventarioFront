import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categorias } from '../models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class FormCategoriasService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient) {

    this.baseUrl = 'http://299d-77-231-124-106.ngrok.io'
  }

  nuevaCategoria(formsValue: categorias): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.post(`${this.baseUrl}/categorias/create`, formsValue, httpOptions).toPromise()

  }
  //autocompletado filtro categoria
  getFiltroTexto(pId: number, pTexto: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/productos/negocios/${pId}/${pTexto}`).toPromise()
  }

}