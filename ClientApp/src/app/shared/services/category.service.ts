import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {

    private url = environment.apiUrl + "categories";

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }

    getCategory(categoryLine: string) {
        return this.http.get(this.url + '/' + categoryLine).pipe(
            catchError(this.handleError));
    }

    createCategory(category: Category) {
        return this.http.post(this.url, category).pipe(
            catchError(this.handleError));
    }

    updateCategory(category: Category) {
        return this.http.put(this.url, category).pipe(
            catchError(this.handleError));
    }

    deleteCategory(id: number) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}