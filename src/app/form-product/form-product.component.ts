import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../models/producto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { productsService } from '../services/products.service';
import { FormCategoriasService } from '../services/form-categorias.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  arrCategoria: any[]

  @Output() formOut: EventEmitter<any> = new EventEmitter();


  @Input() producto: Producto | undefined;
  @Input() idNegocio: number | undefined;

  formularioEdit: FormGroup;
  title: string = '';
  constructor(
    private categoriaService: FormCategoriasService,
    private productsService: productsService

  ) {
    this.arrCategoria = []
    this.formularioEdit = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      formato: new FormControl(''),
      cantidad: new FormControl('', [
        Validators.required
      ]),
      fk_categoria_id: new FormControl('', [
        Validators.required
      ]),
      precioSin: new FormControl(''),
      iva: new FormControl(''),

    }
    )
  }


  async ngOnChanges(changes: SimpleChanges) {
    if (changes['idNegocio']) {
      const response = await this.categoriaService.getByCategoria(changes['idNegocio'].currentValue)
      this.arrCategoria = response
    }
  }

  async ngOnInit(): Promise<any> {

    this.title = (this.producto !== undefined) ? 'Actualizar' : 'Insertar'
    if (this.producto !== undefined) {
      this.formularioEdit = new FormGroup({
        nombre: new FormControl(this.producto!.nombre, [
          Validators.required
        ]),
        formato: new FormControl(this.producto!.formato),
        cantidad: new FormControl(this.producto!.cantidad, [
          Validators.required
        ]),
        fk_categoria_id: new FormControl('', [
          Validators.required
        ]),
        precioSin: new FormControl(this.producto!.precioSin),
        iva: new FormControl(this.producto!.iva)
      })
    }
  }

  async onSubmit() {
    if (this.producto !== undefined) {
      const updateProduct = this.formularioEdit.value;
      updateProduct.id = this.producto!.id;
      const editProduct = await this.productsService.editProduct(
        updateProduct)
    } else {
      this.formularioEdit.value.fk_negocio_id = this.idNegocio;
      const newProduct = await this.productsService.newProduct(this.formularioEdit.value)
    }
    this.formOut.emit('cerrar')
  }
}

