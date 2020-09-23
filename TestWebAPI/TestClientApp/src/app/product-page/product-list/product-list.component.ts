﻿import { Component, OnInit } from '@angular/core';


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

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];

            this.categoryService.getCategoryByLine(this.categoryLine).subscribe((category: Category) => 
            {
                if(category != null) {
                    this.categoryName = category.categoryName;
                    this.loaded = true;
                    this.products = category.products;
                }
                else this.errorMsg = "В этой категории нет товаров.";
            }, error => this.errorMsg = error);
        });
    }
}