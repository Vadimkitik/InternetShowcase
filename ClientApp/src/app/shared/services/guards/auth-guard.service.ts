import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
    ) { }

  canActivate() {
    const token = this.authService.getToken();
 
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    this.toastrService.warning("Нужно войти в систему");
    this.router.navigate(["auth/login"]);
    return false;
  }

  isAdminActivate() {
    const token = this.authService.getToken();
    let user = this.authService.getUser();
   
    if (token && !this.jwtHelper.isTokenExpired(token) && user.roles.includes('admin')){
      return true;
    }
    this.router.navigate(["auth/login"]);
    return false;
  }
}