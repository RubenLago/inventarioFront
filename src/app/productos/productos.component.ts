import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { postsService } from '../services/posts.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  arrProductos: any[];
  mostrar: boolean;
  formulario: FormGroup;

  constructor(
    private postsService: postsService,
    private router: Router) {
    this.arrProductos = [];
    this.mostrar = true;
    this.formulario = new FormGroup({
      id: new FormControl('', []),
      nombre: new FormControl('', [Validators.required]),
      formato: new FormControl('', []),
      categoria: new FormControl('', []),
      cantidad: new FormControl('', [
        Validators.pattern(/^[1-9]\d{6,10}$/)]),
      iva: new FormControl('', []),
      precioSin: new FormControl('', []),
    })

  }

  ngOnInit(): void {
    this.postsService.getAll()
      .then(posts => this.arrProductos = posts) //console.log(posts)
      .catch(error => console.log(error))
  }



  async addProduct() {
    const newProduct = await this.postsService.newProduct(this.formulario.value)
    if (newProduct) {
      this.postsService.getAll()
        .then(posts => this.arrProductos = posts) //console.log(posts)
        .catch(error => console.log(error))

    }
  }

  async OnClickDelete(pId: number) {
    const deleteProducto = await this.postsService.deleteProduct(pId)
    if (deleteProducto) {
      this.postsService.getAll()
        .then(posts => this.arrProductos = posts)
        .catch(error => console.log(error))

    }
  }

  cerrarForm($event: any) {
    this.postsService.getAll()
      .then(posts => this.arrProductos = posts)
      .catch(error => console.log(error))
  }
}




