import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,    
    private toastrService: ToastrService
    ) { }

    canActivate() {
        let user = this.authService.getUser();
       
        if (user.roles.includes('admin')){
          return true;
        }
        this.toastrService.warning("Нужны права администратора");
        return false;
    }
    
}