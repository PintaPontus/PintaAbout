import { TestBed } from '@angular/core/testing';

import { OxidizedService } from './oxidized.service';

describe('OxidizedService', () => {
  let service: OxidizedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxidizedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
