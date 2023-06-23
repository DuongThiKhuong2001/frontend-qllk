import { TestBed } from '@angular/core/testing';

import { CosoyteService } from './cosoyte.service';

describe('CosoyteService', () => {
  let service: CosoyteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosoyteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
