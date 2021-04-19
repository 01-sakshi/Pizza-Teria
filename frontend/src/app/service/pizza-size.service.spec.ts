import { TestBed } from '@angular/core/testing';

import { PizzaSizeService } from './pizza-size.service';

describe('PizzaSizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaSizeService = TestBed.get(PizzaSizeService);
    expect(service).toBeTruthy();
  });
});
