import { async, getTestBed, inject, TestBed } from "@angular/core/testing";

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {
    BaseRequestOptions, Http, XHRBackend, HttpModule,
    Response, ResponseOptions, RequestMethod
  } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { CategoryService } from "./category.service";
import { Category } from "../models/category.model";
import  dataJson  from '../../jsonFiles/dataJson.json';

const LOCALCATEGORIES: Category[] = dataJson;
describe('CategoryService', () => {

    let categoryService: CategoryService;
    let httpTestingController: HttpTestingController
    let mockBackend: MockBackend;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [CategoryService, MockBackend, 
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                      (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                      }
                  }]
        });
        categoryService = TestBed.inject(CategoryService);
        httpTestingController = TestBed.inject(HttpTestingController);
        mockBackend = getTestBed().get(MockBackend);
    })

    it('should retrieve all cagegoryes', () => {
        categoryService.getCategories().subscribe((categories: Category[]) => {
           
            expect(categories).toBeTruthy();
            expect(categories.length).toBe(50);

            const category = categories.find(category => category.id == 1);
            expect(category.name).toBe("Цветы");            
        });
        
        const req = httpTestingController.expectOne('http://52.174.48.125/api/categories');
        expect(req.request.method).toEqual("GET");
        //req.flush({payload: Object.values(LOCALCATEGORIES)});
        req.flush(LOCALCATEGORIES)
    });

    it('should find a category by categoryLine', () => {
        categoryService.getCategory('cveti')
            .subscribe((category: Category) => {

                expect(category).toBeDefined();
                expect(category.id).toEqual(1);

            });
        const req = httpTestingController.expectOne('http://52.174.48.125/api/categories/cveti');
        expect(req.request.method).toEqual("GET");

        req.flush(LOCALCATEGORIES[0]);
    });

    it('should create a new categoryTest', () => {
        async(inject([CategoryService], (service: CategoryService) => {
            mockBackend.connections.subscribe((connection: MockConnection) => {
              expect(connection.request.method).toBe(RequestMethod.Post);
              connection.mockRespond(new Response(new ResponseOptions({})));
              const contentType = connection.request.headers.get('Content-Type');
              const status = connection.request.headers.get('Status');
              expect(contentType).not.toBeNull();
              expect(contentType).toEqual('application/json');
            });
        const category: Category = {
            id: 1,
            line: 'testline',
            name: 'testName',
            parent_Id: 0,
            children: null
        }

        const result = categoryService.createCategory(category);
        console.log()
        result.subscribe(
            (successResult) => {
                console.log(successResult)
                expect(successResult).toBeDefined();
                expect(successResult).toEqual(LOCALCATEGORIES);
            });
        const req = httpTestingController.expectOne('http://52.174.48.125/api/categories');
        expect(req.request.method).toEqual("POST");

      
    });


    afterEach(() => {
        httpTestingController.verify();
    });
});