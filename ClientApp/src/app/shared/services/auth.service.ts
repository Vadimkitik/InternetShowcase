import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';


@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    private urlLogin = environment.apiUrl + "login";
    private urlRegister = environment.apiUrl + "register";
    private isAuthenticated = false;
    headers = new HttpHeaders().set('Content-Type', 'application/json');

 

    login1(form: NgForm) {
        const credentials = JSON.stringify(form);
        return this.http.post(this.urlLogin, credentials, {
           headers: this.headers
      })
    }

    register(data): Observable<any> {
        return this.http.post(this.urlRegister, data);
    }

    login(){
        this.isAuthenticated = true;           
    }

    logout() {
        this.isAuthenticated = false;
        localStorage.removeItem("jwt");
    }

    isLoggedIn(){
        return this.isAuthenticated;
    }
    
}