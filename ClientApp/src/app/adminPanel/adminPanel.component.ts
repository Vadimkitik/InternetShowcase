import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

import { User } from '../shared/models/user.model';

@Component({
    selector: 'app',
    templateUrl: './adminPanel.component.html',
    styleUrls: ['./adminPanel.component.scss']
})
export class AdminPanelComponent implements OnInit{

    user: User;
    isAdmin = false;
    date: Date = new Date();
    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    ngOnInit(){
        this.user = this.authService.getUser();
        if (this.user == null) {
            this.user = {
                "userName": 'Guest',
                "email": 'Example@example.com',
                'roles': []
            }
        }
        if (this.user.roles.includes('admin')){
            this.isAdmin = true;
        }
    }
    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
 }