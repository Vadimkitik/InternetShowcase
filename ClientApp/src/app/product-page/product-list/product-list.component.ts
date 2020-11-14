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
    cata: string;

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];
            this.categoryService.getCategory(this.categoryLine).subscribe((category: Category) => {
                
                this.categoryName = category.name;
                if (category.products.length != 0) {
                    this.errorMsg = "";
                    this.loaded = true;
                    this.products = category.products;
                }
                else {
                    this.errorMsg = "В этой категории нет товаров.";
                    this.loaded = false;
                }
            }, error => {
                this.categoryName = "Error";
                this.loaded = false;
                this.errorMsg = error;
            });
        });
    }
}