import { TestBed } from '@angular/core/testing';

import { LichtrucService } from './lichtruc.service';

describe('LichtrucService', () => {
  let service: LichtrucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichtrucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
