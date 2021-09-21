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
    this.baseUrl = 'http://localhost:3000';
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


