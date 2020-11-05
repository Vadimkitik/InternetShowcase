import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';

@Component({
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

    public errorMsg;
    product: Product = new Product();    // добавляемый объект
    constructor(
        private productService: ProductService,
         private router: Router) { }

    save() {
        console.log(this.product);
        this.productService.createProduct(this.product).subscribe(() => {
             this.router.navigateByUrl("/admin-panel/product")
            }, error => this.errorMsg = error);
     }
}


// assets/img/products/product-1.jpg