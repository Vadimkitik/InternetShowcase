import { Component, OnInit } from '@angular/core';


import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    categoryLine: string;
    loaded: boolean = false;
    isAuth: boolean = false;
    public errorMsg;

    constructor(
        private categoryService: CategoryService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.load();
    }

    createImgPath = (serverPath: string) => {
        return `https://localhost:5001/${serverPath}`;
    }

    load() {
        this.route.params.subscribe((params: Params) => {
            this.categoryLine = this.route.snapshot.params['categoryLine'];

            this.categoryService.getCategoryByLine(this.categoryLine).subscribe((category: Category) => 
            {
                this.loaded = true;
                this.products = category.products;

            }, error => this.errorMsg = error);
        });
    }
}