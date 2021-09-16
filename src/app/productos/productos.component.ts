import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { producto, productsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  arrProductos: any[];
  mostrar: boolean;
  formulario: FormGroup;
  negocioid: Number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: productsService,
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

    this.negocioid = 0


  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.negocioid = params.idNegocio

      this.productsService.getByNegocio(params.idNegocio)
        .then(products => this.arrProductos = products)
        .catch(error => console.log(error))
    })
    /* this.postsService.getAll()
      .then(posts => this.arrProductos = posts) //console.log(posts)
      .catch(error => console.log(error)) */




    //recuperar de la url  


  }



  async addProduct() {
    const newProduct = await this.productsService.newProduct(this.formulario.value)
    if (newProduct) {
      this.productsService.getAll()
        .then(posts => this.arrProductos = posts) //console.log(posts)
        .catch(error => console.log(error))

    }
  }

  async OnClickDelete(pId: number) {
    const deleteProducto = await this.productsService.deleteProduct(pId)
    if (deleteProducto) {
      this.productsService.getAll()
        .then(posts => this.arrProductos = posts)
        .catch(error => console.log(error))

    }
  }

  cerrarForm($event: any) {
    this.productsService.getAll()
      .then(posts => this.arrProductos = posts)
      .catch(error => console.log(error))
  }
}




