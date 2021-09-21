import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../models/login.models';
import { Usuarios } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient) {


<<<<<<< HEAD
    this.baseUrl = 'http://a1b6-77-231-124-106.ngrok.io'
=======
    this.baseUrl = 'http://4e28-77-231-124-106.ngrok.io'
>>>>>>> filtrado_categorias

  }


  registro(formsValue: Usuarios) {
    return this.httpClient.post(`${this.baseUrl}/usuarios/registro`, formsValue).toPromise()
  }



  login(formsValue: login): Promise<any> {
    return this.httpClient.post(`${this.baseUrl}/usuarios/login`, formsValue).toPromise()

  }

  getNegocios(): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'authorization': localStorage.getItem('token')!
      })
    }
    return this.httpClient.get<any[]>(`${this.baseUrl}/usuarios/negocios`, httpOptions).toPromise()


  }

}
