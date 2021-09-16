import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NegocioService } from 'src/app/services/negocio.service';

@Component({
  selector: 'app-form-negocio',
  templateUrl: './form-negocio.component.html',
  styleUrls: ['./form-negocio.component.css']
})
export class FormNegocioComponent implements OnInit {

  formNegocio: FormGroup;


  constructor(
    private negocioService: NegocioService
  ) {
    this.formNegocio = new FormGroup({
      nombre: new FormControl('', []),
      calle: new FormControl('', []),
      numero: new FormControl('', []),
      cp: new FormControl('', []),
      cif: new FormControl('', []),
    })



  }

  ngOnInit(): void {

  }

  async onNegocio() {
    const nuevoNegocio = await this.negocioService.nuevoNegocio(this.formNegocio.value)
    console.log(nuevoNegocio)
  }



}
