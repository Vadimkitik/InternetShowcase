import { Component, OnInit } from '@angular/core';


import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit { 
 
    products: Product[];
    categoryType: string;
    loaded: boolean = false;
    isAuth: boolean = false;

    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
        private route: ActivatedRoute) { }   
    
    ngOnInit() {
        this.load();
     }   
     
     
     load(){
        this.route.params.subscribe((params: Params) => {
            this.categoryType = this.route.snapshot.params['categoryName'];

            this.categoryService.getCategoryByType(this.categoryType).subscribe((category: Category) => {
                this.products = category.products;
                });
        });
     }
     delete(id: number) {
        this.productService.deleteProduct(id).subscribe(data =>{});
        this.load();
    }
}