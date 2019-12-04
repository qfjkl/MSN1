import { TestBed } from '@angular/core/testing';

import { ShareDataAccountService } from './share-data-account.service';

describe('ShareDataAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareDataAccountService = TestBed.get(ShareDataAccountService);
    expect(service).toBeTruthy();
  });
});
