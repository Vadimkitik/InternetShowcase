import { TestBed } from '@angular/core/testing';
import { IndividualConfig, ToastrService } from 'ngx-toastr/';

import { ErrorIntersepterService } from './error-intersepter.service';

describe('ErrorIntersepterService', () => {
  let service: ErrorIntersepterService;

  const toastrService = {
    success: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
    error: (
      message?: string,
      title?: string,
      override?: Partial<IndividualConfig>
    ) => {},
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorIntersepterService, 
        { provide: ToastrService, useValue: toastrService }
      ]
    });
    service = TestBed.inject(ErrorIntersepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
