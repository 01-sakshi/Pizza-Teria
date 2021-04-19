import { TestBed } from '@angular/core/testing';

import { PizzaToppingService } from './pizza-topping.service';

describe('PizzaToppingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzaToppingService = TestBed.get(PizzaToppingService);
    expect(service).toBeTruthy();
  });
});
