import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models/user-role/user.model';

@Injectable()
export class UsersService {

   private url = environment.apiUrl + 'users';
    
    constructor(private http: HttpClient) {}

    getUserByEmail(email: string) : Observable<User> {
        return this.http.get(this.url + `/${email}`).pipe(
            catchError(this.handleError));        
    }
    
    createUser(user: User) : Observable<User> {
        return this.http.post(this.url, user).pipe(
            catchError(this.handleError));
    }
    

    getUsers() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }

   
    updateUser(user: User) {
        return this.http.put(this.url, user).pipe(
            catchError(this.handleError));
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}