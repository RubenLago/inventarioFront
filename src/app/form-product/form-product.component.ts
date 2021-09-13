import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../services/posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() producto: Producto | undefined;
  formularioEdit: FormGroup;
  constructor() {
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
        precioSin: new FormControl(this.producto!.preciosin),
        iva: new FormControl(this.producto!.iva),

      }
      )
    }
  }

  /* editar un artículo */
  onEdit() {
    console.log(this.formularioEdit.value)



  }

}
