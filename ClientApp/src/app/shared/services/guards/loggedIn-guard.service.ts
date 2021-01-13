import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

    constructor(
        private jwtHelper: JwtHelperService,
        private router: Router,
        private authService: AuthService,
        private toastrService: ToastrService
    ) { }

    canActivate() {
        const token = this.authService.getToken();

        if (token && !this.jwtHelper.isTokenExpired(token)) {
            this.toastrService.warning("Нужно выйти из системы");
            this.router.navigate(["admin-panel"]);
            return false;
        }        
        return true;
    }
}
