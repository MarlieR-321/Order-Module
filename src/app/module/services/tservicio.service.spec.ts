import { TestBed } from '@angular/core/testing';

import { TservicioService } from './tservicio.service';

describe('TservicioService', () => {
  let service: TservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
