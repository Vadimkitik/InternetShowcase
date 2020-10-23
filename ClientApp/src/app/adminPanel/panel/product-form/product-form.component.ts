import { Component, Input } from '@angular/core';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

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
    numbCat: number;
    numbSubCat: number;
    @Input() product: Product;
    public errorMsg;
    loaded: boolean = false;

    constructor(
        private catService: CategoryService
        ) { }

    ngOnInit() {
        this.catService.getCategories().subscribe((categories: Category[]) => {
            this.categories = categories;
            this.loaded = true;
            console.log(categories);
        }, error => this.errorMsg = error);
    }

    uploadFinished = (event) => {
        this.response = event; 
        this.product.imageUrl = this.response.dbPath;
    }
    SetCategory(index: number) {
        this.numbCat = index;
        console.log(this.numbCat);
    }
    SetSubCategory(index: number) {
        this.numbSubCat = index;
        console.log(this.numbSubCat);
    }
}