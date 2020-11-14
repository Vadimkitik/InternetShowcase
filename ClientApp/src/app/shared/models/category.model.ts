import { Product } from './product.model';

export class Category {
    constructor(
        public id?: number,
        public line?: string,
        public name?: string,
        public parent_Id?: number,
        public products?: Product[],
        public children?: null
        ){ }
}