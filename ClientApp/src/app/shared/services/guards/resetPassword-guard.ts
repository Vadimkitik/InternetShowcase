import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Injectable()
export class ResetPasswordGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
    ) { }

    canActivate() {
        let token = this.authService.getForgotPasswordToken();
       
        if (token){
          return true;
        }
        this.toastrService.warning("Перейдите по ссылке в письме, полученном на вашей почте");
        this.router.navigate(["auth/login"]);
        return false;
    }
    
}