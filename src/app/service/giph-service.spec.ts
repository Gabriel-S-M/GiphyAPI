import { TestBed } from '@angular/core/testing';

import { GiphService } from './giph-service';

describe('GiphService', () => {
  let service: GiphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
