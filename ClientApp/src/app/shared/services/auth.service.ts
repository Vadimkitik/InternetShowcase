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

    headers = new HttpHeaders().set('Content-Type', 'application/json');

 

    login(data): Observable<any> {
        const credentials = JSON.stringify(data);
        return this.http.post(this.urlLogin, credentials, {
           headers: this.headers,
           responseType: 'text'
      })
    }

    register(data): Observable<any> {
        return this.http.post(this.urlRegister, data);
    }

    saveToke(token) {
        console.log(token)
        localStorage.setItem('token', token);
    }
    getToke() {
        return localStorage.getItem('token');
    }    
}