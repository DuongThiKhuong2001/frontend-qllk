import { TestBed } from '@angular/core/testing';

import { GiotrucService } from './giotruc.service';

describe('GiotrucService', () => {
  let service: GiotrucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiotrucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
