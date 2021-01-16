import { TestBed } from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from "./category.service";
import { Category } from "../models/category.model";


describe('CategoryService', () => {

    let categoryService: CategoryService;
    let httpTestingController: HttpTestingController

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [CategoryService]
        });

        categoryService = TestBed.inject(CategoryService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('should retrieve all cagegoryes', () => {

        
        categoryService.getCategories().subscribe((categories: Category[]) => {

            expect(categories).toBeTruthy('No categories returned');

            expect(categories.length).toBe(50);

            const category = categories.find(category => category.id == 1);

            expect(category.name).toBe("Цветы");
        });
        
        const req = httpTestingController.expectOne('api/categories');

        expect(req.request.method).toEqual("GET");

    });


})