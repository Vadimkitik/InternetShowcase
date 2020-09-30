import { Category } from './category.model';
import { SubCategory } from './subCategory.model';
import { UnderSubCategory } from './underSubCategory.model';

export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public productLine?: string,
        public description?: string,
        public price?: number,
        public oldPrice?: number,
        public imageUrl?: string,
        public isFavourite?: boolean,
        public available?: boolean,
        public categoryId?: number,
        public Category?: Category,
        public subCategoryId?: number,
        public SubCategory?: SubCategory,
        public nderSubCategoryId?: number,
        public UnderSubCategory?: UnderSubCategory
        ) { }
}

