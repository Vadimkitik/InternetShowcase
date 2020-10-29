import { Product } from './product.model';
import { UnderSubCategory } from './underSubCategory.model';
import { Category } from './category.model';

export class SubCategory {
    constructor(
        public id?: number,
        public categoryLine?: string,
        public categoryName?: string,
        public products?: Product[],
        public underSubCategories?: UnderSubCategory[],
        public categoryId?: number,
        public Category?: Category
        ){ }
}