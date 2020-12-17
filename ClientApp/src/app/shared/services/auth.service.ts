import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';


const TOKEN_KEY = 'token';
const USER_KEY = 'user-profile';

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

    public saveToken(token: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY);
    }

    public saveUser(userName: string, email: string, roles: Array<string>) {
        let profile = {
            "userName": userName,
            "email": email,
            "roles" : roles
        };
        window.localStorage.removeItem(USER_KEY);
        window.localStorage.setItem(USER_KEY, JSON.stringify(profile));
    }

    public getUser() {
        return JSON.parse(localStorage.getItem(USER_KEY));
    }
    
    logout() {
        window.localStorage.clear();
    }








}