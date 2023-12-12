import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private authService:AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // const userRoles = this.authService.getUserRoles();
    if(this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
};
