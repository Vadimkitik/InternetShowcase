import { Component, OnInit } from '@angular/core';


import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubCategoryService } from 'src/app/shared/services/subCategory.service';
import { UnderSubCategoryService } from 'src/app/shared/services/underSubCategory.service';
import { SubCategory } from 'src/app/shared/models/subCategory.model';
import { UnderSubCategory } from 'src/app/shared/models/underSubCategory.model';

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
        private subCategory: SubCategoryService,
        private underSubCategory: UnderSubCategoryService
    ) { }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];
            this.cata = this.route.snapshot.fragment;

            switch (this.cata) {
                case 'Cata': {
                    this.categoryService.getCategory(this.categoryLine).subscribe((category: Category) => {
                        this.loadData(category);
                    }, error => {
                        this.errorData(error);
                    });
                    break;
                }
                case 'SubCata': {
                    this.subCategory.getSubCategory(this.categoryLine).subscribe((category: SubCategory) => {
                        this.loadData(category);
                    }, error => {
                        this.errorData(error);
                    });
                    break;
                }
                case 'UnderSubCata': {
                    this.underSubCategory.getUnderSubCategory(this.categoryLine).subscribe((category: UnderSubCategory) => {
                        this.loadData(category);
                    }, error => {
                        this.errorData(error);
                    });
                    break;
                }
                default: {
                    let error = 'Page NOT FOUND 404'
                    this.errorData(error);
                    break;
                }
            }
        });
    }

    loadData(category: any) {
        console.log(category);
        this.categoryName = category.categoryName;
        if (category.products.length != 0) {
            this.errorMsg = "";
            this.loaded = true;
            this.products = category.products;
        }
        else {
            this.errorMsg = "В этой категории нет товаров.";
            this.loaded = false;
        }
    }
    errorData(error: any) {
        this.categoryName = "Error";
        this.loaded = false;
        this.errorMsg = error;
    }
}