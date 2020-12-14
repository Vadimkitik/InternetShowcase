import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app',
    templateUrl: './adminPanel.component.html',
    styleUrls: ['./adminPanel.component.scss']
})
export class AdminPanelComponent implements OnInit{

    userName: string;
    date: Date = new Date();
    constructor(
        private authService: AuthService
    ){}

    ngOnInit(){
        this.userName = this.authService.getUserNameToken();
    }
 }