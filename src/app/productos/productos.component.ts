import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  arrProductos: any[];
  mostrar: boolean;


  constructor(private postsService: PostsService) {
    this.arrProductos = [];
    this.mostrar = false;


  }

  ngOnInit(): void {
    this.postsService.getAll()
      .then(posts => this.arrProductos = posts) //console.log(posts)
      .catch(error => console.log(error))
  }

  onClickMostrar() {
    this.mostrar = !this.mostrar
  }



}
