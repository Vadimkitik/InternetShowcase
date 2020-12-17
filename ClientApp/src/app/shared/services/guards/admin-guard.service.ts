import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

    canActivate() {
        let user = this.authService.getUser();
       
        if (user.roles.includes('admin')){
          return true;
        }
        this.router.navigate(["auth/login"]);
        return false;
    }
    
}