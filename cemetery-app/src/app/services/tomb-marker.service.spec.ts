import { TestBed } from '@angular/core/testing';

import { TombMarkerService } from './tomb-marker.service';

describe('TombMarkerService', () => {
  let service: TombMarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TombMarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
