import { Product } from './product.model';

export class Category {
    constructor(
        public id?: number,
        public categoryLine?: string,
        public categoryName?: string,
        public products?: Product[]
        ){ }
}