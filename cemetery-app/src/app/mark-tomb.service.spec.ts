import { TestBed } from '@angular/core/testing';

import { MarkTombService } from './mark-tomb.service';

describe('MarkTombService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarkTombService = TestBed.get(MarkTombService);
    expect(service).toBeTruthy();
  });
});
