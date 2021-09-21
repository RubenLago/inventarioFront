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

    this.baseUrl = 'http://localhost:3000';
  }



  nuevaCategoria(formsValue: any): Promise<any> {
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

  getByCategoria(pId: number): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/categoria/${pId}`).toPromise()
  }


}