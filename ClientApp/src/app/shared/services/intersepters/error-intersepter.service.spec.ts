import { TestBed } from '@angular/core/testing';

import { ErrorIntersepterService } from './error-intersepter.service';

describe('ErrorIntersepterService', () => {
  let service: ErrorIntersepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorIntersepterService]
    });
    service = TestBed.inject(ErrorIntersepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
