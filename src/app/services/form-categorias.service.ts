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

    this.baseUrl = 'http://a1b6-77-231-124-106.ngrok.io'
  }

  nuevaCategoria(formsValue: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.post(`${this.baseUrl}/categorias/create/${formsValue.idNegocio}`, formsValue, httpOptions).toPromise()

  }
  //autocompletado filtro categoria
  getFiltroTextoC(pTexto: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/categorias/search/${pTexto}`).toPromise()
  }
  getFiltroCategoria(pTexto: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/categorias/search/${pTexto}`).toPromise()
  }

  getByCategoria(pId: any): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/categorias/filter/${pId}`).toPromise()
  }


}