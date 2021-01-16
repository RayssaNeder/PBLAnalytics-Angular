import { ErrorHandlerService } from './erro-handler.service';
import { TestBed } from '@angular/core/testing';

import { ErroHandlerService } from './ErrorHandlerService';

describe('ErroHandlerService', () => {
  let service: ErroHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErroHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
