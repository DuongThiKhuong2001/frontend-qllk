import { TestBed } from '@angular/core/testing';

import { BasiService } from './bacsi.service';

describe('BacsiService', () => {
  let service: BasiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
