import { Component, Input } from '@angular/core';

import { Product } from '../../shared/models/product.model';
import { Category } from '../../shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
    selector: "product-form",
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {

    categories: Category[];
    @Input() product: Product;

    constructor(private catService: CategoryService) { }

    ngOnInit() {
        this.catService.getCategories().subscribe( (categories: Category[]) => {
            this.categories = categories;
        }); 
    }
}