import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {

    private url = "http://localhost:5000/api/categories";
    //private url = "api/categories";

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }
    getCategoryByType(type: string) {
        return this.http.get(this.url + '/' + type).pipe(
            catchError(this.handleError));
    }

    geCategory(id: number) {
        return this.http.get(this.url + '/' + id).pipe(
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