import { Component, OnInit } from '@angular/core';


import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models/product.model';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit { 
 
    products: Product[];
    constructor( private productService: ProductService) { }   
    
    ngOnInit() 
    {  
        this.load();
    }        

    load() {
        this.productService.getProducts().subscribe((products: Product[]) => {
            this.products = products;
            });
    }
}