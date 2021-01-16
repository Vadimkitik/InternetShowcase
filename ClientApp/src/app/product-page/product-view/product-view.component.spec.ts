import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/shared/services/product.service';

import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {

    let component: ProductViewComponent;
    let fixture: ComponentFixture<ProductViewComponent>;
    let componentUserService: ProductService; // the actually injected service
    let productService: ProductService; // the TestBed injected service
    let el: HTMLElement;

    let productServiceStub: Partial<ProductService>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductViewComponent],
            providers: [
                { provide: ProductService, useValue: productServiceStub }
            ]
        });

        fixture = TestBed.createComponent(ProductViewComponent);
        component    = fixture.componentInstance;
    
        // UserService actually injected into the component
        productService = fixture.debugElement.injector.get(ProductService);
        componentUserService = productService;
        // UserService from the root injector
        productService = TestBed.inject(ProductService);
    
        //  get the "welcome" element by CSS selector (e.g., by class name)
        //el = fixture.nativeElement.querySelector('.welcome');
    })
    
    it('should create component instance', () => {
        expect(component).toBeTruthy();
    });
});

