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
    this.baseUrl = 'http://3a55-77-231-124-106.ngrok.io';
=======

    this.baseUrl = 'http://a1b6-77-231-124-106.ngrok.io'

>>>>>>> 8bd425d6af6df35f7b81cf1857715cdcff63a0b4
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


