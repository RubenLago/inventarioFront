import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private usersService: UsersService

  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      correo: new FormControl(),
      password: new FormControl(),
      repeat_password: new FormControl(),

    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usersService.registro(this.formulario.value);
    console.log(response)

  }

}
