import { Component, Input } from '@angular/core';

import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
    selector: "product-form",
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {

    @Input() response: { dbPath: '' };
    categories: Category[];
    @Input() product: Product;
    public errorMsg;

    constructor(private catService: CategoryService) { }

    ngOnInit() {
        this.catService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
        }, error => this.errorMsg = error);
    }

    uploadFinished = (event) => {
        this.response = event; 
        this.product.imageUrl = this.response.dbPath;
    }
}