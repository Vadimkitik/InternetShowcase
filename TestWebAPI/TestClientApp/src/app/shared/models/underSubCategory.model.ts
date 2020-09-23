import { Product } from './product.model';
import { SubCategory } from './subCategory.model';

export class UnderSubCategory {
    constructor(
        public id?: number,
        public underSubCategoryLine?: string,
        public underSubCategoryName?: string,
        public products?: Product[],
        public subCategoryId?: number,
        public subCategory?: SubCategory
        ){ }
}