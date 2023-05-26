import { TestBed } from '@angular/core/testing';

import { TordenService } from './torden.service';

describe('TordenService', () => {
  let service: TordenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TordenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
