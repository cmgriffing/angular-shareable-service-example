import { TestBed } from '@angular/core/testing';

import { ShareableServiceService } from './shareable-service.service';

describe('ShareableServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareableServiceService = TestBed.get(ShareableServiceService);
    expect(service).toBeTruthy();
  });
});
