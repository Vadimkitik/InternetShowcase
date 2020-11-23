import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {

    private url = environment.apiUrl + "products";

    constructor(private http: HttpClient) {
    }

    getProducts() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }
  
    getProduct(productLine: string) {
        return this.http.get(`${this.url}/${productLine}`).pipe(
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