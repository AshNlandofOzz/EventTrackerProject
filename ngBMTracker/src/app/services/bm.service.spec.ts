import { TestBed } from '@angular/core/testing';

import { BMService } from './bm.service';

describe('BMService', () => {
  let service: BMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
