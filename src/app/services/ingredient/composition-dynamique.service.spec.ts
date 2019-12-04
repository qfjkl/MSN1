import { TestBed } from '@angular/core/testing';

import { CompositionDynamique } from './composition-dynamique.service';

describe('CompositionDynamique', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompositionDynamique = TestBed.get(CompositionDynamique);
    expect(service).toBeTruthy();
  });
});
