import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private userService: UsersService
  ) {
    this.formulario = new FormGroup({
      correo: new FormControl(),
      password: new FormControl(),
    })
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    const response = await this.userService.login(this.formulario.value);
    console.log(this.formulario.value)
  }

}
