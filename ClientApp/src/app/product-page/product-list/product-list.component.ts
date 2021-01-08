import { Component, OnInit } from '@angular/core';

import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TreeService } from 'src/app/shared/services/tree.service';

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
    cata: string;

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private treeService: TreeService
    ) { }

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];
            this.categoryService.getCategory(this.categoryLine).subscribe((category: Category) => {
                this.categoryName = category.name;
                this.productsInspection(category);
            }, error => {
                this.categoryName = "Error";
                this.loaderAndMessage(false, error);
            });
        });
    }
    
    private productsInspection(category: Category) {
        if (category.products.length != 0) {
            this.loaderAndMessage(true, "");
            this.products = category.products;
        }
        else {
            this.products = this.treeService.getProducts(category.children);
            if(this.products.length == 0) {
                this.loaderAndMessage(false, "В этой категории нет товаров.");
            }
            else {
                this.loaderAndMessage(true, "");
            }                    
        }
    }
    
    private loaderAndMessage(load: boolean, mess: string){
        this.loaded = load;
        this.errorMsg = mess;
    }
}