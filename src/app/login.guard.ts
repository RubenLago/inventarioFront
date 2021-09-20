import { destroyPlatform, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {



  constructor(
    private httpClient: HttpClient,
    private userService: UsersService,
    private router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    /* 1 en el constructor hay que inyectar el servicio que vayamos a usar
    2 lanzamos una peticion que sea con authorization
    3 si devuelve error hay que borrar el token y devolver false 
    (error -> falta la cabecera ha expirado el token)  */
    if (localStorage.getItem('token')) {
      this.userService.getNegocios()
        .then((token) => {
          const httpOptions = {
            'authorization': localStorage.getItem('token')!
          }
          this.router.navigate(['/report']);
        })
        .catch((error) => {
          localStorage.removeItem('token')
          this.router.navigate(['/home'])
        })
      return true;
    } else {
      return false;
    }
  }
}


