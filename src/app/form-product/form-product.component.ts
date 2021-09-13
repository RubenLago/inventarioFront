import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models/producto.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { postsService } from '../services/posts.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() producto: Producto | undefined;
  formularioEdit: FormGroup;
  constructor(
    private postsService: postsService
  ) {
    this.formularioEdit = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      formato: new FormControl(''),
      cantidad: new FormControl('', [
        Validators.required
      ]),
      precioSin: new FormControl(''),
      iva: new FormControl(''),

    }
    )
  }

  ngOnInit(): void {
    if (this.producto !== undefined) {
      this.formularioEdit = new FormGroup({
        nombre: new FormControl(this.producto!.nombre, [
          Validators.required
        ]),
        formato: new FormControl(this.producto!.formato),
        cantidad: new FormControl(this.producto!.cantidad, [
          Validators.required
        ]),
        precioSin: new FormControl(this.producto!.precioSin),
        iva: new FormControl(this.producto!.iva),

      }
      )
    }

  }

  async onEdit() {
    const updateProduct = this.formularioEdit.value;
    updateProduct.id = this.producto!.id;
    const editProduct = await this.postsService.editProduct(
      updateProduct)
  }


}
