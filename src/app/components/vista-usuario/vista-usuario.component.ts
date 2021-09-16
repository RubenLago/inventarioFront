import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {

  arrNegocios: any[]

  constructor(
    private userServices: UsersService

  ) {
    this.arrNegocios = []
  }

  async ngOnInit() {
    const response = await this.userServices.getNegocios();
    this.arrNegocios = response

  }

}
