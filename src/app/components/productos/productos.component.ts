import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { producto, productsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { FormCategoriasService } from '../../services/form-categorias.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  arrProductos: any[];
  arrCategorias: any[];
  mostrar: boolean;
  formulario: FormGroup;
  negocioid: number;

  constructor(
    private productsService: productsService,
    private categoriaService: FormCategoriasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.arrProductos = [];
    this.arrCategorias = [];
    this.mostrar = true;
    this.formulario = new FormGroup({
      id: new FormControl('', []),
      nombre: new FormControl('', [Validators.required]),
      formato: new FormControl('', []),
      fk_categoria_id: new FormControl('', []),
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
    this.formulario.value.fk_negocio_id = this.negocioid;
    const newProduct = await this.productsService.newProduct(this.formulario.value)
    if (newProduct) {
      this.productsService.getByNegocio(this.negocioid)
        .then(products => this.arrProductos = products)
        .catch(error => console.log(error))
    }
  }

  async OnClickDelete(pId: number) {
    const deleteProducto = await this.productsService.deleteProduct(pId)
    if (deleteProducto) {
      this.productsService.getAll()
        .then(posts => this.arrProductos = posts)
        .catch(error => console.log(error))
    } confirm(`¿Estas seguro de que quieres borrar el producto`)
  }

  cerrarForm($event: any) {
    this.productsService.getByNegocio(this.negocioid)
      .then(products => this.arrProductos = products)
      .catch(error => console.log(error))
  }

  onInput($event: any) {
    this.productsService.getFiltroTexto(this.negocioid, $event.target.value)
      .then(products => this.arrProductos = products)
      .catch(error => console.log(error))


  }
  onCategoria($event: any) {
    this.categoriaService.getFiltroTextoC(this.negocioid, $event.target.value)
      .then(categorias => this.arrProductos = categorias)
      .catch(error => console.log(error))

  }
}




