import { TestBed } from '@angular/core/testing';

import { DureeAlimentService } from './duree-aliment.service';

describe('DureeAlimentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DureeAlimentService = TestBed.get(DureeAlimentService);
    expect(service).toBeTruthy();
  });
});
