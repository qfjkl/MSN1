import { TestBed } from '@angular/core/testing';

import { CalculNutrimentIngredient } from './calcul-nutriment-ingredient.service';

describe('CalculNutrimentIngredient', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculNutrimentIngredient = TestBed.get(CalculNutrimentIngredient);
    expect(service).toBeTruthy();
  });
});
