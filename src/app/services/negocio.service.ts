import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Negocio } from '../models/negocios.model';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
<<<<<<< HEAD
    this.baseUrl = 'http://53aa-82-158-13-59.ngrok.io'
=======
    this.baseUrl = 'http://64e9-77-230-93-15.ngrok.io';
>>>>>>> categorias_17_09
  }

  nuevoNegocio(formValues: Negocio): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.post<any[]>(`${this.baseUrl}/negocios/create`, formValues, httpOptions).toPromise()
  }









}


