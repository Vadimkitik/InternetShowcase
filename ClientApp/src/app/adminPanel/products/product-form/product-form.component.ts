import { Component, Input } from '@angular/core';

import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { TreeService } from 'src/app/shared/services/tree.service';

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
    loaded: boolean = false;

    constructor(
        private catService: CategoryService,
        private treeService: TreeService
        ) { }

    ngOnInit() {
        this.catService.getCategories().subscribe((categories: Category[]) => {
            this.categories = this.treeService.list_to_tree(categories);
            this.categories = this.treeService.last_level_of_tree(categories);
            console.log(this.categories);
            this.loaded = true;
        }, error => this.errorMsg = error);
        
    }

    uploadFinished = (event) => {
        this.response = event; 
        this.product.imageUrl = this.response.dbPath;
    }
}