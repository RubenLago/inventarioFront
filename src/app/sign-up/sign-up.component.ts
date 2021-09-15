import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

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
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required,
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      ]),
      repeat_password: new FormControl('', [
        Validators.required,
        this.passwordValidator
      ])

    })
  }

  ngOnInit(): void {
  }

  checkControl(controlForm: string, errorForm: string): boolean {
    if (this.formulario.get(controlForm)?.hasError(errorForm) && this.formulario.get(controlForm)?.touched) {
      return true;
    } else {
      return false;
    }
  }

  async onSubmit() {
    const response = await this.usersService.registro(this.formulario.value);
    console.log(this.formulario.value)

  }

  passwordValidator(form: AbstractControl) {
    const passwordValue = form.get('password')?.value;
    const repitePasswordValue = form.get('repeat_password')?.value;

    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      return { passwordvalidator: true }
    }
  }

}
