import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

    product: Product = new Product();    // добавляемый объект
    constructor(
        private productService: ProductService,
        private router: Router,
        private toastrService: ToastrService
        ) { }

    save() {
        this.productService.createProduct(this.product).subscribe(() => {
            this.toastrService.success(`Product ${this.product.name} Created`)
             this.router.navigateByUrl("/admin-panel/products")
            });
     }
}
