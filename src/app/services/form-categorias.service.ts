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

<<<<<<< HEAD
    this.baseUrl = 'http://3a55-77-231-124-106.ngrok.io';
=======
    this.baseUrl = 'http://a1b6-77-231-124-106.ngrok.io'
>>>>>>> 8bd425d6af6df35f7b81cf1857715cdcff63a0b4
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
  getFiltroTextoC(pTexto: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/categorias/search/${pTexto}`).toPromise()
  }


}