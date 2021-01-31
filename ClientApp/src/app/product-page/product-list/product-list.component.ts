import { Component, Input, OnChanges } from '@angular/core';

import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { Category } from 'src/app/shared/models/category.model';

@Component({
    selector: 'app-productslist',
    templateUrl: './product-list.component.html',
    styleUrls: ['product-list.component.scss']
})
export class ProductListComponent implements OnChanges {

    @Input() categoriesTest: Category[];
    @Input() categoryLine: string;

    products: Product[];
    categoryName: string;
    loaded: boolean = false;
    isAuth: boolean = false;
    public errorMsg;
    listID: Array<number> = [];

    constructor(
        private categoryService: CategoryService
    ) { }


    ngOnChanges() {
        if (this.categoriesTest.length) {
            this.loadProducts();
        }
    }

    loadProducts() {
        var category: Category = this.categoriesTest.find(c => c.line == this.categoryLine);
        this.listID = this.getCategoriesID(this.categoriesTest, category.id);

        if (this.listID.length == 0) {
            this.listID.push(category.id);
        }
        this.categoryService.getProductsOfCategory(this.listID).subscribe((products: Product[]) => {
            this.categoryName = category.name;
            this.productsInspection(products);
        }, error => {
            this.categoryName = "Error";
            this.loaderAndMessage(false, error);
        });
    }

    private getCategoriesID(array: Category[], id: number) {
        var data: Array<number> = [];
        array.forEach(element => {
            if (element.parent_Id == id) {
                data.push(element.id);
                data = data.concat(this.getCategoriesID(array, element.id));
            }
        });
        return data;
    }

    private productsInspection(products: Product[]) {
        if (products.length != 0) {
            this.products = products;
            this.loaderAndMessage(true, "");
        }
        else if (products.length == 0) {
            this.loaderAndMessage(false, "В этой категории нет товаров.");
        }
    }

    private loaderAndMessage(load: boolean, mess: string) {
        this.loaded = load;
        this.errorMsg = mess;
    }
}