import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Injectable()
export class ManagerGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
    ) { }

    canActivate() {
        let user = this.authService.getUser();
       
        if ((user.roles.includes('manager') || user.roles.includes('admin'))){
          return true;
        }
        this.toastrService.warning("Нужны права менеджера или администратора");
        return false;
    }
    
}