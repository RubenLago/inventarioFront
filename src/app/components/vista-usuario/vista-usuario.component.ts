import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { NegocioService } from 'src/app/services/negocio.service';



@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit {
  negocio$: Observable<boolean>
  categoria$: Observable<boolean>
  arrNegocios: any[]

  constructor(
    private userServices: UsersService,
    private negocioServices: NegocioService



  ) {
    this.arrNegocios = []
    this.negocio$ = new Observable()
    this.categoria$ = new Observable()
  }

  async ngOnInit() {
    const response = await this.userServices.getNegocios();
    this.arrNegocios = response

    this.negocio$ = this.negocioServices.getNegocio$();
    this.negocio$.subscribe(async (hasChange: boolean) => {
      if (hasChange) {
        const response = await this.userServices.getNegocios();
        this.arrNegocios = response
      } else {
        alert("No se ha podido guardar el registro del negocio")
      }

    })
  }

  onChange() {

  }

}
