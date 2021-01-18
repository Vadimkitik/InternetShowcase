import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Category } from '../../models/category.model';
import { AuthService } from '../auth.service';
import { CategoryService } from '../category.service';

import { TokenIntersepterService } from './token-intersepter.service';

describe('TokenIntersepterService', () => {
  let service: CategoryService;
  let httpTestingController: HttpTestingController
  let apiUrl = 'http://52.174.48.125/api/categories';
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        CategoryService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenIntersepterService,
          multi: true,
        }
      ]
    });
    service = TestBed.inject(CategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    const TEST_CATEGORY: Category = {
      id: 1,
      line: 'testLine',
      parent_Id: 0,
      children: null
    }
    service.createCategory(TEST_CATEGORY).subscribe(response => {
      expect(response).toBeTruthy();
    });
  
    const httpRequest = httpTestingController.expectOne(`${apiUrl}`);
    
    expect(httpRequest.request.headers.has(`Authorization`)).toEqual(true);
  });
});
