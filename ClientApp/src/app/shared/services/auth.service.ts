import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResetUserPassword } from '../models/auth/resetUserPassword.model';
import { ForgotUserPassword } from '../models/auth/forgotUserPassword.model';

const TOKEN_KEY = 'token';
const TOKEN_FORGOTPASSWORD = 'token-forgotpassword';
const USER_KEY = 'user-profile';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }
    private urlLogin = environment.apiUrl + "identity/login";
    private urlRegister = environment.apiUrl + "identity/register";
    private urlForgotPassword = environment.apiUrl + "identity/forgotpassword";
    private urlResetPassword = environment.apiUrl + "identity/resetpassword";
    private urlconfirmEmail = environment.apiUrl + "identity/confirmEmail";

    login(data): Observable<any> {

        return this.http.post(this.urlLogin, data);
    }

    register(data): Observable<any> {
        return this.http.post(this.urlRegister, data);
    }

    confirmEmail(data): Observable<any> {
        return this.http.post(this.urlconfirmEmail, data);
    }

    forgotPassword(forgotUserPassword: ForgotUserPassword): Observable<any> {
        return this.http.post(this.urlForgotPassword, forgotUserPassword);
    }

    resetPassword(resetUserPassword: ResetUserPassword): Observable<any> {
        return this.http.post(this.urlResetPassword, resetUserPassword);
    }

    public saveToken(token: string) {
        window.localStorage.removeItem(TOKEN_KEY);
        window.localStorage.setItem(TOKEN_KEY, token);
    }
    public saveForgotPasswordToken(token: string) {
        window.localStorage.removeItem(TOKEN_FORGOTPASSWORD);
        window.localStorage.setItem(TOKEN_FORGOTPASSWORD, token);
    }

    public getToken(): string {
        return localStorage.getItem(TOKEN_KEY);
    }

    public getForgotPasswordToken(): string {
        return localStorage.getItem(TOKEN_FORGOTPASSWORD);
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