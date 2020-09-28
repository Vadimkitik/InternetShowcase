import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SubCategory } from '../models/subCategory.model';

@Injectable()
export class SubCategoryService {

    private url = "http://localhost:5000/api/subcategories";
    //private url = "api/Subcategories";

    constructor(private http: HttpClient) {
    }

    getSubCategories() {
        return this.http.get(this.url).pipe(
            catchError(this.handleError));
    }

    getSubCategory(subCategoryLine: string) {
        return this.http.get(this.url + '/' + subCategoryLine).pipe(
            catchError(this.handleError));
    }

    createSubCategory(subCategory: SubCategory) {
        return this.http.post(this.url, subCategory).pipe(
            catchError(this.handleError));
    }

    updateSubCategory(subCategory: SubCategory) {
        return this.http.put(this.url, subCategory).pipe(
            catchError(this.handleError));
    }

    deleteSubCategory(id: number) {
        return this.http.delete(this.url + '/' + id).pipe(
            catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error.message || "Server Error");
    }
}