import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';

@Component({
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

    id: number;
    product: Product;    // изменяемый объект
    loaded: boolean = false;

    constructor(
        private productService: ProductService,
        private router: Router, 
        activeRoute: ActivatedRoute
        ) 
    {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id)
            this.productService.getProduct(this.id)
                .subscribe((data: Product) => {
                    this.product = data;
                    if (this.product != null) this.loaded = true;
                });
    }

    save() {
        this.productService.updateProduct(this.product).subscribe(data => this.router.navigateByUrl("/system/products"));
    }
}