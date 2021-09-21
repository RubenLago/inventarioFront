import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormCategoriasService } from 'src/app/services/form-categorias.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.css']
})
export class FormCategoriasComponent implements OnInit {

  formCategoria: FormGroup
  arrNegocios: any[]

  constructor(
    private categoriaService: FormCategoriasService,
    private userServices: UsersService
  ) {
    this.arrNegocios = [],
      this.formCategoria = new FormGroup({
        nombre: new FormControl('', []),
        idNegocio: new FormControl('', [])
      })
  }

  async ngOnInit(): Promise<void> {
    const response = await this.userServices.getNegocios();
    this.arrNegocios = response
  }


  async onCategoria() {
    const nuevaCategoria = await this.categoriaService.nuevaCategoria(this.formCategoria.value)
    console.log(nuevaCategoria)

  }

}
