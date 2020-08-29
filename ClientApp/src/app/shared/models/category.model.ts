import { Product } from './product.model';

export class Category {
    constructor(
        public id?: number,
        public categoryName?: string,
        public description?: number,
        public Products?: Product[]
        ){ }
}