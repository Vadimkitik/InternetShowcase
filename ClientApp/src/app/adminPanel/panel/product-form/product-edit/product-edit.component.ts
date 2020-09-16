import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';

@Component({
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

    productLine: string;
    product: Product;    // изменяемый объект
    loaded: boolean = false;
    public errorMsg;

    constructor(
        private productService: ProductService,
        private router: Router, 
        activeRoute: ActivatedRoute
        ) 
    {
        this.productLine = activeRoute.snapshot.params["productLine"];
    }

    ngOnInit() {
        if (this.productLine)
            this.productService.getProduct(this.productLine)
                .subscribe((data: Product) => {
                    this.product = data;
                    if (this.product != null) this.loaded = true;
                }, error => this.errorMsg = error);
    }

    save() {
        this.productService.updateProduct(this.product).subscribe(() => { 
            this.router.navigateByUrl("/admin-panel")
        }, error => this.errorMsg = error);
    }
}