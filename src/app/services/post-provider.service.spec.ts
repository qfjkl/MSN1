import { TestBed } from '@angular/core/testing';

import { PostProviderService } from './post-provider.service';

describe('PostProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostProviderService = TestBed.get(PostProviderService);
    expect(service).toBeTruthy();
  });
});
