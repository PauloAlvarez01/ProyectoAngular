import { TestBed } from '@angular/core/testing';

import { VinoCarritoService } from './vino-carrito.service';

describe('VinoCarritoService', () => {
  let service: VinoCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinoCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
