import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';


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
    getToken() {
        return localStorage.getItem('token');
    }    
}