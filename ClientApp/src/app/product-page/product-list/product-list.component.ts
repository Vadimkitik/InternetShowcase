import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    categoryLine: string;
    categoryName: string;
    loaded: boolean = false;
    isAuth: boolean = false;
    public errorMsg;

    categories: Category[];
    category: Category;
    listID: Array<number> = [];
    productsTEST: Product[];

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute
    ) { }


    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];
            this.loadProducts();
        });
    }

    loadProducts() {
        this.categoryService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
            console.log(categories);
            if (this.categories != null) {
                this.category = this.categories.find(c => c.line == this.categoryLine);
                this.listID = this.getCategoriesID(this.categories, this.category.id);

                if (this.listID.length == 0) {
                    this.listID.push(this.category.id);
                }
                console.log(this.listID);
                this.categoryService.getProductsOfCategory(this.listID).subscribe((products: Product[]) => {
                    this.categoryName = this.category.name;
                    this.productsInspection(products);
                }, error => {
                    this.categoryName = "Error";
                    this.loaderAndMessage(false, error);
                });
            }
        });
    }

    private getCategoriesID(array: Category[], id: number) {
        var data: Array<number> = [];
        array.forEach(element => {
            if (element.parent_Id == id) {
                data.push(element.id);
                data = data.concat(this.getCategoriesID(array, element.id));
            }
        });
        return data;
    }

    private productsInspection(products: Product[]) {
        if (products.length != 0) {
            this.products = products;
            this.loaderAndMessage(true, "");
        }
        else if (products.length == 0) {
            this.loaderAndMessage(false, "В этой категории нет товаров.");
        }
    }


    private loaderAndMessage(load: boolean, mess: string) {
        this.loaded = load;
        this.errorMsg = mess;
    }
}