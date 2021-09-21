import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private userService: UsersService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }
  ngOnInit(): void {

  }

  async onSubmit() {
    const response = await this.userService.login(this.formulario.value);
    if (response.error) {
    } else {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/report'])
    }
  }
}
