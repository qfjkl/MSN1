import { TestBed } from '@angular/core/testing';

import { CompositionManuelle } from './composition-manuelle.service';

describe('CompositionManuelle', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompositionManuelle = TestBed.get(CompositionManuelle);
    expect(service).toBeTruthy();
  });
});
