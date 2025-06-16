import { TestBed } from '@angular/core/testing';

import { VinoDataService } from './vino-data.service';

describe('VinoDataService', () => {
  let service: VinoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
