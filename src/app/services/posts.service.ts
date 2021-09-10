import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/productos'

  }

  getAll(): Promise<any[]> {
    return this.httpClient.get<any>(this.baseUrl).toPromise();
  }

}
