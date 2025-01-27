import { TestBed } from '@angular/core/testing';

import { RymService } from './rym.service';

describe('RymService', () => {
  let service: RymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
