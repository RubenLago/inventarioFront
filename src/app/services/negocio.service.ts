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
    this.baseUrl = 'http://localhost:3000';
=======

    this.baseUrl = 'http://localhost:3000';

>>>>>>> 6a41dd766b7ad87dc053744e75c32f3b76cc0f2c
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


