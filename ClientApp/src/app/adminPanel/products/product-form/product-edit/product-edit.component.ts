import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';
import { UploadService } from 'src/app/shared/services/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './product-edit.component.html',
    styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

    productLine: string;
    @Input() product: Product;    // изменяемый объект
    loaded: boolean = false;

    constructor(
        private productService: ProductService,
        private router: Router, 
        private uploadService: UploadService,
        private activeRoute: ActivatedRoute,
        private toastrService: ToastrService
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
                });
    }

    save() {
        this.productService.updateProduct(this.product).subscribe(() => {
            this.toastrService.success(`Product changed`)
            this.router.navigateByUrl("/admin-panel/product")
        });
    }
    deleteFile() {
        var imageName = this.product.imageUrl.split("\\").pop();
        this.uploadService.DeleteFile(imageName).subscribe(event => {
            this.toastrService.success(`File ${imageName} is Deleted!`);
            this.product.imageUrl = '';
        });
        
    }
}