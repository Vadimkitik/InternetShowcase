export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public type?: string,
        public price?: number,
        public oldPrice?: number,
        public imageUrl?: string) { }
}