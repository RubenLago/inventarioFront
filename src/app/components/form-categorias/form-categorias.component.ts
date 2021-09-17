import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormCategoriasService } from 'src/app/services/form-categorias.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css']
})
export class FormCategoriasComponent implements OnInit {

  formCategoria: FormGroup

  constructor(
    private categoriaService: FormCategoriasService
  ) {
    this.formCategoria = new FormGroup({
      nombre: new FormControl('', []),
      color: new FormControl('', [])
    })
  }

  ngOnInit(): void {
  }


  async onCategoria() {
    const nuevaCategoria = await this.categoriaService.nuevaCategoria(this.formCategoria.value)
    console.log(nuevaCategoria)

  }

}
