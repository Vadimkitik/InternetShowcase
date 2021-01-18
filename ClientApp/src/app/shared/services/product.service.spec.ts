import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from "./product.service";
import { Product } from "../models/product.model";

describe('CategoryService', () => {


    let apiProductsUrl = 'http://52.174.48.125/api/products';
    let productService: ProductService;
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductService]
        });
        productService = TestBed.inject(ProductService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('should return expected categories (HttpClient called once)', () => {
        const expectedProducts: Product[] =
            [
                {
                    id: 1,
                    name: 'A',
                    productLine: 'Aline',
                    categoryId: 2,
                    description: 'descript',
                    price: 13,
                    oldPrice: 22,
                    imageUrl: 'testULR',
                    isFavourite: true,
                    available: false
                },
                {
                    id: 2,
                    name: 'B',
                    productLine: 'Bline',
                    categoryId: 1,
                    description: 'descript',
                    price: 13,
                    oldPrice: 22,
                    imageUrl: 'testULR',
                    isFavourite: true,
                    available: false
                }
            ];
        productService.getProducts().subscribe(
            products => {
                expect(products).toEqual(expectedProducts, 'expected products')
            }
        );

        const req = httpTestingController.expectOne(apiProductsUrl);
        expect(req.request.method).toEqual('GET');
        req.flush(expectedProducts);
    });

    it('should find a category by categoryLine', () => {
        const PRODUCT: Product = {
            id: 2,
            name: 'B',
            productLine: 'Bline',
            categoryId: 1,
            description: 'descript',
            price: 13,
            oldPrice: 22,
            imageUrl: 'testULR',
            isFavourite: true,
            available: false
        };
        productService.getProduct(PRODUCT.productLine)
            .subscribe((product: Product) => {

                expect(product).toBeDefined();
                expect(product).toEqual(PRODUCT, 'expected Category by line')

            });
        const req = httpTestingController
            .expectOne(`${apiProductsUrl}/${PRODUCT.productLine}`);
        expect(req.request.method).toEqual("GET");

        req.flush(PRODUCT);
    });

    it('should create a new testProduct', () => {
        const PRODUCT: Product = {
            id: 2,
            name: 'B',
            productLine: 'Bline',
            categoryId: 1,
            description: 'descript',
            price: 13,
            oldPrice: 22,
            imageUrl: 'testULR',
            isFavourite: true,
            available: false
        };
        const result = productService.createProduct(PRODUCT);
        result.subscribe(
            (successResult) => {
                console.log(successResult)
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(PRODUCT, 'Product is created');
            });

        const req = httpTestingController.expectOne(apiProductsUrl);
        expect(req.request.method).toEqual("POST");
        req.flush(PRODUCT);
    });

    it('should delete a category by ID', () => {
        const PRODUCT: Product = {
            id: 2,
            name: 'B',
            productLine: 'Bline',
            categoryId: 1,
            description: 'descript',
            price: 13,
            oldPrice: 22,
            imageUrl: 'testULR',
            isFavourite: true,
            available: false
        };

        const result = productService.deleteProduct(PRODUCT.id);
        result.subscribe(
            (successResult) => {
                console.log(successResult)
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(PRODUCT, 'Product is deleted');
            });
        const req = httpTestingController.expectOne(`${apiProductsUrl}/${PRODUCT.id}`);
        expect(req.request.method).toEqual("DELETE");

        req.flush(PRODUCT);
    });

    it('should Update a product', () => {
        const PRODUCT: Product = {
            id: 2,
            name: 'B',
            productLine: 'Bline',
            categoryId: 1,
            description: 'descript',
            price: 13,
            oldPrice: 22,
            imageUrl: 'testULR',
            isFavourite: true,
            available: false
        };

        const result = productService.updateProduct(PRODUCT);
        result.subscribe(
            (successResult) => {
                console.log(successResult)
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(PRODUCT, 'Product is updated');
            });
        const req = httpTestingController.expectOne(apiProductsUrl);
        expect(req.request.method).toEqual("PUT");

        req.flush(PRODUCT);
    });


    afterEach(() => {
        httpTestingController.verify();
    });
});