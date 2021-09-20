import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';

export interface producto {
  id: number,
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
export class productsService {

  baseUrl: string;

  constructor(
    private httpClient: HttpClient) {
    this.baseUrl = 'http://3a55-77-231-124-106.ngrok.io';
  }


  getAll(): Promise<any[]> {
    return this.httpClient.get<any>(this.baseUrl + '/productos').toPromise();
  }

  /* updateProducto(producto): Promise<[]> {
    return this.httpClient.post<any>(this.baseUrl + '')
  }
  */

  editProduct(formValues: Producto): Promise<any> {
    return this.httpClient.put(this.baseUrl + '/productos', formValues).toPromise()

  }

  /* alternativa */
  // uddate({ id, nombre, formato, cantidad, precioSin, iva }): Promise<any> {
  //   return this.httpClient.put(this.baseUrl + '/productos' + `${id}`)
  // }


  newProduct(formsValue: Producto) {
    return this.httpClient.post(`${this.baseUrl}/productos/create`, formsValue).toPromise()

  }


  deleteProduct(pId: number): Promise<any> {
    return this.httpClient.delete(`${this.baseUrl}/productos/${pId}`).toPromise()

  }

  //recuperar los productos de cada negocio
  getByNegocio(pId: number): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/productos/negocios/${pId}`).toPromise()
  }


  //autocompletado filtro texto
  getFiltroTexto(pId: number, pTexto: string): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/productos/negocios/${pId}/${pTexto}`).toPromise()
  }




}