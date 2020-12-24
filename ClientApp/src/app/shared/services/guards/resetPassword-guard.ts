import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';


@Injectable()
export class ResetPasswordGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

    canActivate() {
        let token = this.authService.getForgotPasswordToken();
       
        if (token){
          return true;
        }
        this.router.navigate(["auth/login"]);
        return false;
    }
    
}