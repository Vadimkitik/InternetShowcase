import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable()
export class CategoryService {

    private url = "http://localhost:5000/api/categories";
    //private url = "api/categories";

    constructor(private http: HttpClient) {
    }

    getCategories() {
        return this.http.get(this.url);
    }
    getCategoriesByType(type: string) {
        return this.http.get(this.url + '/' + type);
    }

    geCategory(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createCategory(category: Category) {
        return this.http.post(this.url, category);
    }

    updateCategory(category: Category) {
        return this.http.put(this.url, category);
    }

    deleteCategory(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}