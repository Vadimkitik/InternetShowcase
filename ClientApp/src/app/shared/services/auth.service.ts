import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    private urlLogin = environment.apiUrl + "identity/login";
    private urlRegister = environment.apiUrl + "identity/register";

    login(data): Observable<any> {
        
        return this.http.post(this.urlLogin, data);
    }

    register(data): Observable<any> {
        return this.http.post(this.urlRegister, data);
    }

    saveToken(token) {
        localStorage.setItem('token', token);
    }
    saveUserProfile(userName: string, email: string) {
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email);
    }
    getToken() {
        return localStorage.getItem('token');
    } 
    getUserNameToken() {
        return localStorage.getItem('userName');
    }   
}