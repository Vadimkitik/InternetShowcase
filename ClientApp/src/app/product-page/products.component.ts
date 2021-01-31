import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Category } from '../shared/models/category.model';
import { CategoryService } from '../shared/services/category.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    categoriesTest: Category[] = [];
    categoryLine: string;
    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.categoryService.getCategories().subscribe((categories: Category[]) => {
            this.categoriesTest = categories;
        });
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = params['categoryLine'];
        });
    }
}
