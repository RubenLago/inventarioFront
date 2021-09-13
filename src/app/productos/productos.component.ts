import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  arrProductos: any[];
  mostrar: boolean;
  formularioEdit: FormGroup;


  constructor(private postsService: PostsService) {
    this.arrProductos = [];
    this.mostrar = true;
    this.formularioEdit = new FormGroup({
      nombre: new FormControl(),
      formato: new FormControl(),
      cantidad: new FormControl(),
      precioSin: new FormControl(),
      iva: new FormControl(),
      precioCon: new FormControl(),

    }
    )


  }

  ngOnInit(): void {
    this.postsService.getAll()
      .then(posts => this.arrProductos = posts) //console.log(posts)
      .catch(error => console.log(error))
  }

  /* editar un artículo */
  onEdit() {
    console.log(this.formularioEdit.value)


  }




}
