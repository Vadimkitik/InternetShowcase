import { Category } from './category.model';

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
        public Category?: Category
        ) { }
}

