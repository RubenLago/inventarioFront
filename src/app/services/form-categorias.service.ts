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

    this.baseUrl = 'http://64e9-77-230-93-15.ngrok.io';
  }

  nuevaCategoria(formsValue: categorias): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.post(`${this.baseUrl}/categorias/create`, formsValue, httpOptions).toPromise()

  }

}