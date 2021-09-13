import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Producto {
  nombre: string,
  formato: string,
  cantidad: string,
  preciosin: string,
  iva: string,
  precioCon: string,
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/'

  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any>(this.baseUrl + 'productos').toPromise();
  }

  /* updateProducto(producto): Promise<[]> {
    return this.httpClient.post<any>(this.baseUrl + '')
  }
 */



}
