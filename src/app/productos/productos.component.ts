import { Component, OnInit } from '@angular/core';
import { postsService } from '../services/posts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  arrProductos: any[];
  mostrar: boolean;



  constructor(private postsService: postsService) {
    this.arrProductos = [];
    this.mostrar = true;

  }

  ngOnInit(): void {
    this.postsService.getAll()
      .then(posts => this.arrProductos = posts) //console.log(posts)
      .catch(error => console.log(error))
  }






}
