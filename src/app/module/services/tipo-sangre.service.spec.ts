import { TestBed } from '@angular/core/testing';

import { TipoSangreService } from './tipo-sangre.service';

describe('TipoSangreService', () => {
  let service: TipoSangreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoSangreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
