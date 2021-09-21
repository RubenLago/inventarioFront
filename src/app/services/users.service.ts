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
    this.baseUrl = 'http://localhost:3000';
=======

    this.baseUrl = 'http://localhost:3000';

>>>>>>> 6a41dd766b7ad87dc053744e75c32f3b76cc0f2c
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
