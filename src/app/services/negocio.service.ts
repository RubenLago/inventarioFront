import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Negocio } from '../interfaces/negocios.model';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  baseUrl: string;
  private negocio$ = new Subject<boolean>();

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
    let peticion = this.httpClient.post<any[]>(`${this.baseUrl}/negocios/create`, formValues, httpOptions).toPromise()

    this.negocio$.next(true)

    return peticion
  }

  getNegocio$(): Observable<boolean> {
    return this.negocio$.asObservable()
  }



}


