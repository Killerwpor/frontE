import { TestBed } from '@angular/core/testing';

import { MicrorelatosService } from './microrelatos.service';

describe('MicrorelatosService', () => {
  let service: MicrorelatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrorelatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
