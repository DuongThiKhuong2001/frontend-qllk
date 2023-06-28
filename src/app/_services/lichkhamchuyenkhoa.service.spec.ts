import { TestBed } from '@angular/core/testing';

import { LichKhamChuyenKhoaService } from './lichkhamchuyenkhoa.service';

describe('LichkhamchuyenkhoaService', () => {
  let service: LichKhamChuyenKhoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichKhamChuyenKhoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
