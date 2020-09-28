import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UnderSubCategory } from '../models/underSubCategory.model';

@Injectable()
export class UnderSubCategoryService {

    private url = "http://localhost:5000/api/undersubcategories";
    //private url = "api/categories";

    constructor(private http: HttpClient) {
    }

    getUnderSubCategories() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }

    getUnderSubCategory(underSubCategoryLine: string) {
        return this.http.get(this.url + '/' + underSubCategoryLine).pipe(
            catchError(this.handleError));
    }

    createUnderSubCategory(underSubCategory: UnderSubCategory) {
        return this.http.post(this.url, underSubCategory).pipe(
            catchError(this.handleError));
    }

    updateUnderSubCategory(underSubCategory: UnderSubCategory) {
        return this.http.put(this.url, underSubCategory).pipe(
            catchError(this.handleError));
    }

    deleteUnderSubCategory(id: number) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}