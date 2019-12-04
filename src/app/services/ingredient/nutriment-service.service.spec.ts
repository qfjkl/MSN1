import { TestBed } from '@angular/core/testing';

import { ingredientNutVal } from './nutriment-service.service';

describe('ingredientNutVal', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ingredientNutVal = TestBed.get(ingredientNutVal);
    expect(service).toBeTruthy();
  });
});
