import { getTestBed, inject, TestBed } from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from "./category.service";
import { Category } from "../models/category.model";

describe('CategoryService', () => {


    let categoryService: CategoryService;
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CategoryService]
        });
        categoryService = TestBed.inject(CategoryService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('should return expected categories (HttpClient called once)', () => {
        const expectedCategories: Category[] =
            [
                { id: 1, name: 'A', line: 'Aline', parent_Id: 0 },
                { id: 2, name: 'B', line: 'Bline', parent_Id: 1 }
            ];

        categoryService.getCategories().subscribe(
            categories => {
                expect(categories).toEqual(expectedCategories, 'expected heroes')
            }

        );
        const req = httpTestingController.expectOne('http://52.174.48.125/api/categories');

        expect(req.request.method).toEqual('GET');

        req.flush(expectedCategories);

    });

    it('should find a category by categoryLine', () => {
        const CATEGORY: Category = {
            id: 1,
            name: 'A', 
            line: 'Aline', 
            parent_Id: 0
        }
        categoryService.getCategory(CATEGORY.line)
            .subscribe((category: Category) => {

                expect(category).toBeDefined();
                expect(category).toEqual(CATEGORY, 'expected Category by line')

            });
        const req = httpTestingController
                     .expectOne(`http://52.174.48.125/api/categories/${CATEGORY.line}`);
        expect(req.request.method).toEqual("GET");

        req.flush(CATEGORY);
    });

    it('should create a new categoryTest', () => {

        const category: Category = {
            id: 1,
            line: 'testline',
            name: 'testName',
            parent_Id: 0,
            children: null
        }

        const result = categoryService.createCategory(category);
        result.subscribe(
            (successResult) => {
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(category, 'Category is created');
            });
        const req = httpTestingController.expectOne('http://52.174.48.125/api/categories');
        expect(req.request.method).toEqual("POST");

        req.flush(category);
    });

    it('should delete a category by ID', () => {
        const category: Category = {
            id: 1,
            line: 'testline',
            name: 'testName',
            parent_Id: 0,
            children: null
        }

        const result = categoryService.deleteCategory(category.id);
        result.subscribe(
            (successResult) => {
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(category, 'Category is deleted');
            });
        const req = httpTestingController.expectOne(`http://52.174.48.125/api/categories/${category.id}`);
        expect(req.request.method).toEqual("DELETE");

        req.flush(category);
    });

    it('should Update a category', () => {

        const category: Category = {
            id: 1,
            line: 'testline',
            name: 'testName',
            parent_Id: 0,
            children: null
        }

        const result = categoryService.updateCategory(category);
        result.subscribe(
            (successResult) => {
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(category, 'Category is updated');
            });
        const req = httpTestingController.expectOne('http://52.174.48.125/api/categories');
        expect(req.request.method).toEqual("PUT");

        req.flush(category);
    });


    afterEach(() => {
        httpTestingController.verify();
    });
});