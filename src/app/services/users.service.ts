import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(

  ) { }
  registro(formValues: {
    nombre: string,
    apellido: string,
    correo: string,
    password: string,
    repeat_password: string
  }) { }

  login(formValues: { correo: string, password: string }) { }

}
