import { Component, Input } from '@angular/core';

import { Product } from '../../shared/models/product.model';
import { Category } from '../../shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { HttpEventType } from '@angular/common/http';

@Component({
    selector: "product-form",
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {

    @Input() response: { dbPath: '' };
    categories: Category[];
    @Input() product: Product;

    constructor(private catService: CategoryService) { }

    ngOnInit() {
        this.catService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
        });
    }

    uploadFinished = (event) => {
        this.response = event; 
        this.product.imageUrl = this.response.dbPath;
        console.log('PForm -> ' + this.response.dbPath);
    }
}