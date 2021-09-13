import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Producto {
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/'

  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any>(this.baseUrl + 'productos').toPromise();
  }


  newProduct(formsValue: Producto) {
    return this.httpClient.post(`${this.baseUrl}productos/create`, formsValue).toPromise()

  }



}


