import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

    private url = "http://localhost:5000/api/products";
    //private url = "api/products";

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }
  
    getProduct(id: number) {
        return this.http.get(`${this.url}/${id}`).pipe(
            catchError(this.handleError));
    }

    createProduct(product: Product) {
        return this.http.post(this.url, product).pipe(
            catchError(this.handleError));
    }

    updateProduct(product: Product) {
        return this.http.put(this.url, product).pipe(
            catchError(this.handleError));
    }

    deleteProduct(id: number) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}