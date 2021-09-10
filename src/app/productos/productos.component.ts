import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  arrProductos: any[];
  formatoProductos: any;

  constructor(private postsService: PostsService) {
    this.arrProductos = [];
    this.formatoProductos = {}

  }

  ngOnInit(): void {
    this.postsService.getAll()
      .then(posts => this.arrProductos = posts) //console.log(posts)
      .catch(error => console.log(error))
  }

  cambiarFormato(pFormato: string) {
    switch (pFormato) {
      case 'col':
        this.formatoProductos = 'col-4';
        break;
      case 'row':
        this.formatoProductos = 'col-12';
        break;
    }
  }

}
