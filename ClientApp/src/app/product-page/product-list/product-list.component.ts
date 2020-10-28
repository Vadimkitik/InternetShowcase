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
        this.load();
    }

    load() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];
            this.cata = this.route.snapshot.fragment;
            console.log(this.cata);

            if(this.cata == 'Cata'){
                this.GetCategory();
            }
            if(this.cata == 'SubCata'){
                this.GetSubCategory();
            }
            if(this.cata == 'UnderSubCata'){
                this.GetUnderSubCategory();
            }
            
        });
    }

    GetCategory() {
        this.categoryService.getCategory(this.categoryLine).subscribe((category: Category) => 
        {
            console.log(category);
            if(category.products.length != 0) {
                this.categoryName = category.categoryName;
                this.errorMsg = "";
                this.loaded = true;
                this.products = category.products;
            }
            else {
                this.categoryName = category.categoryName;
                this.errorMsg = "В этой категории нет товаров.";
                this.loaded = false;
            }

        }, error => {
            this.loaded = false;
            this.errorMsg = error;
        });
    }
    GetSubCategory() {
        this.subCategory.getSubCategory(this.categoryLine).subscribe((category: SubCategory) => 
        {
            console.log(category);
            if(category.products.length != 0) {
                this.categoryName = category.subCategoryName;
                this.errorMsg = "";
                this.loaded = true;
                this.products = category.products;
            }
            else {
                this.categoryName = category.subCategoryName;
                this.errorMsg = "В этой категории нет товаров.";
                this.loaded = false;
            }

        }, error => {
            this.loaded = false;
            this.errorMsg = error;
        });
    }

    GetUnderSubCategory() {
        this.underSubCategory.getUnderSubCategory(this.categoryLine).subscribe((category: UnderSubCategory) => 
        {
            console.log(category);
            if(category.products.length != 0) {
                this.categoryName = category.underSubCategoryName;
                this.errorMsg = "";
                this.loaded = true;
                this.products = category.products;
            }
            else {
                this.categoryName = category.underSubCategoryName;
                this.errorMsg = "В этой категории нет товаров.";
                this.loaded = false;
            }

        }, error => {
            this.loaded = false;
            this.errorMsg = error;
        });
    }
}