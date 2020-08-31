import { Component, OnInit } from '@angular/core';


import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit { 
 
    category: Category;
    products: Product[];
    categoryType: string;

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute) {
           
         }   
    
    ngOnInit() {
       this.route.params.subscribe((params: Params) => {
            this.categoryType = this.route.snapshot.params['categoryName'];
            this.products = this.route.snapshot.params['category.products'];
            
            this.categoryService.getCategoryByType(this.categoryType).subscribe((category: Category) => {
                this.category = category;
                this.products = category.products;
                });
        });

        
     }    
}