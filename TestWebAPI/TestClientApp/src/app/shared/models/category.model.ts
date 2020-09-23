import { Product } from './product.model';
import { SubCategory } from './subCategory.model';

export class Category {
    constructor(
        public id?: number,
        public categoryLine?: string,
        public categoryName?: string,
        public products?: Product[],
        public subCategories?: SubCategory[]
        ){ }
}