import { Category } from './category.model';

export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public description?: number,
        public price?: number,
        public oldPrice?: number,
        public imageUrl?: string,
        public isFavourite?: boolean,
        public available?: boolean,
        public categoryID?: number,
        public Category?: Category
        ) { }
}

