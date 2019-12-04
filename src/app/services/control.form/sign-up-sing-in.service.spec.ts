import { TestBed } from '@angular/core/testing';

import { Control } from './sign-up-sing-in.service';

describe('Control', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Control = TestBed.get(Control);
    expect(service).toBeTruthy();
  });
});
