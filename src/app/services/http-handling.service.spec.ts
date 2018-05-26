import { TestBed, inject } from '@angular/core/testing';

import { HttpHandlingService } from './http-handling.service';

describe('HttpHandlingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandlingService]
    });
  });

  it('should be created', inject([HttpHandlingService], (service: HttpHandlingService) => {
    expect(service).toBeTruthy();
  }));
});
